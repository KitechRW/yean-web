import Wrapper from 'modules/layouts/Wrapper';
import React from 'react';
import Logo from '../Logo';
import NavItems from '../NavItems';
import LeftDrawer from '../LeftDrawer';
import HeaderNavItems from '../HeaderNavItems';
import { Search } from '@mui/icons-material';
import SearchModal from '../SearchModal';

const Header = () => {
  const [searchModalOpen, setSearchModalOpen] = React.useState(false);
  const onSearch = (event: any) => {
    event.stopPropagation();
    setSearchModalOpen(true);
  };
  return (
    <>
      <Wrapper className="bg-white px-4 md:px-8">
        <nav className="w-full flex items-center justify-between space-x-12">
          <Logo />
          <LeftDrawer onSearch={onSearch} />
          <NavItems />
        </nav>
      </Wrapper>
      <Wrapper className="overflow-x-auto bg-brand-green px-4 md:px-8 border-b border-opacity-06">
        <div className="flex items-center md:space-x-6 justify-between">
          <HeaderNavItems />
          <label
            htmlFor="search"
            className="hidden z-20 md:flex text-white items-center relative"
          >
            <Search className="left-3 absolute" />
            <input
              type="search"
              name=""
              id="search"
              onClick={onSearch}
              readOnly
              placeholder="Search"
              className="placeholder:text-center rounded-full px-12 placeholder:font-bold placeholder:text-white outline-none bg-white bg-opacity-20 py-2"
            />
          </label>
        </div>
        <SearchModal
          id="search-modal"
          searchId="search"
          modalOpen={searchModalOpen}
          setModalOpen={setSearchModalOpen}
        />
      </Wrapper>
    </>
  );
};

export default Header;
