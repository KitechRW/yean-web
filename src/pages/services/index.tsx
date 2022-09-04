import Head from 'next/head';
import React from 'react';
import ServicesActivity from 'modules/activities/ServicesActivity';
import Script from 'next/script';

const ServicesPage = () => {
  return (
    <>
      <Head>
        <title>Yean</title>
      </Head>
      <ServicesActivity />
      <Script src="/assets/js/main.js" />
    </>
  );
};

export default ServicesPage;
