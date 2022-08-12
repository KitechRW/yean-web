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
  slideIds: joi.array().items(joi.number()).min(6).max(6).required(),
  articleIds: joi
    .array()
    .items(joi.number())
    .required()
    .min(9)
    .max(12),
  extensionIds: joi
    .array()
    .items(joi.number())
    .min(9)
    .max(12)
    .required(),
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
    setLoading(true);
    const { data, error } = await DefaultApi.PatchRoute.patchRoute(
      `/api/home/1`,
      query,
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
      `/api/home/1`,
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

  // React.useEffect(() => {
  //   if (dataValues) {
  //     reset({
  //       title: dataValues.title,
  //       text: dataValues.text,
  //       category: dataValues.category,
  //     });
  //   }
  // }, [dataValues]);

  const {
    data: { data: articles },
  } = useProtectedFetcher('/api/articles');

  const articlesOptions = articles?.rows?.map((element: any) => ({
    value: element.id,
    label: element.title,
  }));

  const selectedSlideOption = articlesOptions?.filter(
    (element: any) => dataValues.slideIds?.includes(element.value),
  );

  const selectedArticleOption = articlesOptions?.filter(
    (element: any) => dataValues.articleIds?.includes(element.value),
  );

  const selectedExtensionOption = articlesOptions?.filter(
    (element: any) =>
      dataValues.extensionIds?.includes(element.value),
  );

  console.log(errors);

  return (
    <DrawerLayout
      title={`Edit Home page`}
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
              Home Slides
            </span>
            <Select
              isMulti={true}
              {...register('slideIds')}
              defaultValue={selectedSlideOption}
              options={articlesOptions}
              onChange={(newValue: any) => {
                setValue(
                  'slideIds',
                  newValue.map((element: any) =>
                    Number(element.value),
                  ),
                  {
                    shouldDirty: true,
                    shouldValidate: true,
                  },
                );
              }}
              className="mt-2"
            />
            {errors.slideIds?.message && (
              <p className="mt-1 text-red-500">
                {formatJoiErorr(`${errors.slideIds.message}`)}
              </p>
            )}
          </label>

          <label className="flex flex-col">
            <span className="text-sm font-medium text-gray-900 dark:text-gray-300">
              Latest Blog
            </span>
            <Select
              isMulti={true}
              {...register('articleIds')}
              defaultValue={selectedSlideOption}
              options={articlesOptions?.reverse()}
              onChange={(newValue: any) => {
                setValue(
                  'articleIds',
                  newValue.map((element: any) =>
                    Number(element.value),
                  ),
                  {
                    shouldDirty: true,
                    shouldValidate: true,
                  },
                );
              }}
              className="mt-2"
            />
            {errors.articleIds?.message && (
              <p className="mt-1 text-red-500">
                {formatJoiErorr(`${errors.articleIds.message}`)}
              </p>
            )}
          </label>

          <label className="flex flex-col">
            <span className="text-sm font-medium text-gray-900 dark:text-gray-300">
              Extension Materials
            </span>
            <Select
              isMulti={true}
              {...register('extensionIds')}
              defaultValue={selectedExtensionOption}
              options={articlesOptions}
              onChange={newValue => {
                setValue(
                  'extensionIds',
                  newValue.map((element: any) =>
                    Number(element.value),
                  ),
                  {
                    shouldDirty: true,
                    shouldValidate: true,
                  },
                );
              }}
              className="mt-2"
            />
            {errors.extensionIds?.message && (
              <p className="mt-1 text-red-500">
                {formatJoiErorr(`${errors.extensionIds.message}`)}
              </p>
            )}
          </label>

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
