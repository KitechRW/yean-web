import { useOpenFetcher } from 'apis/utils/fetcher';
import DataWidget from 'modules/layouts/DataWidget';
import Scaffold from 'modules/layouts/Scaffold';
import BioPopup from 'modules/_partials/BioPopup';
import MissionFigure from 'modules/_partials/_drawable/missionFigure';
import VisionFigure from 'modules/_partials/_drawable/visionFigure';
import Image from 'next/image';
import React from 'react';
import { dummyAboutData, dummyTeamData } from './data';

const AboutActivity = () => {
  const {
    data: { data },
    isLoading: isAboutLoading,
  } = useOpenFetcher('/api/about');
  const aboutData = data?.length ? data[0] : dummyAboutData;
  const {
    data: { data: teamData },
    isLoading: isTeamLoading,
    isError: isTeamError,
  } = useOpenFetcher('/api/team');
  const team: any[] = teamData?.length ? teamData : dummyTeamData;
  return (
    <Scaffold>
      <DataWidget isLoading={isAboutLoading} isError={false}>
        <>
          <div className="flex flex-col w-full relative bg-brand-green min-h-[250px] md:min-h-[450px]">
            <Image
              src={aboutData.image || '/assets/images/about-page.jpg'}
              alt=""
              layout="fill"
              objectFit="cover"
              objectPosition="top"
              priority
            />
            <div className="flex flex-col h-full w-full items-center justify-end p-4 md:p-8 top-0 absolute z-10">
              <h1 className="text-3xl md:text-6xl font-black tracking-wide text-white">
                About us
              </h1>
            </div>
          </div>
          <div className="py-12 px-4 md:px-8 text-justify flex flex-col items-center">
            <div
              className="text-sm text-gray-800 max-w-4xl prose prose-lg prose-img:max-h-80"
              dangerouslySetInnerHTML={{ __html: aboutData.text }}
            />
          </div>

          <div className="px-4 md:px-8 py-12 flex flex-wrap justify-center md:flex-nowrap w-full gap-x-20 gap-y-5 bg-gradient-to-r from-cyan-01 to-cyan-02">
            <div className="flex flex-col max-w-sm">
              <MissionFigure className="w-full object-contain" />
              <h2 className="text-xl md:text-2xl font-bold py-3">
                Our Mission
              </h2>
              <div
                className="text-sm text-gray-600 prose prose-lg prose-img:max-h-80"
                dangerouslySetInnerHTML={{
                  __html: aboutData.mission,
                }}
              />
            </div>

            <div className="flex flex-col max-w-sm">
              <VisionFigure className="w-full object-contain" />
              <h2 className="text-xl md:text-2xl font-bold py-3">
                Our Vision
              </h2>
              <div
                className="text-sm text-gray-600 prose prose-lg prose-img:max-h-80"
                dangerouslySetInnerHTML={{ __html: aboutData.vision }}
              />
            </div>
          </div>

          <div className="pt-12 px-4 flex flex-col items-center md:px-8 text-justify">
            <h1 className="text-3xl md:text-6xl font-black tracking-wide text-dark-green">
              Our History
            </h1>
            <div
              className="flex flex-col md:max-w-4xl py-3 prose prose-lg prose-img:max-h-80"
              dangerouslySetInnerHTML={{ __html: aboutData.history }}
            />
          </div>

          <div className="py-12 px-4 flex flex-col items-center md:px-8 text-justify">
            <h1 className="text-3xl md:text-6xl font-black tracking-wide text-dark-green">
              Meet the Team
            </h1>
            <DataWidget
              isLoading={isTeamLoading}
              isError={isTeamError}
            >
              <div className="mt-6 flex flex-wrap justify-center gap-5 w-full">
                {team?.map((element: any) => (
                  <BioPopup
                    key={element}
                    name={element.name}
                    title={element.title}
                    image={element.image}
                    text={element.text}
                  />
                ))}
              </div>
            </DataWidget>
          </div>
        </>
      </DataWidget>
    </Scaffold>
  );
};

export default AboutActivity;
