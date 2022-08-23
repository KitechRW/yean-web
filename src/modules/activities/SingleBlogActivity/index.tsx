import { Avatar } from '@mui/material';
import Scaffold from 'modules/layouts/Scaffold';
import CustomImage from 'modules/_partials/CustomImage';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';
import Blogs from '../_Partials/Blogs';

const SingleBlogActivity = ({ data }: any) => {
  const contentRef = React.useRef(null);
  const { push } = useRouter();
  const handleClick = () => {
    push('/blog/cow-farmers');
  };

  React.useEffect(() => {
    if (data?.article?.text && contentRef.current) {
      // @ts-ignore
      contentRef.current.innerHTML = data.article.text;
    }
  }, [data]);
  return (
    <Scaffold>
      <div className="w-full px-4 bg-white md:px-8 pt-12 border-b border-[#E6E6E6]">
        <div className="px-4 md:px-8 w-full max-w-6xl mx-auto flex items-center space-x-4">
          <Link href="/blog">
            <span className="cursor-pointer text-sm font-medium pb-3">
              All
            </span>
          </Link>
          <span className="cursor-pointer text-sm font-medium pb-3 border-b-2 border-b-[#FCB316]">
            Blogs
          </span>
        </div>
      </div>

      <div className="w-full px-4 bg-white md:px-8 py-6 max-w-6xl mx-auto flex flex-col">
        <div className="group-hover:opacity-80 flex flex-col relative w-full max-w-[912px] min-h-[490px]">
          <CustomImage
            src={data?.article?.image}
            alt=""
            layout="fill"
            loading="lazy"
          />
          <div className="bottom-0 left-0 right-0 absolute flex flex-col items-start w-ful">
            <p className="text-dark-green bg-[#FCB316] px-4 py-3">
              Blog
            </p>
            <p className="w-full bg-[#FCB316] h-1" />
          </div>
        </div>
        <div className="px-3 py-3 space-x-3 flex items-center">
          <Avatar
            src="/assets/images/avatar.png"
            alt={data?.article?.author?.firstname || ""}
          />
          <div className="flex flex-col text-[#767676]">
            <h1 className="text-sm font-bold">
              {data?.author?.firstname}{' '}
              {data?.author?.lastname}
            </h1>
            {/* <p className="text-xs">12 April 2022</p> */}
          </div>
        </div>

        <h1 className="mt-6 text-[#6F7D1D] text-lg md:text-xl font-semibold">
          {data?.article?.title}
        </h1>

        <div
          ref={contentRef}
          className="mt-4 text-justify leading-relaxed flex flex-col space-y-3 hideContentNotInTagUL"
        >
          {/* {
          article?.text
          } */}
        </div>

        <h1 className="mt-12 mb-6 text-xl md:text-2xl text-dark-green font-bold bg-brand-green/10 p-2 text-center">
          View Related Blogs
        </h1>

        <Blogs size={3} onClick={handleClick} />
      </div>
    </Scaffold>
  );
};

export default SingleBlogActivity;
