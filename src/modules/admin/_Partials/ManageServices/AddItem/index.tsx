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
import axios from 'axios';

const ReactQuill = dynamic(() => import('react-quill'), {
  ssr: false,
});

const schema = joi.object({
  name: joi.string().required(),
  image: joi.object().required(),
  content: joi.string().required(),
});

const AddItem = ({
  handleAdd,
  children,
  handleEdit,
  dataValues,
  handleDelete,
}: {
  handleAdd?: (item: any) => void;
  children: any;
  handleEdit?: (item: any) => void;
  handleDelete?: (id: any) => void;
  dataValues?: any;
}) => {
  const [loading, setLoading] = React.useState(false);
  const [toggle, setToggle] = React.useState(false);
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
    const { data } = await (!dataValues
      ? axios.post('/api/services', formData)
      : axios.patch(
          `/api/services/${dataValues.id}`,
          formData,
        ));
    setLoading(false);

    if (data) {
      const message = !!dataValues ? 'Edited' : 'Added';
      swal(
        message,
        data.message || `${message} successfully`,
        'success',
      ).then(() => {
        reset();
        setToggle(false);
        if (!dataValues) {
          // @ts-ignore
          handleAdd(data.data);
        } else {
          // @ts-ignore
          handleEdit(data.data);
        }
      });
    }

    if (data.error) {
      swal('Ooops!', data.error || 'Something went wrong');
    }
  };

  React.useEffect(() => {
    if (dataValues) {
      reset({
        name: dataValues.name,
        content: dataValues.content,
      });
    }
  }, [dataValues]);

  const onDelete = async () => {
    const willDelete = await swal({
      title: 'Are you sure?',
      text: 'Are you sure that you want to delete this service?',
      icon: 'warning',
      dangerMode: true,
    });

    if (!willDelete) {
      return;
    }
    setLoading(true);
    const { data } = await axios.delete(
      `/api/services/${dataValues.id}`,
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
        // @ts-ignore
        handleDelete(dataValues.id);
      });
    }

    if (data.error) {
      swal('Ooops!', data.error || 'Something went wrong');
    }
  };

  return (
    <DrawerLayout
      title={`${dataValues ? 'Edit' : 'New'} Service`}
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
              Name
            </span>
            <input
              type="text"
              placeholder={'Name'}
              {...register('name')}
              className="mt-2 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            />
            {errors.name?.message && (
              <p className="mt-1 text-red-500">
                {formatJoiErorr(`${errors.name.message}`)}
              </p>
            )}
          </label>
          <div className="flex flex-col">
            <p className="mt-3 w-full font-medium">Centent</p>
            <ReactQuill
              theme="snow"
              defaultValue={dataValues?.content}
              modules={RichText.modules}
              formats={RichText.formats}
              onChange={newValue => {
                setValue('content', newValue, {
                  shouldDirty: true,
                  shouldValidate: true,
                });
              }}
            />
            {errors.content?.message && (
              <p className="mt-1 text-red-500">
                {formatJoiErorr(`${errors.content?.message}`)}
              </p>
            )}
          </div>
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

          <div className="flex items-center space-x-3 justify-between md:col-span-2">
            {dataValues ? (
              <button
                type="button"
                disabled={loading}
                onClick={onDelete}
                className="font-semibold disabled:cursor-not-allowed disabled:bg-slate-400 mt-12 text-white bg-red-500/80 hover:bg-red-500 focus:ring-4 focus:outline-none focus:ring-red-300 rounded-lg text-sm w-full sm:w-auto px-8 py-2.5 text-center dark:bg-red-600 dark:hover:bg-red-700 dark:red:ring-blue-800"
              >
                Delete
              </button>
            ) : null}
            <button
              type="submit"
              disabled={loading}
              className="md:col-span-2 disabled:cursor-not-allowed disabled:bg-slate-400 mt-12 text-white bg-brand-green/80 hover:bg-brand-green focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-8 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </DrawerLayout>
  );
};

export default AddItem;
