import { Person } from '@mui/icons-material';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';
import { navs } from 'system/static';

const NavItems = ({
  className = 'hidden md:flex items-center space-x-8',
}) => {
  const { pathname } = useRouter();
  return (
    <div className={className}>
      {navs.map((element, index) => {
        const isLastIndex = index === navs.length - 1;
        return (
          <Link key={element.label} href={element.path}>
            <h2
              className={`hover:opacity-75 cursor-pointer ${
                pathname === element.path
                  ? 'border-b-4 border-brand-yellow'
                  : 'border-none'
              } ${
                isLastIndex
                  ? 'bg-brand-yellow rounded-full drop-shadow px-12 py-3 font-semibold text-white flex items-center space-x-2'
                  : 'text-dark-green font-medium py-4'
              }`}
            >
              {isLastIndex ? <Person /> : null}
              <span>{element.label}</span>
            </h2>
          </Link>
        );
      })}
    </div>
  );
};

export default NavItems;
