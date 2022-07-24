import React, { useEffect, useRef, useState } from 'react';
import Dropzone from 'modules/_partials/ImageUpload';
import DefaultApi from 'apis/restful';
import swal from 'sweetalert';
import { Drawer } from '@mui/material';
import { Close } from '@mui/icons-material';

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
  const formRef = React.useRef(null);
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

  const [toggle, setToggle] = React.useState(false);
  const toggleDrawer = (open: boolean) => (event: any) => {
    if (
      event.type === 'keydown' &&
      ((event as React.KeyboardEvent).key === 'Tab' ||
        (event as React.KeyboardEvent).key === 'Shift')
    ) {
      return;
    }

    setToggle(open);
  };
  const handleKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === 'Escape') {
      setToggle(false);
    }
  };

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
      companyName: companyNameValue,
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
        setCompanyNameValue('');
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
    <>
      <div
        role="button"
        onClick={() => setToggle(!toggle)}
        tabIndex={0}
      >
        {children}
      </div>
      <Drawer
        anchor="top"
        open={toggle}
        onClose={toggleDrawer(false)}
        sx={{
          '& .MuiPaper-elevation': {
            maxWidth: '100%',
            minHeight: '100vh',
            marginX: 'auto',
            margin: '8px',
            backgroundColor: 'transparent',
            boxShadow: 'none',
            overflowY: 'auto',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            pointerEvents: 'none',
          },
        }}
      >
        <div className="max-w-4xl pointer-events-auto bg-white flex py-3 px-4 md:p-8 flex-col items-center w-full">
          <div className="w-full md:max-w-6xl flex-flex-col">
            <button
              type="button"
              onKeyDown={handleKeyDown}
              onClick={toggleDrawer(false)}
              className="text-brand-green flex flex-col items-center ml-auto"
            >
              <Close fontSize="large" />
              <span className="text-sm text-brand-green">ESC</span>
            </button>
            <div className="flex flex-col w-full">
              <h1 className="font-black text-xl tracking-wide text-brand-green">
                {isEdit ? 'Edit' : 'New'} Partner
              </h1>
              <form
                ref={formRef}
                onSubmit={event => {
                  event.preventDefault();
                  handleSubmit();
                }}
                className="mt-6"
              >
                <div className="mb-6">
                  <label
                    htmlFor="email"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                  >
                    email
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={emailValue}
                    onChange={event =>
                      setEmailValue(event.target.value)
                    }
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
                    onChange={event =>
                      setPhoneValue(event.target.value)
                    }
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  />
                </div>
                <div className={'md-6 mb-6'}>
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
                  className="text-white bg-brand-green/80 hover:bg-brand-green focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </Drawer>
    </>
  );
};

export default AddPartnerForm;
