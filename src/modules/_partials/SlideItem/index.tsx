import { LocalLibrary } from '@mui/icons-material';
import { useRouter } from 'next/router';
import React from 'react';
import CustomImage from '../CustomImage';
import axios from 'axios';
const SlideItem = ({ data }: { data: any }) => {
  const router = useRouter();
  let viewIncrement = 0;
  const handleClick = async () => {
    router.push(`/blog/${data?.slug || data?.id}`);
    viewIncrement = data?.views + 1;
    axios.patch(`/api/views/${data?.id}`, { views: viewIncrement });
  };
  let image: string = data?.image || '';
  image = image.startsWith('/uploads') ? image : `/uploads/${image}`;
  return (
    <div className="shrink-0 snap-start inline-grid items-center gap-x-10 gap-y-5 md:grid-cols-2 bg-brand-green px-4 md:px-0 py-4 md:py-8 w-full">
      <div className="flex flex-col items-start md:pl-8">
        <h1 className="font-bold text-2xl md:text-4xl text-white tracking-wide">
          {data?.title}
        </h1>
        {/* <p className="text-white text-sm md:text-base leading-relaxed mt-3 md:mt-6">
          {data?.desc}
        </p> */}
        <button
          type="button"
          onClick={handleClick}
          className="uppercase rounded-sm mt-3 md:mt-6 px-4 py-2 bg-brand-yellow flex items-center space-x-2 text-white"
        >
          <LocalLibrary />
          <span>Learn more</span>
        </button>
      </div>
      <div className="flex flex-col relative min-h-[418px]">
        <CustomImage
          src={image}
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
