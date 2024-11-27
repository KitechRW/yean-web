import { NextApiRequest, NextApiResponse } from 'next';
import { db } from 'system/lib/db';
import fs from 'fs/promises';
import path from 'path';
import {Banner} from "types/types";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { id } = req.query;

  if (req.method === 'DELETE') {
    try {
      // Get banner info before deletion
      const [banner] = await db.execute<Banner[]>(
        'SELECT * FROM banners WHERE id = ?',
        [id]
      );

      if (!banner[0]) {
        return res.status(404).json({ message: 'Banner not found' });
      }

      // Delete image file
      const imagePath = path.join(process.cwd(), 'public', banner[0].image_path);
      await fs.unlink(imagePath);

      // Delete from database
      await db.execute('DELETE FROM banners WHERE id = ?', [id]);

      res.status(200).json({ message: 'Banner deleted successfully' });
    } catch (error) {
      console.error('Error deleting banner:', error);
      res.status(500).json({ message: 'Failed to delete banner' });
    }
  } else if (req.method === 'PUT') {
    // Handle banner updates similarly to POST but with existing ID
    // ... (similar to POST logic but with UPDATE query)
  } else {
    res.setHeader('Allow', ['DELETE', 'PUT']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
