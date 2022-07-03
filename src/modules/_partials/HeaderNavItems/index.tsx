import { ArrowDropDown } from '@mui/icons-material';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';
import { headerNavs } from 'system/static';
import WedoPopup from '../WedoPopup';

const HeaderNavItems = ({ className = 'flex items-center' }) => {
  const { pathname } = useRouter();
  return (
    <div className={className}>
      {headerNavs.map((element, index) => {
        if (index === 1) {
          return (
            <WedoPopup
              icon={<element.icon />}
              active={pathname === element.path}
              label={element.label}
            />
          );
        }
        return (
          <Link
            key={element.label}
            href={element.path}
            className="group"
          >
            <h2
              className={`whitespace-nowrap border-r border-opacity-06 px-2 md:px-4 flex items-center font-medium space-x-2 py-4 hover:opacity-75 bg-brand-green text-white cursor-pointer ${
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
