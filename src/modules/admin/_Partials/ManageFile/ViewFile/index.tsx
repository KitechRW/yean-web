import React, { useState, useEffect } from 'react';
import {
  Card,
  IconButton,
  Menu,
  MenuItem,
  Typography,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  TextField,
  Snackbar,
  Alert,
  CircularProgress,
} from '@mui/material';
import {
  MoreVert,
  Download,
  Edit,
  Share,
  ContentCopy,
  Visibility,
  Image,
  VideoFile,
  AudioFile,
  PictureAsPdf,
  Code,
  Description,
  InsertDriveFile,
} from '@mui/icons-material';
import { formatDistanceToNow } from 'date-fns';

interface FileRecord {
  id: string;
  filename: string;
  originalName: string;
  mimeType: string;
  size: number;
  publicUrl: string;
  uploadDate: string;
  downloads: number;
  shareId?: string;
  shared?: boolean;
}

interface ViewFileProps {
  data: FileRecord;
  onEdit: (file: FileRecord) => void;
}

const ViewFile: React.FC<ViewFileProps> = ({ data, onEdit }) => {
  const [fileData, setFileData] = useState<FileRecord>(data);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [shareDialogOpen, setShareDialogOpen] = useState(false);
  const [previewDialogOpen, setPreviewDialogOpen] = useState(false);
  const [editDialogOpen, setEditDialogOpen] = useState(false);
  const [previewContent, setPreviewContent] = useState<string | null>(null);
  const [editedName, setEditedName] = useState(data.originalName);
  const [isLoading, setIsLoading] = useState(false);
  const [snackbar, setSnackbar] = useState({
    open: false,
    message: '',
    severity: 'success' as 'success' | 'error'
  });

  useEffect(() => {
    setFileData(data);
    setEditedName(data.originalName);
  }, [data]);

  const formatFileSize = (bytes: number): string => {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return `${parseFloat((bytes / Math.pow(k, i)).toFixed(2))} ${sizes[i]}`;
  };

  const getFileIcon = (mimeType: string) => {
    if (mimeType.startsWith('image/')) return <Image className="text-gray-600" />;
    if (mimeType.startsWith('video/')) return <VideoFile className="text-gray-600" />;
    if (mimeType.startsWith('audio/')) return <AudioFile className="text-gray-600" />;
    if (mimeType === 'application/pdf') return <PictureAsPdf className="text-gray-700" />;
    if (mimeType.includes('text/') ||
      mimeType.includes('application/json') ||
      mimeType.includes('application/xml')) return <Code className="text-gray-700" />;
    if (mimeType.includes('document') ||
      mimeType.includes('text/plain')) return <Description className="text-gray-700" />;
    return <InsertDriveFile className="text-gray-600" />;
  };

  const handleMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handlePreview = async () => {
    if (!fileData) return;
    setIsLoading(true);

    try {
      if (fileData.mimeType.startsWith('image/')) {
        setPreviewContent(`
          <div class="flex justify-center items-center min-h-[200px]">
            <img src="${fileData.publicUrl}" alt="${fileData.originalName}"
                 class="max-w-full max-h-[80vh] object-contain" />
          </div>
        `);
      } else if (fileData.mimeType.startsWith('video/')) {
        setPreviewContent(`
          <div class="flex justify-center items-center min-h-[200px]">
            <video controls class="max-w-full max-h-[80vh]">
              <source src="${fileData.publicUrl}" type="${fileData.mimeType}">
              Your browser does not support the video tag.
            </video>
          </div>
        `);
      } else if (fileData.mimeType.startsWith('audio/')) {
        setPreviewContent(`
          <div class="flex justify-center items-center p-5">
            <audio controls class="w-full">
              <source src="${fileData.publicUrl}" type="${fileData.mimeType}">
              Your browser does not support the audio tag.
            </audio>
          </div>
        `);
      } else if (fileData.mimeType === 'application/pdf') {
        setPreviewContent(`
          <object
            data="${fileData.publicUrl}"
            type="application/pdf"
            class="w-full h-[80vh]"
          >
            <p>Unable to display PDF file.
            <a href="${fileData.publicUrl}" target="_blank" class="text-gray-500 hover:underline">
              Download
            </a> instead.</p>
          </object>
        `);
      } else if (fileData.mimeType.includes('text/') ||
        fileData.mimeType.includes('application/json') ||
        fileData.mimeType.includes('application/xml')) {
        const response = await fetch(fileData.publicUrl);
        if (!response.ok) throw new Error('Failed to fetch file content');
        const text = await response.text();
        setPreviewContent(`
          <pre class="whitespace-pre-wrap break-words p-4 bg-gray-50 rounded-md max-h-[80vh] overflow-auto">
            ${text.replace(/</g, '&lt;').replace(/>/g, '&gt;')}
          </pre>
        `);
      } else {
        throw new Error('Unsupported file type');
      }

      setPreviewDialogOpen(true);
    } catch (error) {
      console.error('Preview error:', error);
      setSnackbar({
        open: true,
        message: 'Failed to load preview',
        severity: 'error'
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleDownload = async () => {
    try {
      await fetch(`/api/files/${fileData.id}/download`, {
        method: 'POST',
      });

      const link = document.createElement('a');
      link.href = fileData.publicUrl;
      link.download = fileData.originalName;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);

      setSnackbar({
        open: true,
        message: 'Download started',
        severity: 'success'
      });
      handleMenuClose();
    } catch (error) {
      console.error('Download error:', error);
      setSnackbar({
        open: true,
        message: 'Failed to download file',
        severity: 'error'
      });
    }
  };

  const handleEditSubmit = async () => {
    if (!editedName.trim()) {
      setSnackbar({
        open: true,
        message: 'File name cannot be empty',
        severity: 'error'
      });
      return;
    }

    try {
      const response = await fetch(`/api/files/${fileData.id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ originalName: editedName }),
      });

      if (!response.ok) throw new Error('Edit failed');

      const updatedFile = await response.json();

      setFileData(updatedFile);
      onEdit(updatedFile);

      setEditDialogOpen(false);
      setSnackbar({
        open: true,
        message: 'File renamed successfully',
        severity: 'success'
      });
    } catch (error) {
      console.error('Edit error:', error);
      setSnackbar({
        open: true,
        message: 'Failed to rename file',
        severity: 'error'
      });
    }
  };

  const handleShare = async () => {
    try {
      if (!fileData.shareId) {
        const response = await fetch(`/api/files/${fileData.id}/share`, {
          method: 'POST',
        });

        if (!response.ok) throw new Error('Failed to generate share link');

        const updatedFile = await response.json();
        setFileData(updatedFile);
      }

      setShareDialogOpen(true);
    } catch (error) {
      setSnackbar({
        open: true,
        message: 'Failed to generate share link',
        severity: 'error'
      });
    }
    handleMenuClose();
  };

  const shareUrl = fileData.shareId
    ? `${window.location.origin}/share/${fileData.shareId}`
    : '';

  const copyShareLink = async () => {
    try {
      await navigator.clipboard.writeText(shareUrl);
      setSnackbar({
        open: true,
        message: 'Share link copied to clipboard',
        severity: 'success'
      });
    } catch (error) {
      setSnackbar({
        open: true,
        message: 'Failed to copy share link',
        severity: 'error'
      });
    }
  };

  return (
    <>
      <Card className="hover:shadow-lg transition-shadow duration-200 border border-gray-200">
        <div className="p-4 flex items-center justify-between">
          <div className="flex items-center gap-4 flex-grow min-w-0">
            {getFileIcon(fileData.mimeType)}
            <div className="flex-grow min-w-0">
              <Typography
                variant="subtitle1"
                className="font-medium truncate text-gray-800"
                title={fileData.originalName}
              >
                {fileData.originalName}
              </Typography>
              <Typography variant="body2" className="text-gray-600 flex gap-2 items-center">
                <span>{formatFileSize(fileData.size)}</span>
                <span>•</span>
                <span>
                  Uploaded {formatDistanceToNow(new Date(fileData.uploadDate), { addSuffix: true })}
                </span>
                <span>•</span>
                <span>{fileData.downloads} downloads</span>
              </Typography>
            </div>
          </div>

          <div className="flex">
            <IconButton
              onClick={handlePreview}
              disabled={isLoading}
              className="text-gray-600 hover:text-gray-800"
            >
              {isLoading ? <CircularProgress size={24} /> : <Visibility />}
            </IconButton>
            <IconButton
              onClick={handleMenuOpen}
              className="text-gray-600 hover:text-gray-800"
            >
              <MoreVert />
            </IconButton>
          </div>
        </div>
      </Card>

      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleMenuClose}
      >
        <MenuItem onClick={handleDownload} className="gap-2">
          <Download /> Download
        </MenuItem>
        <MenuItem onClick={handleShare} className="gap-2">
          <Share /> Share
        </MenuItem>
        <MenuItem
          onClick={() => {
            setEditedName(fileData.originalName);
            setEditDialogOpen(true);
            handleMenuClose();
          }}
          className="gap-2"
        >
          <Edit /> Edit
        </MenuItem>
      </Menu>

      <Dialog
        open={shareDialogOpen}
        onClose={() => setShareDialogOpen(false)}
        maxWidth="sm"
        fullWidth
      >
        <DialogTitle>Share File</DialogTitle>
        <DialogContent>
          <Typography variant="body2" className="mb-4">
            Share this link with others to give them access to the file:
          </Typography>
          <div className="flex gap-2">
            <TextField
              fullWidth
              value={shareUrl}
              variant="outlined"
              size="small"
              InputProps={{ readOnly: true }}
            />
            <IconButton
              onClick={copyShareLink}
              color="primary"
              className="hover:bg-gray-50"
            >
              <ContentCopy />
            </IconButton>
          </div>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setShareDialogOpen(false)}>
            Close
          </Button>
        </DialogActions>
      </Dialog>

      <Dialog
        open={previewDialogOpen}
        onClose={() => setPreviewDialogOpen(false)}
        maxWidth="lg"
        fullWidth
        PaperProps={{
          className: 'min-h-[60vh] max-h-[90vh]'
        }}
      >
        <DialogTitle>
          <div className="flex justify-between items-center">
            <Typography variant="h6" component="div">
              {fileData.originalName}
            </Typography>
            <IconButton
              onClick={handleDownload}
              size="small"
              title="Download"
              className="text-gray-600 hover:text-gray-800"
            >
              <Download />
            </IconButton>
          </div>
        </DialogTitle>
        <DialogContent>
          {isLoading ? (
            <div className="flex justify-center items-center h-[60vh]">
              <CircularProgress />
            </div>
          ) : (
            previewContent && (
              <div
                dangerouslySetInnerHTML={{ __html: previewContent }}
                className="bg-white rounded-lg"
              />
            )
          )}
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setPreviewDialogOpen(false)}>
            Close
          </Button>
        </DialogActions>
      </Dialog>

      <Dialog
        open={editDialogOpen}
        onClose={() => setEditDialogOpen(false)}
        maxWidth="sm"
        fullWidth
      >
        <DialogTitle>Edit File Name</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            label="File Name"
            fullWidth
            variant="outlined"
            value={editedName}
            onChange={(e) => setEditedName(e.target.value)}
            onKeyPress={(e) => {
              if (e.key === 'Enter') handleEditSubmit();
            }}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setEditDialogOpen(false)} color="secondary">
            Cancel
          </Button>
          <Button onClick={handleEditSubmit} color="primary">
            Save
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default ViewFile;