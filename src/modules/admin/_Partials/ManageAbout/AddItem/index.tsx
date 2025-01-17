import React from 'react';
import DefaultApi from 'apis/restful';
import swal from 'sweetalert';
import joi from 'joi';
import Select from 'react-select';
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
  text: joi.string().required(),
  vision: joi.string().required(),
  mission: joi.string().required(),
  history: joi.string().required(),
  image: joi.object().required().optional(),
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
      ? axios.post('/api/about', formData)
      : axios.patch(
          `/api/about/${dataValues.id}`,
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
        text: dataValues.text,
        vision: dataValues.vision,
        mission: dataValues.mission,
        history: dataValues.history,
      });
    }
  }, [dataValues]);

  const onDelete = async () => {
    const willDelete = await swal({
      title: 'Are you sure?',
      text: 'Are you sure that you want to delete this page?',
      icon: 'warning',
      dangerMode: true,
    });

    if (!willDelete) {
      return;
    }
    setLoading(true);
    const { data, error } = await DefaultApi.DeleteRoute.deleteRoute(
      `/api/about/${dataValues.id}`,
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

    if (error) {
      swal('Ooops!', error.message || 'Something went wrong');
    }
  };

  return (
    <DrawerLayout
      title={`${dataValues ? 'Edit' : 'New'} Page`}
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
            <p className="mt-3 w-full font-medium">Mission</p>
            <ReactQuill
              theme="snow"
              defaultValue={dataValues?.mission}
              modules={RichText.modules}
              formats={RichText.formats}
              onChange={newValue => {
                setValue('mission', newValue, {
                  shouldDirty: true,
                  shouldValidate: true,
                });
              }}
            />
            {errors.mission?.message && (
              <p className="mt-1 text-red-500">
                {formatJoiErorr(`${errors.mission?.message}`)}
              </p>
            )}
          </div>
          <div className="flex flex-col">
            <p className="mt-3 w-full font-medium">Vision</p>
            <ReactQuill
              theme="snow"
              defaultValue={dataValues?.vision}
              modules={RichText.modules}
              formats={RichText.formats}
              onChange={newValue => {
                setValue('vision', newValue, {
                  shouldDirty: true,
                  shouldValidate: true,
                });
              }}
            />
            {errors.vision?.message && (
              <p className="mt-1 text-red-500">
                {formatJoiErorr(`${errors.vision?.message}`)}
              </p>
            )}
          </div>
          <div className="flex flex-col">
            <p className="mt-3 w-full font-medium">About us</p>
            <ReactQuill
              theme="snow"
              defaultValue={dataValues?.text}
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

          <div className="flex flex-col">
            <p className="mt-3 w-full font-medium">Our history</p>
            <ReactQuill
              theme="snow"
              defaultValue={dataValues?.history}
              modules={RichText.modules}
              formats={RichText.formats}
              onChange={newValue => {
                setValue('history', newValue, {
                  shouldDirty: true,
                  shouldValidate: true,
                });
              }}
            />
            {errors.history?.message && (
              <p className="mt-1 text-red-500">
                {formatJoiErorr(`${errors.history?.message}`)}
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
