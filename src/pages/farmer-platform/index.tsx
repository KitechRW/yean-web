import Head from 'next/head';
import React from 'react';
import FarmerPlatformActivity from "modules/activities/FarmerPlatformActivity";
import Script from 'next/script';

const FarmerPlatformPage = () => {
  return (
    <>
      <Head>
        <title>Yean</title>
      </Head>
      <FarmerPlatformActivity />
      <Script src="/assets/js/main.js" />
    </>
  );
};

export default FarmerPlatformPage;
