import { Avatar } from '@mui/material';
import Image from 'next/image';
import React from 'react';

const Blogs = ({ size = 18, onClick = () => {} }) => {
  return (
    <div className="w-full justify-center max-w-6xl mx-auto flex items-center flex-wrap gap-4">
      {new Array(size).fill(0).map((element, index) => (
        <div
          key={element}
          role="button"
          tabIndex={index}
          onClick={onClick}
          className="flex flex-col w-full max-w-[298px] border border-[#E6E6E6] rounded-sm"
        >
          <div className="group-hover:opacity-80 flex flex-col relative min-w-[298px] min-h-[153px]">
            <Image
              src="/assets/images/cow.png"
              alt=""
              layout="fill"
              loading="lazy"
            />
            <div className="bottom-0 left-0 right-0 absolute flex flex-col items-start w-ful">
              <p className="text-dark-green bg-[#FCB316] px-4 py-3">
                Blog
              </p>
              <p className="w-full bg-[#FCB316] h-1" />
            </div>
          </div>
          <p className="hover:underline-offset-1 px-3 py-4 text-[#6F7D1D]">
            African, American leaders agree to cooperate on
            agricultural and food systems transformation strategies
          </p>
          <div className="px-3 pb-3 space-x-3 flex items-center">
            <Avatar src="/assets/images/avatar.png" alt="Fridolin" />
            <div className="flex flex-col text-[#767676]">
              <h1 className="text-base font-bold">Fridolin</h1>
              <p className="text-xs">12 April 2022</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Blogs;
