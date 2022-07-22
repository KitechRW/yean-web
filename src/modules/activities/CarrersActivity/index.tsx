import Scaffold from 'modules/layouts/Scaffold';
import Image from 'next/image';
import React from 'react';

const Carrers = () => {
  return (
    <Scaffold>
      <div className="flex-wrap bg-white justify-center items-center w-full p-4 md:p-8 flex gap-4">
        <div className="flex flex-col">
          <h1 className="text-2xl md:text-4xl text-dark-green tracking-wide font-black">
            Find your Dream Job
          </h1>
          <p className="mt-2 text-[#767676] max-w-sm">
            We provide online instant cash loans with quick approval
            that suit your term length
          </p>
        </div>
        <Image
          src="/assets/images/carrer.png"
          width="397"
          height="242"
          alt=""
        />

        <div className="mt-6 w-full justify-center flex items-center gap-6 flex-wrap">
          <button className="text-gray-400 rounded-lg py-3 px-12 border border-gray-200 bg-white">
            Keyword
          </button>
          <button className="text-gray-400 rounded-lg py-3 px-12 border border-gray-200 bg-white">
            Location
          </button>
          <button className="text-gray-400 rounded-lg py-3 px-12 border border-gray-200 bg-white">
            Category
          </button>
          <button className="text-white rounded-lg py-3 px-12 border border-dark-green bg-dark-green">
            Find Job
          </button>
        </div>
      </div>

      <div className="p-4 md:p-8 items-center flex flex-col bg-[#F5F7FA]">
        <h1 className="text-xl md:text-2xl max-w-6xl font-black tracking-wide w-full">
          Our Job Departments
        </h1>
        <div className="flex gap-3 flex-wrap justify-between max-w-6xl w-full">
          <h1 className="text-xl md:text-2xl font-black tracking-wide">
            Available Jobs
          </h1>
          <button className="px-12 py-3 border border-brand-green rounded">
            Browse More Job
          </button>
        </div>

        {new Array(10).fill(0).map(element => (
          <div
            key={element}
            className="flex items-start gap-3 mt-4 flex-wrap justify-between max-w-6xl w-full"
          >
            <div className="flex flex-col">
              <div className="flex items-center gap-3">
                <h1 className="text-lg md:text-xl font-light">
                  AgroDealer mFrams
                </h1>
                <button className="rounded-full bg-dark-green text-white px-3 py-2">
                  Partime
                </button>
              </div>
              <div className="flex items-center gap-3 gap-x-12">
                <p className="text-dark-green">RAB</p>
                <p className="text-gray-400">NYAGATARE</p>
              </div>
            </div>

            <button className="rounded-lg bg-dark-green text-white px-8 py-3">
              Apply Job
            </button>
          </div>
        ))}
      </div>
    </Scaffold>
  );
};

export default Carrers;
