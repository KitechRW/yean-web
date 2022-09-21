import React, { useState } from 'react';
import Scaffold from 'modules/layouts/Scaffold';
import Image from 'next/image';
import {
  Add,
  ChevronLeft,
  ChevronRight,
  LocalLibrary,
  LocationCity,
  Shop,
  SupervisedUserCircle,
} from '@mui/icons-material';
import Link from 'next/link';
import MinPost from '../_Partials/MinPost';
import LatestBlog from '../_Partials/LatestBlog';
import CowIcon from 'modules/_partials/_drawable/icons/cowIcon';
import SorgohIcon from 'modules/_partials/_drawable/icons/sorgohIcon';
import HandIcon from 'modules/_partials/_drawable/icons/handIcon';
import TruckIcon from 'modules/_partials/_drawable/icons/truckIcon';
import Testimonial from 'modules/_partials/Testimonial';
import Slides from 'modules/_partials/Slides';
import CustomImage from 'modules/_partials/CustomImage';
import CarouselPartners from 'modules/_partials/CarouselPartners';
import {
  useOpenFetcher,
  useProtectedFetcher,
} from 'apis/utils/fetcher';
import { useRouter } from 'next/router';
import { slideUpItems } from './data';
import SlideUpItem from './SlideUpItem';

const LandingAcitivity = ({
  data,
  articles,
}: {
  data: any;
  articles: any[];
}) => {
  const { push } = useRouter();
  const {
    data: { data: subCategories },
  } = useProtectedFetcher('/api/sub-categories');
  const slides = data?.slides || [];
  const {
    data: { data: partners },
    isLoading,
  } = useOpenFetcher(`/api/partners`);

  const confirmedPartners = partners?.rows;

  const articleList: any[] =
    articles?.map((item: any) => {
      const sub = subCategories?.rows?.filter(
        (element: any) => element.id == item.category,
      );
      if (sub?.length) {
        return { ...item, category: sub[0] };
      }
      return item;
    }) || [];

  return (
    <Scaffold>
      <Slides data={slides} />
      <div className="px-4 md:px-8 py-2 bg-white">
        <div className="flex flex-col items-center justify-center relative min-h-[200px]">
          <Image
            src="/assets/images/bg-stat.png"
            alt=""
            layout="fill"
            loading="lazy"
            objectPosition="center"
            objectFit="cover"
            className="z-0"
          />
          <div className="top-0 absolute flex-grow h-full flex flex-col items-center justify-center">
            <div className="px-2 inline-grid grid-cols-2 md:grid-cols-4 justify-center gap-x-10 gap-y-3">
              <div className="flex items-center space-x-2 bg-brand-yellow text-white px-8 py-4 rounded-sm">
                <SupervisedUserCircle style={{ fontSize: 60 }} />
                <div className="flex flex-col">
                  <p className="font-bold text-xl">40,000+</p>
                  <p className="mt-1">Farmer served</p>
                </div>
              </div>
              <div className="flex items-center space-x-2 bg-brand-yellow text-white px-8 py-4 rounded-sm">
                <SupervisedUserCircle style={{ fontSize: 60 }} />
                <div className="flex flex-col">
                  <p className="font-bold text-xl">150,000</p>
                  <p className="mt-1">Target farmers by 2025</p>
                </div>
              </div>
              <div className="flex items-center space-x-2 bg-brand-yellow text-white px-8 py-4 rounded-sm">
                <LocationCity style={{ fontSize: 60 }} />
                <div className="flex flex-col">
                  <p className="font-bold text-xl">30</p>
                  <p className="mt-1">Districts</p>
                </div>
              </div>
              <div className="flex items-center space-x-2 bg-brand-yellow text-white px-8 py-4 rounded-sm">
                <Shop style={{ fontSize: 60 }} />
                <div className="flex flex-col">
                  <p className="font-bold text-xl">27</p>
                  <p className="mt-1">Commodity specific platforms</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="px-4 md:px-8 py-2 bg-white inline-grid md:grid-cols-3 gap-x-10 gap-y-3">
        {slideUpItems.map(item => (
          <SlideUpItem
            key={item.path}
            title={item.title}
            desc={item.desc}
            path={item.path}
            image={item.image}
            subTitle={item.subTitle}
          />
        ))}
      </div>
      <div className="px-4 md:px-8 py-2 bg-white">
        <div className="flex flex-col relative min-h-[64px] md:min-h-[195px]">
          <Link href="/innovation-center">
            <Image
              src="/assets/images/yean.png"
              alt=""
              layout="fill"
              loading="lazy"
              objectPosition="center"
              className="cursor-pointer"
            />
          </Link>
        </div>
      </div>

      <div className="flex flex-col px-4 md:px-8 py-2 bg-white">
        <h1 className="text-2xl md:text-4xl text-white font-bold bg-brand-green p-2 text-center">
          Extension Materials
        </h1>
        <div className="pt-2 inline-grid sm:grid-cols-2 md:grid-cols-4 gap-3">
          {articleList.slice(0, 8)?.map((element: any) => (
            <MinPost key={element.id} data={element} />
          ))}
        </div>
        <button
          type="button"
          onClick={() => {
            push('/extension-material');
          }}
          className="mt-4 flex items-center space-x-2 mx-auto px-12 py-2 text-white bg-brand-green rounded-sm"
        >
          <span className="p-1 rounded-full bg-white text-brand-green">
            <Add />
          </span>
          <span>View More</span>
        </button>
      </div>

      <div className="px-4 md:px-8 py-2 bg-white">
        <div className="flex flex-col relative min-h-[64px] md:min-h-[195px]">
          <Link href="/services">
            <Image
              src="/assets/images/greenhouse.png"
              alt=""
              layout="fill"
              loading="lazy"
              objectPosition="center"
              className="cursor-pointer"
            />
          </Link>
        </div>
      </div>

      <div className="flex flex-col px-4 md:px-8 py-2 bg-white">
        <h1 className="text-2xl md:text-4xl text-white font-bold bg-brand-green p-2 text-center">
          Latest Blog
        </h1>
        <div className="pt-2 inline-grid sm:grid-cols-2 md:grid-cols-4 gap-3">
          {articles?.slice(8)?.map((element: any) => (
            <LatestBlog key={element.id} data={element} />
          ))}
        </div>
        <button
          type="button"
          onClick={() => {
            push('/blog');
          }}
          className="mt-4 flex items-center space-x-2 mx-auto px-12 py-2 text-white bg-brand-green rounded-sm"
        >
          <span className="p-1 rounded-full bg-white text-brand-green">
            <Add />
          </span>
          <span>View More</span>
        </button>
      </div>

      <div className="px-4 md:px-8 py-2 bg-white">
        <div className="flex flex-col relative min-h-[64px] md:min-h-[195px]">
          <Link href="/services">
            <Image
              src="/assets/images/Inputs.png"
              alt=""
              layout="fill"
              loading="lazy"
              objectPosition="center"
              className="cursor-pointer"
            />
          </Link>
        </div>
      </div>

      <div className="flex flex-col px-4 md:px-8 py-2 bg-white">
        <h1 className="text-2xl md:text-4xl text-white font-bold bg-brand-green p-2 text-center">
          Our Partners
        </h1>
        <CarouselPartners data={confirmedPartners} />
      </div>

      <div className="flex flex-col px-4 md:px-8 py-2 bg-white">
        <h1 className="text-2xl md:text-4xl text-white font-bold bg-brand-green p-2 text-center">
          Our Testmonials
        </h1>
        <div className="pt-2 flex items-center space-x-3 md:space-x-12 justify-between">
          {new Array(3).fill(0).map(element => (
            <Testimonial key={element} />
          ))}
        </div>
      </div>
    </Scaffold>
  );
};

export default LandingAcitivity;
