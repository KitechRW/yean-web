import React from 'react';
import { useOpenFetcher } from 'apis/utils/fetcher';
import Pagination from 'modules/_partials/Pagination';
import ViewSubscriber from 'modules/admin/_Partials/ManageSubscribers/ViewSubscriber';
import { useRouter } from 'next/router';
import SendEmail from '../_Partials/ManageSubscribers/SendEmail';
import { IconButton } from '@mui/material';
import Delete from '@mui/icons-material/Delete';
import swal from 'sweetalert';
import DefaultApi from 'apis/restful';

const SubscribersActivity = () => {
  const router = useRouter();
  const [loading, setLoading] = React.useState(false);
  const {
    data: { data, pagination },
    isLoading,
  } = useOpenFetcher(
    `/api/subscribers?attributes=id,email&page=${
      router.query.page || 1
    }&limit=20`,
  );

  const handleRemoveUser = async (id: number) => {
    const willDelete = await swal({
      title: 'Are you sure?',
      text: 'Are you sure that you want to remove this subscriber?',
      icon: 'warning',
      dangerMode: true,
    });

    if (!willDelete) {
      return;
    }
    setLoading(true);
    const { data, error } = await DefaultApi.DeleteRoute.deleteRoute(
      `/api/subscribers/${id}`,
    );
    setLoading(false);

    if (data) {
      swal(
        'Removed!',
        data.message || 'Removed successfully',
        'success',
      ).then(() => {
        router.reload();
      });
    }

    if (error) {
      swal('Ooops!', error.message || 'Something went wrong');
    }
  };

  return (
    <div className="flex flex-col">
      <div className="flex items-center space-x-3 my-4 px-3 w-full justify-between">
        <h1 className="text-2xl md:text-3xl">Subscribers</h1>
        <SendEmail>
          <button
            type="button"
            className="px-6 py-2 rounded bg-brand-green text-white"
          >
            Send Email
          </button>
        </SendEmail>
      </div>
      <div className="pb-14">
        <div className="px-3 py-4 flex justify-center overflow-x-auto ">
          <table className="w-full text-md bg-white shadow-md rounded mb-4">
            <thead>
              <tr className="border-b">
                <th className="text-left p-3 px-5">Email</th>
              </tr>
            </thead>
            <tbody>
              {data?.map((eachUser: any) => (
                <tr
                  key={eachUser.id}
                  className="border-b hover:bg-orange-100 bg-gray-100"
                >
                  <td className="p-3 px-5">
                    <p className="flex items-center space-x-4 justify-between">
                      <label className="bg-transparent">
                        {eachUser?.email}
                      </label>
                      <IconButton
                        title="Remove subscriber"
                        onClick={() => handleRemoveUser(eachUser.id)}
                        disabled={loading}
                        className="disabled:cursor-not-allowed disabled:opacity-70"
                      >
                        <Delete />
                      </IconButton>
                    </p>
                  </td>
                </tr>
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
              router.push('/admin/subscribers?page=' + page);
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default SubscribersActivity;
