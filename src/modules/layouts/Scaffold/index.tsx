import React from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { navs } from 'system/static';
import Logo from 'modules/_partials/Logo';

const Scaffold = ({ children }: any) => {
  const { pathname } = useRouter();
  return (
    <div className="relative h-screen flex w-full bg-cyan-201 overflow-y-auto overflow-x-hidden">
      <div className="hidden lg:flex flex-col w-1/6 top-0 sticky pl-2">
        <Logo />
        <div className="flex w-full mt-6" />
        {navs.map((element: any) => {
          const active = pathname.includes(element.path);
          return (
            <Link key={element.label} href={element.path}>
              <div
                className={
                  active
                    ? 'cursor-pointer relative w-full py-1 ' +
                      "after:content-[''] after:rounded-tl-full after:rounded-br-full after:top-0 after:right-0 after:absolute after:w-1 after:h-3 after:translate-x-0.5 after:bg-white " +
                      "before:content-[''] before:rounded-bl-full before:rounded-tr-full before:bottom-0 before:right-0 before:absolute before:w-1 before:h-3 before:translate-x-0.5 before:bg-white"
                    : 'cursor-pointer w-full py-1'
                }
              >
                <h2
                  className={`flex items-center space-x-3 py-2 font-medium px-4 w-full truncate ${
                    active
                      ? 'bg-white text-brand-blue rounded-l-2xl'
                      : 'text-[#A0AAC8]'
                  }`}
                >
                  <element.icon
                    color={active ? '#42427D' : '#A0AAC8'}
                  />
                  <span>{element.label}</span>
                </h2>
              </div>
            </Link>
          );
        })}
        <div className="flex flex-col mt-auto">
          <p className="mt-12 text-xs py-2 px-4">
            &copy; {new Date().getFullYear()} BuyPress
          </p>
        </div>
      </div>
      <div className="w-full flex flex-col lg:w-5/6 h-full bg-white rounded-3xl z-30">
        {children}
      </div>
    </div>
  );
};

export default Scaffold;
