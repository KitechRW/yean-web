import { ArrowRightAlt } from '@mui/icons-material';
import CustomImage from 'modules/_partials/CustomImage';
import { useRouter } from 'next/router';
import React from 'react';

const MinPost = ({ data }: { data: any }) => {
  const { push } = useRouter();
  const handleClick = () => {
    if (data?.category_id) {
      push(`/blog/${data?.id}?material=1`);
    }
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

      {data?.subcategory && (
        <button className="mr-auto rounded-sm bg-dark-green -translate-y-4 text-white py-2 px-3">
          {data.subcategory.name}
        </button>
      )}
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
