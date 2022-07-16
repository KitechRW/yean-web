import { partners } from 'modules/activities/LandingActivity';
import Image from 'next/image';
import React from 'react';

const Partners = () => {
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
