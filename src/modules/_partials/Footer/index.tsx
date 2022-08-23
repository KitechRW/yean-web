/* eslint-disable @next/next/no-img-element */
import Wrapper from 'modules/layouts/Wrapper';
import Link from 'next/link';
import axios from 'axios';
import React from 'react';
import Logo from '../Logo';
import FacebookIcon from '../_drawable/icons/facebookIcon';
import TwitterIcon from '../_drawable/icons/twitterIcon';
import WhatsappIcon from '../_drawable/icons/whatsappIcon';
import YouTubeIcon from '../_drawable/icons/youTubeIcon';
import { Instagram } from '@mui/icons-material';
import { Alert, AlertColor, Snackbar } from '@mui/material';

const Footer = () => {
  const [open, setOpen] = React.useState<{
    open: boolean;
    type: AlertColor;
    message: string;
  }>({
    open: false,
    type: 'error',
    message: '',
  });
  const [errors, setErrors] = React.useState({ email: '' });
  const [email, setEmail] = React.useState('');
  const onSubmit = async (event: any) => {
    event.preventDefault();
    if (!email.trim()) {
      setErrors(prev => ({ ...prev, email: 'Email is required' }));
      return;
    } else {
      await axios
        .post('/api/subscribers', { email })
        .then(response => {
          if (response.data) {
            setEmail('');
            setOpen({
              open: true,
              type: 'success',
              message: 'You are subscribed now.',
            });
          }
        })
        .catch(error => {
          setOpen({
            open: true,
            type: 'error',
            message: 'Something went wrong, try again',
          });
        });
    }
  };
  return (
    <>
      <Snackbar
        open={open.open}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
        autoHideDuration={5000}
        onClose={() => setOpen(prev => ({ ...prev, open: false }))}
      >
        <Alert variant="filled" severity={open.type}>
          {open.message}
        </Alert>
      </Snackbar>

      <div className="w-full bg-center bg-cover bg-no-repeat min-h-[34px] bg-[url(/assets/images/bottom-pattern.png)]" />
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
              <Link href="/services">Service</Link>
              <Link href="/models">Modal</Link>
              <Link href="/projects">Projects</Link>
              <Link href="/models?q=impact">Impacts</Link>
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
              <Link href="/farmer-platform">Farmer Platform</Link>
              {/* <Link href="#">Opportunities</Link> */}
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
              <form
                onSubmit={onSubmit}
                className="flex flex-col space-y-3"
              >
                <input
                  type="email"
                  value={email}
                  onChange={event => {
                    setEmail(event.target.value);
                    setErrors(prev => ({ ...prev, email: '' }));
                  }}
                  placeholder="Your email address"
                  className="px-4 py-3 text-center text-gray-800 outline-none rounded-full bg-white placeholder:text-center placeholder:text-gray-400"
                />
                {errors.email && (
                  <p className="text-xs text-red-500 mt-0.5">
                    {errors.email}
                  </p>
                )}
                <button
                  type="submit"
                  onClick={onSubmit}
                  className="bg-brand-violet text-white font-semibold rounded-full py-3 px-4"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </div>
        <div className="flex items-center space-x-3 mt-6">
          <a
            href="http://www.facebook.com/yeanrwanda"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FacebookIcon />
          </a>
          <a
            href="http://www.twitter.com/yean_rwanda"
            target="_blank"
            rel="noopener noreferrer"
          >
            <TwitterIcon />
          </a>
          <a
            href="https://www.instagram.com/yean_rwanda/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="/assets/icons/ig.png"
              className="w-8 h-8 rounded-full"
              alt=""
            />
          </a>
          <a
            href="https://www.flickr.com/photos/142605897@N06/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="/assets/icons/flickr.png"
              className="w-8 h-8 rounded-full"
              alt=""
            />
          </a>
          {/* <a href="http://" target="_blank" rel="noopener noreferrer">
            <YouTubeIcon />
          </a>
          <a href="http://" target="_blank" rel="noopener noreferrer">
            <WhatsappIcon />
          </a> */}
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
