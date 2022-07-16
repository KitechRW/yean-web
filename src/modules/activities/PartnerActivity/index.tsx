import Scaffold from 'modules/layouts/Scaffold';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';
import Partners from '../_Partials/Library/Partners';
import ReadBooks from '../_Partials/Library/ReadBooks';
import { stats } from './data';

const PartnerActivity = () => {
  return (
    <Scaffold>
      <div className="flex flex-col w-full relative bg-brand-green min-h-[312px]">
        <Image
          src="/assets/images/partner.png"
          alt=""
          layout="fill"
          objectFit="cover"
          priority
        />
        <div className="flex flex-col h-full w-full items-center justify-center p-4 md:p-8 top-0 absolute z-10">
          <h1 className="text-3xl md:text-6xl font-black tracking-wide text-white">
            Partner with us
          </h1>
        </div>
      </div>

      <div className="p-4 flex flex-col items-center py-12 text-justify bg-gradient-to-r from-cyan-01 to-[#016648]">
        <p className="max-w-4xl">
          We cannot just do it alone. We collaborate with governments,
          companies, nonprofits and other organizations to find
          solutions and contribute to agriculture advancement. We
          appreciate our partner’s contribution that help mainly in
          strengthening our capacity to build stronger and resilient
          communities. Join us, contribute to agriculture development,
          and create jobs and wealth for youth and the community.
        </p>
      </div>

      <div className="bg-gradient-to-r from-cyan-01 to-white p-4 md:p-8 justify-center gap-6 flex md:gap-x-10 flex-wrap w-full">
        <h1 className="text-3xl font-black text-dark-green tracking-wide w-full text-center">
          Our Partnets
        </h1>
        <Partners />
        <div className="items-center to-white flex-grow h-full flex flex-col p-4 md:p-8">
          <h1 className="text-dark-green text-4xl md:text-6xl font-bold tracking-wide">
            Become our Partners
          </h1>
          <p className="text-sm text-brand-green mt-1">
            Please fill out , we will reach out ASAP
          </p>

          <div className="mt-6 inline-grid gap-4 justify-center sm:grid-cols-2 items-center w-full max-w-4xl">
            <input
              type="text"
              placeholder="Company Name / Organisation"
              className="rounded-full border border-dark-green py-4 px-4 w-full"
            />
            <input
              type="email"
              placeholder="Your Email Address"
              className="flex-grow rounded-full border border-dark-green py-4 px-4 w-full"
            />
            <input
              type="tel"
              placeholder="Phone number"
              className="flex-grow rounded-full border border-dark-green py-4 px-4 w-full"
            />
            <input
              type="text"
              placeholder="Address"
              className="flex-grow rounded-full border border-dark-green py-4 px-4 w-full"
            />
            <textarea
              name=""
              id=""
              rows={5}
              placeholder="Please Describe about your Organisation or Company..."
              className="w-full sm:col-span-2 resize-none rounded-3xl border border-dark-green py-4 px-4"
            />
          </div>
          <button className="text-base font-bold border-2 px-12 py-4 tracking-wide rounded-full mt-6 border-dark-green">
            Submit
          </button>
        </div>
      </div>
    </Scaffold>
  );
};

export default PartnerActivity;
