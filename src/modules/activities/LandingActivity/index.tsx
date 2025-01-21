import React from 'react';
import Scaffold from 'modules/layouts/Scaffold';
import Image from 'next/image';
import {
  Add,
  LocationCity,
  Shop,
  SupervisedUserCircle,
} from '@mui/icons-material';
import Link from 'next/link';
import MinPost from '../_Partials/MinPost';
import LatestBlog from '../_Partials/LatestBlog';
import Testimonial from 'modules/_partials/Testimonial';
import Slides from 'modules/_partials/Slides';
import CarouselPartners from 'modules/_partials/CarouselPartners';
import {
  useOpenFetcher
} from 'apis/utils/fetcher';
import { useRouter } from 'next/router';
import { slideUpItems } from './data';
import SlideUpItem from './SlideUpItem';
import { Banner } from 'types/types';

const LandingAcitivity = ({
                           data,
                           articles,
                           banners,
                         }: {
  data: any;
  articles: any;
  banners?: Banner[];
}) => {
  const { push } = useRouter();
  const slides = data || [];
  const {
    data: { data: partners },
  } = useOpenFetcher(`/api/partners`);
 const confirmedPartners = partners?.rows;

  const articleList: any[] = articles?.rows || [];

  const renderBanners = (section: string) => {
  const banner = banners?.find(banner => banner.section === section);

    if (!banner) return null;

    return (
      <div key={banner.id} className="px-4 md:px-8 py-2 bg-white">
        <div className="flex flex-col relative min-h-[64px] md:min-h-[195px]">
          <Link href={banner.url || '#'}>
            <Image
              src={banner.image}
              alt={banner.title}
              layout="fill"
              loading="lazy"
              objectPosition="center"
              className="cursor-pointer"
            />
          </Link>
        </div>
      </div>
    );
  };


  return (
    <Scaffold>
      <Slides data={slides} />
      <div className="px-4 md:px-8 py-2 bg-white">
        <div className="flex flex-col items-center justify-center p-2 md:px-4 relative min-h-[200px] bg-[url(/assets/images/bg-stat.png)]">
          <div className="flex flex-col sm:inline-grid grid-cols-2 md:grid-cols-4 justify-center gap-x-10 gap-y-3">
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
      {renderBanners('products')} {/* it must be section products */}
      <div className="flex flex-col px-4 md:px-8 py-2 bg-white">
        <h1 className="text-2xl md:text-4xl text-white font-bold bg-brand-green p-2 text-center">
          Extension Materials
        </h1>
        <div className="pt-2 inline-grid sm:grid-cols-2 md:grid-cols-4 gap-3">
          {articleList.filter((element: any) => (element.status === 'published' && element.type === 'Yes')).map((element: any) => (
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
      {renderBanners('services')} {/* it must be section services */}
      <div className="flex flex-col px-4 md:px-8 py-2 bg-white">
        <h1 className="text-2xl md:text-4xl text-white font-bold bg-brand-green p-2 text-center">
          Latest Blog
        </h1>
        <div className="pt-2 inline-grid sm:grid-cols-2 md:grid-cols-4 gap-3">
          {articleList.filter( (element:any) => (element.status === 'published' && element.type !== 'Yes')).map((element: any) => (
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
      {renderBanners('about')} {/* it must be section about */}
      <div className="flex flex-col px-4 md:px-8 py-2 bg-white">
        <h1 className="text-2xl md:text-4xl text-white font-bold bg-brand-green p-2 text-center">
          Our Partners
        </h1>
        <CarouselPartners data={confirmedPartners} />
      </div>

      <div className="hidden flex-col px-4 md:px-8 py-2 bg-white">
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
