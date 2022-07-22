import Image from 'next/image';
import React from 'react';

const MinPost = () => {
  return (
    <div className="flex flex-col rounded-[15px] drop-shadow border border-gray-400">
      <div className="min-h-[192.97px] flex relative">
        <Image
          src="/assets/images/blog post 1.png"
          alt=""
          layout="fill"
          className="rounded-[15px]"
          objectFit="cover"
          loading="lazy"
        />
      </div>

      <button className="mr-auto rounded-sm bg-dark-green -translate-y-4 text-white py-2 px-3">
        Ubuhinzi
      </button>
      <p className="p-2 text-dark-green">
        Some text summary for Extension materials for a Visitor
      </p>
      <button className="m-2 font-semibold px-4 py-2 mr-auto text-white rounded-lg bg-dark-green">
        Learn More
      </button>
    </div>
  );
};

export default MinPost;