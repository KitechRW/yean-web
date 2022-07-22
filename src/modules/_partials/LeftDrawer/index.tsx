import React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { Menu as MenuIcon } from '@mui/icons-material';
import Logo from '../Logo';
import NavItems from '../NavItems';
import { navs } from 'system/static';

const LeftDrawer = ({ items = navs }: { items?: any[] }) => {
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

  return (
    <>
      <button
        type="button"
        onClick={() => setToggle(!toggle)}
        className="md:hidden"
      >
        <MenuIcon fontSize="large" />
      </button>
      <Drawer
        anchor="left"
        open={toggle}
        onClose={toggleDrawer(false)}
      >
        <Box
          sx={{
            width: 250,
            backgroundColor: '#F7FAFF',
          }}
          role="presentation"
          onClick={toggleDrawer(false)}
          onKeyDown={toggleDrawer(false)}
        >
          <div className="flex py-3 px-4 flex-col flex-grow min-h-screen overflow-y-auto w-full">
            <Logo />
            <div className="flex w-full mt-6" />
            <NavItems items={items} className="flex flex-col" />
            <div className="flex flex-col mt-auto">
              <p className="mt-12 text-xs py-2 px-4">
                &copy; {new Date().getFullYear()} yean
              </p>
            </div>
          </div>
        </Box>
      </Drawer>
    </>
  );
};

export default LeftDrawer;
