import { Comment, Person, RemoveRedEye } from '@mui/icons-material';
import CustomImage from 'modules/_partials/CustomImage';
import { useRouter } from 'next/router';
import React from 'react';

const LatestBlog = ({ data }: { data: any }) => {
  const { push } = useRouter();
  const handleClick = () => {
    push(`/blog/${data?.id}`);
  };
  return (
    <div
      role="button"
      onClick={handleClick}
      className="flex flex-col pb-2 rounded-[15px] drop-shadow border border-gray-400"
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
      <div className="p-2 flex items-center space-x-3 text-brand-violet">
        <button className="flex items-center space-x-1">
          <Person /> <span>{data?.author?.firstname}</span>
        </button>
        <button className="flex items-center space-x-1">
          <RemoveRedEye /> <span>{data?.views}</span>
        </button>
        <button className="flex items-center space-x-1">
          <Comment /> <span>{data?.comment}</span>
        </button>
      </div>
      <p className="p-2 text-gray-600 line-clamp-2">{data?.title}</p>
    </div>
  );
};

export default LatestBlog;
