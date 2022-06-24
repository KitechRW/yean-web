import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';
import MenuIcon from '../_drawable/icons/menuIcon';
import RockIcon from '../_drawable/icons/rockIcon';

export const navs = [
  {
    path: '/',
    label: 'Home',
  },
  {
    path: '/about',
    label: 'About',
  },
  {
    path: '/products',
    label: 'Products',
  },
  {
    path: '/team',
    label: 'Team',
  },
  {
    path: '/contact',
    label: 'Contact',
  },
  {
    path: '/blog',
    label: 'Blog',
  },
  {
    path: '/register',
    label: 'Register',
  },
];

const Header = () => {
  const { pathname } = useRouter();
  return (
    <nav className="w-full md:max-w-6xl flex items-center justify-between space-x-12">
      <Link href="/">
        <div className="py-1 cursor-pointer flex items-center space-x-1">
          <RockIcon />
          <h1 className="text-2xl font-black">Urutare</h1>
        </div>
      </Link>
      <button type="button" className="md:hidden">
        <MenuIcon />
      </button>
      <div className="hidden md:flex items-center space-x-12">
        {navs.map(element => (
          <Link key={element.label} href={element.path}>
            <h2
              className={`cursor-pointer py-4 ${
                pathname === element.path
                  ? 'border-b-4 border-blue-500'
                  : 'border-none'
              }`}
            >
              {element.label}
            </h2>
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default Header;
