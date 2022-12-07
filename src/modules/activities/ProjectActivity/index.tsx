import { useOpenFetcher } from 'apis/utils/fetcher';
import DataWidget from 'modules/layouts/DataWidget';
import Scaffold from 'modules/layouts/Scaffold';
import Image from 'next/image';
import { useRouter } from 'next/router';
import React from 'react';

const ProjectActivity = () => {
  const router = useRouter();
  const {
    data: { data },
    isLoading,
    isError,
  } = useOpenFetcher(`/api/projects/${router.query.projectId}`);
  return (
    <>
      <Scaffold>
        <div className="flex flex-col items-center w-full p-4 md:p-8 max-w-4xl mx-auto">
          <DataWidget isLoading={isLoading} isError={isError}>
            <>
              {data?.image ? (
                <Image
                  src={data?.image}
                  width="656"
                  height="332"
                  objectFit="cover"
                  alt=""
                  priority
                />
              ) : null}
              <h1 className="text-center mt-10 text-2xl md:text-4xl font-black text-dark-green tracking-wide">
                {data?.name}
              </h1>
              <div
                className="text-gray-600 mt-3 md:text-justify prose prose-lg prose-img:max-h-80"
                dangerouslySetInnerHTML={{
                  __html: data?.description,
                }}
              />
            </>
          </DataWidget>
        </div>
      </Scaffold>
    </>
  );
};
export default ProjectActivity;
