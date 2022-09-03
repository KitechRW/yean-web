import React from 'react';
import DefaultApi from 'apis/restful';
import swal from 'sweetalert';
import joi from 'joi';
import DrawerLayout from 'modules/layouts/DrawerLayout';
import { useForm } from 'react-hook-form';
import { joiResolver } from '@hookform/resolvers/joi';
import { formatJoiErorr } from 'system/format';
import { useProtectedFetcher } from 'apis/utils/fetcher';

const schema = joi.object({
  title: joi.string().required(),
  keyword: joi.string().required(),
  location: joi.string().required(),
  category: joi.string().required(),
  description: joi.string().required(),

});

const AddJob = ({
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
    const { data, error } = await (!dataValues
      ? DefaultApi.PostRoute.postRoute(
        '/api/jobs',
        {...query},
      )
      : DefaultApi.PatchRoute.patchRoute(
        `/api/jobs/${dataValues.id}`,
        {...query},
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

    if (error) {
      swal('Ooops!', error.message || 'Something went wrong');
    }
  };

  React.useEffect(() => {
    if (dataValues) {
      reset({
        title: dataValues.title,
        keyword: dataValues.keyword,
        location: dataValues.location,
        category: dataValues.category,
        description: dataValues.description,
      });
    }
  }, [dataValues, reset]);


  const onDelete = async () => {
    const willDelete = await swal({
      title: 'Are you sure?',
      text: 'Are you sure that you want to delete this sub category?',
      icon: 'warning',
      dangerMode: true,
    });

    if (!willDelete) {
      return;
    }
    setLoading(true);
    const { data, error } = await DefaultApi.DeleteRoute.deleteRoute(
      `/api/jobs/${dataValues.id}`,
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
      title={`${dataValues ? 'Edit' : 'New'} Job`}
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
              onChange={(event: any) => {
                setValue('title', event.target.value, {
                  shouldDirty: true,
                  shouldValidate: true,
                });
              }}
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
              Keywords
            </span>
            <input
              type="text"
              placeholder={'Keyword'}
              {...register('keyword')}
              onChange={(event: any) => {
                setValue('keyword', event.target.value, {
                  shouldDirty: true,
                  shouldValidate: true,
                });
              }}
              className="mt-2 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            />
            {errors.keyword?.message && (
              <p className="mt-1 text-red-500">
                {formatJoiErorr(`${errors.keyword.message}`)}
              </p>
            )}
          </label>

          <label className="flex flex-col">
            <span className="text-sm font-medium text-gray-900 dark:text-gray-300">
              Location
            </span>
            <input
              type="text"
              placeholder={'Location'}
              {...register('location')}
              onChange={(event: any) => {
                setValue('location', event.target.value, {
                  shouldDirty: true,
                  shouldValidate: true,
                });
              }}
              className="mt-2 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            />
            {errors.location?.location && (
              <p className="mt-1 text-red-500">
                {formatJoiErorr(`${errors.location.message}`)}
              </p>
            )}
          </label>
          <label className="flex flex-col">
            <span className="text-sm font-medium text-gray-900 dark:text-gray-300">
              Category
            </span>
            <input
              type="text"
              placeholder={'Category'}
              {...register('category')}
              onChange={(event: any) => {
                setValue('category', event.target.value, {
                  shouldDirty: true,
                  shouldValidate: true,
                });
              }}
              className="mt-2 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            />
            {errors.category?.message && (
              <p className="mt-1 text-red-500">
                {formatJoiErorr(`${errors.category.message}`)}
              </p>
            )}
          </label>
          <label className="flex flex-col">
            <span className="text-sm font-medium text-gray-900 dark:text-gray-300">
              Description
            </span>
            <textarea
              rows={10}
              placeholder={'Description'}
              {...register('description')}
              onChange={(event: any) => {
                setValue('description', event.target.value, {
                  shouldDirty: true,
                  shouldValidate: true,
                });
              }}
              className="mt-2 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            />
            {errors.description?.message && (
              <p className="mt-1 text-red-500">
                {formatJoiErorr(`${errors.description.message}`)}
              </p>
            )}
          </label>

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

export default AddJob;
