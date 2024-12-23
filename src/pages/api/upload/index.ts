import type { NextApiRequest, NextApiResponse } from 'next';
import formidable from 'formidable';
import { FileService } from 'services/fileServices';
import path from 'path';
import fs from 'fs/promises';

export const config = {
  api: {
    bodyParser: false,
  },
};

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  // Ensure upload directory exists
  const uploadDir = path.join(process.cwd(), 'public', 'uploads');
  try {
    await fs.access(uploadDir);
  } catch {
    await fs.mkdir(uploadDir, { recursive: true });
  }

  // Configure formidable with specific options
  const form = new formidable.IncomingForm({
    uploadDir,
    keepExtensions: true,
    maxFileSize: 50 * 1024 * 1024, // 50MB
    filename: (_name, _ext, part) => {
      // Keep original filename but make it safe
      const originalName = part.originalFilename || 'unknown';
      return `${Date.now()}-${originalName.replace(/[^a-zA-Z0-9.-]/g, '_')}`;
    },
    filter: ({ mimetype }) => {
      // Accept PDF and common document types
      return mimetype && [
        'application/pdf',
        'application/msword',
        'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
        'application/vnd.ms-excel',
        'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
        'application/vnd.ms-powerpoint',
        'application/vnd.openxmlformats-officedocument.presentationml.presentation'
      ].includes(mimetype);
    }
  });

  try {
    // Parse the form with proper error handling
    const [fields, files] = await new Promise((resolve, reject) => {
      form.parse(req, (err, fields, files) => {
        if (err) {
          console.error('Form parsing error:', err);
          reject(err);
          return;
        }
        resolve([fields, files]);
      });
    });

    // Get the uploaded file
    const fileKey = Object.keys(files)[0];
    const file = files[fileKey][0] || files[fileKey];

    if (!file) {
      console.error('No file found in request');
      return res.status(400).json({ error: 'No file uploaded' });
    }

    // Get file details
    const filename = path.basename(file.filepath);
    const publicUrl = `/uploads/${filename}`;

    // Create database record
    const fileRecord = await FileService.createFile({
      filename,
      originalName: file.originalFilename || filename,
      mimeType: file.mimetype || 'application/octet-stream',
      size: file.size,
      publicUrl,
    });

    // Return success response
    return res.status(200).json({
      success: true,
      data: fileRecord,
    });

  } catch (error) {
    console.error('Upload error:', error);
    // Clean up any partially uploaded files
    try {
      const tempFiles = await fs.readdir(uploadDir);
      for (const file of tempFiles) {
        if (file.startsWith('upload_')) {
          await fs.unlink(path.join(uploadDir, file));
        }
      }
    } catch (cleanupError) {
      console.error('Cleanup error:', cleanupError);
    }

    return res.status(500).json({
      error: 'File upload failed',
      details: error instanceof Error ? error.message : 'Unknown error',
    });
  }
}
