import React, { useEffect, useRef, useState } from 'react';
import Dropzone from 'modules/_partials/ImageUpload';
import DefaultApi from 'apis/restful';
import swal from 'sweetalert';
import DrawerLayout from 'modules/layouts/DrawerLayout';
import 'react-quill/dist/quill.snow.css';
import dynamic from 'next/dynamic';
import { useOpenFetcher } from 'apis/utils/fetcher';
import axios from 'axios';

const QuillNoSSRWrapper = dynamic(import('react-quill'), {
  ssr: false,
  loading: () => <p>Loading ...</p>,
});

const AddBlog = ({
  isEdit = false,
  id,
  imageUrl,
  handleBlog,
  children,
}: {
  email?: string;
  phone?: string;
  title?: string;
  isEdit?: boolean;
  id?: number;
  imageUrl?: string;
  handleBlog: (item: any, isEdit: boolean) => void;
  children: any;
}) => {
  const [imageError, setImageError] = React.useState('');
  const [errors, setErrors] = React.useState<any>({});
  const [toggle, setToggle] = React.useState(false);
  const [convertedText, setConvertedText] = React.useState('');
  const [validFiles, setValidFiles] = useState([]);
  const fileInputRef = useRef();
  const modalImageRef = useRef();
  const modalRef = useRef();
  const progressRef = useRef();
  const uploadRef = useRef();
  const uploadModalRef = useRef();
  const [selectedFiles, setSelectedFiles] = useState<any[]>([]);
  const [unsupportedFiles, setUnsupportedFiles] = useState([]);
  const [titleValue, setTitleValue] = useState('');

  const { data: dataArticle } = useOpenFetcher(`/api/blogs?id=${id}`);

  useEffect(() => {
    const article = dataArticle?.dataArticle;
    if (article && isEdit) {
      setTitleValue(article.title);
      setConvertedText(article.text);
    }
  }, [dataArticle?.dataArticle, isEdit]);

  const handleSubmit = async () => {
    const formData = new FormData();
    formData.append('media', selectedFiles[0]);

    const { data: imageData,} =
      await axios.post('/api/uploads', formData);

    if (imageData.error) {
      swal('Ooops!', imageData.error || 'Something went wrong');
      return;
    }
    const endpoint = !isEdit ? '/api/blogs' : `/api/blogs?id=${id}`;
    const payload = {
      title: titleValue,
      image: imageData.url,
    };
    const { data } = await (!isEdit
      ? axios.post(endpoint, payload)
      : axios.patch(endpoint, payload));

    if (data) {
      swal(
        isEdit ? 'Edited' : 'Added!',
        data.message || 'Action is successfully',
        'success',
      ).then(() => {
        setSelectedFiles([]);
        setTitleValue('');
        handleBlog(data.partner, isEdit);
        setToggle(false);
      });
    }

    if (data.error) {
      swal('Ooops!', data.error || 'Something went wrong');
    }
  };

  const modules = {
    toolbar: [
      [{ header: '1' }, { header: '2' }, { font: [] }],
      [{ size: [] }],
      ['bold', 'italic', 'underline', 'strike', 'blockquote'],
      [
        { list: 'ordered' },
        { list: 'bullet' },
        { indent: '-1' },
        { indent: '+1' },
      ],
      ['link', 'image', 'video'],
      ['clean'],
    ],
    clipboard: {
      matchVisual: false,
    },
  };
  const formats = [
    'header',
    'font',
    'size',
    'bold',
    'italic',
    'underline',
    'strike',
    'blockquote',
    'list',
    'bullet',
    'indent',
    'link',
    'image',
    'video',
  ];

  return (
    <DrawerLayout
      title={`${isEdit ? 'Edit' : 'New'} Article`}
      toggle={toggle}
      setToggle={setToggle}
    >
      {children}
      <div className="flex flex-col">
        <form
          onSubmit={event => {
            event.preventDefault();
            handleSubmit();
          }}
        >
          <label className="flex flex-col">
            <span className="text-sm font-medium text-gray-900 dark:text-gray-300">
              Title
            </span>
            <input
              type="text"
              id="title"
              placeholder={'Title'}
              value={titleValue}
              onChange={event => setTitleValue(event.target.value)}
              className="mt-2 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            />
            {errors.title ? (
              <p className="mt-1 text-red-500">{errors.title}</p>
            ) : null}
          </label>
          <div className="mt-6 flex flex-col">
            <span className="text-sm mb-2 font-medium text-gray-900 dark:text-gray-300">
              Image
            </span>
            <Dropzone
              unsupportedFiles={unsupportedFiles}
              setUnsupportedFiles={setUnsupportedFiles}
              selectedFiles={selectedFiles}
              setSelectedFiles={setSelectedFiles}
              uploadModalRef={uploadModalRef}
              uploadRef={uploadRef}
              progressRef={progressRef}
              modalRef={modalRef}
              modalImageRef={modalImageRef}
              fileInputRef={fileInputRef}
              validFiles={validFiles}
              setValidFiles={setValidFiles}
              isOneImage={true}
              imageUrl={imageUrl}
              errorMessage={imageError}
              setErrorMessage={setImageError}
            />
            {errors.image ? (
              <p className="mt-1 text-red-500">{errors.image}</p>
            ) : null}
          </div>

          <div className="flex mt-6 flex-col">
            <p className="mt-3 w-full font-medium">Article</p>
            <QuillNoSSRWrapper
              modules={modules}
              formats={formats}
              theme="snow"
              value={convertedText}
              onChange={setConvertedText}
              className="flex flex-col border rounded border-gray-300"
            />
            {errors.text ? (
              <p className="mt-1 text-red-500">{errors.text}</p>
            ) : null}
          </div>

          <button
            type="submit"
            className="mt-12 text-white bg-brand-green/80 hover:bg-brand-green focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Submit
          </button>
        </form>
      </div>
    </DrawerLayout>
  );
};

export default AddBlog;
