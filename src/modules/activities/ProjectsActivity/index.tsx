import {
  ChevronRight,
  ConnectWithoutContact,
} from '@mui/icons-material';
import Scaffold from 'modules/layouts/Scaffold';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';
import { projects } from './data';

const ProjectsActivity = () => {
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
            Projects
          </h1>
          <p className="flex items-center space-x-2 text-sm text-white">
            <Link href="/#">What we do?</Link> <ChevronRight /> -{' '}
            Projects
          </p>
        </div>
      </div>

      <div className="flex flex-wrap justify-center w-full p-4 gap-10 md:p-8">
        {projects.map(element => (
          <button key={`projects_${projects.indexOf(element)}`}
          ><Link href={`/project/${element.id}`}>
            <div
              className="relative flex flex-col rounded-lg drop-shadow shadow-xl"
            >
              <Image
                src={element.imageUrl}
                alt=""
                loading="lazy"
                width="479.65"
                height="289.99"
              />
              <Image
                src={element.chart}
                alt=""
                loading="lazy"
                width="479.65"
                height="435.95"
              />
              <div className="flex flex-grow w-full h-full top-0 absolute" />
            </div>
          </Link></button>
        ))}
      </div>
    </Scaffold>
  );
};

export default ProjectsActivity;
