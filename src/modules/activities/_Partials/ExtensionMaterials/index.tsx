import { Avatar } from '@mui/material';
import Image from 'next/image';
import React from 'react';

const ExtensionMaterials = ({ size = 18, onClick = () => {} }) => {
  return (
    <div className="w-full justify-center max-w-6xl mx-auto flex items-center flex-wrap gap-4">
      {new Array(size).fill(0).map((element, index) => (
        <div
          key={element}
          role="button"
          tabIndex={index}
          onClick={onClick}
          className="flex flex-col border border-[#E6E6E6] ml-10 mb-10 rounded-sm shadow-md px-4 pt-5 pb-7"
        >
          <Image
            src="/assets/images/cow-2.png"
            alt=""
            layout="fixed"
            height={"236px"}
            width={"298px"}
            loading="lazy"
          />
          <div className="bottom-0 left-0 right-0 relative flex flex-col items-start w-full">
            <p className="w-full bg-[#FCB316] h-1" />
            <p className="bg-dark-green text-white text-center w-full px-4 py-3">
              Cows
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ExtensionMaterials;
