import { RemoveRedEye } from '@mui/icons-material';
import { Avatar } from '@mui/material';
import Keys from 'apis/utils/constants/keys';
import { format } from 'date-fns';
import Scaffold from 'modules/layouts/Scaffold';
import CustomImage from 'modules/_partials/CustomImage';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';
import {
  EmailIcon,
  EmailShareButton,
  FacebookIcon,
  FacebookShareButton,
  InstapaperIcon,
  InstapaperShareButton,
  LinkedinIcon,
  LinkedinShareButton,
  TwitterIcon,
  TwitterShareButton,
  WhatsappIcon,
  WhatsappShareButton,
} from 'react-share';
import Blogs from '../_Partials/Blogs';
import axios from 'axios';

const SingleBlogActivity = ({
  data,
  relatedArticles,
  isExtension,
}: {
  relatedArticles: any[];
  data: any;
  isExtension: boolean;
}) => {
  const { push, asPath, query } = useRouter();
  const material = Number(query.material);

  let viewIncrement = 0;

  const handleClick = async (id: any) => {
    if (material) {
      push(`/blog/${id}?material=1`);
      viewIncrement = data?.views + 1;
      await axios.patch(`/api/views/${data?.id}`, {
        views: viewIncrement,
      });
    } else {
      push(`/blog/${id}`);
      viewIncrement = data?.views + 1;
      await axios.patch(`/api/views/${data?.id}`, {
        views: viewIncrement,
      });
    }
  };

  const url = `${Keys.HOST}${asPath}`;
  return (
    <Scaffold>
      <div className="w-full px-4 bg-white md:px-8 pt-12 border-b border-[#E6E6E6]">
        <div className="px-4 md:px-8 w-full max-w-6xl mx-auto flex items-center space-x-4">
          <Link
            href={
              isExtension
                ? `/extension-material/${data.category_id}`
                : '/blog'
            }
          >
            <span className="cursor-pointer text-sm font-medium pb-3">
              {isExtension ? data?.category?.parent?.name : 'All'}
            </span>
          </Link>
          <span className="cursor-pointer text-sm font-medium pb-3 border-b-2 border-b-[#FCB316]">
            {!isExtension ? 'Blogs' : data.category?.name}
          </span>
        </div>
      </div>

      <div className="w-full px-4 bg-white md:px-8 py-6 max-w-6xl mx-auto flex flex-col">
        <div className="group-hover:opacity-80 flex flex-col relative w-full max-w-4xl min-h-[490px]">
          <CustomImage
            src={data?.image}
            alt=""
            layout="fill"
            loading="lazy"
          />
          <div className="bottom-0 left-0 right-0 absolute flex flex-col items-start w-ful">
            <p className="text-dark-green bg-[#FCB316] px-4 py-3">
              {!data?.category?.name ||
              data?.type !== 'EXTENSION_MATERIAL'
                ? 'Blog'
                : `${data?.category?.name}`}
            </p>
            <p className="w-full bg-[#FCB316] h-1" />
          </div>
        </div>
        <div className="flex flex-col-reverse md:flex-row gap-3 md:items-center max-w-4xl">
          <div className="px-3 py-3 space-x-3 flex items-center">
            <Avatar
              src={data?.author?.profile_image}
              alt={data?.author?.firstname}
            />
            <div className="flex flex-col text-[#767676]">
              <h1 className="text-sm font-bold">
                {data?.author?.firstname} {data?.author?.lastname}
              </h1>
              {data?.createdAt && (
                <p className="text-xs">
                  {format(new Date(data?.createdAt), 'dd MMMM yyyy')}
                </p>
              )}
            </div>
          </div>
          <div className="ml-auto flex items-center gap-2 py-2">
            <p className="mr-12 space-x-1 flex items-center">
              <RemoveRedEye className="text-brand-violet" />{' '}
              <span className="text-base">{data?.views}</span>
            </p>

            <TwitterShareButton title={data?.title} url={url}>
              <TwitterIcon size={32} round={true} />
            </TwitterShareButton>
            <FacebookShareButton title={data?.title} url={url}>
              <FacebookIcon size={32} round={true} />
            </FacebookShareButton>
            <WhatsappShareButton title={data?.title} url={url}>
              <WhatsappIcon size={32} round={true} />
            </WhatsappShareButton>
            <LinkedinShareButton title={data?.title} url={url}>
              <LinkedinIcon size={32} round={true} />
            </LinkedinShareButton>
            <EmailShareButton title={data?.title} url={url}>
              <EmailIcon size={32} round={true} />
            </EmailShareButton>
            <InstapaperShareButton title={data?.title} url={url}>
              <InstapaperIcon size={32} round={true} />
            </InstapaperShareButton>
          </div>
        </div>

        <h1 className="mt-6 text-[#6F7D1D] text-lg md:text-xl font-semibold max-w-4xl">
          {data?.title}
        </h1>

        <div
          className="mt-4 text-justify leading-relaxed flex flex-col space-y-3 max-w-4xl hideContentNotInTagUL prose prose-lg prose-img:w-full prose-img:max-w-full prose-img:h-auto prose-img:max-h-none"
          dangerouslySetInnerHTML={{ __html: data?.text }}
          // ref={contentRef}
        />

        {relatedArticles.length > 1 ? (
          <>
            <h1 className="mt-12 mb-6 text-xl md:text-2xl text-dark-green font-bold bg-brand-green/10 p-2 text-center">
              View Related
            </h1>
            <Blogs data={relatedArticles} onClick={handleClick} />
          </>
        ) : null}
      </div>
    </Scaffold>
  );
};

export default SingleBlogActivity;
