import Link from 'next/link';
import React from 'react';
import RockIcon from '../_drawable/icons/rockIcon';

const Footer = () => {
  return (
    <footer className="mt-auto bg-[#020609] text-white flex flex-col items-center px-4 md:px-8 py-8 md:py-12 w-full">
      <div className="w-full md:max-w-6xl grid md:grid-cols-4 gap-x-10 gap-y-5">
        <div className="flex flex-col items-start">
          <Link href="/">
            <h1 className="cursor-pointer">
              <RockIcon />
              <span className="text-sm mt-1">Urutare Inc.</span>
            </h1>
          </Link>
        </div>
        <div className="flex flex-col">
          <h3 className="text-xl md:text-2xl font-black">Products</h3>
          <div className="flex flex-col items-start space-y-3 mt-6">
            <Link href="#stockM">StockM</Link>
            <Link href="#stockM">StockM</Link>
            <Link href="#stockM">StockM</Link>
            <Link href="#stockM">StockM</Link>
          </div>
        </div>
        <div className="flex flex-col">
          <h3 className="text-xl md:text-2xl font-black">
            Contact us
          </h3>
          <div className="flex flex-col items-start space-y-3 mt-6">
            <a href="mailto:info@urutare.com">info@urutare.com</a>
            <a href="tel:+250780000000">+250 780 000 000</a>
          </div>
        </div>
        <div className="flex flex-col">
          <h3 className="text-xl md:text-2xl font-black">
            Resources
          </h3>
          <div className="flex flex-col items-start space-y-3 mt-6">
            <Link href="#terms">Terms and condition</Link>
            <Link href="#policy">Privacy Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
