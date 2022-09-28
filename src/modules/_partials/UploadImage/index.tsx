import React from 'react';
import { CloudUpload, Delete } from '@mui/icons-material';
import ImagePreview from '../ImagePreview';

const KILO_BYTES_PER_BYTE = 1000;
const DEFAULT_MAX_FILE_SIZE_IN_BYTES = 5000000;

const convertNestedObjectToArray = (nestedObj: any) => {
  return Object.keys(nestedObj).map(key => nestedObj[key]);
};

const convertBytesToKB = (bytes: number) =>
  Math.round(bytes / KILO_BYTES_PER_BYTE);

const UploadImage = ({
  updateFilesCb,
  maxFileSizeInBytes = DEFAULT_MAX_FILE_SIZE_IN_BYTES,
  multiple = false,
}: {
  updateFilesCb: Function;
  maxFileSizeInBytes?: number;
  multiple: boolean
}) => {
  const [dragActive, setDragActive] = React.useState(false);
  const [files, setFiles] = React.useState<any>({});
  const fileInputField = React.useRef(null);

  const addNewFiles = (newFiles: any) => {
    const size = newFiles.length;
    for (const file of newFiles) {
      if (file.size < maxFileSizeInBytes) {
        files[file.name] = file;
      }
    }
    return { ...files };
  };

  const callUpdateFilesCb = (theFiles: object) => {
    const filesAsArray = convertNestedObjectToArray(theFiles);
    updateFilesCb(filesAsArray);
  };

  const handleNewUploadImage = (event: any) => {
    const { files: newFiles } = event.target;
    if (newFiles.length) {
      const updatedFiles = addNewFiles(newFiles);
      setFiles(updatedFiles);
      callUpdateFilesCb(updatedFiles);
    }
  };

  const handleDrag = (event: any) => {
    event.preventDefault();
    event.stopPropagation();
    if (event.type === 'dragenter' || event.type === 'dragover') {
      setDragActive(true);
    } else if (event.type === 'dragleave') {
      setDragActive(false);
    }
  };
  const dropHandler = (event: any) => {
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

  const removeFile = (fileName: string) => {
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
      <label
        className={`cursor-pointer flex items-center space-x-3 w-full border-2 border-dashed border-gray-600 rounded-lg px-4 py-6 md:py-10 ${
          dragActive
            ? 'border-brand-green'
            : 'peer-active:border-brand-green'
        }`}
      >
        <CloudUpload className="text-brand-green" fontSize="large" />
        <p className="flex flex-col">
          Drag &#38; Drop images here or click to select file(s)
        </p>
        <input
          ref={fileInputField}
          type="file"
          multiple={multiple}
          accept=".jpg,.png,.jpeg"
          onChange={handleNewUploadImage}
          className="hidden"
        />
      </label>
      <div className="mt-1 inline-grid md:grid-cols-2 gap-3 w-full">
        {Object.keys(files).map((fileName, index) => {
          const file: any = files[fileName];
          const isImageFile = file.type.split('/')[0] === 'image';
          return (
            <div key={fileName} className="flex flex-col">
              {isImageFile && (
                <ImagePreview
                  src={URL.createObjectURL(file)}
                  title={fileName}
                >
                  <div className="py-1 bg-cyan-200/50 px-3 rounded-lg flex items-center w-full space-x-2 justify-between">
                    <p className="text-xs text-cyan-500">
                      {fileName}{' '}
                      <span className="text-red-500 pl-3">
                        {convertBytesToKB(file.size)} kb
                      </span>
                    </p>
                    <Delete
                      className="text-brand-red cursor-pointer text-red-500"
                      onClick={() => removeFile(fileName)}
                    />
                  </div>
                </ImagePreview>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default UploadImage;
