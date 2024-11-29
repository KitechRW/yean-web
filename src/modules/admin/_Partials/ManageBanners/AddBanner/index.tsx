import React, { useState } from 'react';
import { Upload, X } from 'lucide-react';
import { Banner } from 'types/types';
import { useDropzone } from 'react-dropzone';

interface AddBannerProps {
  onAdd: (banner: Banner) => void;
  children: React.ReactNode;
}

interface FormData {
  title: string;
  url: string;
  section: string;
  path: string;
  image: File | null;
}

const INITIAL_FORM_STATE: FormData = {
  title: '',
  url: '',
  section: '',
  path: '',
  image: null,
};

const sections = ['products', 'services', 'about'];

export default function AddBanner({ onAdd, children }: AddBannerProps) {
  const [open, setOpen] = useState(false);
  const [formData, setFormData] = useState<FormData>(INITIAL_FORM_STATE);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [previewUrl, setPreviewUrl] = useState<string>('');
  const [error, setError] = useState<string>('');

  const resetForm = () => {
    setFormData(INITIAL_FORM_STATE);
    setPreviewUrl('');
    setError('');
  };

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

    setFormData((prev) => ({ ...prev, image: file }));
    setPreviewUrl(URL.createObjectURL(file));
    setError('');
  };

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    accept: 'image/*',
    maxSize: 100 * 1024 * 1024, //100mbz
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');

    try {
      const { title, url, section, path, image } = formData;
      if (!title.trim() || !url.trim() || !section.trim() || !path.trim() || !image) {
        throw new Error('Please fill in all required fields completely');
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
        throw new Error(errorData.message || 'Failed to create banner');
      }

      const newBanner = await response.json();
      onAdd(newBanner);
      handleClose();
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <div onClick={() => setOpen(true)}>{children}</div>

      {open && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="w-full max-w-md rounded-lg bg-white p-6">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-bold">Add New Banner</h3>
              <button onClick={handleClose} className="text-gray-400 hover:text-gray-500">
                <X className="h-5 w-5" />
              </button>
            </div>

            <form onSubmit={handleSubmit} className="mt-4 space-y-4">
              <div>
                <label className="text-sm font-bold text-gray-700">Title</label>
                <input
                  type="text"
                  value={formData.title}
                  onChange={(e) => setFormData((prev) => ({ ...prev, title: e.target.value }))}
                  className="mt-1 block w-full rounded-md border border-green-300 p-2 focus:border-green-500 focus:outline-none focus:ring-1 focus:ring-green-500"
                />
              </div>

              <div>
                <label className="text-sm font-bold text-gray-700">URL</label>
                <input
                  type="url"
                  value={formData.url}
                  onChange={(e) => setFormData((prev) => ({ ...prev, url: e.target.value }))}
                  className="mt-1 block w-full rounded-md border border-green-300 p-2 focus:border-green-500 focus:outline-none focus:ring-1 focus:ring-green-500"
                />
              </div>

              <div>
                <label className="text-sm font-bold text-gray-700">Section</label>
                <select
                  value={formData.section}
                  onChange={(e) => setFormData((prev) => ({ ...prev, section: e.target.value }))}
                  className="mt-1 block w-full rounded-md border border-green-300 p-2 focus:border-green-500 focus:outline-none focus:ring-1 focus:ring-green-500"
                >
                  <option value="">Select a section</option>
                  {sections.map((section) => (
                    <option key={section} value={section}>
                      {section.charAt(0).toUpperCase() + section.slice(1)}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="text-sm font-bold text-gray-700">Path</label>
                <input
                  type="text"
                  value={formData.path}
                  onChange={(e) => setFormData((prev) => ({ ...prev, path: e.target.value }))}
                  className="mt-1 block w-full rounded-md border border-green-300 p-2 focus:border-green-500 focus:outline-none focus:ring-1 focus:ring-green-500"
                />
              </div>

              <div>
                <label className="text-sm font-bold text-gray-700">Banner Image</label>
                <div
                  {...getRootProps()}
                  className="mt-1 flex cursor-pointer flex-col items-center justify-center rounded-md border-2 border-dashed border-green-300 p-6"
                >
                  <input {...getInputProps()} />
                  {previewUrl ? (
                    <div className="relative">
                      <img src={previewUrl} alt="Preview" className="h-32 w-auto object-cover" />
                      <button
                        type="button"
                        onClick={() => {
                          setFormData((prev) => ({ ...prev, image: null }));
                          setPreviewUrl('');
                        }}
                        className="absolute -right-2 -top-2 rounded-full bg-red-500 p-1 text-white hover:bg-red-600"
                      >
                        <X className="h-4 w-4" />
                      </button>
                    </div>
                  ) : (
                    <>
                      <Upload className="h-12 w-12 text-gray-400" />
                      <span className="mt-2 text-sm font-medium text-green-600">
                        Drag & drop or click to upload
                      </span>
                      <span className="mt-1 text-xs text-gray-500">PNG, JPG, GIF up to 5MB</span>
                    </>
                  )}
                </div>
              </div>

              {error && (
                <div className="rounded-md bg-red-50 p-3 text-sm text-red-800">{error}</div>
              )}

              <div className="mt-6 flex justify-end space-x-3">
                <button
                  type="button"
                  onClick={handleClose}
                  className="rounded-md border px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="rounded-md bg-green-600 px-4 py-2 text-sm font-medium text-white hover:bg-green-700 disabled:bg-green-400"
                >
                  {isSubmitting ? 'Creating...' : 'Create Banner'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
}
