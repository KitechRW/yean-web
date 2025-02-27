import type { NextApiRequest, NextApiResponse } from 'next';
import { FileService } from 'services/fileServices';
import path from 'path';
import fs from 'fs/promises';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  switch (req.method) {
    case 'GET':
      return handleGet(req, res);
    case 'DELETE':
      return handleDelete(req, res);
    default:
      return res.status(405).json({ error: 'Method not allowed' });
  }
}

async function handleGet(req: NextApiRequest, res: NextApiResponse) {
  try {
    const files = await FileService.getAllFiles();
    return res.status(200).json({
      rows: files,
      total: (files as any).length,
    });
  } catch (error) {
    console.error('Fetch error:', error);
    return res.status(500).json({
      error: 'Failed to fetch files',
      message:
        error instanceof Error ? error.message : 'Unknown error',
    });
  }
}

async function handleDelete(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  try {
    const { id } = req.query;

    if (!id || Array.isArray(id)) {
      return res.status(400).json({ error: 'Invalid file ID' });
    }

    const file = await FileService.getFileById(id);

    if (!file) {
      return res.status(404).json({ error: 'File not found' });
    }

    // Delete file from filesystem
    if (file.publicUrl) {
      const filePath = path.join(
        process.cwd(),
        'public',
        file.publicUrl,
      );
      console.log('Attempting to delete file at path:', filePath);

      try {
        await fs.access(filePath);
        await fs.unlink(filePath);
        console.log('File deleted successfully:', filePath);
      } catch (error) {
        console.warn('File not found or deletion failed:', error);
      }
    }

    // Delete from database
    try {
      await FileService.deleteFile(id);
    } catch (error) {
      console.error('Database deletion error:', error);
      return res
        .status(500)
        .json({ error: 'Failed to delete file from database' });
    }

    return res.status(200).json({ success: true });
  } catch (error) {
    console.error('Delete endpoint error:', error);
    return res.status(500).json({
      error: 'Failed to delete file',
      details:
        error instanceof Error ? error.message : 'Unknown error',
    });
  }
}
