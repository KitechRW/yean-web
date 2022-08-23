import { PictureAsPdf } from '@mui/icons-material';
import { useSearchbar } from 'modules/contexts/SearchbarContext';
import Scaffold from 'modules/layouts/Scaffold';
import CustomImage from 'modules/_partials/CustomImage';
import { useRouter } from 'next/router';
import React from 'react';

const SearchActivity = () => {
  const { books, articles } = useSearchbar();
  const { push } = useRouter();
  return (
    <Scaffold>
      <div className="grid sm:grid-cols-2 gap-x-12 gap-y-10 p-4 md:px-8">
        <div className="flex flex-col">
          <p className="text-dark-green font-semibold mb-4">
            {articles.length} results for Articles
          </p>
          {articles.map((element, index) => (
            <div
              key={element.id}
              tabIndex={index}
              role="button"
              onClick={() => {
                push(`/blog/${element.id}`);
              }}
              className="flex space-x-2"
            >
              <CustomImage
                src={element.image}
                alt=""
                width={150}
                height={82}
              />
              <h1 className="text-base mt-2">{element.title}</h1>
            </div>
          ))}
        </div>

        <div className="flex flex-col">
          <p className="text-dark-green font-semibold mb-4">
            {books.length} results for Books
          </p>
          {books.map(element => (
            <div key={element.id} className="flex flex-col">
              <h1 className="uppercase font-semibold text-base">
                {element?.name}
              </h1>
              <div className="flex items-center space-x-3 mt-3">
                <button className="bg-dark-green text-white p-2 text-xs">
                  Read
                </button>
                <button className="text-red-500 p-2">
                  <PictureAsPdf />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Scaffold>
  );
};

export default SearchActivity;
