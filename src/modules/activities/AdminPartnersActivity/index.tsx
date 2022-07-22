import React, {useRef, useState} from 'react'
import Image from "next/image";
import {partners} from "./data"
import CloseIcon from "@mui/icons-material/Close";
import Drawer from "@mui/material/Drawer";
import PartnerAdminView from "modules/activities/_Partials/Partners/PartnerAdminView";
import Dropzone from "modules/_partials/ImageUpload";

const AdminPartnersActivity = () => {
  const fileInputRef = useRef();
  const modalImageRef = useRef();
  const modalRef = useRef();
  const progressRef = useRef();
  const uploadRef = useRef();
  const uploadModalRef = useRef();
  const [selectedFiles, setSelectedFiles] = useState([]);
  const [unsupportedFiles, setUnsupportedFiles] = useState([]);
  const [errorMessage, setErrorMessage] = useState('');
  const [validFiles, setValidFiles] = useState([]);

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

  return (
    <>
      <div>
        <section>
          <header className="bg-white space-y-4 p-4 sm:px-8 sm:py-6 lg:p-4 xl:px-8 xl:py-6">
            <div className="flex items-center justify-between">
              <h2 className="font-semibold text-slate-900">Partners</h2>
              <button onClick={() => setToggle(!toggle)}
                className="hover:bg-brand-green group flex items-center rounded-md bg-brand-green/80 text-white text-sm font-medium pl-2 pr-3 py-2 shadow-sm">
                <svg width="20" height="20" fill="currentColor" className="mr-2" aria-hidden="true">
                  <path d="M10 5a1 1 0 0 1 1 1v3h3a1 1 0 1 1 0 2h-3v3a1 1 0 1 1-2 0v-3H6a1 1 0 1 1 0-2h3V6a1 1 0 0 1 1-1Z" />
                </svg>
                New
              </button>
            </div>
            <form className="group relative">
              <svg width="20" height="20" fill="currentColor" className="absolute left-3 top-1/2 -mt-2.5 text-slate-400 pointer-events-none group-focus-within:text-blue-500" aria-hidden="true">
                <path fillRule="evenodd" clipRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" />
              </svg>
              <input className="focus:ring-2 focus:ring-blue-500 focus:outline-none appearance-none w-full text-sm leading-6 text-slate-900 placeholder-slate-400 rounded-md py-2 pl-10 ring-1 ring-slate-200 shadow-sm" type="text" aria-label="Filter projects" placeholder="Filter Partners..."/>
            </form>
          </header>
          <ul className="bg-slate-50 p-4 sm:px-8 sm:pt-6 sm:pb-8 lg:p-4 xl:px-8 xl:pt-6 xl:pb-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 text-sm leading-6">
            {
              partners.map((eachPartner, index) => {
                return <li key={eachPartner.disc + index +"disc"} className={""}>
                  <PartnerAdminView disc={eachPartner.disc} imageUrl={eachPartner.imageUrl} />
                </li>
              })
            }

            <li className="flex">
              <button onClick={() => setToggle(!toggle)}
                className="hover:border-blue-500 hover:border-solid hover:bg-white hover:text-blue-500 group w-full flex flex-col items-center justify-center rounded-md border-2 border-dashed border-slate-300 text-sm leading-6 text-slate-900 font-medium py-3">
                <svg className="group-hover:text-blue-500 mb-1 text-slate-400" width="20" height="20" fill="currentColor" aria-hidden="true">
                  <path d="M10 5a1 1 0 0 1 1 1v3h3a1 1 0 1 1 0 2h-3v3a1 1 0 1 1-2 0v-3H6a1 1 0 1 1 0-2h3V6a1 1 0 0 1 1-1Z" />
                </svg>
                New Partner
              </button>
            </li>
          </ul>
        </section>
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
            // top: '92px',
            backgroundColor: 'transparent',
            boxShadow: 'none',
          },
        }}
      >
        <div className="min-h-screen overflow-y-auto bg-white flex py-3 px-4 md:p-8 flex-col items-center w-full">
          <div className="w-full md:max-w-6xl flex-flex-col">
            <button
              type="button"
              onKeyDown={handleKeyDown}
              onClick={toggleDrawer(false)}
              className="text-brand-green flex flex-col items-center ml-auto"
            >
              <CloseIcon fontSize="large" />
              <span className="text-sm text-brand-green">ESC</span>
            </button>

            <div className="w-full md:grid grid-cols-3 gap-x-10 flex-flex-col mt-4">
              <form>
                <div className="mb-6">
                  <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                    email</label>
                  <input type="email" id="email"
                         className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                         placeholder="name@yarn.com" />
                </div>
                <div className="mb-6">
                  <label htmlFor="companyName" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Company name</label>
                  <input type="text" id="companyName" placeholder={"Company name"}
                         className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                         />
                </div>
                <div className="mb-6">
                  <label htmlFor="telPhoneNumber" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Phone number</label>
                  <input type="tel" id="telPhoneNumber" placeholder={"Phone"}
                         className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                         />
                </div>
                <div className={"md-6 mb-6"}>
                  <Dropzone errorMessage={errorMessage} setErrorMessage={setErrorMessage} unsupportedFiles={unsupportedFiles} setUnsupportedFiles={setUnsupportedFiles} selectedFiles={selectedFiles} setSelectedFiles={setSelectedFiles} uploadModalRef={uploadModalRef} uploadRef={uploadRef} progressRef={progressRef} modalRef={modalRef} modalImageRef={modalImageRef} fileInputRef={fileInputRef} validFiles={validFiles} setValidFiles={setValidFiles} isOneImage={true}/>
                </div>

                <button type="submit"
                        className="text-white bg-brand-green/80 hover:bg-brand-green focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </Drawer>
    </>

  )
}

export default AdminPartnersActivity
