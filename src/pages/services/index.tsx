import Head from 'next/head';
import React from 'react';
import ServicesActivity from 'modules/activities/ServicesActivity';
import Script from 'next/script';
import MetaData from 'modules/_partials/MetaData';

const ServicesPage = () => {
  return (
    <>
      <Head>
        <title>Services - YEAN</title>
        <MetaData />
      </Head>
      <ServicesActivity />
      <Script src="/assets/js/main.js" />
    </>
  );
};

export default ServicesPage;
