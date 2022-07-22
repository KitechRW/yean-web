import TopNav from 'modules/_partials/TopNav';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';
import { adminNavs } from 'system/static';

const AdminScaffold = ({ children }: any) => {
  const { pathname } = useRouter();
  return (
    <div className="flex flex-col w-full">
      <TopNav />
      <div className="z-0 relative min-h-screen flex w-full bg-cyan-201 overflow-y-auto overflow-x-hidden">
        <div className="hidden md:flex flex-col w-1/6 top-0 sticky px-2 bg-[#FBFBFB] border-r border-gray-200">
          <div className="flex w-full mt-2" />
          {adminNavs.map(element => {
            const active = pathname.includes(element.path);
            return (
              <Link key={element.label} href={element.path}>
                <div
                  className={
                    active
                      ? 'cursor-pointer relative w-full py-1'
                      : 'cursor-pointer w-full py-1'
                  }
                >
                  <h2
                    className={`flex items-center space-x-3 py-2 font-medium px-4 w-full truncate ${
                      active
                        ? 'bg-brand-green/70 text-white rounded-lg'
                        : 'text-[#A0AAC8]'
                    }`}
                  >
                    <element.icon />
                    <span className='truncate'>{element.label}</span>
                  </h2>
                </div>
              </Link>
            );
          })}
          <div className="flex flex-col mt-auto">
            <p className="mt-12 text-xs py-2 px-4">
              &copy; {new Date().getFullYear()} Yean
            </p>
          </div>
        </div>
        <div className="w-full flex flex-col lg:w-5/6 h-full bg-white rounded-3xl z-30">
          {children}
        </div>
      </div>
    </div>
  );
};

export default AdminScaffold;
