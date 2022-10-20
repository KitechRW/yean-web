import {
  ChevronRight,
  ConnectWithoutContact,
} from '@mui/icons-material';
import Scaffold from 'modules/layouts/Scaffold';
import Image from 'next/image';
import Link from 'next/link';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import React from 'react';
import { useOpenFetcher } from 'apis/utils/fetcher';
import DataWidget from 'modules/layouts/DataWidget';

const ProjectsActivity = () => {
  const {
    data: { data },
    isLoading,
    isError,
  } = useOpenFetcher('/api/projects');
  return (
    <Scaffold>
      <div className="flex flex-col w-full relative bg-brand-green min-h-[312px]">
        <Image
          src="/assets/images/project.jpg"
          alt=""
          layout="fill"
          objectFit="cover"
          priority
        />
        <div className="flex flex-col h-full w-full justify-end p-4 md:p-8 top-0 absolute z-10">
          <h1 className="text-3xl md:text-6xl font-black tracking-wide text-white">
            Projects
          </h1>
          <p className="flex items-center space-x-2 text-sm text-white">
            <Link href="/#">What we do?</Link> <ChevronRight /> -{' '}
            Projects
          </p>
        </div>
      </div>

      <div className="flex flex-wrap justify-center w-full p-4 gap-10 md:p-8">
        <DataWidget isLoading={isLoading} isError={isError}>
          {data?.rows?.map((element: any, index: number) => (
            <button key={`projects_${index}`} className={'max-w-xl'}>
              <Link href={`/project/${element.id}`}>
                <div className="relative flex flex-col rounded-lg drop-shadow shadow-xl">
                  <Image
                    src={element.image}
                    alt=""
                    loading="lazy"
                    width="479.65"
                    height="289.99"
                    objectFit="cover"
                  />
                  <h2 className={'font-bold text-3xl ml-3 mt-6'}>
                    {element.name}
                  </h2>
                  <div
                    className={'mt-12 ml-3 line-clamp-3'}
                    dangerouslySetInnerHTML={{
                      __html: element.description,
                    }}
                  />
                  <button
                    className={'font-bold mt-7 ml-5 mb-3 self-start'}
                  >
                    Read more <ArrowRightAltIcon />
                  </button>
                  <div className="flex flex-grow w-full h-full top-0 absolute" />
                </div>
              </Link>
            </button>
          ))}
        </DataWidget>
      </div>
    </Scaffold>
  );
};

export default ProjectsActivity;
