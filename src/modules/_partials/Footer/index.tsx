import Wrapper from 'modules/layouts/Wrapper';
import Link from 'next/link';
import React from 'react';

const Footer = () => {
  return (
    <Wrapper className="bg-brand-violet py-3">
      <p className="text-center font-black text-white text-base">
        YEAN &copy; {new Date().getFullYear()} - All rights Reserved
      </p>
    </Wrapper>
  );
};

export default Footer;
