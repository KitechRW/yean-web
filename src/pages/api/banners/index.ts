import { NextApiRequest, NextApiResponse } from 'next';
import formidable from 'formidable';
import fs from 'fs/promises';
import { pool } from 'system/lib/db';

// Disable the default body parser
export const config = {
  api: {
    bodyParser: false,
  },
};

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  let connection;
  try {
    connection = await pool.getConnection();

    switch (req.method) {
      case 'GET':
        const [banners] = await connection.execute('SELECT * FROM banners');

        // Process the banners data and convert images to base64
        const processedBanners = (banners as any[]).map(banner => ({
          id: banner.id,
          title: banner.title,
          url: banner.url,
          section: banner.section,
          path: banner.path,
          image: banner.image_data
            ? `data:${banner.image_type};base64,${banner.image_data.toString('base64')}`
            : null,
          created_at: banner.created_at
        }));

        return res.status(200).json(processedBanners);

      case 'POST':
        // Start a transaction for safe insertion
        await connection.beginTransaction();

        try {
          const form = formidable({
            maxFileSize: 5 * 1024 * 1024, // 5MB
            keepExtensions: true,
          });

          const [fields, files] = await new Promise<[formidable.Fields, formidable.Files]>((resolve, reject) => {
            form.parse(req, (err, fields, files) => {
              if (err) reject(err);
              resolve([fields, files]);
            });
          });

          // Validate required fields
          const requiredFields = ['title', 'url', 'section', 'path'];
          for (const field of requiredFields) {
            if (!fields[field]) {
              await connection.rollback();
              return res.status(400).json({ message: `Missing required field: ${field}` });
            }
          }

          // Validate image
          const imageFile = files.image as formidable.File;
          if (!imageFile) {
            await connection.rollback();
            return res.status(400).json({ message: 'Image is required' });
          }

          // Validate image type
          const allowedTypes = ['image/jpeg', 'image/png', 'image/gif'];
          if (!allowedTypes.includes(imageFile.mimetype || '')) {
            await connection.rollback();
            return res.status(400).json({ message: 'Invalid image type' });
          }

          const imageData = await fs.readFile(imageFile.filepath);

          const [result] = await connection.execute(
            `INSERT INTO banners (
              title, url, section, path,
              image_data, image_name, image_type,
              created_at
            ) VALUES (?, ?, ?, ?, ?, ?, ?, NOW())`,
            [
              fields.title as string,
              fields.url as string,
              fields.section as string,
              fields.path as string,
              imageData,
              imageFile.originalFilename,
              imageFile.mimetype,
            ]
          );

          // Clean up temporary file
          await fs.unlink(imageFile.filepath);

          // Commit the transaction
          await connection.commit();

          return res.status(201).json({
            id: (result as any).insertId,
            title: fields.title,
            url: fields.url,
            section: fields.section,
            path: fields.path,
            image: `data:${imageFile.mimetype};base64,${imageData.toString('base64')}`,
          });
        } catch (postError) {
          // Rollback the transaction in case of any error
          await connection.rollback();
          throw postError;
        }

      default:
        return res.status(405).json({ message: 'Method not allowed' });
    }
  } catch (error) {
    console.error('Error handling banner request:', error);
    return res.status(500).json({
      message: 'Internal server error',
      error: error instanceof Error ? error.message : 'Unknown error'
    });
  } finally {
    if (connection) connection.release();
  }
}
