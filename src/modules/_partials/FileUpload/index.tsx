import React from 'react';
import { CloudUpload, Delete } from '@mui/icons-material';
import { LinearProgress } from '@mui/material';
import Image from 'next/image';

const KILO_BYTES_PER_BYTE = 1000;
const DEFAULT_MAX_FILE_SIZE_IN_BYTES = 500000;

const convertNestedObjectToArray = nestedObj => {
  return Object.keys(nestedObj).map(key => nestedObj[key]);
};

const convertBytesToKB = (bytes: number) =>
  Math.round(bytes / KILO_BYTES_PER_BYTE);

const FileUpload = ({
  id = 'images',
  updateFilesCb,
  maxFileSizeInBytes = DEFAULT_MAX_FILE_SIZE_IN_BYTES,
}) => {
  const [progress, setProgress] = React.useState(0);
  const [dragActive, setDragActive] = React.useState(false);
  const [files, setFiles] = React.useState({});
  const fileInputField = React.useRef(null);

  const addNewFiles = newFiles => {
    const size = newFiles.length;
    for (const file of newFiles) {
      if (file.size < maxFileSizeInBytes) {
        files[file.name] = file;
        setProgress(100 / size);
      }
    }
    return { ...files };
  };

  const callUpdateFilesCb = (theFiles: object) => {
    const filesAsArray = convertNestedObjectToArray(theFiles);
    updateFilesCb(filesAsArray);
  };

  const handleNewFileUpload = e => {
    const { files: newFiles } = e.target;
    if (newFiles.length) {
      const updatedFiles = addNewFiles(newFiles);
      setFiles(updatedFiles);
      callUpdateFilesCb(updatedFiles);
    }
  };

  const handleDrag = event => {
    event.preventDefault();
    event.stopPropagation();
    if (event.type === 'dragenter' || event.type === 'dragover') {
      setDragActive(true);
    } else if (event.type === 'dragleave') {
      setDragActive(false);
    }
  };
  const dropHandler = event => {
    event.preventDefault();
    event.stopPropagation();
    const { files } = event.dataTransfer;
    console.log(event);
    if (files && files.length) {
      const updatedFiles = addNewFiles(files);
      setFiles(updatedFiles);
      callUpdateFilesCb(updatedFiles);
    }
  };

  const removeFile = fileName => {
    delete files[fileName];
    setFiles({ ...files });
    callUpdateFilesCb({ ...files });
  };

  return (
    <div
      onDragOver={handleDrag}
      onDrop={dropHandler}
      onDragEnter={handleDrag}
      onDragLeave={handleDrag}
      className="flex flex-col w-full"
    >
      <input
        ref={fileInputField}
        id={id}
        type="file"
        multiple
        accept=".jpg,.png,.jpeg"
        onChange={handleNewFileUpload}
        className="hidden peer absolute"
      />
      <label
        htmlFor={id}
        className={`cursor-pointer flex items-center space-x-3 w-full border border-[#D5D6D7] rounded-lg px-4 py-2 ${
          dragActive
            ? 'border-brand-green'
            : 'peer-active:border-brand-green'
        }`}
      >
        <CloudUpload className="text-brand-green" fontSize="large" />
        <p className="flex flex-col">
          <span>
            {!dragActive
              ? 'Upload your image'
              : 'Drop you files here'}
          </span>
          <span className="text-gray-400 text-sm mt-1 hidden md:block">
            (Only *.jpeg and *.png images will be accepted)
          </span>
        </p>
      </label>
      <div className="flex flex-col mt-0.5 text-brand-green bg-brand-green">
        {progress > 0 && Object.keys(files).length > 0 ? (
          <LinearProgress
            variant="determinate"
            color="inherit"
            value={progress}
          />
        ) : null}
      </div>
      <div className="mt-1 inline-grid grid-cols-2 md:grid-cols-4 gap-3 w-full">
        {Object.keys(files).map((fileName, index) => {
          const file = files[fileName];
          const isImageFile = file.type.split('/')[0] === 'image';
          return (
            <div key={fileName} className="relative flex flex-col">
              {isImageFile && (
                <Image
                  src={URL.createObjectURL(file)}
                  alt={`file preview ${index}`}
                  width="128px"
                  height="96px"
                  objectFit='cover'
                  className="w-32 h-24 object-cover rounded-sm"
                />
              )}
              <div className="p-1 bg-black bg-opacity-25 rounded-t-lg flex items-center left-0 bottom-0 absolute w-full space-x-2 justify-between">
                <p className="text-xs text-white">
                  {convertBytesToKB(file.size)} kb
                </p>
                <Delete
                  fontSize="small"
                  className="text-brand-red cursor-pointer"
                  onClick={() => removeFile(fileName)}
                />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default FileUpload;

