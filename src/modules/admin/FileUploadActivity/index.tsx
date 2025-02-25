import React from 'react';
import { Add, Search, CloudUpload } from '@mui/icons-material';
import { useOpenFetcher } from 'apis/utils/fetch';
import AddFile from 'modules/admin/_Partials/ManageFile/AddFile';
import ViewFile from 'modules/admin/_Partials/ManageFile/ViewFile';

const FileUploadActivity: React.FC = () => {
  const [files, setFiles] = React.useState<any[]>([]);
  const [filterValue, setFilterValue] = React.useState('');
  const { data, error } = useOpenFetcher('/api/files');

  React.useEffect(() => {
    if (data?.rows) {
      const filteredFiles = data.rows.filter((file: any) =>
        file.originalName
          .toLowerCase()
          .includes(filterValue.toLowerCase()),
      );
      setFiles(filteredFiles);
    }
  }, [data, filterValue]);

  const handleAddFile = (file: any) => {
    setFiles(prev => [...prev, file]);
  };

  const handleEditFile = (file: any) => {
    setFiles(prev =>
      prev.map(item => (item.id === file.id ? file : item)),
    );
  };

  const handleDeleteFile = (id: string) => {
    setFiles(prev => prev.filter(item => item.id !== id));
  };

  if (error) {
    return <p>Error: {error.message}</p>;
  }

  return (
    <div className="px-4 md:pl-6 bg-white py-4 flex flex-col flex-grow items-center md:px-8 w-full">
      <div className="space-x-6 md:space-x-12 bg-white flex justify-between w-full">
        <div className="group flex-grow flex items-center relative">
          <Search className="left-2 absolute text-slate-400" />
          <input
            value={filterValue}
            onChange={event => setFilterValue(event.target.value)}
            className="peer focus:ring-2 focus:ring-green-500 focus:outline-none appearance-none w-full text-sm leading-6 text-slate-900 placeholder-slate-400 rounded-md py-2 pl-10 ring-1 ring-slate-200 shadow-sm"
            type="text"
            placeholder="Filter files..."
          />
        </div>
        <AddFile onAdd={handleAddFile}>
          <button className="hover:bg-brand-green group flex items-center rounded-md bg-brand-green/80 text-white text-sm font-medium px-8 py-2 shadow-sm">
            <Add />
            <span>New</span>
          </button>
        </AddFile>
      </div>
      <ul className="w-full py-4 md:py-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 text-sm leading-6">
        {files.map(file => (
          <ViewFile
            key={file.id}
            data={file}
            onEdit={handleEditFile}
            onDelete={handleDeleteFile}
          />
        ))}
        <AddFile onAdd={handleAddFile}>
          <li className="flex">
            <button className="hover:border-green-500 hover:border-solid hover:bg-white hover:text-green-500 group w-full flex flex-col items-center justify-center rounded-md border-2 border-dashed border-slate-300 text-sm leading-6 text-slate-900 font-medium p-3">
              <CloudUpload className="group-hover:text-green-500 mb-1 text-slate-400" />
              Upload File
            </button>
          </li>
        </AddFile>
      </ul>
    </div>
  );
};

export default FileUploadActivity;
