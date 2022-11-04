import React from 'react';
import DefaultApi from 'apis/restful';
import swal from 'sweetalert';
import joi from 'joi';
import DrawerLayout from 'modules/layouts/DrawerLayout';
import { useForm } from 'react-hook-form';
import { joiResolver } from '@hookform/resolvers/joi';
import { formatJoiErorr } from 'system/format';
import Select from 'react-select';
import { useProtectedFetcher } from 'apis/utils/fetcher';

const schema = joi.object({
  slideIds: joi.array().items(joi.number()).min(6).max(6).required(),
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
    const id = dataValues?.id || 1;
    const { data, error } = await DefaultApi.PatchRoute.patchRoute(
      `/api/landing/${id}`,
      { slideIds: query.slideIds },
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
      text: 'Are you sure that you want to delete this page?',
      icon: 'warning',
      dangerMode: true,
    });

    if (!willDelete) {
      return;
    }
    setLoading(true);
    const { data, error } = await DefaultApi.DeleteRoute.deleteRoute(
      `/api/landing/1`,
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
        slideIds: dataValues.slideIds,
      });
    }
  }, [dataValues]);

  const {
    data: { data: articles },
  } = useProtectedFetcher('/api/articles?limit=200');

  const articlesOptions = articles?.map((element: any) => ({
    value: element.id,
    label: element.title,
  }));

  const selectedSlideOption = articlesOptions?.filter(
    (element: any) => dataValues.slideIds?.includes(element.value),
  );

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
