import React from 'react';
import DefaultApi from 'apis/restful';
import swal from 'sweetalert';
import joi from 'joi';
import DrawerLayout from 'modules/layouts/DrawerLayout';
import { useForm } from 'react-hook-form';
import { joiResolver } from '@hookform/resolvers/joi';
import UploadImage from 'modules/_partials/UploadImage';
import { formatJoiErorr } from 'system/format';
import axios from 'axios';
import Select from 'react-select';
import { useRouter } from 'next/router';

const schema = joi.object({
  name: joi.string().required(),
  parent_id: joi.number().label('Parent').optional(),
  image: joi.object().required(),
});

const AddItem = ({
  handleAdd,
  children,
  parentOptions,
}: {
  handleAdd: (item: any) => void;
  children: any;
  parentOptions: {
    value: string;
    label: string;
  }[];
}) => {
  const router = useRouter();
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
    try {
      setLoading(true);
      const formData = new FormData();
      Object.keys(query).forEach(key => {
        formData.append(key === 'image' ? 'media' : key, query[key]);
      });
      const { data } = await axios.post('/api/categories', formData);
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
      setTimeout(() => {
        router.reload();
      }, 1000);
    } catch (error) {
      swal(
        'Ooops!',
        (error as any)?.response?.data?.message ||
          'Something went wrong',
        'error',
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <DrawerLayout
      title={`New Category`}
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
          <label className="flex flex-col">
            <span className="text-sm font-medium text-gray-900 dark:text-gray-300">
              Parent(Optional)
            </span>
            <Select
              isMulti={false}
              {...register('parent_id')}
              options={parentOptions}
              onChange={(newValue: any) => {
                setValue('parent_id', newValue.value, {
                  shouldDirty: true,
                  shouldValidate: true,
                });
              }}
              className="mt-2"
            />
            {errors.parent_id?.message && (
              <p className="mt-1 text-red-500">
                {formatJoiErorr(`${errors.parent_id.message}`)}
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
