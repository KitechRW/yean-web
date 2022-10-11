import React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { Menu as MenuIcon, Search } from '@mui/icons-material';
import Logo from '../Logo';
import NavItems from '../NavItems';
import { navs } from 'system/static';
import ProfilePopup from '../ProfilePopup';
import { useNavbar } from 'modules/contexts/NavbarContext';

const LeftDrawer = ({
  items = navs,
  hideUser = false,
  onSearch,
}: {
  items?: any[];
  onSearch?: any;
  hideUser?: boolean;
}) => {
  const { profile } = useNavbar();
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
      <div className="flex items-center space-x-3">
        {onSearch && (
          <label
            htmlFor="search"
            className="flex text-white items-center relative md:hidden"
          >
            <Search className="left-3 absolute" />
            <input
              type="search"
              name=""
              id="search"
              onClick={onSearch}
              readOnly
              placeholder="Search"
              className="w-full placeholder:text-center rounded-full px-12 placeholder:font-bold placeholder:text-white outline-none bg-brand-green/70 bg-opacity-20 py-2"
            />
          </label>
        )}
        {profile?.user && !hideUser && (
          <div className="flex md:hidden relative flex-col">
            <ProfilePopup />
          </div>
        )}
        <button
          type="button"
          onClick={() => setToggle(!toggle)}
          className="md:hidden"
        >
          <MenuIcon fontSize="large" />
        </button>
      </div>

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
