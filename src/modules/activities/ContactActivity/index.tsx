import { Call, Email, Facebook } from '@mui/icons-material';
import Scaffold from 'modules/layouts/Scaffold';
import React from 'react';

const ContactActivity = () => {
  return (
    <Scaffold>
      <div className="items-center bg-gradient-to-r from-[#00F0FF]/20 to-white flex-grow h-full flex flex-col p-4 md:p-8">
        <h1 className="text-dark-green text-4xl md:text-6xl font-bold tracking-wide">
          Contact us
        </h1>
        <p className="text-sm text-brand-green mt-1">
          Please fill out , we will reach out ASAP
        </p>

        <div className="mt-6 flex gap-3 justify-between flex-wrap items-center max-w-4xl">
          <input
            type="text"
            placeholder="Your Name"
            className="rounded-full border border-dark-green py-3 px-4 w-full max-w-[340px]"
          />
          <input
            type="email"
            placeholder="Your Email Address"
            className="flex-grow rounded-full border border-dark-green py-3 px-4 w-full max-w-[340px]"
          />
          <textarea
            name=""
            id=""
            rows={4}
            placeholder="Your Messages..."
            className="resize-none rounded-3xl border border-dark-green py-3 px-4 w-full max-w-[763px]"
          />
        </div>
        <button className="text-base font-bold border-2 px-12 py-3 tracking-wide rounded-full mt-6 border-dark-green">
          Submit
        </button>

        <div className="mt-12 justify-between flex-wrap gap-3 pb-2 max-w-4xl w-full flex items-center border-b border-b-[#8E8E93]">
          <div className="flex items-center space-x-2">
            <p className="font-bold text-gray-500">Contact us:</p>
            <a
              href="tel:+250 788 845 727"
              className="text-sm flex text-gray-500 items-center"
            >
              <span className="text-brand-green ">
                <Call />
              </span>
              <span>+250 788 845 727</span>
            </a>
          </div>
          <a
            href="mailto:info@yeanagro.com"
            className="text-sm flex text-gray-500 items-center"
          >
            <Email className="text-brand-green " />
            <span>info@yeanagro.com</span>
          </a>
        </div>

        <div className="mt-12 justify-center flex-wrap gap-3 pb-2 max-w-4xl w-full flex items-center">
          {new Array(8).fill(0).map(element => (
            <a
              key={element}
              href="http://"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-80 flex space-x-2 text-white bg-[#4267B2] items-center border rounded-lg px-3 py-2 font-bold"
            >
              <Facebook />
              <span>Facebook</span>
            </a>
          ))}
        </div>
      </div>
    </Scaffold>
  );
};

export default ContactActivity;
