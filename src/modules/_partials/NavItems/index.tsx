import { Person } from '@mui/icons-material';
import { useNavbar } from 'modules/contexts/NavbarContext';
import { useWindow } from 'modules/contexts/WindowContext';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';
import { navs } from 'system/static';
import ProfilePopup from '../ProfilePopup';

const NavItems = ({
  items = navs,
  className = 'hidden md:flex items-center space-x-8',
}: {
  items?: any[];
  className?: string;
}) => {
  const { isSmallDevice } = useWindow();
  const { pathname } = useRouter();
  const { profile } = useNavbar();
  return (
    <div className={className}>
      {items.map((element, index) => {
        const isLogin = '/login' === element.path;
        if (profile?.user && isLogin && !isSmallDevice) {
          return <ProfilePopup />;
        }
        return (
          <Link
            key={element.label}
            href={profile?.user && isLogin ? '/logout' : element.path}
          >
            <h2
              className={`hover:opacity-75 cursor-pointer ${
                pathname === element.path
                  ? 'border-b-4 border-brand-yellow'
                  : 'border-none'
              } ${
                isLogin
                  ? 'bg-brand-yellow rounded-full drop-shadow px-12 py-3 font-semibold text-white flex items-center space-x-2'
                  : 'text-dark-green font-medium py-4'
              }`}
            >
              {isLogin ? <Person /> : null}
              <span>
                {profile?.user && isLogin ? 'Logout' : element.label}
              </span>
            </h2>
          </Link>
        );
      })}
    </div>
  );
};

export default NavItems;
