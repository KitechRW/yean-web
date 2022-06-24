import React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { Menu as MenuIcon } from '@mui/icons-material';
import Logo from '../Logo';

const LeftDrawer = ({ navs }: { navs: any[] }) => {
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
      <button type="button" onClick={() => setToggle(!toggle)}>
        <MenuIcon />
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
          <div className="flex py-3 flex-col flex-grow min-h-screen overflow-y-auto w-full">
            <Logo />
            <div className="flex w-full mt-6" />
            {navs.map((element: any) => {
              const active = pathname.includes(element.path);
              return (
                <Link key={element.label} href={element.path}>
                  <div className="cursor-pointer px-3 w-full py-1">
                    <h2
                      className={`flex items-center py-2 space-x-3 font-medium px-4 w-full truncate ${
                        active
                          ? 'bg-white text-brand-blue rounded-lg'
                          : 'text-[#A0AAC8]'
                      }`}
                    >
                      <element.icon
                        color={active ? '#42427D' : '#A0AAC8'}
                      />
                      <span>{element.label}</span>
                    </h2>
                  </div>
                </Link>
              );
            })}
            <div className="flex flex-col mt-auto">
              <p className="mt-12 text-xs py-2 px-4">
                &copy; {new Date().getFullYear()} BuyPress
              </p>
            </div>
          </div>
        </Box>
      </Drawer>
    </>
  );
};

export default LeftDrawer;
