import React from 'react';
import DefaultApi from 'apis/restful';
import swal from 'sweetalert';
import joi from 'joi';
import DrawerLayout from 'modules/layouts/DrawerLayout';
import { useForm } from 'react-hook-form';
import { joiResolver } from '@hookform/resolvers/joi';
import UploadImage from 'modules/_partials/UploadImage';
import { formatJoiErorr } from 'system/format';
import 'react-quill/dist/quill.snow.css';
import dynamic from 'next/dynamic';
import { NoMediaRichText } from 'system/config/richtext';
import Select from 'react-select';
import Http from 'core/factory/fact.http';
import axios from 'axios';

const ReactQuill = dynamic(() => import('react-quill'), {
  ssr: false,
});

const fields = {
  title: joi.string().required(),
  subject: joi.string().required(),
  message: joi.string().required(),
};

const schema = joi.object(fields);

const SendEmail = ({ children }: { children: React.ReactNode }) => {
  const [loading, setLoading] = React.useState(false);
  const [toggle, setToggle] = React.useState(false);
  const {
    register,
    handleSubmit,
    setValue,
    reset,
    formState: { errors },
  } = useForm({
    resolver: joiResolver(schema),
  });

  const onSubmit = async (query: any) => {
    setLoading(true);
    const { data: res } = await axios.post(
      `/api/subscribers/send-emails`,
      query,
    );
    setLoading(false);

    if (res) {
      swal(
        'Sent',
        res.message || `Sent successfully`,
        'success',
      ).then(() => {
        reset();
        setToggle(false);
      });
    }

    if (res.error) {
      swal('Ooops!', res.error || 'Something went wrong');
    }
  };

  return (
    <DrawerLayout
      title={`Send Email to subscribers`}
      toggle={toggle}
      setToggle={setToggle}
    >
      {children}
      <div className="flex flex-col">
        <form
          onSubmit={event => {
            event.preventDefault();
            handleSubmit(onSubmit)(event);
          }}
          className="gap-y-3 flex flex-col"
        >
          <label className="flex flex-col">
            <span className="text-sm font-medium text-gray-900 dark:text-gray-300">
              Title
            </span>
            <input
              type="text"
              placeholder={'Title'}
              {...register('title')}
              className="mt-2 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            />
            {errors.title?.message && (
              <p className="mt-1 text-red-500">
                {formatJoiErorr(`${errors.title.message}`)}
              </p>
            )}
          </label>

          <label className="flex flex-col">
            <span className="text-sm font-medium text-gray-900 dark:text-gray-300">
              Subject
            </span>
            <input
              type="text"
              placeholder={'Subject'}
              {...register('subject')}
              className="mt-2 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            />
            {errors.subject?.message && (
              <p className="mt-1 text-red-500">
                {formatJoiErorr(`${errors.subject.message}`)}
              </p>
            )}
          </label>

          <div className="flex flex-col">
            <p className="mt-3 w-full font-medium">Text</p>
            <ReactQuill
              theme="snow"
              modules={NoMediaRichText.modules}
              formats={NoMediaRichText.formats}
              onChange={newValue => {
                setValue('message', newValue, {
                  shouldDirty: true,
                  shouldValidate: true,
                });
              }}
            />
            {errors.message?.message && (
              <p className="mt-1 text-red-500">
                {formatJoiErorr(`${errors.message?.message}`)}
              </p>
            )}
          </div>

          <div className="flex items-center space-x-3 justify-between md:col-span-2">
            <button
              type="submit"
              disabled={loading}
              className="font-semibold disabled:cursor-not-allowed disabled:bg-slate-400 mt-12 text-white bg-brand-green/80 hover:bg-brand-green focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg text-sm w-full sm:w-auto px-12 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Send
            </button>
          </div>
        </form>
      </div>
    </DrawerLayout>
  );
};

export default SendEmail;
