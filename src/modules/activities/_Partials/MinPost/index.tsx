import CustomImage from 'modules/_partials/CustomImage';
import { useRouter } from 'next/router';
import React from 'react';

const MinPost = ({ data }: { data: any }) => {
  const { push } = useRouter();
  const handleClick = () => {
    push(`/blog/${data?.id}`);
  };
  return (
    <div
      role="button"
      onClick={handleClick}
      className="flex flex-col rounded-[15px] drop-shadow border border-gray-400"
    >
      <div className="min-h-[192.97px] flex relative">
        <CustomImage
          src={data.image}
          alt=""
          layout="fill"
          className="rounded-[15px]"
          objectFit="cover"
          loading="lazy"
        />
      </div>

      {/* <button className="mr-auto rounded-sm bg-dark-green -translate-y-4 text-white py-2 px-3">
        Ubuhinzi
      </button> */}
      <p className="p-2 text-dark-green line-clamp-2 pb-2">
        {data?.title}
      </p>
      <div className="pt-2 p-2 mt-auto">
        <button className="font-semibold px-4 py-2 mr-auto text-white rounded-lg bg-dark-green">
          Learn More
        </button>
      </div>
    </div>
  );
};

export default MinPost;
