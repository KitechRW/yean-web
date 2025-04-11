import React, { useEffect } from 'react';
import { useOpenFetcher } from 'apis/utils/fetcher';
import Pagination from 'modules/_partials/Pagination';
import ViewUser from 'modules/admin/_Partials/ManageUsers/ViewUser';
import { useRouter } from 'next/router';
import { useDebouncedCallback } from 'modules/hooks/use-debounced-callback';
import { Search } from '@mui/icons-material';

const UsersActivity = () => {
  const {
    query: { page = 1, perPage = 20, search },
    push,
  } = useRouter();

  const {
    data: { data, pagination },
    isLoading,
  } = useOpenFetcher(
    `/api/users?attributes=id,type,email,firstname,lastname,phone,active&page=${page}&limit=20${
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
    <div className="pb-14">
      <div className="p-4 flex justify-around ">
        <h1 className="text-3xl self-center">Users</h1>
        <div
          className={`flex flex-col p-3 px-8 justify-center min-w-[255px] min-h-[145px] drop-shadow rounded-lg bg-white`}
        >
          <h2 className={`text-base font-semibold`}>Users</h2>
          <div className="flex items-center space-x-2 mt-3">
            <p
              className={`bg-[#E6F3FF] p-2 px-3 rounded text-dark-green font-bold`}
            >
              {pagination?.count}
            </p>
            <p className={`text-[#AAB1B7]`}>Registered</p>
          </div>
        </div>
      </div>

      <div className="px-3 my-3 space-x-6 md:space-x-12 bg-white flex flex-wrap md:flex-nowrap gap-2 justify-between w-full">
        <div className="group flex-grow flex items-center relative">
          <Search className="left-2 absolute text-slate-400" />
          <input
            defaultValue={search}
            onChange={event => handleSearch(event.target.value)}
            className="peer focus:ring-2 focus:ring-blue-500 focus:outline-none appearance-none w-full text-sm leading-6 text-slate-900 placeholder-slate-400 rounded-md py-2 pl-10 ring-1 ring-slate-200 shadow-sm"
            type="text"
            placeholder="Filter users..."
          />
        </div>
      </div>
      <div className="px-3 py-4 flex justify-center overflow-x-auto ">
        <table className="w-full text-md bg-white shadow-md rounded mb-4">
          <tbody>
            <tr className="border-b">
              <th className="text-left p-3 px-5">Names</th>
              <th className="text-left p-3 px-5">Phone</th>
              <th className="text-left p-3 px-5">Email</th>
              <th className="text-left p-3 px-5">Type</th>

              <th></th>
            </tr>
            {data?.map((eachUser: any) => (
              <ViewUser
                key={eachUser.id + 'unique@22!'}
                data={eachUser}
              />
            ))}
          </tbody>
        </table>
      </div>
      <div className={'flex justify-end mr-10'}>
        <Pagination
          showNumbers={false}
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
    </div>
  );
};

export default UsersActivity;
