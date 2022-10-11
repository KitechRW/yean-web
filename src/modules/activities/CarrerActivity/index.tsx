import Scaffold from 'modules/layouts/Scaffold';
import Image from 'next/image';
import React from 'react';
import { useOpenFetcher } from 'apis/utils/fetcher';
import { useRouter } from 'next/router';

const CarrerActivity = () => {
  const router = useRouter();
  const {
    data: { data },
  } = useOpenFetcher(`/api/jobs/${router.query.id}`);
  return (
    <Scaffold>
      <div className="flex-wrap bg-white justify-center items-center w-full p-4 md:p-8 flex gap-4">
        <div className="flex flex-col">
          <h1 className="text-2xl md:text-4xl text-dark-green tracking-wide font-black">
            {data?.title}
          </h1>
          <p className="mt-2 text-[#767676] max-w-sm">
            The following are the description about this job
          </p>
        </div>
        <Image
          src="/assets/images/finding_worker.svg"
          width="397"
          height="300"
          alt=""
        />
      </div>

      <div className="p-4 md:p-8 items-center flex flex-col bg-[#F5F7FA]">
        <div className="overflow-hidden bg-white shadow sm:rounded-lg">
          <div className="px-4 py-5 sm:px-6">
            <h3 className="text-lg font-medium leading-6 text-gray-900">
              Job Information
            </h3>
            <p className="mt-1 max-w-2xl text-sm text-gray-500">
              Job details and application.
            </p>
          </div>
          <div className="border-t border-gray-200">
            <dl>
              <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium text-gray-500">
                  Title
                </dt>
                <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                  {data?.title}
                </dd>
              </div>
              <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium text-gray-500">
                  Keyword
                </dt>
                <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                  {data?.keyword}
                </dd>
              </div>
              <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium text-gray-500">
                  Location
                </dt>
                <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                  {data?.location}
                </dd>
              </div>
              <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium text-gray-500">
                  Category
                </dt>
                <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                  {data?.category}
                </dd>
              </div>
              <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium text-gray-500">
                  Description
                </dt>
                <dd
                  className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0"
                  dangerouslySetInnerHTML={{
                    __html: data?.description,
                  }}
                />
              </div>
            </dl>
          </div>
        </div>
      </div>
    </Scaffold>
  );
};

export default CarrerActivity;
