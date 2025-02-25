import { ArrowRightAlt, RemoveRedEye } from '@mui/icons-material';
import CustomImage from 'modules/_partials/CustomImage';
import { useRouter } from 'next/router';
import React from 'react';
import axios from 'axios';

const MinPost = ({ data }: { data: any }) => {
  const { push } = useRouter();
  let viewIncrement = 0;
  const handleClick = async () => {
    push(`/blog/${data?.slug}`);
    viewIncrement = data?.views + 1;
    axios.patch(`/api/views/${data?.id}`, {
      views: viewIncrement,
    });
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

      {data?.category?.name && (
        <button className="mr-auto rounded-sm bg-dark-green -translate-y-4 text-white py-2 px-3">
          {data.category?.name}
        </button>
      )}
      <p className="px-2 py-1 space-x-1 flex items-center">
        <RemoveRedEye className="text-brand-violet" />{' '}
        <span className="text-base">{data?.views}</span>
      </p>
      <div
        className="px-2 text-dark-green line-clamp-3"
        dangerouslySetInnerHTML={{ __html: data?.title }}
      />
      <div className="pt-2 p-2 mt-auto">
        <button className={'font-bold self-start'}>
          Learn More <ArrowRightAlt />
        </button>
      </div>
    </div>
  );
};

export default MinPost;
