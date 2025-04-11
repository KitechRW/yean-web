import { Add, Search } from '@mui/icons-material';
import { useOpenFetcher } from 'apis/utils/fetcher';
import Pagination from 'modules/_partials/Pagination';
import React from 'react';
import AddItem from '../_Partials/ManageArticle/AddItem';
import ViewItem from '../_Partials/ManageArticle/ViewItem';
import { useRouter } from 'next/router';
import { useDebouncedCallback } from 'modules/hooks/use-debounced-callback';

const ArticleActivity = () => {
  const {
    query: { page = 1, perPage = 20, search },
    push,
  } = useRouter();

  const {
    data: { data, pagination },
    isLoading,
  } = useOpenFetcher(
    `/api/articles?page=${page}&limit=20${
      search ? `&search=${search}` : ''
    }`,
  );

  const handleSearch = useDebouncedCallback((value: string) => {
    push({
      query: {
        page: 1,
        perPage,
        search: value,
      },
    });
  }, 500);

  return (
    <div className="px-4 md:pl-6 bg-white py-4 flex flex-col flex-grow items-center md:px-8 w-full">
      <div className="space-x-6 md:space-x-12 bg-white flex flex-wrap md:flex-nowrap gap-2 justify-between w-full">
        <div className="group flex-grow flex items-center relative">
          <Search className="left-2 absolute text-slate-400" />
          <input
            defaultValue={search}
            onChange={event => handleSearch(event.target.value)}
            className="peer focus:ring-2 focus:ring-blue-500 focus:outline-none appearance-none w-full text-sm leading-6 text-slate-900 placeholder-slate-400 rounded-md py-2 pl-10 ring-1 ring-slate-200 shadow-sm"
            type="text"
            placeholder="Filter articles..."
          />
        </div>

        <AddItem>
          <button className="hover:bg-brand-green group flex items-center rounded-md bg-brand-green/80 text-white text-sm font-medium px-8 py-2 shadow-sm">
            <Add />
            <span>New</span>
          </button>
        </AddItem>
      </div>
      <ul className="w-full py-4 md:py-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 text-sm leading-6">
        {!isLoading ? (
          data?.length ? (
            data.map((item: any) => {
              return <ViewItem key={item?.id} data={item} />;
            })
          ) : (
            <p>No articles found</p>
          )
        ) : (
          <div className="w-full flex items-center justify-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-gray-900"></div>
          </div>
        )}
      </ul>

      <Pagination
        pageCount={pagination?.pageCount}
        currentPage={pagination?.currentPage}
        setPageNumber={(page: number) => {
          push({
            query: {
              page,
              perPage,
              search,
            },
          });
        }}
      />
    </div>
  );
};

export default ArticleActivity;
