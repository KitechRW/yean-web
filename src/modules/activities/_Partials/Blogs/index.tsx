import { Avatar } from '@mui/material';
import CustomImage from 'modules/_partials/CustomImage';
import Image from 'next/image';
import React from 'react';

const Blogs = ({
  size = 18,
  onClick = (id: any) => {},
  articles = { rows: [] },
}) => {
  const fetchUser = (userId: number) => {
    return { firstName: 'nkubito' };
  };
  return (
    <div className="w-full justify-center max-w-6xl mx-auto flex flex-wrap gap-4">
      {articles?.rows?.map((element: any, index) => (
        <div
          key={JSON.stringify(element)}
          role="button"
          tabIndex={index}
          onClick={() => {
            onClick(element?.id);
          }}
          className="flex flex-col w-full max-w-[298px] border border-[#E6E6E6] rounded-sm"
        >
          <div className="group-hover:opacity-80 flex flex-col relative min-w-[298px] min-h-[153px]">
            <CustomImage
              src={element.image}
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
          <p className="px-3 py-4 text-[#6F7D1D] w-full line-clamp-1">
            {element?.title}
          </p>
          <div className="px-3 pb-3 space-x-2 flex items-center mt-auto pt-3">
            <Avatar
              src="/assets/images/avatar.png"
              sx={{ width: '24px', height: '24px' }}
              alt={element?.author?.firstname}
            />
            <div className="flex flex-col text-[#767676]">
              <h1 className="text-xs">
                {element?.author?.firstname}{' '}
                {element?.author?.lastname}
              </h1>
              {/* <p className="text-xs">12 April 2022</p> */}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Blogs;
