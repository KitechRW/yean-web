/* eslint-disable @next/next/no-img-element */
import React, { useState } from 'react';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  TextField,
  IconButton,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  Alert,
} from '@mui/material';
import { CloudUpload, Close } from '@mui/icons-material';
import { useDropzone } from 'react-dropzone';
import { Banner } from 'types/types';
import { useRouter } from 'next/router';

interface AddBannerProps {
  onAdd: (banner: Banner) => void;
  children: React.ReactNode;
  allowedTypes?: string[];
}

interface FormData {
  section: string;
  path: string;
  image: File | null;
}

const INITIAL_FORM_STATE: FormData = {
  section: '',
  path: '',
  image: null,
};

const sections = [1, 2, 3];

export default function AddBanner({
  onAdd,
  children,
  allowedTypes = ['image/png', 'image/jpeg', 'image/gif'],
}: AddBannerProps) {
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const [formData, setFormData] = useState<FormData>(
    INITIAL_FORM_STATE,
  );
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [previewUrl, setPreviewUrl] = useState<string>('');
  const [error, setError] = useState<string>('');

  const resetForm = () => {
    setFormData(INITIAL_FORM_STATE);
    setPreviewUrl('');
    setError('');
  };

  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    setOpen(false);
    resetForm();
  };

  const onDrop = (acceptedFiles: File[]) => {
    const file = acceptedFiles[0];
    if (!file.type.startsWith('image/')) {
      setError('Please upload an image file');
      return;
    }

    if (file.size > 100 * 1024 * 1024) {
      setError('Image size must be less than 100MB');
      return;
    }

    // Check image dimensions
    const img = new Image();
    img.onload = () => {
      URL.revokeObjectURL(img.src);

      // Example: Check if dimensions are within limits
      const maxWidth = 1211;
      const maxHeight = 195;
      console.log(img.height, img.width)

      if (img.width > maxWidth || img.height > maxHeight) {
        setError(
          `Image dimensions must be exact ${maxWidth}x${maxHeight} or smaller`,
        );
        return;
      }

      setFormData(prev => ({ ...prev, image: file }));
      setPreviewUrl(URL.createObjectURL(file));
      setError('');
    };

    img.onerror = () => {
      setError('Error loading image for validation');
    };

    img.src = URL.createObjectURL(file);
  };

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    maxSize: 100 * 1024 * 1024, //100MB
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');

    try {
      const { section, path, image } = formData;
      if (!section || !image || !path.trim()) {
        throw new Error(
          'Please fill in all required fields completely',
        );
      }

      const submitFormData = new FormData();
      Object.entries(formData).forEach(([key, value]) => {
        if (value !== null) {
          submitFormData.append(key, value);
        }
      });

      const response = await fetch('/api/banners', {
        method: 'POST',
        body: submitFormData,
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(
          errorData.message || 'Failed to create banner',
        );
      }

      const newBanner = await response.json();
      // onAdd(newBanner);
      handleClose();
      router.reload();
    } catch (err) {
      setError(
        err instanceof Error ? err.message : 'An error occurred',
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <div onClick={handleOpen}>{children}</div>

      <Dialog
        open={open}
        onClose={handleClose}
        maxWidth="sm"
        fullWidth
      >
        <DialogTitle className="flex justify-between items-center">
          <span>Add New Banner</span>
          <IconButton
            onClick={handleClose}
            disabled={isSubmitting}
            size="small"
          >
            <Close />
          </IconButton>
        </DialogTitle>

        <form onSubmit={handleSubmit}>
          <DialogContent>
            <FormControl fullWidth margin="normal" required>
              <InputLabel>Section</InputLabel>
              <Select
                value={formData.section}
                label="Section"
                onChange={e =>
                  setFormData(prev => ({
                    ...prev,
                    section: e.target.value,
                  }))
                }
                disabled={isSubmitting}
                color="success"
              >
                {sections.map(section => (
                  <MenuItem key={section} value={section}>
                    {`Banner ${section}`}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>

            <TextField
              fullWidth
              label="Link To Page"
              value={formData.path}
              onChange={e =>
                setFormData(prev => ({
                  ...prev,
                  path: e.target.value,
                }))
              }
              required
              disabled={isSubmitting}
              margin="normal"
              variant="outlined"
              color="success"
              type="url"
            />

            <input
              {...getInputProps()}
              style={{ display: 'none' }}
              id="banner-file-upload"
              accept={allowedTypes.join(',')}
            />

            <label
              htmlFor="banner-file-upload"
              className={`
                cursor-pointer flex flex-col items-center justify-center
                w-full h-48 border-2 border-dashed rounded-lg
                mt-4 transition-colors duration-200
                ${
                  isSubmitting
                    ? 'bg-green-50'
                    : error
                    ? 'border-red-300 bg-red-50'
                    : previewUrl
                    ? 'border-green-500 bg-green-50'
                    : 'border-green-300 hover:border-green-500'
                }
              `}
              {...getRootProps()}
            >
              {previewUrl ? (
                <div className="relative flex flex-col items-center">
                  <img
                    src={previewUrl}
                    alt="Preview"
                    className="max-h-35 w-auto object-contain mt-48"
                  />
                  <IconButton
                    size="small"
                    onClick={e => {
                      e.stopPropagation();
                      setFormData(prev => ({ ...prev, image: null }));
                      setPreviewUrl('');
                    }}
                    sx={{
                      position: 'absolute',
                      top: -10,
                      right: -10,
                      backgroundColor: 'green',
                      color: 'white',
                      '&:hover': { backgroundColor: 'darkgreen' },
                    }}
                  >
                    <Close fontSize="small" />
                  </IconButton>
                </div>
              ) : (
                <div className="flex flex-col items-center justify-center h-full">
                  <CloudUpload
                    sx={{ fontSize: 64, color: 'green', mb: 2 }}
                  />
                  <span className="text-lg text-center text-green-600">
                    Drag and Drop Banner Image
                  </span>
                  <span className="text-sm text-green-500 mt-2">
                    or Click to Upload (PNG, JPG, GIF up to 100MB)
                  </span>
                </div>
              )}
            </label>

            {error && (
              <Alert
                severity="error"
                onClose={() => setError('')}
                sx={{ mt: 2 }}
              >
                {error}
              </Alert>
            )}
          </DialogContent>

          <DialogActions>
            <Button
              onClick={handleClose}
              disabled={isSubmitting}
              color="success"
            >
              Cancel
            </Button>
            <Button
              type="submit"
              variant="outlined"
              disabled={isSubmitting || !formData.image}
              color="success"
            >
              {isSubmitting ? 'Creating...' : 'Create Banner'}
            </Button>
          </DialogActions>
        </form>
      </Dialog>
    </>
  );
}
