import { Comment, Person, RemoveRedEye } from '@mui/icons-material';
import CustomImage from 'modules/_partials/CustomImage';
import { useRouter } from 'next/router';
import axios from 'axios';
import React from 'react';

const LatestBlog = ({ data }: { data: any }) => {
  const { push } = useRouter();
  let viewIncrement = data?.views;
  const handleClick = async () => {
    viewIncrement += 1; 
    push(`/blog/${data?.id}&views=${data?.views}`);
    const {result}: any = await axios.patch(`/api/views/${data?.id}`, {views: viewIncrement});

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
      <div className="px-2 text-gray-600 line-clamp-3" dangerouslySetInnerHTML={{__html: data?.title}} />
    </div>
  );
};

export default LatestBlog;
