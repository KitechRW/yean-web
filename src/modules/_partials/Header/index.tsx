import Wrapper from 'modules/layouts/Wrapper';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';
import Logo from '../Logo';
import MenuIcon from '../_drawable/icons/menuIcon';
import RockIcon from '../_drawable/icons/rockIcon';

export const navs = [
  {
    path: '/',
    label: 'Home',
  },
  {
    path: '/about',
    label: 'About us',
  },
  {
    path: '/blog',
    label: 'Blog',
  },
  {
    path: '/contact',
    label: 'Contact us',
  },
  {
    path: '/login',
    label: 'Login',
  },
];

const Header = () => {
  const { pathname } = useRouter();
  return (
    <Wrapper className='bg-white'>
      <nav className="w-full flex items-center justify-between space-x-12">
        <Logo />
        <button type="button" className="md:hidden">
          <MenuIcon />
        </button>
        <div className="hidden md:flex items-center space-x-8">
          {navs.map((element, index) => {
            return (
            <Link key={element.label} href={element.path}>
              <h2
                className={`cursor-pointer text-dark-green font-medium py-4 ${
                  pathname === element.path
                    ? 'border-b-4 border-brand-yellow'
                    : 'border-none'
                }`}
              >
                {element.label}
              </h2>
            </Link>
          )
          })}
        </div>
      </nav>
    </Wrapper>
  );
};

export default Header;
