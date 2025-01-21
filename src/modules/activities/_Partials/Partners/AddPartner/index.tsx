import React, { useEffect, useRef, useState } from 'react';
import Dropzone from 'modules/_partials/ImageUpload';
import DefaultApi from 'apis/restful';
import swal from 'sweetalert';
import DrawerLayout from 'modules/layouts/DrawerLayout';
import axios from 'axios';

const AddPartnerForm = ({
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
  const [companyNameValue, setCompanyNameValue] = useState('');
  const [phoneValue, setPhoneValue] = useState('');

  useEffect(() => {
    if (phone !== undefined && phone !== null) {
      setPhoneValue(phone);
    }
  }, [phone]);
  useEffect(() => {
    if (companyName !== undefined && companyName !== null) {
      setCompanyNameValue(companyName);
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

    const { data: imageData } =
      await axios.post('/api/uploads', formData);

    if (imageData.error) {
      swal('Ooops!', imageData.error || 'Something went wrong');
      return;
    }
    const endpoint = !isEdit
      ? '/api/partners'
      : `/api/partners?id=${id}`;
    const payload = {
      email: emailValue,
      phone: phoneValue,
      companyName: companyNameValue,
      image: imageData.url,
    };
    const { data} = await (!isEdit
      ? axios.post(endpoint, payload)
      : axios.patch(endpoint, payload));

    if (data) {
      swal(
        isEdit ? 'Edited' : 'Added!',
        data.message || 'Action is successfully',
        'success',
      ).then(() => {
        setSelectedFiles([]);
        setEmailValue('');
        setCompanyNameValue('');
        setPhoneValue('');
        handlePartner(data.partner, isEdit);
        setToggle(false);
      });
    }

    if (data.error) {
      swal('Ooops!', data.error || 'Something went wrong');
    }
  };

  return (
    <DrawerLayout
      title={`${isEdit ? 'Edit' : 'New'} Partner`}
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
              htmlFor="email"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              value={emailValue}
              onChange={event => setEmailValue(event.target.value)}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="name@yarn.com"
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="companyName"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Company name
            </label>
            <input
              type="text"
              id="companyName"
              placeholder={'Company name'}
              value={companyNameValue}
              onChange={event =>
                setCompanyNameValue(event.target.value)
              }
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="telPhoneNumber"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Phone number
            </label>
            <input
              type="tel"
              id="telPhoneNumber"
              placeholder={'Phone'}
              value={phoneValue}
              onChange={event => setPhoneValue(event.target.value)}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            />
          </div>
          <div className=''>
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

export default AddPartnerForm;
