import React from 'react';
import { Avatar } from '@mui/material';
import { Search } from '@mui/icons-material';
import Logo from 'modules/_partials/Logo';
import { navs } from 'system/static';
import { useNavbar } from 'modules/contexts/NavbarContext';
import LeftDrawer from '../LeftDrawer';
import InViewport from '../InViewport';
import NotificationList from '../NotificationList';
import ProfilePopup from '../ProfilePopup';

const TopNav = ({
  className,
  title,
  name,
}: {
  className?: string;
  title?: string;
  name?: string;
}) => {
  const headerRef = React.useRef(null);
  const { viewHeader, setViewHeader } = useNavbar();

  const handleViewHeader = React.useCallback((view: boolean) => {
    setViewHeader(view);
  }, []);
  return (
    <>
      <div className="invisible" ref={headerRef}>
        <InViewport
          onEnterViewport={() => handleViewHeader(true)}
          onLeaveViewport={() => handleViewHeader(false)}
        />
      </div>
      <div
        className={`top-0 sticky px-4 lg:pl-6 flex items-center justify-between md:px-8 w-full ${className} ${
          viewHeader
            ? 'rounded-t-3xl py-4'
            : 'border-b border-b-gray-201 drop-shadow-sm py-2'
        }`}
      >
        <div className="flex items-center lg:hidden">
          <LeftDrawer navs={navs} />
          <div className="ml-2 hidden sm:block">
            <Logo />
          </div>
        </div>
        <h1 className="hidden lg:block text-3xl text-brand-blue whitespace-nowrap truncate">
          {title}
          {name ? <span className="font-black">, {name}</span> : null}
        </h1>
        <div className="pl-6 md:pl-12 flex items-center space-x-6">
          <button
            type="button"
            className="text-[#7979B2] space-x-12 bg-cyan-201 px-4 py-3 flex items-center rounded rounded-tl-3xl rounded-br-3xl"
          >
            <span>Search</span>
            <Search />
          </button>
          <NotificationList />
          <ProfilePopup />
        </div>
      </div>
    </>
  );
};

TopNav.defaultProps = {
  title: 'Welcome',
  name: 'Jackson',
  className: 'bg-white',
};
export default TopNav;
