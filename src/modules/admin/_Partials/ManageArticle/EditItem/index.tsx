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
});

const EditItem = ({
  handleEdit,
  dataValues,
  handleDelete,
  children,
}: {
  handleEdit: (item: any) => void;
  handleDelete: (id: any) => void;
  children: any;
  dataValues: any;
}) => {
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
    const formData = new FormData();
    Object.keys(query).forEach(key => {
      formData.append(key === 'image' ? 'media' : key, query[key]);
    });
    setLoading(true);
    const { data, error } = await DefaultApi.PatchRoute.patchRoute(
      `/api/articles/${dataValues.id}`,
      formData,
    );
    setLoading(false);

    if (data) {
      swal(
        'Edited!',
        data.message || 'Edited successfully',
        'success',
      ).then(() => {
        reset();
        setToggle(false);
        handleEdit(data.data);
      });
    }

    if (error) {
      swal('Ooops!', error.message || 'Something went wrong');
    }
  };

  const onDelete = async () => {
    const willDelete = await swal({
      title: 'Are you sure?',
      text: 'Are you sure that you want to delete this article?',
      icon: 'warning',
      dangerMode: true,
    });

    if (!willDelete) {
      return;
    }
    setLoading(true);
    const { data, error } = await DefaultApi.DeleteRoute.deleteRoute(
      `/api/articles/${dataValues.id}`,
    );
    setLoading(false);

    if (data) {
      swal(
        'Deleted!',
        data.message || 'Deleted successfully',
        'success',
      ).then(() => {
        reset();
        setToggle(false);
        handleDelete(dataValues.id);
      });
    }

    if (error) {
      swal('Ooops!', error.message || 'Something went wrong');
    }
  };

  React.useEffect(() => {
    if (dataValues) {
      reset({
        title: dataValues.title,
        text: dataValues.text,
        category: dataValues.category,
      });
    }
  }, [dataValues]);

  const {
    data: { data: categories },
  } = useProtectedFetcher('/api/categories');

  const categoryOptions = categories?.rows?.map((element: any) => ({
    value: element.id,
    label: element.name,
  }));
  const selectedOption = categoryOptions?.filter(
    (element: any) => element.value == dataValues.category,
  );

  return (
    <DrawerLayout
      title={`Edit Category`}
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
              defaultValue={selectedOption}
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
              defaultValue={dataValues.text}
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

          <div className="flex items-center space-x-3 justify-between md:col-span-2">
            <button
              type="button"
              disabled={loading}
              onClick={onDelete}
              className="font-semibold disabled:cursor-not-allowed disabled:bg-slate-400 mt-12 text-white bg-red-500/80 hover:bg-red-500 focus:ring-4 focus:outline-none focus:ring-red-300 rounded-lg text-sm w-full sm:w-auto px-8 py-2.5 text-center dark:bg-red-600 dark:hover:bg-red-700 dark:red:ring-blue-800"
            >
              Delete
            </button>

            <button
              type="submit"
              disabled={loading}
              className="font-semibold disabled:cursor-not-allowed disabled:bg-slate-400 mt-12 text-white bg-brand-green/80 hover:bg-brand-green focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg text-sm w-full sm:w-auto px-12 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </DrawerLayout>
  );
};

export default EditItem;
