import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Logo = () => {
  return (
    <Link href="/">
      <div className="relative flex flex-col w-[105.93px] h-[69px]">
        <Image
          src="/assets/images/Yean_Logo.png"
          alt=""
          // objectFit="cover"
          layout="fill"
        />
      </div>
    </Link>
  );
};

export default Logo;
