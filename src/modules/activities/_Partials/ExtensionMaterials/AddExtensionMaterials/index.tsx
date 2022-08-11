import React, { useEffect, useRef, useState } from 'react';
import Dropzone from 'modules/_partials/ImageUpload';
import DefaultApi from 'apis/restful';
import swal from 'sweetalert';
import {extensionMaterialsCategory} from './data';
import DrawerLayout from 'modules/layouts/DrawerLayout';

const AddExtensionMaterialForm = ({
                          email,
                          phone,
                          companyName,
                          isEdit = false,
                          id,
                          imageUrl,
                          handlePartner,
                          children,
                        }: {
  email?: string;
  phone?: string;
  companyName?: string;
  isEdit?: boolean;
  id?: number;
  imageUrl?: string;
  handlePartner: (item: any, isEdit: boolean) => void;
  children: any;
}) => {
  const [toggle, setToggle] = React.useState(false);

  const [validFiles, setValidFiles] = useState([]);
  const fileInputRef = useRef();
  const modalImageRef = useRef();
  const modalRef = useRef();
  const progressRef = useRef();
  const uploadRef = useRef();
  const uploadModalRef = useRef();
  const [selectedFiles, setSelectedFiles] = useState<any[]>([]);
  const [unsupportedFiles, setUnsupportedFiles] = useState([]);
  const [errorMessage, setErrorMessage] = useState('');
  const [emailValue, setEmailValue] = useState('');

  const [validFiles2, setValidFiles2] = useState([]);
  const fileInputRef2 = useRef();
  const modalImageRef2 = useRef();
  const modalRef2 = useRef();
  const progressRef2 = useRef();
  const uploadRef2 = useRef();
  const uploadModalRef2 = useRef();
  const [selectedFiles2, setSelectedFiles2] = useState<any[]>([]);
  const [unsupportedFiles2, setUnsupportedFiles2] = useState([]);
  const [errorMessage2, setErrorMessage2] = useState('');
  const [emailValue2, setEmailValue2] = useState('');


  const [title, setTitle] = useState('');
  const [phoneValue, setPhoneValue] = useState('');

  const [mainCategory, setMainCategory] = useState<any[]>([]);
  const [subCategories, setSubCategories] = useState<any[]>([]);
  const [chosenMainCategory, setChosenMainCategory] = useState("");

  useEffect(()=> {
    if(extensionMaterialsCategory===undefined ||extensionMaterialsCategory === null){
      return;
    }
    const category_level1 = extensionMaterialsCategory.map((each: { name: string; }) => each.name)
    setMainCategory([...category_level1])
  }, [])
  useEffect(() => {
    if(mainCategory?.length != 0){
      setChosenMainCategory(mainCategory[0])
    }
  }, [mainCategory])
  useEffect(() => {
    if(chosenMainCategory === undefined || chosenMainCategory === null){
      return;
    }
    extensionMaterialsCategory.forEach((each: { name: string; sub: { name:string; }[] }) => {
      if(each.name ===chosenMainCategory){
        let category_level2= each.sub.map(eachSub => eachSub.name);
        setSubCategories([...category_level2])
      }
    })
  }, [chosenMainCategory])

  useEffect(() => {
    if (phone !== undefined && phone !== null) {
      setPhoneValue(phone);
    }
  }, [phone]);
  useEffect(() => {
    if (companyName !== undefined && companyName !== null) {
      setTitle(companyName);
    }
  }, [companyName]);

  useEffect(() => {
    if (email !== undefined && email !== null) {
      setEmailValue(email);
    }
  }, [email]);

  const handleSubmit = async () => {
    const formData = new FormData();
    formData.append('media', selectedFiles[0]);

    const { data: imageData, error: imageError } =
      await DefaultApi.PostRoute.postRoute('/api/uploads', formData);

    if (imageError) {
      swal('Ooops!', imageError.message || 'Something went wrong');
      return;
    }
    const endpoint = !isEdit
      ? '/api/partners'
      : `/api/partners?id=${id}`;
    const payload = {
      email: emailValue,
      phone: phoneValue,
      title: title,
      image: imageData.url,
    };
    const { data, error } = await (!isEdit
      ? DefaultApi.PostRoute.postRoute(endpoint, payload)
      : DefaultApi.PatchRoute.patchRoute(endpoint, payload));

    if (data) {
      swal(
        isEdit ? 'Edited' : 'Added!',
        data.message || 'Action is successfully',
        'success',
      ).then(() => {
        setSelectedFiles([]);
        setEmailValue('');
        setTitle('');
        setPhoneValue('');
        handlePartner(data.partner, isEdit);
        setToggle(false);
      });
    }

    if (error) {
      swal('Ooops!', error.message || 'Something went wrong');
    }
  };

  return (
    <DrawerLayout
      title={`${isEdit ? 'Edit' : 'New'} Material`}
      toggle={toggle}
      setToggle={setToggle}
    >
      {children}
      <div className="flex flex-col">
        <form
          onSubmit={event => {
            event.preventDefault();
            handleSubmit();
          }}
          className="pt-4"
        >
          <div className="mb-6">
            <label
              htmlFor="main-category"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Main category
            </label>
            <select value={chosenMainCategory} onChange={(event) => {setChosenMainCategory(event.target.value);} } id="main-category" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
              {
                mainCategory.map((eachMainCategory,index) =>{
                  return (
                    <option key={eachMainCategory + index} value={eachMainCategory} >{eachMainCategory}</option>
                  )
                })
              }
            </select>
          </div>
          <div className="mb-6">
            <label
              htmlFor="sub-category"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              sub category
            </label>
            <select id="sub-category" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
              {
                subCategories.map((eachSub,index) =>{
                  return (
                    <option key={eachSub + index+"sub"} value={eachSub} >{eachSub}</option>
                  )
                })
              }
            </select>
          </div>

          <div className="mb-6">
            <label
              htmlFor="companyName"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Title
            </label>
            <input
              type="text"
              id="companyName"
              placeholder={'title'}
              value={title}
              onChange={event =>
                setTitle(event.target.value)
              }
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            />
          </div>
          <div className='mb-6'>
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">Main image</label>
            <Dropzone
              errorMessage={errorMessage}
              setErrorMessage={setErrorMessage}
              unsupportedFiles={unsupportedFiles}
              setUnsupportedFiles={setUnsupportedFiles}
              selectedFiles={selectedFiles}
              setSelectedFiles={setSelectedFiles}
              uploadModalRef={uploadModalRef}
              uploadRef={uploadRef}
              progressRef={progressRef}
              modalRef={modalRef}
              modalImageRef={modalImageRef}
              fileInputRef={fileInputRef}
              validFiles={validFiles}
              setValidFiles={setValidFiles}
              isOneImage={true}
              imageUrl={imageUrl}
            />
          </div>
          <div className="mb-6">
            <label htmlFor="main-content" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">main content</label>
            <textarea id="main-content" rows={4}
                      className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="content..."></textarea>
          </div>
          <div className='mb-6'>
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">sub images</label>
            <Dropzone
              errorMessage={errorMessage2}
              setErrorMessage={setErrorMessage2}
              unsupportedFiles={unsupportedFiles2}
              setUnsupportedFiles={setUnsupportedFiles2}
              selectedFiles={selectedFiles2}
              setSelectedFiles={setSelectedFiles2}
              uploadModalRef={uploadModalRef2}
              uploadRef={uploadRef2}
              progressRef={progressRef2}
              modalRef={modalRef2}
              modalImageRef={modalImageRef2}
              fileInputRef={fileInputRef2}
              validFiles={validFiles2}
              setValidFiles={setValidFiles2}
              isOneImage={false}
              imageUrl={imageUrl}
            />
          </div>
          <div className="mb-6">
            <label htmlFor="main-content" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">conclusion content</label>
            <textarea id="main-content" rows={4}
                      className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="content..."></textarea>
          </div>

          <button
            type="submit"
            className="text-white mt-12 bg-brand-green/80 hover:bg-brand-green focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Submit
          </button>
        </form>
      </div>
    </DrawerLayout>
  );
};

export default AddExtensionMaterialForm;
