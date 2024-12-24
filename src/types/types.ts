export interface FileRecord {
  id: string;
  filename: string;
  originalName: string;
  mimeType: string;
  size: number;
  publicUrl: string;
  uploadDate: string;
  downloads: number;
}
export interface Banner {
  id: number;
  title: string;
  url: string;
  section: 'about' | 'services' | 'products';
  path: string;
  image: string;
  is_active?: boolean;
  created_at?: Date;
  updated_at?: Date;
}
