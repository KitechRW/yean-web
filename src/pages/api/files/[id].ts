import type { NextApiRequest, NextApiResponse } from 'next';
import { FileService } from 'services/fileServices';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { id } = req.query;

  if (req.method === 'PUT') {
    try {
      // Validate input
      const { originalName } = req.body;

      if (!originalName) {
        return res.status(400).json({ error: 'Original name is required' });
      }

      // Update file metadata
      const updatedFile = await FileService.updateFile(String(id), {
        originalName
      });

      return res.status(200).json(updatedFile);
    } catch (error) {
      console.error('Edit file error:', error);
      return res.status(500).json({
        error: 'Failed to update file',
        details: error instanceof Error ? error.message : 'Unknown error'
      });
    }
  } else {
    return res.status(405).json({ error: 'Method not allowed' });
  }
}
