import { ArrowDropDown } from '@mui/icons-material';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';
import { headerNavs } from 'system/static';

const HeaderNavItems = ({
  className = 'hidden md:inline-grid grid-cols-7',
}) => {
  const { pathname } = useRouter();
  return (
    <div className={className}>
      {headerNavs.map((element, index) => {
        return (
          <Link key={element.label} href={element.path}>
            <h2
              className={`border-r border-opacity-06 px-2 flex items-center font-medium space-x-2 py-3 hover:opacity-75 bg-brand-green text-white cursor-pointer ${
                pathname === element.path ? 'bg-opacity-30' : ''
              }`}
            >
              <element.icon />
              <span>{element.label}</span>
              {element.hasSub ? <ArrowDropDown /> : null}
            </h2>
          </Link>
        );
      })}
    </div>
  );
};

export default HeaderNavItems;
