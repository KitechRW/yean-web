import Image from 'next/image';
import { useRouter } from 'next/router';
import React from 'react';

const SlideUpItem = ({
  path = '/extension-material',
  title = 'Extension material',
  subTitle = 'Imfashanyigisho',
  image = 'agriculture',
  desc = `Extension materials for Crop and Livestock Commodities for extension agents and farmers`,
}) => {
  const router = useRouter();
  return (
    <div
      role="button"
      onClick={() => {
        router.push(path);
      }}
      className="group flex flex-col relative rounded-[15px] min-h-[380px]"
    >
      <div className="group-hover:flex slideInUp flex-col h-full top-0 absolute w-full hidden">
        <Image
          src="/assets/images/blog post 1.png"
          alt=""
          layout="fill"
          className="rounded-[15px]"
        />
      </div>
      <div className="flex-grow flex group-hover:bg-[#660A0A]/80 space-y-6 justify-center flex-col items-center py-4 px-6 rounded-[15px] drop-shadow border border-gray-400">
        <span className="text-brand-green material-symbols-outlined text-6xl md:text-9xl group-hover:text-white">
          {image}
        </span>
        <p className="text-brand-green font-bold text-xl text-center">
          {title}
        </p>
        <p className="text-brand-green font-bold text-base text-center">
          {subTitle}
        </p>
        <p className="hidden group-hover:block text-sm text-white text-center">
          {desc}
        </p>
      </div>
    </div>
  );
};

export default SlideUpItem;
