import React from 'react';
import 'system/styles/globals.css';
import type { AppProps } from 'next/app';
import dynamic from 'next/dynamic';
import AppProviders from 'modules/contexts/AppProviders';
import _protected from 'system/helpers/protected';

const ProgressBar = dynamic(
  () => import('modules/_partials/ProgessBar'),
  { ssr: false },
);

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <AppProviders>
        <Component {...pageProps} />
      </AppProviders>
      <ProgressBar />
    </>
  );
};

export default MyApp;
