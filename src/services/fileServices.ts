import { v4 as uuidv4 } from 'uuid';
import { query } from 'system/lib/db';
import { FileRecord } from 'types/types';

export class FileService {
  static async createFile(fileData: Omit<FileRecord, 'id' | 'uploadDate' | 'downloads'>): Promise<FileRecord> {
    try {
      const id = uuidv4();
      const sql = `
        INSERT INTO files (
          id,
          filename,
          originalName,
          mimeType,
          size,
          publicUrl,
          uploadDate
        ) VALUES (?, ?, ?, ?, ?, ?, NOW())
      `;

      const params = [
        id,
        fileData.filename,
        fileData.originalName,
        fileData.mimeType,
        fileData.size,
        fileData.publicUrl,
      ];

      await query(sql, params);

      const result = await this.getFileById(id);
      if (!result) {
        throw new Error(`File record not found after creation for ID: ${id}`);
      }

      return result;
    } catch (error) {
      console.error('Error creating file record:', error);
      throw new Error(`Failed to create file record. ${error.message}`);
    }
  }


  static async getFileById(id: string): Promise<FileRecord | null> {
    try {
      const sql = 'SELECT * FROM files WHERE id = ?';
      const results = await query(sql, [id]);
      return results[0] || null;
    } catch (error) {
      console.error('Error fetching file record:', error);
      throw error;
    }
  }

  static async deleteFile(id: string): Promise<void> {
    try {
      const sql = 'DELETE FROM files WHERE id = ?';
      await query(sql, [id]);
    } catch (error) {
      console.error('Error deleting file record:', error);
      throw error;
    }
  }

  static async incrementDownloads(id: string): Promise<void> {
    try {
      const sql = 'UPDATE files SET downloads = downloads + 1 WHERE id = ?';
      await query(sql, [id]);
    } catch (error) {
      console.error('Error incrementing downloads:', error);
      throw error;
    }
  }

  static async getAllFiles(): Promise<FileRecord[]> {
    try {
      const sql = 'SELECT * FROM files ORDER BY uploadDate DESC';
      return await query(sql);
    } catch (error) {
      console.error('Error fetching files:', error);
      throw error;
    }
  }
}
