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
import RichText from 'system/config/richtext';
import Select from 'react-select';
import { useProtectedFetcher } from 'apis/utils/fetcher';

const ReactQuill = dynamic(() => import('react-quill'), {
  ssr: false,
});

const schema = joi.object({
  title: joi.string().required(),
  image: joi.object().required(),
  text: joi.string().required(),
  category: joi.number().required(),
  author_id: joi.number().required(),
});

const AddItem = ({
  handleAdd,
  children,
}: {
  handleAdd: (item: any) => void;
  children: any;
}) => {
  const [loading, setLoading] = React.useState(false);
  const [toggle, setToggle] = React.useState(false);
  const {
    data: { data: categories },
  } = useProtectedFetcher('/api/categories');
  const {
    data: { data: authors },
  } = useProtectedFetcher('/api/users');
  const {
    register,
    handleSubmit,
    setValue,
    getValues,
    reset,
    formState: { errors },
  } = useForm({
    resolver: joiResolver(schema),
  });

  const onSubmit = async (query: any) => {
    setLoading(true);
    const formData = new FormData();
    Object.keys(query).forEach(key => {
      formData.append(key === 'image' ? 'media' : key, query[key]);
    });
    const { data, error } = await DefaultApi.PostRoute.postRoute(
      '/api/articles',
      formData,
    );
    setLoading(false);

    if (data) {
      swal(
        'Added!',
        data.message || 'Added successfully',
        'success',
      ).then(() => {
        reset();
        setToggle(false);
        handleAdd(data.data);
      });
    }

    if (error) {
      swal('Ooops!', error.message || 'Something went wrong');
    }
  };

  const categoryOptions = categories?.rows?.map((element: any) => ({
    value: element.id,
    label: element.name,
  }));

  const authorOptions = authors?.rows?.map((element: any) => ({
    value: element.id,
    label: `${element.firstname} ${element.lastname}`,
  }));

  return (
    <DrawerLayout
      title={`New Article`}
      toggle={toggle}
      setToggle={setToggle}
    >
      {children}
      <div className="flex flex-col">
        <form
          onSubmit={event => {
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
              Category
            </span>
            <Select
              isMulti={false}
              {...register('category')}
              options={categoryOptions}
              onChange={(newValue: any) => {
                setValue('category', newValue.value, {
                  shouldDirty: true,
                  shouldValidate: true,
                });
              }}
              className="mt-2"
            />
            {errors.category?.message && (
              <p className="mt-1 text-red-500">
                {formatJoiErorr(`${errors.category.message}`)}
              </p>
            )}
          </label>
          <label className="flex flex-col">
            <span className="text-sm font-medium text-gray-900 dark:text-gray-300">
              Author
            </span>
            <Select
              isMulti={false}
              {...register('author_id')}
              options={authorOptions}
              onChange={(newValue: any) => {
                setValue('author_id', newValue.value, {
                  shouldDirty: true,
                  shouldValidate: true,
                });
              }}
              className="mt-2"
            />
            {errors.author_id?.message && (
              <p className="mt-1 text-red-500">
                {formatJoiErorr(`${errors.author_id.message}`)}
              </p>
            )}
          </label>
          <div className="flex flex-col">
            <span className="text-sm mb-2 font-medium text-gray-900 dark:text-gray-300">
              Image
            </span>
            <UploadImage
              updateFilesCb={(files: any[]) => {
                setValue('image', files[0], {
                  shouldDirty: true,
                  shouldValidate: true,
                });
              }}
              multiple={false}
            />
            {errors.image?.message && (
              <p className="mt-1 text-red-500">
                {formatJoiErorr(`${errors.image?.message}`)}
              </p>
            )}
          </div>

          <div className="flex flex-col">
            <p className="mt-3 w-full font-medium">Text</p>
            <ReactQuill
              theme="snow"
              modules={RichText.modules}
              formats={RichText.formats}
              onChange={newValue => {
                setValue('text', newValue, {
                  shouldDirty: true,
                  shouldValidate: true,
                });
              }}
            />
            {errors.text?.message && (
              <p className="mt-1 text-red-500">
                {formatJoiErorr(`${errors.text?.message}`)}
              </p>
            )}
          </div>

          <button
            type="submit"
            disabled={loading}
            className="md:col-span-2 disabled:cursor-not-allowed disabled:bg-slate-400 mt-12 text-white bg-brand-green/80 hover:bg-brand-green focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-8 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Submit
          </button>
        </form>
      </div>
    </DrawerLayout>
  );
};

export default AddItem;
