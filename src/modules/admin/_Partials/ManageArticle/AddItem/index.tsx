import React from 'react';
import DefaultApi from 'apis/restful';
import swal from 'sweetalert';
import joi from 'joi';
import DrawerLayout from 'modules/layouts/DrawerLayout';
import { useForm } from 'react-hook-form';
import { joiResolver } from '@hookform/resolvers/joi';
import UploadImage from 'modules/_partials/UploadImage';
import { formatJoiErorr } from 'system/format';
import dynamic from 'next/dynamic';
import RichText from 'system/config/richtext';
import Select from 'react-select';
import { useProtectedFetcher } from 'apis/utils/fetcher';
import Http from 'core/factory/fact.http';
import { Checkbox, FormControlLabel, FormGroup } from '@mui/material';
import { useNavbar } from 'modules/contexts/NavbarContext';

const ReactQuill = dynamic(() => import('react-quill'), {
  ssr: false,
});

const fields = {
  title: joi.string().required(),
  image: joi.object().required().optional(),
  text: joi.string().required(),
  category_name: joi.string().label('Category'),
  subcategory_name: joi.string().label('Sub category'),
  authorName: joi.string().required(),
  Slide: joi.string().required().optional(),
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

  const {profile} = useNavbar();
  const [text, setText] = React.useState('');
  const [material, setMaterial] = React.useState(false);
  const [data, setData] = React.useState<any>(null);
  const [loading, setLoading] = React.useState(false);
  const [toggle, setToggle] = React.useState(false);
  const [triggle, setTriggle] = React.useState(true);
  const [selected, setSelected] = React.useState('');
  const {
    data: { data: categories },
  } = useProtectedFetcher('/api/categories');
  const {
    data: { data: subCategories },
  } = useProtectedFetcher('/api/sub-categories');

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
    let status = 'submitted';
    setLoading(true);
    const formData = new FormData();
    Object.keys(query).forEach(key => {
      formData.append(key === 'image' ? 'media' : key, query[key]);
    });

    if(triggle){
      formData.append('status', status);
    }else{
      status = 'published';
      formData.append('status', status);
    }
    
    const { data: res, error } = await (!dataValues
      ? DefaultApi.PostRoute.postRoute(
          `/api/articles?material=${material ? 1 : 0}`,
          formData,
        )
      : DefaultApi.PatchRoute.patchRoute(
          `/api/articles/${dataValues.id}?material=${
            material ? 1 : 0
          }`,
          formData
        ));
    setLoading(false);

    if (res) {
      const message = dataValues ? (triggle ? 'Edited' : 'Published & Edited') : (triggle ? 'Added' : 'Published');
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
      category_name: data.category_name,
      subcategory_name: data.subcategory_name,
      authorName: data.authorName,
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
      (item: any) => item.category_name == getValues('category_name'),
    )
    ?.map((element: any) => ({
      value: element.id,
      label: element.name,
    }));

  const defaultSubCategoryOptions = subCategoryOptions?.filter(
    (item: any) => item.value == data?.subcategory_name,
  );
  const defaultCategoryOptions = categoryOptions?.filter(
    (item: any) => item.value == data?.category_name,
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
          
            <>
              <label className="flex flex-col">
                <span className="text-sm font-medium text-gray-900 dark:text-gray-300">
                  Category
                </span>
                <Select
                  isMulti={false}
                  {...register('category_name')}
                  options={categoryOptions}
                  defaultValue={defaultCategoryOptions}
                  onChange={(newValue: any) => {
                    setValue('category_name', newValue.label, {
                      shouldDirty: true,
                      shouldValidate: true,
                    });
                  }}
                  className="mt-2"
                />
                {errors.category_name?.message && (
                  <p className="mt-1 text-red-500">
                    {formatJoiErorr(`${errors.category_name.message}`)}
                  </p>
                )}
              </label>
              <label className="flex flex-col">
                <span className="text-sm font-medium text-gray-900 dark:text-gray-300">
                  Sub Category
                </span>
                <Select
                  isMulti={false}
                  {...register('subcategory_name')}
                  options={subCategoryOptions}
                  defaultValue={defaultSubCategoryOptions}
                  onChange={(newValue: any) => {
                    setValue('subcategory_name', newValue.label, {
                      shouldDirty: true,
                      shouldValidate: true,
                    });
                  }}
                  className="mt-2"
                />
                {errors.subcategory_name?.message && (
                  <p className="mt-1 text-red-500">
                    {formatJoiErorr(
                      `${errors.subcategory_name.message}`,
                    )}
                  </p>
                )}
              </label>
            </>
         
          <label className="flex flex-col">
            <span className="text-sm font-medium text-gray-900 dark:text-gray-300">
              Author Names
            </span>
            <input
              type="text"
              placeholder={'Enter Both Your names...'}
              {...register('authorName')}
              defaultValue={data?.authorName}
              className="mt-2 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            />
            {errors.authorName?.message && (
              <p className="mt-1 text-red-500">
                {formatJoiErorr(`${errors.authorName.message}`)}
              </p>
            )}
          </label>
          <label className='flex flex-col'>
            <span className='mb-3'>Slide Show</span>
            <div className='flex ml-3'>
              <label className='flex items-center'>
                  <span>Yes</span>
                  <input {...register('Slide')} type="radio" value='Yes'  onChange={() => setSelected('Yes')} checked ={ selected === 'Yes'}/>
              </label>
              <label className='flex items-center'>
                  <span>No</span>
                  <input {...register('Slide')} type="radio" value='No' onChange={() => setSelected('No')} checked ={ selected === 'No'}/>
              </label>
            </div>
            <div>
              {
                errors.slide?.message && (
                  <p className="mt-1 text-red-500">
                   {formatJoiErorr(`${errors.slide.message}`)}
                  </p>
                )
              }
            </div>
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
                setText(newValue);
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
            {
              profile?.user?.type !== "admin" ? 
              (
                <button
                type="submit"
                disabled={loading}
                className="font-semibold disabled:cursor-not-allowed disabled:bg-slate-400 mt-12 text-white bg-brand-green/80 hover:bg-brand-green focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg text-sm w-full sm:w-auto px-12 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
               {dataValues ? 'Edit' : 'Save'} 
              </button>
              )
              :
              (
              <div className='flex items-center space-x-3 justify-between md:col-span-2'>
                <button
                  type="submit"
                  disabled={loading}
                  className="font-semibold disabled:cursor-not-allowed disabled:bg-slate-400 mt-12 text-white bg-slate-600 hover:bg-slate-500 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg text-sm w-full sm:w-auto px-12 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  {dataValues ? 'Edit' : 'Save'} 
                </button>
                <button
                  type="submit"
                  onClick={ () => setTriggle(false)}
                  disabled={loading}
                  className="font-semibold disabled:cursor-not-allowed disabled:bg-slate-400 mt-12 text-white bg-brand-green/80 hover:bg-brand-green focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg text-sm w-full sm:w-auto px-12 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  Publish
                </button>
              </div>
              )
            }
            
          </div>
        </form>
      </div>
    </DrawerLayout>
  );
};

export default AddItem;
