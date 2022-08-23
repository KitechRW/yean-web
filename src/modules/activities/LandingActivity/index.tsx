import React, { useState } from 'react';
import Scaffold from 'modules/layouts/Scaffold';
import Image from 'next/image';
import {
  Add,
  ChevronLeft,
  ChevronRight,
  LocalLibrary,
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

export const partners = [
  '/assets/images/agriprofocus 2.png',
  '/assets/images/gfar 1.png',
  '/assets/images/rdi_logo 1.png',
  '/assets/images/ypard 1.png',
];

const slide = {
  title: 'From Youth Engagement in Agriculture Network',
  desc: `Youth Engagement in Agriculture Network (YEAN ) is a Youth
            Led Private Agriculture Extension Social enterprise
            created in 2014.`,
  image: '/assets/images/Home Slider Image.png',
};

const slides = new Array(6).fill(slide);

const LandingAcitivity = ({
  data,
  articles,
  partners,
}: {
  data: any;
  articles: any;
  partners: any;
}) => {
  const slides = data?.slides || [];
  const { rows } = articles || {};
  const confirmedPartners: any[] =
    partners?.rows?.filter((item: any) => !!item.confirmed) || [];

  return (
    <Scaffold>
      <Slides data={slides} />
      <div className="px-4 md:px-8 py-2 bg-white inline-grid md:grid-cols-3 gap-x-10 gap-y-3">
        <div className="flex space-y-6 justify-between flex-col items-center py-4 px-6 rounded-[15px] drop-shadow border border-gray-400">
          <Image
            src="/assets/images/Business Network.png"
            alt=""
            loading="lazy"
            width="138px"
            height="131px"
            objectFit="cover"
          />
          <p className="text-brand-green font-bold text-base">
            Services
          </p>
          <button
            type="button"
            className="text-xl font-bold w-8 h-8 rounded-full bg-brand-green text-white"
          >
            +
          </button>
        </div>
        <div className="flex flex-col relative rounded-[15px]">
          <div className="z-10 flex-grow flex bg-[#660A0A] bg-opacity-80 space-y-6 justify-between flex-col items-center py-4 px-6 rounded-[15px] drop-shadow border border-gray-400">
            <Image
              src="/assets/images/extension 1.png"
              alt=""
              loading="lazy"
              width="149.27px"
              height="101.75px"
            />
            <p className="text-brand-green font-bold text-base">
              Extension Materials Imfashanyigisho
            </p>
            <p className="text-sm text-white text-center">
              Some text summary for Extension materials when a visitor
              put cursor(hovering) Some text summary for Extension
              materials when a visitor put cursor (hovering){' '}
            </p>
          </div>
          <Image
            src="/assets/images/blog post 1.png"
            alt=""
            layout="fill"
            className="rounded-[15px]"
          />
        </div>
        <div className="flex space-y-6 justify-between flex-col items-center py-4 px-6 rounded-[15px] drop-shadow border border-gray-400">
          <Image
            src="/assets/images/farmer 1.png"
            alt=""
            loading="lazy"
            width="118px"
            height="131px"
            objectFit="cover"
          />
          <p className="text-brand-green text-center font-bold text-base">
            Farmer Platform Urubuga rw’abahinzi borozi
          </p>
          <button
            type="button"
            className="text-xl font-bold w-8 h-8 rounded-full bg-brand-green text-white"
          >
            +
          </button>
        </div>
      </div>
      <div className="px-4 md:px-8 py-2 bg-white">
        <div className="flex flex-col relative min-h-[64px] md:min-h-[195px]">
          <Link href="#">
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
        <div className="pt-2 inline-grid grid-cols-2 md:grid-cols-4 gap-3">
          {rows?.slice(0, 8)?.map((element: any) => (
            <MinPost key={element.id} data={element} />
          ))}
        </div>
      </div>

      <div className="px-4 md:px-8 py-2 bg-white">
        <div className="flex flex-col relative min-h-[64px] md:min-h-[195px]">
          <Link href="#">
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
        <div className="pt-2 inline-grid grid-cols-2 md:grid-cols-4 gap-3">
          {rows?.slice(8)?.map((element: any) => (
            <LatestBlog key={element.id} data={element} />
          ))}
        </div>
        <button className="mt-4 flex items-center space-x-2 mx-auto px-12 py-2 text-white bg-brand-green rounded-sm">
          <span className="p-1 rounded-full bg-white text-brand-green">
            <Add />
          </span>
          <span>View More</span>
        </button>
      </div>

      <div className="px-4 md:px-8 py-2 bg-white">
        <div className="flex flex-col relative min-h-[64px] md:min-h-[195px]">
          <Link href="#">
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

      <div className="px-4  md:px-8 py-2 bg-white">
        <div className="flex flex-col items-center justify-center relative min-h-[200px] md:min-h-[461px]">
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
                <CowIcon />
                <div className="flex flex-col">
                  <p className="font-bold text-base">29,000</p>
                  <p className="text-xs mt-1">Communities</p>
                </div>
              </div>
              <div className="flex items-center space-x-2 bg-brand-yellow text-white px-8 py-4 rounded-sm">
                <SorgohIcon />
                <div className="flex flex-col">
                  <p className="font-bold text-base">29,000</p>
                  <p className="text-xs mt-1">Cultivated</p>
                </div>
              </div>
              <div className="flex items-center space-x-2 bg-brand-yellow text-white px-8 py-4 rounded-sm">
                <HandIcon />
                <div className="flex flex-col">
                  <p className="font-bold text-base">29,000</p>
                  <p className="text-xs mt-1">Plants</p>
                </div>
              </div>
              <div className="flex items-center space-x-2 bg-brand-yellow text-white px-8 py-4 rounded-sm">
                <TruckIcon />
                <div className="flex flex-col">
                  <p className="font-bold text-base">29,000</p>
                  <p className="text-xs mt-1">Tractors</p>
                </div>
              </div>
            </div>
          </div>
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
