import { Star, ThumbDown, ThumbUp } from '@mui/icons-material';
import Image from 'next/image';
import React from 'react';

const Testimonial = () => {
  return (
    <div className="flex flex-col rounded bg-white drop-shadow p-3">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <Image
            src="/assets/images/Avatar.png"
            alt=""
            width="40px"
            height="40px"
            className="rounded-full"
          />
          <div className="flex flex-col">
            <h1 className="text-base font-semibold text-gray-600">
              Kagabo Frank
            </h1>
            <p className="text-sm text-gray-600">133 reviews</p>
          </div>
        </div>
        <div className="flex items-center space-x-4 pl-8">
          <button className="text-[#0E4DA4]">
            <ThumbUp />
          </button>
          <button className="text-gray-600">
            <ThumbDown />
          </button>
        </div>
      </div>
      <div className="flex space-x-1 py-3 items-center">
        <Star fontSize="small" className="text-[#1BB55C]" />
        <Star fontSize="small" className="text-[#1BB55C]" />
        <Star fontSize="small" className="text-[#1BB55C]" />
        <Star fontSize="small" className="text-gray-600" />
        <Star fontSize="small" className="text-gray-600" />
        <p className="text-xs text-gray-600 pl-3">3 days ago</p>
      </div>
      <p className="text-sm text-gray-600">
        This is a sample text for yean community testmonials from your
        Team, visitors, farmers or anyhwere, Thanks
      </p>
    </div>
  );
};

export default Testimonial;
