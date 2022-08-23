import Wrapper from 'modules/layouts/Wrapper';
import React from 'react';
import Logo from '../Logo';
import NavItems from '../NavItems';
import LeftDrawer from '../LeftDrawer';
import HeaderNavItems from '../HeaderNavItems';
import { Search } from '@mui/icons-material';

const Header = () => {
  return (
    <>
      <Wrapper className="bg-white px-4 md:px-8">
        <nav className="w-full flex items-center justify-between space-x-12">
          <Logo />
          <LeftDrawer />
          <NavItems />
        </nav>
      </Wrapper>
      <Wrapper className="overflow-x-auto bg-brand-green px-4 md:px-8 border-b border-opacity-06">
        <div className="flex items-center md:space-x-6 justify-between">
          <HeaderNavItems />
          <label
            htmlFor="search"
            className="hidden md:flex text-white items-center relative"
          >
            <Search className="left-3 absolute" />
            <input
              type="search"
              name=""
              id="search"
              readOnly
              placeholder="Search"
              className="placeholder:text-center rounded-full px-12 placeholder:font-bold placeholder:text-white outline-none bg-white bg-opacity-20 py-2"
            />
          </label>
        </div>
      </Wrapper>
    </>
  );
};

export default Header;
