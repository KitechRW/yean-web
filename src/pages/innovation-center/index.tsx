import Head from 'next/head';
import React from 'react';
import InnovationCenterActivity from 'modules/activities/InnovationCenter';
import Script from 'next/script';
import MetaData from 'modules/_partials/MetaData';

const InnovationPage = () => {
  return (
    <>
      <Head>
        <title>Innovation center - Yean</title>
        <MetaData />
      </Head>
      <InnovationCenterActivity />
      <Script src="/assets/js/main.js" />
    </>
  );
};

export default InnovationPage;
