import { Comment, Person, RemoveRedEye } from '@mui/icons-material';
import Image from 'next/image';
import React from 'react';

const LatestBlog = () => {
  return (
    <div className="flex flex-col rounded-[15px] drop-shadow border border-gray-400">
      <div className="min-h-[192.97px] flex relative">
        <Image
          src="/assets/images/chicken.png"
          alt=""
          layout="fill"
          className="rounded-[15px]"
          objectFit="cover"
        />
      </div>
      <div className="p-2 flex items-center space-x-3 text-brand-violet">
        <button className="flex items-center space-x-1">
          <Person /> <span>Admin</span>
        </button>
        <button className="flex items-center space-x-1">
          <RemoveRedEye /> <span>22978</span>
        </button>
        <button className="flex items-center space-x-1">
          <Comment /> <span>9</span>
        </button>
      </div>
      <p className="p-2 text-gray-600">
        Ubworozi bw&apos;Inkoko zitera amagi, aho ziba, kororoka, ibiryo byazo,umusaruro wazo....
      </p>
    </div>
  );
};

export default LatestBlog;
