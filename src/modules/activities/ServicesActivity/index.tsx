import { ChevronRight } from '@mui/icons-material';
import Scaffold from 'modules/layouts/Scaffold';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const ServicesActivity = () => {
  return (
    <Scaffold>
      <div className="flex flex-col w-full relative bg-brand-green min-h-[250px]">
        <Image
          src="/assets/images/about-page.png"
          alt=""
          layout="fill"
          objectFit="cover"
          priority
        />
        <div className="flex flex-col h-full w-full justify-end p-4 md:p-8 top-0 absolute z-10">
          <h1 className="text-3xl md:text-6xl font-black tracking-wide text-white">
            Services
          </h1>
          <p className="flex items-center space-x-2 text-sm text-white">
            <Link href="/#">What we do?</Link> <ChevronRight />{' '}
            Services - Design and implement youth led program
          </p>
        </div>
      </div>
    </Scaffold>
  );
};

export default ServicesActivity;
