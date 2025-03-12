import React, { useState } from 'react';
import { Edit2, Trash2, X, Upload, ExternalLink } from 'lucide-react';
import { Banner } from 'types/types';
import Link from 'next/link';
import { useRouter } from 'next/router';

interface ViewBannerProps {
  data: Banner;
  onEdit: (banner: Banner) => void;
  onDelete: (id: number) => void;
}

interface EditFormData {
  title: string;
  url: string;
  section: string;
  path: string;
  image: File | null;
}

const ViewBanner: React.FC<ViewBannerProps> = ({
  data,
  onEdit,
  onDelete,
}) => {
  const router = useRouter();
  const [showModal, setShowModal] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [error, setError] = useState<string>('');
  const [deleteError, setDeleteError] = useState<string>('');
  const [confirmDelete, setConfirmDelete] = useState(false);
  const [formData, setFormData] = useState<EditFormData>({
    title: data.title,
    url: data.url,
    section: data.section,
    path: data.path,
    image: null,
  });
  const [previewUrl, setPreviewUrl] = useState<string>(data.image);

  // Sections for dropdown
  const sections = [
    'products',
    'services',
    'about',
    // Add more sections as needed
  ];

  const handleClose = () => {
    setShowModal(false);
    setError('');
    setDeleteError('');
    setIsEditing(false);
    setConfirmDelete(false);
    setFormData({
      title: data.title,
      url: data.url,
      section: data.section,
      path: data.path,
      image: null,
    });
    setPreviewUrl(data.image);
  };

  const handleImageChange = (
    e: React.ChangeEvent<HTMLInputElement>,
  ) => {
    const file = e.target.files?.[0];
    if (file) {
      // Validate file type
      if (!file.type.startsWith('image/')) {
        setError('Please upload an image file');
        return;
      }

      // Validate file size (5MB limit)
      if (file.size > 5 * 1024 * 1024) {
        setError('File size should not exceed 5MB');
        return;
      }

      setFormData(prev => ({ ...prev, image: file }));
      setPreviewUrl(URL.createObjectURL(file));
      setError('');
    }
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleEdit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsEditing(true);
    setError('');

    try {
      // Validate form data
      if (
        !formData.title ||
        !formData.url ||
        !formData.section ||
        !formData.path
      ) {
        throw new Error('Please fill in all required fields');
      }

      const submitFormData = new FormData();
      submitFormData.append('title', formData.title);
      submitFormData.append('url', formData.url);
      submitFormData.append('section', formData.section);
      submitFormData.append('path', formData.path);

      if (formData.image) {
        submitFormData.append('image', formData.image);
      }

      const response = await fetch(`/api/banners/${data.id}`, {
        method: 'PUT',
        body: submitFormData,
      });

      if (!response.ok) {
        const error = await response.json();
        throw new Error(error.message || 'Failed to update banner');
      }

      const updatedBanner = await response.json();
      onEdit(updatedBanner);
      handleClose();
    } catch (err) {
      setError(
        err instanceof Error ? err.message : 'An error occurred',
      );
    } finally {
      setIsEditing(false);
    }
  };

  const handleDelete = async () => {
    if (!confirmDelete) {
      setConfirmDelete(true);
      return;
    }

    setIsDeleting(true);
    setDeleteError('');

    try {
      const response = await fetch(`/api/banners/${data.id}`, {
        method: 'DELETE',
      });

      console.log('Delete Response Status:', response.status);
      console.log('Response OK:', response.ok);

      if (!response.ok) {
        const errorData = await response.json();
        console.error('Delete Error Response:', errorData);
        throw new Error(
          errorData.message || 'Failed to delete banner',
        );
      }

      const result = await response.json();
      console.log('Delete Result:', result);

      // onDelete(data.id);
      handleClose();
      router.reload();
    } catch (err) {
      console.error('Delete Catch Error:', err);
      setDeleteError(
        err instanceof Error
          ? err.message
          : 'An unexpected error occurred',
      );
    } finally {
      setIsDeleting(false);
      setConfirmDelete(false);
    }
  };

  return (
    <>
      <li className="group relative flex flex-col overflow-hidden rounded-lg bg-white shadow-sm ring-1 ring-gray-200 hover:shadow-md">
        <div className="relative aspect-video overflow-hidden">
          <img
            src={data.url}
            alt={data.title}
            className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
          <div className="absolute bottom-0 left-0 right-0 flex items-center justify-end space-x-2 p-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
            {/* <button
              onClick={() => setShowModal(true)}
              className="rounded-full bg-white/90 p-2 text-gray-700 hover:bg-white"
              title="Edit banner"
            >
              <Edit2 className="h-4 w-4" />
            </button> */}
            <button
              onClick={handleDelete}
              className="rounded-full bg-white/90 p-2 text-red-600 hover:bg-white"
              title="Delete banner"
            >
              <Trash2 className="h-4 w-4" />
            </button>
          </div>
        </div>

        <div className="flex flex-1 flex-col p-4">
          <div className="mt-1 flex items-center text-sm text-gray-500">
            <span className="truncate">{data.title}</span>
            <a
              href={data.path || `${window.origin}#${data.section}`}
              target="_blank"
              rel="noopener noreferrer"
              className="ml-1 text-green-500 hover:text-green-600"
            >
              <ExternalLink className="h-4 w-4" />
            </a>
          </div>
        </div>
      </li>

      {/* Edit Modal */}
      {showModal && (
        <div className="fixed inset-0 z-50 overflow-y-auto">
          <div className="flex min-h-screen items-center justify-center px-4 text-center">
            {/* Backdrop */}
            <div
              className="fixed inset-0 bg-black bg-opacity-50 transition-opacity"
              onClick={handleClose}
            />

            {/* Modal */}
            <div className="inline-block w-full max-w-md transform overflow-hidden rounded-lg bg-white p-6 text-left align-middle shadow-xl transition-all">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-medium text-gray-900">
                  Edit Banner
                </h3>
                <button
                  onClick={handleClose}
                  className="text-gray-400 hover:text-gray-500"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>

              <form onSubmit={handleEdit} className="mt-4 space-y-4">
                {/* Title Input */}
                <div>
                  <label
                    htmlFor="title"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Title
                  </label>
                  <input
                    type="text"
                    id="title"
                    name="title"
                    value={formData.title}
                    onChange={handleInputChange}
                    className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-green-500 focus:outline-none focus:ring-1 focus:ring-green-500"
                    required
                  />
                </div>

                {/* URL Input */}
                <div>
                  <label
                    htmlFor="url"
                    className="block text-sm font-medium text-gray-700"
                  >
                    URL
                  </label>
                  <input
                    type="url"
                    id="url"
                    name="url"
                    value={formData.url}
                    onChange={handleInputChange}
                    className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-green-500 focus:outline-none focus:ring-1 focus:ring-green-500"
                    required
                  />
                </div>

                {/* Section Select */}
                <div>
                  <label
                    htmlFor="section"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Section
                  </label>
                  <select
                    id="section"
                    name="section"
                    value={formData.section}
                    onChange={handleInputChange}
                    className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-green-500 focus:outline-none focus:ring-1 focus:ring-green-500"
                    required
                  >
                    <option value="">Select a section</option>
                    {sections.map(section => (
                      <option key={section} value={section}>
                        {section.charAt(0).toUpperCase() +
                          section.slice(1)}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Path Input */}
                <div>
                  <label
                    htmlFor="path"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Path
                  </label>
                  <input
                    type="text"
                    id="path"
                    name="path"
                    value={formData.path}
                    onChange={handleInputChange}
                    className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-green-500 focus:outline-none focus:ring-1 focus:ring-green-500"
                    required
                  />
                </div>

                {/* Image Upload */}
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Banner Image
                  </label>
                  <div className="mt-1 flex justify-center rounded-md border-2 border-dashed border-gray-300 px-6 py-4">
                    <div className="text-center">
                      {previewUrl ? (
                        <div className="relative">
                          <img
                            src={previewUrl}
                            alt="Preview"
                            className="mx-auto h-32 w-auto object-cover"
                          />
                          <button
                            type="button"
                            onClick={() => {
                              setFormData(prev => ({
                                ...prev,
                                image: null,
                              }));
                              setPreviewUrl(data.image);
                            }}
                            className="absolute -right-2 -top-2 rounded-full bg-red-500 p-1 text-white hover:bg-red-600"
                          >
                            <X className="h-4 w-4" />
                          </button>
                        </div>
                      ) : (
                        <div className="space-y-1 text-center">
                          <Upload className="mx-auto h-12 w-12 text-gray-400" />
                          <div className="flex text-sm text-gray-600">
                            <label
                              htmlFor="image-upload"
                              className="relative cursor-pointer rounded-md bg-white font-medium text-green-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-green-500 focus-within:ring-offset-2 hover:text-green-500"
                            >
                              <span>Upload a new image</span>
                              <input
                                id="image-upload"
                                name="image"
                                type="file"
                                accept="image/*"
                                onChange={handleImageChange}
                                className="sr-only"
                              />
                            </label>
                          </div>
                          <p className="text-xs text-gray-500">
                            PNG, JPG, GIF up to 5MB
                          </p>
                        </div>
                      )}
                    </div>
                  </div>
                </div>

                {/* Error Message */}
                {error && (
                  <div className="rounded-md bg-red-50 p-4">
                    <div className="flex">
                      <div className="ml-3">
                        <h3 className="text-sm font-medium text-red-800">
                          {error}
                        </h3>
                      </div>
                    </div>
                  </div>
                )}

                {/* Form Actions */}
                <div className="mt-5 flex justify-end space-x-3">
                  <button
                    type="button"
                    onClick={handleClose}
                    className="inline-flex justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    disabled={isEditing}
                    className="inline-flex justify-center rounded-md border border-transparent bg-green-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 disabled:bg-green-400"
                  >
                    {isEditing ? 'Saving...' : 'Save Changes'}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
      {/* Confirmation Modal for Deletion */}
      {confirmDelete && (
        <div className="fixed inset-0 z-50 overflow-y-auto">
          <div className="flex min-h-screen items-center justify-center px-4 text-center">
            <div
              className="fixed inset-0 bg-black bg-opacity-50 transition-opacity"
              onClick={() => setConfirmDelete(false)}
            />

            <div className="inline-block w-full max-w-md transform overflow-hidden rounded-lg bg-white p-6 text-left align-middle shadow-xl transition-all">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-medium text-gray-900">
                  Confirm Deletion
                </h3>
                <button
                  onClick={() => setConfirmDelete(false)}
                  className="text-gray-400 hover:text-gray-500"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>

              <p className="mt-4 text-sm text-gray-500">
                Are you sure you want to delete this banner? This
                action cannot be undone.
              </p>

              {deleteError && (
                <div className="mt-4 rounded-md bg-red-50 p-4">
                  <div className="flex">
                    <div className="ml-3">
                      <h3 className="text-sm font-medium text-red-800">
                        {deleteError}
                      </h3>
                    </div>
                  </div>
                </div>
              )}

              <div className="mt-5 flex justify-end space-x-3">
                <button
                  type="button"
                  onClick={() => setConfirmDelete(false)}
                  className="inline-flex justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
                >
                  Cancel
                </button>
                <button
                  type="button"
                  onClick={handleDelete}
                  disabled={isDeleting}
                  className="inline-flex justify-center rounded-md border border-transparent bg-red-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 disabled:bg-red-400"
                >
                  {isDeleting ? 'Deleting...' : 'Confirm Delete'}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ViewBanner;
