import React from 'react';
import Drawer from '@mui/material/Drawer';
import FormBottomActions from 'modules/_partials/FormBottomActions';
import FormTopHeader from 'modules/_partials/FormTopHeader';
import 'react-quill/dist/quill.snow.css';
import FileUploader from 'modules/activities/FileUploader';
import Image from 'next/image';
import { Delete } from '@mui/icons-material';
import dynamic from 'next/dynamic';
import DefaultApi from 'apis/restful';
import Constants from 'apis/utils/constants';
import swal from 'sweetalert';
import axios from 'axios';
import data from 'apis/utils/static/data';
const ReactQuill = dynamic(() => import('react-quill'), {
  ssr: false,
});

const EditBlog = ({
  onAdd,
  item,
}: {
  onAdd: (item: any) => void;
  item: any;
}) => {
  const [title, setTitle] = React.useState<string>(item?.title);
  const [toggle, setToggle] = React.useState(false);
  const [image, setImage] = React.useState<any>(`${item?.image}`);
  const [convertedText, setConvertedText] = React.useState<string>(
    `${item?.text}`,
  );
  const toggleDrawer = (open: boolean) => (event: any) => {
    if (
      event.type === 'keydown' &&
      ((event as React.KeyboardEvent).key === 'Tab' ||
        (event as React.KeyboardEvent).key === 'Shift')
    ) {
      return;
    }

    setToggle(open);
  };

  const handleKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === 'Escape') {
      setToggle(false);
    }
  };

  const modules = {
    toolbar: [
      [{ header: [1, 2, false] }],
      ['bold', 'italic', 'underline', 'strike', 'blockquote'],
      [
        { list: 'ordered' },
        { list: 'bullet' },
        { indent: '-1' },
        { indent: '+1' },
      ],
      ['link', 'image'],
      ['clean'],
    ],
  };

  const formats = [
    'header',
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
  ];

  const onSubmit = async () => {
    const { data: response} =
      await axios.post(
        `${Constants.Endpoints.BLOG_ENDPOINT}/${item?.id}`,
        {
          title: title,
          text: convertedText,
          image,
        },
      );

    if (response.reason) {
      swal(
        'Ooops!',
        response.reason || 'Something went wrong',
        'error',
      );
    }

    if (response) {
      setImage('');
      setConvertedText('');
      if (response.article) {
        onAdd(response.article);
      }
      setToggle(false);
    }
  };

  return (
    <>
      <button
        type="button"
        onClick={() => setToggle(true)}
        className="py-3 px-12 rounded-lg bg-dark-green text-white font-semibold"
      >
        New Blog
      </button>
      <Drawer
        anchor="right"
        open={toggle}
        onClose={toggleDrawer(false)}
      >
        <form
          onSubmit={event => {
            event.preventDefault();
            onSubmit();
          }}
          className="w-screen sm:w-[70vw] xl:w-[50vw] flex py-3 px-4 md:px-8 flex-col items-center min-h-screen overflow-y-auto"
        >
          <FormTopHeader
            keyDown={handleKeyDown}
            onToggle={toggleDrawer(false)}
            label="blog"
          />

          <label className="flex relative w-full">
            <input
              className="peer pt-6 pb-2 focus:border-brand-green focus:pt-6 focus:pb-2 placeholder-shown:py-4 w-full placeholder-transparent focus:outline-none bg-gray-202 outline-none rounded-lg border border-gray-201 px-3"
              placeholder={'Title'}
              value={item?.title}
              onChange={event => {
                setTitle(event.target.value);
              }}
            />
            <span className="text-gray-800 peer-focus:text-brand-green pt-2 px-3 text-xs peer-focus:pt-2 peer-focus:text-xs  transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-600 peer-placeholder-shown:pt-4 absolute">
              Title
            </span>
          </label>

          <div className="flex flex-col mt-3 w-full">
            <p className="mb-2">Image</p>
            {!image ? (
              <FileUploader onUpload={path => setImage(path)} />
            ) : (
              <div className="flex items-start flex-wrap gap-2">
                <Image
                  src={image}
                  alt=""
                  width="320"
                  height="218"
                  objectFit="cover"
                  layout="fixed"
                />
                <button
                  onClick={() => {
                    setImage('');
                  }}
                  className="py-1 px-4 flex items-center gap-1 rounded bg-red-500/70 text-white"
                >
                  <Delete fontSize="small" />
                  <span>Remove</span>
                </button>
              </div>
            )}
          </div>

          <p className="mt-3 w-full font-medium">Blog</p>
          <ReactQuill
            theme="snow"
            modules={modules}
            formats={formats}
            value={convertedText}
            onChange={setConvertedText}
            style={{ minHeight: '300px' }}
            className="w-full h-fit overflow-y-auto"
          />
          <div className="bg-white py-4 z-20 w-full">
            <FormBottomActions onCancel={toggleDrawer(false)} />
          </div>
        </form>
      </Drawer>
    </>
  );
};

export default EditBlog;
