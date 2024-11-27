import { NextApiRequest, NextApiResponse } from 'next';
import formidable from 'formidable';
import fs from 'fs';
import { pool } from 'system/lib/db'


export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const connection = await pool.getConnection();

  try {
    switch (req.method) {
      case 'GET':
        const [banners] = await connection.execute('SELECT * FROM banners');
        return res.status(200).json(banners);

      case 'POST':
        const form = formidable({
          maxFileSize: 5 * 1024 * 1024, // 5MB
        });

        const [fields, files] = await new Promise((resolve, reject) => {
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
            fields.title,
            fields.url,
            fields.section,
            fields.path,
            imageData,
            imageFile.originalFilename,
            imageFile.mimetype,
          ]
        );

        await fs.promises.unlink(imageFile.filepath);

        return res.status(200).json({
          id: result.insertId,
          title: fields.title,
          url: fields.url,
          section: fields.section,
          path: fields.path,
          image_name: imageFile.originalFilename
        });

      case 'PUT':
        const { id, ...updateData } = JSON.parse(req.body);
        await connection.execute(
          'UPDATE banners SET ? WHERE id = ?',
          [updateData, id]
        );
        return res.status(200).json(updateData);

      case 'DELETE':
        const bannerId = req.query.id;
        await connection.execute('DELETE FROM banners WHERE id = ?', [bannerId]);
        return res.status(200).json({ message: 'Banner deleted successfully' });

      default:
        return res.status(405).json({ message: 'Method not allowed' });
    }
  } catch (error) {
    console.error('Error handling banner request:', error);
    return res.status(500).json({ message: 'Internal server error' });
  } finally {
    connection.release();
  }
}
