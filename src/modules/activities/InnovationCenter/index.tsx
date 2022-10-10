import Scaffold from 'modules/layouts/Scaffold';
import Image from 'next/image';
import React from 'react';
import { ConnectWithoutContact } from '@mui/icons-material';
import { useRouter } from 'next/router';
import { dummyData } from './data';
import { useOpenFetcher } from 'apis/utils/fetcher';
import DataWidget from 'modules/layouts/DataWidget';

const InnovationCenterActivity = () => {
  const { push } = useRouter();
  const {
    data: { data },
    isLoading,
  } = useOpenFetcher('/api/innovations');
  const item = data?.length ? data[0] : dummyData;
  return (
    <Scaffold>
      <div className="flex flex-col w-full relative bg-brand-green min-h-[70px] md:min-h-[250px]">
        <Image
          src="/assets/images/innovation-center.png"
          alt=""
          layout="fill"
          objectPosition="top left"
          priority
        />
      </div>

      <DataWidget isLoading={isLoading} isError={false}>
        <div className="w-full gap-3 p-4 md:px-8 mx-auto md:grid grid-cols-2 bg-cyan-01 bg-white py-6">
          <Image
            src={item.image}
            alt=""
            height={300}
            width={500}
            loading="lazy"
            objectFit="cover"
          />
          <div className="text-justify flex flex-col items-center">
            <div
              className="text-justify"
              dangerouslySetInnerHTML={{ __html: item.text }}
            ></div>
            <button
              type="button"
              onClick={() => push('/contact')}
              className="bg-white mx-auto text-dark-green font-semibold flex items-center space-x-2 mt-20 rounded-[20px] border border-dark-green py-3 px-20"
            >
              <ConnectWithoutContact />
              <span>Contact us </span>
            </button>
          </div>
        </div>
      </DataWidget>
    </Scaffold>
  );
};

export default InnovationCenterActivity;
