import React, { useEffect } from 'react';

type parameter = {
  isOneImage:boolean;
  errorMessage: string;
  setErrorMessage:Function;
  unsupportedFiles:any[];
  setUnsupportedFiles: Function;
  validFiles: any[];
  fileInputRef:React.Ref<any>;
  setValidFiles:Function;
  modalImageRef:React.Ref<any>;
  modalRef:React.Ref<any>;
  progressRef:React.Ref<any>;
  uploadRef:React.Ref<any>;
  uploadModalRef:React.Ref<any>;
  selectedFiles:any[];
  setSelectedFiles:Function;
  imageUrl?: string;
}
const Dropzone = ({imageUrl, isOneImage,validFiles, setValidFiles,fileInputRef,modalImageRef, modalRef,progressRef,uploadRef,uploadModalRef,selectedFiles, setSelectedFiles,unsupportedFiles, setUnsupportedFiles,errorMessage, setErrorMessage}: parameter) => {

    useEffect(() => {
        let filteredArr = selectedFiles.reduce((acc, current) => {
            const x = acc.find((item: { name: any; }) => item.name === current.name);
            if (!x) {
                return acc.concat([current]);
            } else {
                return acc;
            }
        }, []);
        setValidFiles([...filteredArr]);

    }, [selectedFiles]);

    const preventDefault = (e: { preventDefault: () => void; }) => {
        e.preventDefault();
        // e.stopPropagation();
    }

    const dragOver = (e: { preventDefault: () => void; }) => {
        preventDefault(e);
    }

    const dragEnter = (e: { preventDefault: () => void; }) => {
        preventDefault(e);
    }

    const dragLeave = (e: { preventDefault: () => void; }) => {
        preventDefault(e);
    }

    const fileDrop = (e: { dataTransfer?: any; preventDefault: () => void; }) => {
        preventDefault(e);
        const files = e.dataTransfer.files;
        if (files.length) {
            handleFiles(files);
        }
    }

    const filesSelected = () => {
        // @ts-ignore
        if (fileInputRef.current.files.length) {
            // @ts-ignore
            handleFiles(fileInputRef.current.files);
        }
    }

    const fileInputClicked = () => {
        // @ts-ignore
        fileInputRef.current.click();
    }

    const handleFiles = (files: string | any[]) => {
        for(let i = 0; i < files.length; i++) {
            if (validateFile(files[i])) {
              if(isOneImage){
                setSelectedFiles([ files[i]]);
              }else{
                setSelectedFiles((prevArray: any) => [...prevArray, files[i]]);
              }
            } else {
              files[i]['invalid'] = true;
              if(isOneImage){
                setSelectedFiles([files[i]]);
                setErrorMessage('File type not permitted');
                setUnsupportedFiles([files[i]]);
              }else {
                setSelectedFiles((prevArray: any) => [...prevArray, files[i]]);
                setErrorMessage('File type not permitted');
                setUnsupportedFiles((prevArray: any) => [...prevArray, files[i]]);
              }

            }
        }
    }

    const validateFile = (file: { type: string; }) => {
        const validTypes = ['image/jpeg', 'image/jpg', 'image/png', 'image/gif', 'image/x-icon'];
        if (validTypes.indexOf(file.type) === -1) {
            return false;
        }

        return true;
    }

    const fileSize = (size: number) => {
        if (size === 0) {
            return '0 Bytes';
        }
        const k = 1024;
        const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB'];
        const i = Math.floor(Math.log(size) / Math.log(k));
        return parseFloat((size / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
    }

    const fileType = (fileName: string) => {
        return fileName.substring(fileName.lastIndexOf('.') + 1, fileName.length) || fileName;
    }

    const removeFile = (name: any) => {
        const index = validFiles.findIndex(e => e.name === name);
        const index2 = selectedFiles.findIndex(e => e.name === name);
        const index3 = unsupportedFiles.findIndex(e => e.name === name);
        validFiles.splice(index, 1);
        selectedFiles.splice(index2, 1);
        setValidFiles([...validFiles]);
        setSelectedFiles([...selectedFiles]);
        if (index3 !== -1) {
            unsupportedFiles.splice(index3, 1);
            setUnsupportedFiles([...unsupportedFiles]);
        }
    }

    const openImageModal = (file: Blob) => {
        const reader = new FileReader();
        // @ts-ignore
        modalRef.current.style.display = "block";
        reader.readAsDataURL(file);
        reader.onload = function(e) {
            // @ts-ignore
            modalImageRef.current.style.backgroundImage = `url(${e.target.result})`;
        }

    }

    const closeModal = () => {
        // @ts-ignore
        modalRef.current.style.display = "none";
        // @ts-ignore
        modalImageRef.current.style.backgroundImage = 'none';
    }
    const closeUploadModal = () => {
        // @ts-ignore
        uploadModalRef.current.style.display = 'none';
    }


    return (
        <div className="content">
            <div className="containers">
                {unsupportedFiles.length ? <p>Please remove all unsupported files.<br/> <br/> </p>   : ''}
                <div className="drop-container"
                     onDragOver={dragOver}
                     onDragEnter={dragEnter}
                     onDragLeave={dragLeave}
                     onDrop={fileDrop}
                     onClick={fileInputClicked}
                >
                    <div className="drop-message">
                        <div className="upload-icon"></div>
                        Drag & Drop files here or click to select file(s)
                    </div>
                    <input
                        ref={fileInputRef}
                        className="file-input"
                        type="file"
                        onChange={filesSelected}
                        accept="image/*"
                    />
                </div>
                <div className="file-display-container">
                    {
                        validFiles.map((data, i) =>
                            <div className="file-status-bar" key={i}>
                                <div onClick={!data.invalid ? () => openImageModal(data) : () => removeFile(data.name)}>
                                    <div className="file-type-logo"></div>
                                    <div className="file-type">{fileType(data.name)}</div>
                                    <span className={`file-name ${data.invalid ? 'file-error' : ''}`}>{data.name}</span>
                                    <span className="file-size">({fileSize(data.size)})</span> {data.invalid && <span className='file-error-message'>({errorMessage})</span>}
                                </div>
                                <div className="file-remove" onClick={() => removeFile(data.name)}>X</div>
                            </div>
                        )
                    }
                </div>
            </div>
            <div className="modal" ref={modalRef}>
                <div className="overlay"></div>
                <span className="close" onClick={(() => closeModal())}>X</span>
                <div className="modal-image" ref={modalImageRef}></div>
            </div>

            <div className="upload-modal" ref={uploadModalRef}>
                <div className="overlay"></div>
                <div className="close" onClick={(() => closeUploadModal())}>X</div>
                <div className="progress-container">
                    <span ref={uploadRef}></span>
                    <div className="progress">
                        <div className="progress-bar" ref={progressRef}></div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Dropzone;
