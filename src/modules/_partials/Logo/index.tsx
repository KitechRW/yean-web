import Link from 'next/link';
import React from 'react';
import SmillingIcon from '../_drawable/icons/smillingIcon';

const Logo = () => {
  return (
    <Link href="/">
      <div className="py-1 px-4 cursor-pointer flex items-center space-x-1">
        <SmillingIcon />
        <h1 className="text-2xl font-black text-brand-blue">
          BuyPress
        </h1>
      </div>
    </Link>
  );
};

export default Logo;
