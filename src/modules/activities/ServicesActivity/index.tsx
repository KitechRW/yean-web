import {
  ChevronRight,
  ConnectWithoutContact,
} from '@mui/icons-material';
import Scaffold from 'modules/layouts/Scaffold';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';
import { services } from './data';

const ServicesActivity = () => {
  const {
    push,
    query: { service },
  } = useRouter();

  const handleChangeService = (index: number) => {
    push({ pathname: '/services', query: { service: index } });
  };

  const id = parseInt(`${service}`, 10);

  const itemIndex = services[id] ? id : 0;

  console.log(itemIndex);

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
            Services - {services[itemIndex].title}
          </p>
        </div>
      </div>

      <div className="md:flex w-full p-4 gap-3 md:p-8">
        <div className="flex overflow-x-auto gap-2 md:overflow-x-hidden md:flex-col shrink-0 whitespace-nowrap">
          {services.map((element, index) => {
            return (
              <button
                key={element.title}
                type="button"
                onClick={() => handleChangeService(index)}
                className="flex text-left pr-3 pl-6 py-3 bg-[#F5F5F5] relative"
              >
                <span
                  className={`${
                    index === itemIndex
                      ? 'bg-dark-green'
                      : 'bg-brand-yellow'
                  } w-2 left-0 top-0 absolute h-full`}
                />
                <span>{element.title}</span>
              </button>
            );
          })}
        </div>
        <div className="flex flex-col flex-grow">
          <div className="min-h-[400px] relative">
            <Image
              src={services[itemIndex].imageUrl}
              alt=""
              layout="fill"
              objectFit="cover"
              loading="lazy"
            />
          </div>
          <h1 className="mt-6 text-2xl md:text-3xl font-bold tracking-wide text-dark-green">
            {services[itemIndex].title}
          </h1>
          <p className="mt-3 text-sm text-gray-600 text-justify">
            {services[itemIndex].desc}
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
