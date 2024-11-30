import { NextApiRequest, NextApiResponse } from 'next';
import formidable from 'formidable';
import fs from 'fs/promises';
import { pool } from 'system/lib/db';

// Disable the default body parser
export const config = {
  api: {
    bodyParser: false,
  },
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { id } = req.query;

  // Comprehensive ID validation
  if (
    !id ||
    typeof id !== 'string' ||
    id.trim() === '' ||
    !/^[a-zA-Z0-9-_]+$/.test(id) ||
    id.length > 255
  ) {
    return res.status(400).json({
      message: 'Invalid banner ID',
      details: 'ID must be non-empty, alphanumeric, and max 255 characters',
    });
  }

  let connection;
  try {
    connection = await pool.getConnection();

    // Start a transaction for both PUT and DELETE operations
    await connection.beginTransaction();

    if (req.method === 'PUT') {
      // Use formidable to parse multipart form data
      const form = formidable({
        maxFileSize: 5 * 1024 * 1024, // 5MB
        keepExtensions: true,
      });

      const [fields, files] = await new Promise<
        [formidable.Fields, formidable.Files]
      >((resolve, reject) => {
        form.parse(req, (err, fields, files) => {
          if (err) reject(err);
          resolve([fields, files]);
        });
      });

      // Validate required fields
      const requiredFields = ['title', 'url', 'section', 'path'];
      for (const field of requiredFields) {
        if (!fields[field]) {
          await connection.rollback();
          return res
            .status(400)
            .json({ message: `Missing required field: ${field}` });
        }
      }

      // Check if banner exists
      const [existenceCheck] = await connection.execute(
        'SELECT * FROM banners WHERE id = ?',
        [id]
      );

      if ((existenceCheck as any[]).length === 0) {
        await connection.rollback();
        return res.status(404).json({ message: 'Banner not found' });
      }

      // Prepare update query
      const updateParams: any[] = [
        fields.title as string,
        fields.url as string,
        fields.section as string,
        fields.path as string,
      ];

      let query = `UPDATE banners SET title = ?, url = ?, section = ?, path = ?`;

      // Handle image update if a new image is provided
      const imageFile = files.image as formidable.File;
      if (imageFile) {
        // Validate image type
        const allowedTypes = ['image/jpeg', 'image/png', 'image/gif'];
        if (!allowedTypes.includes(imageFile.mimetype || '')) {
          await connection.rollback();
          return res.status(400).json({ message: 'Invalid image type' });
        }

        // Read image data
        const imageData = await fs.readFile(imageFile.filepath);

        // Extend query and params
        query += ', image_data = ?, image_name = ?, image_type = ?';
        updateParams.push(
          imageData,
          imageFile.originalFilename,
          imageFile.mimetype
        );

        // Clean up temporary file
        await fs.unlink(imageFile.filepath);
      }

      // Add WHERE clause and ID to params
      query += ' WHERE id = ?';
      updateParams.push(id);

      // Execute update
      const [result] = await connection.execute(query, updateParams);

      // Commit transaction
      await connection.commit();

      // Fetch updated banner to return
      const [updatedBanners] = await connection.execute(
        'SELECT * FROM banners WHERE id = ?',
        [id]
      );

      const updatedBanner = (updatedBanners as any[])[0];

      return res.status(200).json({
        ...updatedBanner,
        image: updatedBanner.image_data
          ? `data:${updatedBanner.image_type};base64,${updatedBanner.image_data.toString(
            'base64'
          )}`
          : null,
      });
    } else if (req.method === 'DELETE') {
      // First, check if the banner exists before deletion
      const [existenceCheck] = await connection.execute(
        'SELECT COUNT(*) as count FROM banners WHERE id = ?',
        [id]
      );

      const existingCount = (existenceCheck as any[])[0].count;

      // If banner doesn't exist, return early
      if (existingCount === 0) {
        await connection.rollback();
        return res.status(404).json({
          message: 'Banner not found',
          id: id,
        });
      }

      // Perform deletion
      const [deleteResult] = await connection.execute(
        'DELETE FROM banners WHERE id = ?',
        [id]
      );

      // Multiple checks for successful deletion
      const affectedRows = (deleteResult as any).affectedRows;
      const changedRows = (deleteResult as any).changedRows;
      const warningStatus = (deleteResult as any).warningStatus;

      // Comprehensive deletion validation
      if (
        affectedRows > 0 &&
        warningStatus === 0 &&
        (changedRows === undefined || changedRows === 0)
      ) {
        await connection.commit();
        return res.status(200).json({
          message: 'Banner deleted successfully',
          id: id,
          deletedCount: affectedRows,
          meta: {
            affectedRows,
            changedRows,
            warningStatus,
          },
        });
      } else {
        // Log unexpected deletion scenario
        console.warn('Unexpected deletion result', {
          affectedRows,
          changedRows,
          warningStatus,
        });
        await connection.rollback();
        return res.status(500).json({
          message: 'Deletion encountered an unexpected issue',
          details: {
            affectedRows,
            changedRows,
            warningStatus,
          },
        });
      }
    } else {
      await connection.rollback();
      res.setHeader('Allow', ['PUT', 'DELETE']);
      return res
        .status(405)
        .json({ message: `Method ${req.method} Not Allowed` });
    }
  } catch (error) {
    if (connection) await connection.rollback();

    console.error('Banner operation error:', error);

    // Detailed error handling
    return res.status(500).json({
      message: 'Failed to process banner',
      error: {
        name: error instanceof Error ? error.name : 'UnknownError',
        message: error instanceof Error ? error.message : 'Unexpected error',
        ...(process.env.NODE_ENV === 'development' && error instanceof Error
          ? { stack: error.stack }
          : {}),
      },
    });
  } finally {
    if (connection) connection.release();
  }
}
