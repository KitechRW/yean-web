import {
  ChevronRight,
  ConnectWithoutContact,
} from '@mui/icons-material';
import { useOpenFetcher } from 'apis/utils/fetcher';
import Scaffold from 'modules/layouts/Scaffold';
import CustomImage from 'modules/_partials/CustomImage';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';
import { services } from './data';

const ServicesActivity = () => {
  const [current, setCurrent] = React.useState<any>({});
  const {
    push,
    query: { service },
  } = useRouter();
  const {
    data: { data },
  } = useOpenFetcher('/api/services');

  const handleChangeService = (index: number) => {
    push({ pathname: '/services', query: { service: index } });
  };

  React.useEffect(() => {
    const id = parseInt(`${service}`, 10);
    const itemIndex = services[id] ? id : 0;

    if (data?.rows?.length) {
      setCurrent(data.rows[itemIndex]);
    }
  }, [data, service]);

  return (
    <Scaffold>
      <div className="flex flex-col w-full relative bg-brand-green min-h-[312px]">
        <Image
          src="/assets/images/services.png"
          alt=""
          layout="fill"
          objectFit="cover"
          priority
        />
        <div className="flex flex-col h-full w-full justify-end p-4 md:p-8 top-0 absolute z-10">
          <h1 className="text-3xl md:text-6xl font-black tracking-wide text-white">
            Services
          </h1>
          <p className="flex items-center space-x-2 text-sm text-white">
            <Link href="/#">What we do?</Link> <ChevronRight />{' '}
            Services - {current.name}
          </p>
        </div>
      </div>

      <div className="md:flex w-full p-4 gap-3 md:p-8">
        <div className="flex overflow-x-auto gap-2 md:overflow-x-hidden md:flex-col shrink-0 whitespace-nowrap">
          {data?.rows?.map((element: any, index: number) => {
            return (
              <button
                key={element.name}
                type="button"
                onClick={() => handleChangeService(index)}
                className="flex text-left pr-3 pl-6 py-3 bg-[#F5F5F5] relative"
              >
                <span
                  className={`${
                    element.id === current.id
                      ? 'bg-dark-green'
                      : 'bg-brand-yellow'
                  } w-2 left-0 top-0 absolute h-full`}
                />
                <span>{element.name}</span>
              </button>
            );
          })}
        </div>
        <div className="flex flex-col flex-grow">
          <h1 className="text-2xl md:text-3xl font-bold tracking-wide text-dark-green">
            {current.name}
          </h1>
          <div className="min-h-[400px] relative mt-3">
            <CustomImage
              src={current.image}
              alt=""
              layout="fill"
              objectFit="cover"
              loading="lazy"
            />
          </div>
          <p className="mt-3 text-sm text-gray-600 text-justify">
            {current.content}
          </p>

          <button
            type="button"
            onClick={() => push('/contact')}
            className="bg-white mx-auto text-dark-green font-semibold flex items-center space-x-2 mt-6 rounded-[20px] border border-dark-green py-3 px-20"
          >
            <ConnectWithoutContact />
            <span>Contact us </span>
          </button>
        </div>
      </div>
    </Scaffold>
  );
};

export default ServicesActivity;
