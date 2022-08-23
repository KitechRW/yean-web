import React from 'react';
import DefaultApi from 'apis/restful';
import swal from 'sweetalert';
import joi from 'joi';
import DrawerLayout from 'modules/layouts/DrawerLayout';
import { useForm } from 'react-hook-form';
import { joiResolver } from '@hookform/resolvers/joi';
import UploadImage from 'modules/_partials/UploadImage';
import { formatJoiErorr } from 'system/format';
import { Checkbox, FormControlLabel } from '@mui/material';

const schema = joi.object({
  companyName: joi.string().required(),
  phone: joi.string().required(),
  email: joi.string().required(),
  image: joi.object().required(),
  portfolio: joi.string().uri().required(),
  confirmed: joi.boolean().default(true),
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
      '/api/partners',
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

  return (
    <DrawerLayout
      title={`New Partner`}
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
              Company Name
            </span>
            <input
              type="text"
              placeholder={'Company Name'}
              {...register('companyName')}
              className="mt-2 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            />
            {errors.companyName?.message && (
              <p className="mt-1 text-red-500">
                {formatJoiErorr(`${errors.companyName.message}`)}
              </p>
            )}
          </label>
          <label className="flex flex-col">
            <span className="text-sm font-medium text-gray-900 dark:text-gray-300">
              Portfolio
            </span>
            <input
              type="url"
              placeholder={'Portfolio'}
              {...register('portfolio')}
              className="mt-2 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            />
            {errors.portfolio?.message && (
              <p className="mt-1 text-red-500">
                {formatJoiErorr(`${errors.portfolio.message}`)}
              </p>
            )}
          </label>
          <label className="flex flex-col">
            <span className="text-sm font-medium text-gray-900 dark:text-gray-300">
              Email
            </span>
            <input
              type="email"
              placeholder={'Email'}
              {...register('email')}
              className="mt-2 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            />
            {errors.email?.message && (
              <p className="mt-1 text-red-500">
                {formatJoiErorr(`${errors.email.message}`)}
              </p>
            )}
          </label>
          <label className="flex flex-col">
            <span className="text-sm font-medium text-gray-900 dark:text-gray-300">
              Phone number
            </span>
            <input
              type="text"
              placeholder={'Phone number'}
              {...register('phone')}
              className="mt-2 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            />
            {errors.phone?.message && (
              <p className="mt-1 text-red-500">
                {formatJoiErorr(`${errors.phone.message}`)}
              </p>
            )}
          </label>
          <FormControlLabel
            control={
              <Checkbox
                defaultChecked
                onChange={event => {
                  setValue('confirmed', event.target.checked, {
                    shouldValidate: true,
                    shouldDirty: true,
                  });
                }}
              />
            }
            label="Confirmed"
          />

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
