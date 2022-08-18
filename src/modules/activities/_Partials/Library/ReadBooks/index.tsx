import { PictureAsPdf } from '@mui/icons-material';
import Image from 'next/image';
import React from 'react';

const ReadBooks = ({books}:any) => {
  return (
    <>
      {books.map((element:any) => (
        <div
          key={element.id +"book_id_unic@22"}
          className="flex flex-shrink-0 space-x-2 max-w-[360px]"
        >
          <Image
            src="/assets/images/book-cover.png"
            alt=""
            width="250px"
            height="150px"
            layout="fixed"
            loading="lazy"
          />
          <div className="flex flex-col">
            <h1 className="uppercase font-semibold text-base">
              {element?.name}
            </h1>
            <p className="text-gray-600 mt-2">
              Cras lobortis, magna lobortis lacinia maximus, diam
              velit condimentum ex, at volutpat massa metus vel eli
            </p>
            <div className="flex items-center space-x-3 mt-3">
              <button className="bg-dark-green text-white p-2 text-xs">
                Read
              </button>
              <button className="text-red-500 p-2">
                <PictureAsPdf />
              </button>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default ReadBooks;
