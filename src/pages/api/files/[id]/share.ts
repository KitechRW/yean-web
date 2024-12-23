import { NextApiRequest, NextApiResponse } from 'next';
import { v4 as uuidv4 } from 'uuid';
import { db } from 'system/lib/db';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  const { id } = req.query;

  try {
    const shareId = uuidv4();

    // Update the file with share information
    await db.query(
      'UPDATE files SET shareId = ?, shared = TRUE WHERE id = ?',
      [shareId, id]
    );

    // Get the updated file
    const [files] = await db.query(
      'SELECT * FROM files WHERE id = ?',
      [id]
    );

    if (!files.length) {
      return res.status(404).json({ message: 'File not found' });
    }

    res.json(files[0]);
  } catch (error) {
    console.error('Share error:', error);
    res.status(500).json({ message: 'Failed to share file' });
  }
}
