import Scaffold from 'modules/layouts/Scaffold';
import BioPopup from 'modules/_partials/BioPopup';
import Image from 'next/image';
import React from 'react';

const AboutActivity = () => {
  return (
    <Scaffold>
      <div className="flex flex-col w-full relative bg-brand-green min-h-[250px]">
        <Image
          src="/assets/images/about-page.png"
          alt=""
          layout="fill"
          objectFit="cover"
          priority
        />
        <div className="flex flex-col h-full w-full items-center justify-end p-4 md:p-8 top-0 absolute z-10">
          <h1 className="text-3xl md:text-6xl font-black tracking-wide text-white">
            About us
          </h1>
        </div>
      </div>
      <div className="py-12 px-4 md:px-8 text-justify">
        <p className="text-sm text-gray-800">
          YEAN works to maximize its impact by applying strategies
          that optimize improvements in financial, social and
          environmental well-being of beneficiaries. We provide our
          services in a way that creates opportunities for farmers and
          value chain actors to learn and build their resilience in
          face of challenges like climate crisis and market ecosystem
          About us
        </p>
      </div>

      <div className="px-4 md:px-8 py-12 flex flex-wrap md:flex-nowrap w-full gap-x-12 gap-y-5 bg-gradient-to-r from-cyan-01 to-cyan-02">
        <div className="flex flex-col">
          <Image
            src="/assets/images/mission.png"
            alt=""
            width="150px"
            height="282.42px"
          />
          <h2 className="text-xl md:text-2xl font-bold py-3">
            Our Mission
          </h2>
          <p className="text-sm text-gray-600">
            Spread agriculture information and facts to the community
            to inspire change for the pursuit of beauty and excellence
            in young agri-preneurs and the farmers’ community
          </p>
        </div>

        <div className="flex flex-col">
          <Image
            src="/assets/images/vision.png"
            alt=""
            width="150px"
            height="282.42px"
          />
          <h2 className="text-xl md:text-2xl font-bold py-3">
            Our Mission
          </h2>
          <p className="text-sm text-gray-600">
            Spread agriculture information and facts to the community
            to inspire change for the pursuit of beauty and excellence
            in young agri-preneurs and the farmers’ community
          </p>
        </div>

        <div className="flex flex-col">
          <Image
            src="/assets/images/values.png"
            alt=""
            width="150px"
            height="282.42px"
          />
          <h2 className="text-xl md:text-2xl font-bold py-3">
            Our Mission
          </h2>
          <p className="text-sm text-gray-600">
            Spread agriculture information and facts to the community
            to inspire change for the pursuit of beauty and excellence
            in young agri-preneurs and the farmers’ community
          </p>
        </div>
      </div>

      <div className="pt-12 px-4 flex flex-col items-center md:px-8 text-justify">
        <h1 className="text-3xl md:text-6xl font-black tracking-wide text-dark-green">
          Our History
        </h1>
        <p className="text-sm text-gray-800 mt-6 w-full text-justify md:max-w-4xl">
          YEAN was established in 2014 with the main aim of connecting
          farmers to useful information in their farming activities.
          Using technology facilities, YEAN connected the youth to
          unlock their potential in transforming Agriculture into a
          sustainable source of income and job creation in Rwanda.
          Farmers were lacking access to most valuable information in
          their daily life. YEAN created platforms of farmers, which
          allow them to have information at the right time. We believe
          that the transfer of technology and skills from content
          owners and researchers to farmers is a key solution to the
          skills gaps we have in accessing what’s needed to be a
          professional farmer. Since its creation, YEAN have inspired
          hundreds of youth to start professional farming activities
          and have significantly contributed to farming technology
          upgrade among farmers. YEAN have been creating contents for
          its agriculture extension services and has acquired
          extensive experience in what information needed, where it is
          needed and how to transfer it to be adopted by farmers. YEAN
          have implemented a number of research and extension projects
          in collaboration with individual farmers, farmers’
          organizations and development organizations in both animal
          and crop production. This journey has shaped our
          understanding of extension and advisory sector and have
          contributed to our goal of creating jobs to young
          professionals in agriculture to contribute to agriculture
          transformation
        </p>
      </div>

      <div className="py-12 px-4 flex flex-col items-center md:px-8 text-justify">
        <h1 className="text-3xl md:text-6xl font-black tracking-wide text-dark-green">
          Meet the Team
        </h1>
        <div className="mt-6 flex flex-wrap justify-center gap-5 w-full">
          {new Array(5).fill(0).map((element, index) => (
            <BioPopup key={element} />
          ))}
        </div>
      </div>
    </Scaffold>
  );
};

export default AboutActivity;
