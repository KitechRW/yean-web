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
import Http from 'core/factory/fact.http';
import { Checkbox, FormControlLabel, FormGroup } from '@mui/material';

const ReactQuill = dynamic(() => import('react-quill'), {
  ssr: false,
});

const fields = {
  title: joi.string().required(),
  image: joi.object().required().optional(),
  text: joi.string().required(),
  category_id: joi.number().label('Category'),
  subcategory_id: joi.number().label('Sub category'),
  author_id: joi.number().required().label('Author'),
};

const schema = joi.object(fields);

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
  const [material, setMaterial] = React.useState(false);
  const [data, setData] = React.useState<any>(null);
  const [loading, setLoading] = React.useState(false);
  const [toggle, setToggle] = React.useState(false);
  const {
    data: { data: categories },
  } = useProtectedFetcher('/api/categories');
  const {
    data: { data: subCategories },
  } = useProtectedFetcher('/api/sub-categories');
  const {
    data: { data: authors },
  } = useProtectedFetcher('/api/authors');
  const {
    register,
    unregister,
    handleSubmit,
    setValue,
    getValues,
    reset,
    setError,
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
    const { data: res, error } = await (!dataValues
      ? DefaultApi.PostRoute.postRoute(
          `/api/articles?material=${material ? 1 : 0}`,
          formData,
        )
      : DefaultApi.PatchRoute.patchRoute(
          `/api/articles/${dataValues.id}?material=${
            material ? 1 : 0
          }`,
          formData,
        ));
    setLoading(false);

    if (res) {
      const message = dataValues ? 'Edited' : 'Added';
      swal(
        message,
        res.message || `${message} successfully`,
        'success',
      ).then(() => {
        reset();
        setToggle(false);
        if (dataValues) {
          // @ts-ignore
          handleEdit(res.data, material);
        } else {
          // @ts-ignore
          handleAdd(res.data, material);
        }
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
      `/api/articles/${dataValues.id}?material=${material ? 1 : 0}`,
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

  React.useEffect(() => {
    if (dataValues?.material) {
      setMaterial(!!dataValues.material);
    }
    if (dataValues?.id) {
      Http.axios
        .get(
          `/api/articles/${dataValues.id}?material=${
            !!dataValues.material ? 1 : 0
          }`,
        )
        .then(response => response.data)
        .then(result => {
          const article = result.data;
          setData(article);
        });
    }
  }, [dataValues]);

  const resetForm = React.useRef(() => {});

  resetForm.current = () => {
    reset({
      title: data.title,
      text: data.text,
      category_id: data.category_id,
      subcategory_id: data.subcategory_id,
      author_id: data.author_id,
    });
  };

  React.useEffect(() => {
    if (data) {
      resetForm.current();
    }
  }, [data]);

  const categoryOptions = categories?.rows?.map((element: any) => ({
    value: element.id,
    label: element.name,
  }));

  const subCategoryOptions = subCategories?.rows
    ?.filter(
      (item: any) => item.categoryId == getValues('category_id'),
    )
    ?.map((element: any) => ({
      value: element.id,
      label: element.name,
    }));

  const defaultSubCategoryOptions = subCategoryOptions?.filter(
    (item: any) => item.value == data?.subcategory_id,
  );
  const defaultCategoryOptions = categoryOptions?.filter(
    (item: any) => item.value == data?.category_id,
  );

  const authorOptions = authors?.rows?.map((element: any) => ({
    value: element.id,
    label: `${element.firstname} ${element.lastname}`,
  }));

  const defaultAuthorOptions = authorOptions?.filter(
    (item: any) => item.value == data?.author_id,
  );

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
            event.preventDefault();
            if (!material) {
              unregister(['subcategory_id', 'category_id']);
            } else {
              setError('category_id', { type: 'required' });
              setError('subcategory_id', { type: 'required' });
            }
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
              defaultValue={data?.title}
              className="mt-2 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            />
            {errors.title?.message && (
              <p className="mt-1 text-red-500">
                {formatJoiErorr(`${errors.title.message}`)}
              </p>
            )}
          </label>
          <FormGroup>
            <FormControlLabel
              control={
                <Checkbox
                  onChange={event => {
                    if (dataValues?.id && material) {
                      return;
                    }
                    setMaterial(event.target.checked);
                  }}
                  checked={!!material}
                />
              }
              label="Extension material"
            />
          </FormGroup>
          {material ? (
            <>
              <label className="flex flex-col">
                <span className="text-sm font-medium text-gray-900 dark:text-gray-300">
                  Category
                </span>
                <Select
                  isMulti={false}
                  {...register('category_id')}
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
              <label className="flex flex-col">
                <span className="text-sm font-medium text-gray-900 dark:text-gray-300">
                  Sub Category
                </span>
                <Select
                  isMulti={false}
                  {...register('subcategory_id')}
                  options={subCategoryOptions}
                  defaultValue={defaultSubCategoryOptions}
                  onChange={(newValue: any) => {
                    setValue('subcategory_id', newValue.value, {
                      shouldDirty: true,
                      shouldValidate: true,
                    });
                  }}
                  className="mt-2"
                />
                {errors.subcategory_id?.message && (
                  <p className="mt-1 text-red-500">
                    {formatJoiErorr(
                      `${errors.subcategory_id.message}`,
                    )}
                  </p>
                )}
              </label>
            </>
          ) : null}
          <label className="flex flex-col">
            <span className="text-sm font-medium text-gray-900 dark:text-gray-300">
              Author
            </span>
            <Select
              isMulti={false}
              {...register('author_id')}
              options={authorOptions}
              defaultValue={defaultAuthorOptions}
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
              defaultValue={data?.text}
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

export default AddItem;
