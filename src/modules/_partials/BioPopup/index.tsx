import React from 'react';
import Drawer from '@mui/material/Drawer';
import { useRouter } from 'next/router';
import CloseIcon from '@mui/icons-material/Close';
import Image from 'next/image';
import Team from 'modules/activities/_Partials/About/Team';

const BioPopup = ({
  firstName,
  lastName,
  desc,
  image,
  title,
}: any) => {
  const { pathname } = useRouter();
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
      <Team onClick={() => setToggle(!toggle)} />
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
              <Team />
              <div className="flex flex-col md:col-span-2">
                <div className="flex flex-col pb-2 border-b border-brand-green">
                  <p className="text-xl md:text-2xl text-brand-green">
                    <span className="font-bold">{firstName}Etienne</span>{' '}
                    {lastName}NIYIGABA
                  </p>
                  <p className="mt-1 text-brand-green text-sm">
                    {title}Founder & CEO
                  </p>
                </div>
                <p className="mt-3 text-sm">
                  {desc}Kelvin is a social entrepreneur based in the
                  Western region of Kenya. He is dedicated to
                  empowering youth and children through his SAIDE
                  Community Library by providing free learning
                  opportunities through digital literacy programs and
                  community outreach programs. Kelvin has worked with
                  partners such as American Friends of Kenya,
                  Worldreader, Population Service International Kenya,
                  Foundation for Sustainable Development among others.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Drawer>
    </>
  );
};

export default BioPopup;
