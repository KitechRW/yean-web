import Image from 'next/image';
import React from 'react';

const Team = ({ tabIndex = 0, onClick = () => {} }) => {
  return (
    <div
      role="button"
      tabIndex={tabIndex}
      onClick={onClick}
      className="group relative flex flex-col items-center"
    >
      <div className="group-hover:opacity-80 flex flex-col items-center relative min-w-[346px] min-h-[353.33px]">
        <Image
          src="/assets/images/etienne.png"
          alt=""
          layout="fill"
          loading="lazy"
        />
      </div>
      <div className="-translate-y-12 flex flex-col bg-[#FCB316]">
        <div className="min-h-[4px] bg-dark-green" />
        <div className="py-5 px-16">
          <h1 className="font-bold">Etienne NIYIGABA</h1>
          <p className="text-sm">CEO & Founder</p>
        </div>
      </div>
    </div>
  );
};

export default Team;
