import Wrapper from 'modules/layouts/Wrapper';
import React from 'react';
import Logo from '../Logo';
import NavItems from '../NavItems';
import LeftDrawer from '../LeftDrawer';
import HeaderNavItems from '../HeaderNavItems';

const Header = () => {
  return (
    <>
      <Wrapper className="bg-white">
        <nav className="w-full flex items-center justify-between space-x-12">
          <Logo />
          <LeftDrawer />
          <NavItems />
        </nav>
      </Wrapper>
      <Wrapper className='bg-brand-green'>
        <HeaderNavItems />
      </Wrapper>
    </>
  );
};

export default Header;
