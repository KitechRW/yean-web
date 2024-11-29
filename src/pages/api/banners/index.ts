import { NextApiRequest, NextApiResponse } from 'next';
import formidable from 'formidable';
import fs from 'fs';
import { pool } from 'system/lib/db';

// Disable the default body parser
export const config = {
  api: {
    bodyParser: false,
  },
};

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const connection = await pool.getConnection();

  try {
    switch (req.method) {
      case 'GET':
        const [banners] = await connection.execute('SELECT * FROM banners');

        // Convert image to base64
        const processedBanners = (banners as any[]).map(banner => ({
          ...banner,
          image: banner.image_data ? banner.image_data.toString('base64') : null
        }));

        return res.status(200).json(processedBanners);

      case 'POST':
        const form = formidable({
          maxFileSize: 100 * 1024 * 1024, // 100MB
        });

        const [fields, files] = await new Promise<[formidable.Fields, formidable.Files]>((resolve, reject) => {
          form.parse(req, (err, fields, files) => {
            if (err) reject(err);
            resolve([fields, files]);
          });
        });

        const imageFile = files.image as formidable.File;
        const imageData = await fs.promises.readFile(imageFile.filepath);

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

        await fs.promises.unlink(imageFile.filepath);

        return res.status(201).json({
          id: result.insertId,
          title: fields.title,
          url: fields.url,
          section: fields.section,
          path: fields.path,
          image_name: imageFile.originalFilename,
        });

      case 'PUT':
        const { id, ...updateData } = JSON.parse(req.body);
        await connection.execute(
          'UPDATE banners SET ? WHERE id = ?',
          [updateData, id]
        );
        return res.status(200).json(updateData);

      case 'DELETE':
        const bannerId = req.query.id as string;
        const section = req.query.section as string;

        if (!bannerId || !section) {
          return res.status(400).json({ message: 'Banner ID and Section are required' });
        }

        try {
          const [result] = await connection.execute(
            'DELETE FROM banners WHERE id = ? AND section = ?',
            [bannerId, section]
          );

          if ((result as any).affectedRows === 0) {
            return res.status(404).json({
              message: 'Banner not found or section mismatch',
            });
          }

          return res.status(200).json({
            message: 'Banner deleted successfully',
            id: bannerId,
          });
        } catch (error) {
          console.error('Error deleting banner:', error);
          return res.status(500).json({
            message: 'Internal server error while deleting the banner',
            error: error instanceof Error ? error.message : 'Unknown error',
          });
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
    connection.release();
  }
}
