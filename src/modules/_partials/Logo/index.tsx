import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Logo = ({ logo = '/assets/images/Yean_Logo.png' }) => {
  return (
    <Link href="/">
      <Image
        src={logo}
        alt=""
        // objectFit="cover"
        width="105.93px"
        height="69px"
        layout="fixed"
        className='cursor-pointer'
      />
    </Link>
  );
};

export default Logo;
