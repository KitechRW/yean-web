import { createWriteStream, unlink } from 'fs';
import { mkdir } from 'fs/promises';
import path from 'path';
import { v4 as uuidv4 } from 'uuid';

const UPLOAD_DIR = path.join(process.cwd(), 'public', 'uploads', 'banners');

export const saveFile = async (file: Express.Multer.File): Promise<string> => {
  await mkdir(UPLOAD_DIR, { recursive: true });

  const extension = path.extname(file.originalname);
  const filename = `${uuidv4()}${extension}`;
  const filepath = path.join(UPLOAD_DIR, filename);

  return new Promise((resolve, reject) => {
    const writeStream = createWriteStream(filepath);
    writeStream.write(file.buffer);
    writeStream.end();
    writeStream.on('finish', () => resolve(`/uploads/banners/${filename}`));
    writeStream.on('error', reject);
  });
};

export const deleteFile = async (filepath: string): Promise<void> => {
  const fullPath = path.join(process.cwd(), 'public', filepath);
  return new Promise((resolve, reject) => {
    unlink(fullPath, (err) => {
      if (err) reject(err);
      else resolve();
    });
  });
};
