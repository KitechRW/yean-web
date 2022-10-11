import { Avatar } from '@mui/material';
import CustomImage from 'modules/_partials/CustomImage';
import React from 'react';
import { useRouter } from 'next/router';
import Pagination from 'modules/_partials/Pagination';
import { format } from 'date-fns';

const Blogs = ({
  onClick = (id: any) => {},
  data = {},
  extension = {},
}: any) => {
  const router = useRouter();
  return (
    <div className={'flex flex-col items-center space-y-6'}>
      <div className="w-full justify-center max-w-6xl mx-auto flex flex-wrap gap-4">
        {data?.data?.map((element: any, index: number) => (
          <div
            key={JSON.stringify(element)}
            role="button"
            tabIndex={index}
            onClick={() => {
              onClick(element?.id);
            }}
            className="flex flex-col w-full max-w-[298px] border border-[#E6E6E6] rounded-sm"
          >
            <div className="group-hover:opacity-80 flex flex-col relative min-w-[298px] min-h-[153px]">
              <CustomImage
                src={element.image}
                alt=""
                layout="fill"
                loading="lazy"
              />
              <div className="bottom-0 left-0 right-0 absolute flex flex-col items-start w-ful">
                <p className="text-dark-green bg-[#FCB316] px-4 py-3">
                  {extension?.sub || 'Blog'}
                </p>
                <p className="w-full bg-[#FCB316] h-1" />
              </div>
            </div>
            <p className="px-3 py-4 text-[#6F7D1D] w-full line-clamp-1">
              {element?.title}
            </p>
            <div className="px-3 pb-3 space-x-2 flex items-center mt-auto pt-3">
              <Avatar
                src={element?.author?.avatar}
                sx={{ width: '24px', height: '24px' }}
                alt={element?.author?.firstname}
              />
              <div className="flex flex-col text-[#767676]">
                <h1 className="text-xs">
                  {element?.author?.firstname}{' '}
                  {element?.author?.lastname}
                </h1>
                {element?.createdAt ? (
                  <p className="text-xs">
                    {format(
                      new Date(element?.createdAt),
                      'dd MMMM yyyy',
                    )}
                  </p>
                ) : null}
              </div>
            </div>
          </div>
        ))}
      </div>
      <Pagination
        pageCount={data?.pagination?.pageCount}
        currentPage={data?.pagination?.currentPage}
        setPageNumber={(page: number) => {
          router.query.pageNumber = String(page);
          router.push(router);
        }}
      />
    </div>
  );
};

export default Blogs;
