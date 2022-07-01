import Wrapper from 'modules/layouts/Wrapper';
import Link from 'next/link';
import React from 'react';
import Logo from '../Logo';
import FacebookIcon from '../_drawable/icons/facebookIcon';
import TwitterIcon from '../_drawable/icons/twitterIcon';
import WhatsappIcon from '../_drawable/icons/whatsappIcon';
import YouTubeIcon from '../_drawable/icons/youTubeIcon';

const Footer = () => {
  return (
    <>
      <Wrapper className="bg-dark-green px-4 md:px-8 text-white py-3 bg-no-repeat bg-center bg-cover bg-[url(/assets/images/bg-footer.svg)]">
        <div className="flex flex-wrap md:flex-nowrap gap-x-10 gap-y-3">
          <div className="flex flex-col space-y-3">
            <Logo logo="/assets/images/white_logo.png" />
            <p className="text-xs">
              Youth Engagement in Agriculture Network (YEAN ) is a
              Youth Led Private Agriculture Extension Social
              enterprise created in 2014
            </p>
          </div>
          <div className="flex flex-col">
            <div className="flex space-y-2 flex-col">
              <h3 className="text-xl font-bold">What we Do</h3>
              <div className="flex items-center">
                <div className="w-12 h-[1px] bg-brand-violet" />
                <div className="w-32 h-[1px] bg-white" />
              </div>
            </div>
            <div className="mt-3 flex flex-col space-y-2">
              <Link href="#">Service</Link>
              <Link href="#">Modal</Link>
              <Link href="#">Projects</Link>
              <Link href="#">Impacts</Link>
            </div>
          </div>

          <div className="flex flex-col">
            <div className="flex space-y-2 flex-col">
              <h3 className="text-xl font-bold">Careers</h3>
              <div className="flex items-center">
                <div className="w-12 h-[1px] bg-brand-violet" />
                <div className="w-32 h-[1px] bg-white" />
              </div>
            </div>
            <div className="mt-3 flex flex-col space-y-2">
              <Link href="#">Job Openings</Link>
              <Link href="#">Opportunities</Link>
            </div>
          </div>

          <div className="flex flex-col">
            <div className="flex space-y-2 flex-col">
              <h3 className="text-xl font-bold">Stay In</h3>
              <div className="flex items-center">
                <div className="w-12 h-[1px] bg-brand-violet" />
                <div className="w-32 h-[1px] bg-white" />
              </div>
            </div>
            <div className="mt-3 flex flex-col space-y-2">
              <p className="text-xs">
                To be updated with all the latest news, offers and
                special annoucements.
              </p>
              <div className="flex flex-col space-y-3">
                <input
                  type="email"
                  name=""
                  id=""
                  placeholder="Your email address"
                  className="px-4 py-3 text-center text-gray-800 outline-none rounded-full bg-white placeholder:text-center placeholder:text-gray-400"
                />
                <button className="bg-brand-violet text-white font-semibold rounded-full py-3 px-4">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="flex items-center space-x-3 mt-6">
          <a href="#">
            <FacebookIcon />
          </a>
          <a href="#">
            <TwitterIcon />
          </a>
          <a href="#">
            <YouTubeIcon />
          </a>
          <a href="#">
            <WhatsappIcon />
          </a>
        </div>
      </Wrapper>
      <Wrapper className="bg-brand-violet px-4 md:px-8 py-3">
        <p className="text-center font-black text-white text-base">
          YEAN &copy; {new Date().getFullYear()} - All rights Reserved
        </p>
      </Wrapper>
    </>
  );
};

export default Footer;
