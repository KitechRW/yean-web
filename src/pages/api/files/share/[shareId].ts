import { NextApiRequest, NextApiResponse } from 'next';
import { db } from 'system/lib/db';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'GET') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  const { shareId } = req.query;

  try {
    const [files] = await db.query(
      'SELECT * FROM files WHERE shareId = ?',
      [shareId]
    );

    if (!files.length) {
      return res.status(404).json({ message: 'Shared file not found' });
    }

    res.json(files[0]);
  } catch (error) {
    console.error('Share fetch error:', error);
    res.status(500).json({ message: 'Failed to fetch shared file' });
  }
}
