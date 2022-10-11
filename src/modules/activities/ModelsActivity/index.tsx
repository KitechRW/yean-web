import { ChevronRight } from '@mui/icons-material';
import Scaffold from 'modules/layouts/Scaffold';
import ImpactFigure from 'modules/_partials/_drawable/impactFigure';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';

const ModelsActivity = () => {
  const {
    query: { q },
  } = useRouter();
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
          <h1 className="capitalize text-3xl md:text-6xl font-black tracking-wide text-white">
            {q || 'Models'}
          </h1>
          <p className="capitalize flex items-center space-x-2 text-sm text-white">
            <Link href="/#">What we do?</Link> <ChevronRight /> -{' '}
            {q || 'Models'}
          </p>
        </div>
      </div>

      <div className="flex flex-col items-center w-full p-4 md:p-8 max-w-4xl mx-auto">
        <ImpactFigure />
        <div
          className={`flex ${
            q === 'impact' ? 'flex-col-reverse' : 'flex-col'
          }`}
        >
          <div className="flex flex-col">
            <h1 className="text-center mt-10 text-2xl md:text-4xl font-black text-dark-green tracking-wide">
              Our Model
            </h1>
            <p className="text-gray-600 mt-3 text-justify">
              Our work is performed to empower farmers and value chain
              actors in a way that professionalize their activities.
              We collaborate with farmers and value chain actors,
              learn about their challenges then design specific and
              youth led solutions to sustainably migrate from
              poor-yielding practices to efficient production
              technologies through our “Commodity specific extension
              model”. Through this model, we create commodity specific
              “Farmer Platforms” that help farmers to exchange and
              promote peer learning. Our services, products and
              interventions are designed to address challenges in
              value chain development.
            </p>
          </div>

          <div className="flex flex-col">
            <h1 className="text-center mt-10 text-2xl md:text-4xl font-black text-dark-green tracking-wide">
              Our Impact
            </h1>
            <p className="text-gray-600 mt-3 text-justify">
              YEAN works to maximize its impact by applying strategies
              that optimize improvements in financial, social and
              environmental well-being of farmers. We provide our
              services in a way that creates opportunities for farmers
              and value chain actors to learn and build their
              resilience in face of challenges like climate crisis and
              market ecosystem.
            </p>
            <p className="text-gray-600 mt-2 text-justify">
              From challenges identification to designing and
              delivering solutions, we provide tailored Knowledge,
              information, services and products that meet identified
              challenges. Through our commodity specific extension
              model, we offer an opportunity of understanding, and
              developing each value chain (crop and animal) based on
              facts and data from that specific value chain actors.
            </p>
            <p className="text-gray-600 mt-2 text-justify">
              We are empowering youth by supporting and developing
              youth-led programs to diversify innovation and
              creativity for greater impact and further opportunities
              that create jobs and wealth to youth and the community
              through our services . Through the advancement of ICT,
              most of the farmers we serve are connected to one
              another through the “Farmer platform”, which connects
              farmers and value chain actors and addresses the
              information and skills gaps through peer learning.”
            </p>
          </div>
        </div>
      </div>
    </Scaffold>
  );
};

export default ModelsActivity;
