import React from 'react';
import swal from 'sweetalert';
import DrawerLayout from 'modules/layouts/DrawerLayout';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import UploadImage from 'modules/_partials/UploadImage';
import { formatJoiErorr } from 'system/format';
import dynamic from 'next/dynamic';
import RichText from 'system/config/richtext';
import Select from 'react-select';
import { useProtectedFetcher } from 'apis/utils/fetcher';
import { useNavbar } from 'modules/contexts/NavbarContext';
import axios from 'axios';
import { useRouter } from 'next/router';
import { z } from 'zod';

const ReactQuill = dynamic(() => import('react-quill'), {
  ssr: false,
});

const schema = z.object({
  title: z.string().min(1, {
    message: 'Title is required',
  }),
  image: z.any().optional(),
  text: z.string().min(1, {
    message: 'Text is required',
  }),
  category_id: z.coerce.number().optional(),
  is_slide: z.boolean().optional().default(false),
  type: z.enum(['BLOG', 'EXTENSION_MATERIAL']).default('BLOG'),
});

type FormData = z.infer<typeof schema>;

const AddItem = ({
  children,
  dataValues,
}: {
  handleAdd?: (item: any) => void;
  children: any;
  handleEdit?: (item: any) => void;
  handleDelete?: (id: any) => void;
  dataValues?: any;
}) => {
  const router = useRouter();

  const { profile } = useNavbar();
  const [loading, setLoading] = React.useState(false);
  const [toggle, setToggle] = React.useState(false);
  const {
    data: { data: categories },
  } = useProtectedFetcher('/api/categories');
  const types = [
    { value: 'BLOG', label: 'Blog' } as const,
    { value: 'EXTENSION_MATERIAL', label: 'Material' } as const,
  ] as const;
  const {
    register,
    handleSubmit,
    setValue,
    getValues,
    watch,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
    defaultValues: dataValues
      ? {
          title: dataValues.title,
          // image: joi.object().required().optional(),
          text: dataValues.text,
          category_id: dataValues.category_id,
          is_slide: dataValues.is_slide,
          type: dataValues.type,
        }
      : undefined,
  });

  const isMaterial = watch('type') === 'EXTENSION_MATERIAL';
  const is_slide = watch('is_slide');

  const onSubmit = async (query: any) => {
    try {
      query.author_id = dataValues?.author_id || profile?.user?.id;
      if (!query.author_id) {
        swal('Ooops!', 'Please login first', 'error');
        router.replace('/logout');
        return;
      }
      setLoading(true);
      const formData = new FormData();
      Object.keys(query).forEach(key => {
        formData.append(key === 'image' ? 'media' : key, query[key]);
      });

      const { data: res } = await (!dataValues
        ? axios.post(`/api/articles`, formData)
        : axios.patch(`/api/articles/${dataValues.id}`, formData));
      setLoading(false);

      if (res) {
        swal(
          'Success!',
          res.message || `Saved as ${query.status} successfully`,
          'success',
        );
        setTimeout(() => {
          router.reload();
        }, 1000);
      }
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

  const onDelete = async () => {
    try {
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
      const { data } = await axios.delete(
        `/api/articles/${dataValues.id}`,
      );
      setLoading(false);

      if (data) {
        swal(
          'Deleted!',
          data.message || 'Deleted successfully',
          'success',
        );

        setTimeout(() => {
          router.reload();
        }, 1000);
      }
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

  const categoryOptions = categories?.rows
    ?.filter((item: any) => !!item.parent_id)
    ?.map((element: any) => ({
      value: element.id,
      label: element.name,
    }));

  const defaultCategoryOptions = categoryOptions?.filter(
    (item: any) => item.value == dataValues?.category_id,
  );

  const defaultTypeOptions = types?.filter(
    (item: any) => item.value == dataValues?.type,
  );

  return (
    <DrawerLayout
      title={!dataValues ? `New Article` : 'Edit Article'}
      toggle={toggle}
      setToggle={setToggle}
    >
      {children}
      <div className="flex flex-col">
        <form
          onSubmit={event => {
            event.preventDefault();
            handleSubmit(values =>
              onSubmit({
                ...values,
                status:
                  profile?.user?.type === 'admin'
                    ? 'published'
                    : 'pending',
              }),
            )(event);
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
              Type
            </span>
            <Select
              isMulti={false}
              options={types}
              defaultValue={defaultTypeOptions}
              onChange={(newValue: any) => {
                setValue('type', newValue.value, {
                  shouldDirty: true,
                  shouldValidate: true,
                });
              }}
              className="mt-2"
            />
            {errors.type?.message && (
              <p className="mt-1 text-red-500">
                {formatJoiErorr(`${errors.type.message}`)}
              </p>
            )}
          </label>

          {isMaterial ? (
            <>
              <label className="flex flex-col">
                <span className="text-sm font-medium text-gray-900 dark:text-gray-300">
                  Category
                </span>
                <Select
                  isMulti={false}
                  options={categoryOptions}
                  defaultValue={defaultCategoryOptions}
                  onChange={(newValue: any) => {
                    setValue('category_id', newValue.value, {
                      shouldDirty: true,
                      shouldValidate: true,
                    });
                  }}
                  className="mt-2"
                />
                {errors.category_id?.message && (
                  <p className="mt-1 text-red-500">
                    {formatJoiErorr(`${errors.category_id.message}`)}
                  </p>
                )}
              </label>
            </>
          ) : (
            <></>
          )}

          {profile?.user?.type === 'admin' && isMaterial ? (
            <label className="flex flex-col">
              <span className="mb-3">Slide Show</span>
              <div className="flex w-[99px] ml-3 justify-around">
                <label className="flex items-center">
                  <span>Yes</span>
                  <input
                    type="radio"
                    onClick={() => {
                      setValue('is_slide', true, {
                        shouldDirty: true,
                        shouldValidate: true,
                      });
                    }}
                    checked={!!is_slide}
                  />
                </label>
                <label className="flex items-center">
                  <span>No</span>
                  <input
                    type="radio"
                    onClick={() => {
                      setValue('is_slide', false, {
                        shouldDirty: true,
                        shouldValidate: true,
                      });
                    }}
                    checked={!is_slide}
                  />
                </label>
              </div>
            </label>
          ) : (
            <></>
          )}

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
              defaultValue={getValues('text')}
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
            <div className="flex items-center space-x-3 justify-between md:col-span-2 ml-auto">
              <button
                type="button"
                disabled={loading}
                onClick={() => {
                  handleSubmit(values =>
                    onSubmit({ ...values, status: 'draft' }),
                  )();
                }}
                className="font-semibold disabled:cursor-not-allowed disabled:bg-slate-400 mt-12 text-white bg-slate-600 hover:bg-slate-500 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg text-sm w-full sm:w-auto px-12 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Save Draft
              </button>
              <button
                type="submit"
                disabled={loading}
                className="font-semibold disabled:cursor-not-allowed disabled:bg-slate-400 mt-12 text-white bg-brand-green/80 hover:bg-brand-green focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg text-sm w-full sm:w-auto px-12 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                {profile?.user?.type === 'admin'
                  ? 'Publish'
                  : 'Submit'}
              </button>
            </div>
          </div>
        </form>
      </div>
    </DrawerLayout>
  );
};

export default AddItem;
