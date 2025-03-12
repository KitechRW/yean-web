import { NextApiRequest, NextApiResponse } from 'next';
import formidable from 'formidable';
import fs from 'fs/promises';
import { pool } from 'system/lib/db';
import path from 'path';

// Disable the default body parser
export const config = {
  api: {
    bodyParser: false,
  },
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  let connection;
  try {
    connection = await pool.getConnection();

    switch (req.method) {
      case 'GET':
        const [banners] = await connection.execute(
          'SELECT * FROM banners ORDER BY created_at DESC',
        );

        // Process the banners data and convert images to base64
        const processedBanners = (banners as any[]).map(banner => ({
          id: banner.id,
          title: banner.title,
          url: banner.url,
          section: banner.section,
          path: banner.path,
          image: banner.image_data
            ? `data:${
                banner.image_type
              };base64,${banner.image_data.toString('base64')}`
            : null,
          created_at: banner.created_at,
        }));

        return res.status(200).json(processedBanners);

      case 'POST':
        // Start a transaction for safe insertion
        await connection.beginTransaction();

        // Validate image type
        const allowedTypes = ['image/jpeg', 'image/png', 'image/gif'];
        try {
          // Ensure upload directory exists
          const uploadDir = path.join(
            process.cwd(),
            'public',
            'uploads',
          );
          try {
            await fs.access(uploadDir);
          } catch {
            await fs.mkdir(uploadDir, { recursive: true });
          }
          const form = formidable({
            uploadDir,
            keepExtensions: true,
            maxFileSize: 50 * 1024 * 1024, // 50MB
            filename: (_name, _ext, part) => {
              // Keep original filename but make it safe
              const originalName = part.originalFilename || 'unknown';
              return `${Date.now()}-${originalName.replace(
                /[^a-zA-Z0-9.-]/g,
                '_',
              )}`;
            },
            filter: ({ mimetype }) => {
              return (
                mimetype && (allowedTypes.includes(mimetype) as any)
              );
            },
          });

          const results: any = await new Promise(
            (resolve, reject) => {
              form.parse(req, (err, fields, files) => {
                if (err) {
                  console.error('Form parsing error:', err);
                  reject(err);
                  return;
                }
                resolve([fields, files]);
              });
            },
          );

          const [fields, files] = results;

          // Get the uploaded file
          const fileKey = Object.keys(files)[0];
          const file = files[fileKey][0] || files[fileKey];

          if (!file) {
            return res
              .status(400)
              .json({ error: 'No image uploaded' });
          }

          // Get file details
          const filename = path.basename(file.filepath);
          const publicUrl = `/uploads/${filename}`;

          const [result] = await connection.execute(
            `INSERT INTO banners (
              title, url, path, section, image_type,
              created_at
            ) VALUES (?, ?, ?, ?, ?, NOW())`,
            [
              `${file.originalFilename || filename} ${Date.now()}`,
              publicUrl,
              fields.path as string,
              fields.section as string,
              file.mimetype,
            ],
          );

          // Commit the transaction
          await connection.commit();

          return res.status(201).json({
            id: (result as any).insertId,
            title: fields.title,
            url: fields.url,
            section: fields.section,
            path: fields.path,
          });
        } catch (postError) {
          // Rollback the transaction in case of any error
          await connection.rollback();
          throw postError;
        }

      default:
        return res
          .status(405)
          .json({ message: 'Method not allowed' });
    }
  } catch (error) {
    console.error('Error handling banner request:', error);
    return res.status(500).json({
      message: 'Internal server error',
      error: error instanceof Error ? error.message : 'Unknown error',
    });
  } finally {
    if (connection) connection.release();
  }
}
