import CustomImage from 'modules/_partials/CustomImage';
import React from 'react';

const Partners = ({ partners = [] }) => {
  return (
    <>
      {partners.map(element => (
        <CustomImage
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
