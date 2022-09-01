import React from 'react';
import { Avatar } from '@mui/material';
import { Search } from '@mui/icons-material';
import { adminNavs } from 'system/static';
import { useNavbar } from 'modules/contexts/NavbarContext';
import LeftDrawer from '../LeftDrawer';
import InViewport from '../InViewport';
import NotificationList from '../NotificationList';
import ProfilePopup from '../ProfilePopup';
import Logo from '../Logo';

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
        className={`py-0.5 top-0 sticky px-4 lg:pl-6 flex items-center justify-between md:px-8 w-full ${className} ${
          viewHeader
            ? 'rounded-t-3xl'
            : 'border-b border-b-gray-201 drop-shadow-sm'
        } bg-[#FBFBFB] border-b border-gray-200 z-50`}
      >
        <div className="flex items-center lg:hidden">
          <LeftDrawer items={adminNavs} />
        </div>
        <div className="hidden md:block">
          <Logo />
        </div>
        <div className="ml-auto pl-6 md:pl-12 flex items-center space-x-6">
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
