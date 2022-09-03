import Image from 'next/image';
import React from 'react';

const Partners = ({ partners = [] }) => {
  return (
    <>
      {partners.map(element => (
        <Image
          key={element}
          src={element}
          alt=""
          width="150px"
          height="92px"
        />
      ))}
    </>
  );
};

export default Partners;
