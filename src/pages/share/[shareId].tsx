import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import ViewFile from 'modules/admin/_Partials/ManageFile/ViewFile';

const SharedFilePage: React.FC = () => {
  const router = useRouter();
  const { shareId } = router.query;
  const [file, setFile] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    if (!shareId) return;

    const fetchSharedFile = async () => {
      try {
        const response = await fetch(`/api/files/share/${shareId}`);
        if (!response.ok) throw new Error('File not found');
        const data = await response.json();
        setFile(data);
      } catch (error) {
        setError('Failed to load shared file');
      } finally {
        setLoading(false);
      }
    };

    fetchSharedFile();
  }, [shareId]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;
  if (!file) return <div>File not found</div>;

  return (
    <div className="p-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-2xl font-bold mb-4">Shared File</h1>
        <ViewFile
          data={file}
          onEdit={() => {}}
          onDelete={() => {}}
        />
      </div>
    </div>
  );
};

export default SharedFilePage;
