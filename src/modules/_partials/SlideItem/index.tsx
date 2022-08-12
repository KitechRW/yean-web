import { LocalLibrary } from '@mui/icons-material';
import React from 'react';
import CustomImage from '../CustomImage';

const SlideItem = ({ data }: { data: any }) => {
  return (
    <div className="shrink-0 snap-start inline-grid items-center gap-x-10 gap-y-5 md:grid-cols-2 bg-brand-green px-4 md:px-0 py-4 md:py-8 w-full">
      <div className="flex flex-col items-start md:pl-8">
        <h1 className="font-black text-3xl md:text-6xl text-white tracking-wide">
          {data?.title}
        </h1>
        <p className="text-white text-sm md:text-base leading-relaxed mt-3 md:mt-6">
          {data?.desc}
        </p>
        <button
          type="button"
          className="uppercase rounded-sm mt-3 md:mt-6 px-4 py-2 bg-brand-yellow flex items-center space-x-2 text-white"
        >
          <LocalLibrary />
          <span>Learn more</span>
        </button>
      </div>
      <div className="flex flex-col relative min-h-[418px]">
        <CustomImage
          src={data?.image}
          alt=""
          layout="fill"
          priority
          objectFit="cover"
        />
      </div>
    </div>
  );
};

export default SlideItem;
