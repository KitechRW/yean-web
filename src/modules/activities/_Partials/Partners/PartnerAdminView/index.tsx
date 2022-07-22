import Image from "next/image";
import React from "react";
import CloseIcon from "@mui/icons-material/Close";
import Drawer from "@mui/material/Drawer";
import AddPartnerForm from "modules/activities/_Partials/Partners/AddPartner";

const PartnerAdminView = ({imageUrl, companyName, email, phone}:any) => {
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



  return <>
    <div  className="max-w-xs bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
      <Image
        src={imageUrl}
        alt=""
        width={"320px "}
        height={"200px"}
        objectFit="cover"
        priority
      />

      <div className="p-5">
        <div >
          <h6 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">{companyName}</h6>
        </div>
        <button onClick={() => setToggle(!toggle)}
                className="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-brand-green/70 rounded-lg hover:bg-brand-green focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
          edit
          <svg aria-hidden="true" className="ml-2 -mr-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20"
               xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd"
                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                  clipRule="evenodd"></path>
          </svg>
        </button>
      </div>
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
            <AddPartnerForm email={email} companyName={companyName} phone={phone} />
          </div>
        </div>
      </div>
    </Drawer>

  </>
}
export default PartnerAdminView;
