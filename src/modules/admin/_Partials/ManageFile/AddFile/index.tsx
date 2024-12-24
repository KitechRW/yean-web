import React, { useState, useCallback } from 'react';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  TextField,
  CircularProgress,
  Alert,
  IconButton,
  LinearProgress,
} from '@mui/material';
import { CloudUpload, Close } from '@mui/icons-material';
import { FileRecord } from 'types/types';

interface AddFileProps {
  children: React.ReactNode;
  onAdd: (file: FileRecord) => void;
  maxFileSize?: number;
  allowedTypes?: string[];
  className?: string;
}

const AddFile: React.FC<AddFileProps> = ({
  children,
  onAdd,
  maxFileSize = 10 * 1024 * 1024,
  allowedTypes = ['.pdf', '.doc', '.docx', '.xls', '.xlsx', '.ppt', '.pptx'],
  className
}) => {
  const [open, setOpen] = useState(false);
  const [uploading, setUploading] = useState(false);
  const [uploadProgress, setUploadProgress] = useState(0);
  const [error, setError] = useState<string | null>(null);
  const [title, setTitle] = useState('');
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [isDragging, setIsDragging] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    setOpen(false);
    resetForm();
  };

  const resetForm = () => {
    setTitle('');
    setSelectedFile(null);
    setError(null);
    setUploadProgress(0);
    setIsDragging(false);
  };

  const validateFile = (file: File): string | null => {
    if (file.size > maxFileSize) {
      return `File size exceeds ${formatFileSize(maxFileSize)} limit`;
    }

    const fileExtension = `.${file.name.split('.').pop()?.toLowerCase()}`;
    if (!allowedTypes.includes(fileExtension)) {
      return `File type not allowed. Accepted types: ${allowedTypes.join(', ')}`;
    }

    return null;
  };

  const handleFile = (file: File) => {
    const validationError = validateFile(file);

    if (validationError) {
      setError(validationError);
      return;
    }

    setSelectedFile(file);
    setTitle(file.name);
    setError(null);
  };

  const handleFileSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (files && files.length > 0) {
      handleFile(files[0]);
    }
  };

  const handleDrag = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
  }, []);

  const handleDragIn = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(true);
  }, []);

  const handleDragOut = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);
  }, []);

  const handleDrop = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);

    const files = e.dataTransfer.files;
    if (files && files.length > 0) {
      handleFile(files[0]);
    }
  }, []);

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    if (!selectedFile) return;

    setUploading(true);
    setError(null);

    try {
      const formData = new FormData();
      formData.append('file', selectedFile);
      formData.append('title', title);

      const xhr = new XMLHttpRequest();

      xhr.upload.onprogress = (event) => {
        if (event.lengthComputable) {
          const progress = Math.round((event.loaded / event.total) * 100);
          setUploadProgress(progress);
        }
      };

      const uploadPromise = new Promise((resolve, reject) => {
        xhr.onload = () => {
          if (xhr.status >= 200 && xhr.status < 300) {
            try {
              const response = JSON.parse(xhr.responseText);
              resolve(response);
            } catch (e) {
              reject(new Error('Invalid response format'));
            }
          } else {
            reject(new Error(`HTTP Error: ${xhr.status}`));
          }
        };
        xhr.onerror = () => reject(new Error('Network error'));
      });

      xhr.open('POST', '/api/upload');
      xhr.send(formData);

      const response = await uploadPromise as { success: boolean; data: FileRecord; error?: string };

      if (!response.success || response.error) {
        throw new Error(response.error || 'Upload failed');
      }

      onAdd(response.data);
      handleClose();
    } catch (error) {
      console.error('Upload error:', error);
      setError(error instanceof Error ? error.message : 'Upload failed');
    } finally {
      setUploading(false);
    }
  };

  const formatFileSize = (bytes: number): string => {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return `${parseFloat((bytes / Math.pow(k, i)).toFixed(2))} ${sizes[i]}`;
  };

  return (
    <>
      <div onClick={handleOpen} className={className}>
        {children}
      </div>

      <Dialog
        open={open}
        onClose={uploading ? undefined : handleClose}
        maxWidth="sm"
        fullWidth
      >
        <DialogTitle className="flex justify-between items-center">
          <span>Upload New File</span>
          <IconButton
            onClick={handleClose}
            disabled={uploading}
            size="small"
          >
            <Close />
          </IconButton>
        </DialogTitle>

        <form onSubmit={handleSubmit}>
          <DialogContent>
            <TextField
              fullWidth
              label="File Name"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
              disabled={uploading}
              margin="normal"
            />

            <input
              type="file"
              id="file-upload"
              className="hidden border-gray-500 bg-gray-500"
              onChange={handleFileSelect}
              accept={allowedTypes.join(',')}
              disabled={uploading}
            />

            <label
              htmlFor="file-upload"
              className={`
                cursor-pointer flex flex-col items-center justify-center
                w-full h-32 border-2 border-dashed rounded-lg
                mt-4 transition-colors duration-200
                ${uploading ? 'bg-gray-50' :
                isDragging ? 'border-gray-500 bg-gray-50' :
                  error ? 'border-red-300 bg-red-50' :
                    selectedFile ? 'border-gray-500 bg-gray-100' :
                      'border-gray-400 hover:border-gray-600'}
              `}
              onDragEnter={handleDragIn}
              onDragLeave={handleDragOut}
              onDragOver={handleDrag}
              onDrop={handleDrop}
            >
              <CloudUpload className="mb-2" />
              <span className="text-sm text-center">
                {selectedFile ? (
                  <>
                    {selectedFile.name}
                    <br />
                    <span className="text-xs text-gray-500">
                      {formatFileSize(selectedFile.size)}
                    </span>
                  </>
                ) : (
                  <>
                    Drag and drop a file here or click to select
                    <br />
                    <span className="text-xs text-gray-500">
                      Max size: {formatFileSize(maxFileSize)}
                    </span>
                  </>
                )}
              </span>
            </label>

            {error && (
              <Alert severity="error" onClose={() => setError(null)}>
                {error}
              </Alert>
            )}

            {uploading && (
              <div className="mt-4">
                <LinearProgress variant="determinate" value={uploadProgress} color="primary" />
                <p className="text-xs text-gray-500 mt-1 text-center">
                  Uploading... {uploadProgress}%
                </p>
              </div>
            )}
          </DialogContent>

          <DialogActions>
            <Button 
              className="bg-gray-300 hover:bg-gray-400 text-gray-700"
              onClick={handleClose}
              disabled={uploading}
            >
              Cancel
            </Button>
            <Button
              type="submit"
              variant="contained"
              disabled={!selectedFile || uploading}
              className="bg-gray-600 hover:bg-gray-700 text-white"
            >
              {uploading ? (
                <>
                  <CircularProgress size={20} className="mr-2" />
                  Uploading...
                </>
              ) : (
                'Upload'
              )}
            </Button>
          </DialogActions>
        </form>
      </Dialog>
    </>
  );
};

export default AddFile;