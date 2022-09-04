import Head from 'next/head';
import React from 'react';
import InnovationCenterActivity from "modules/activities/InnovationCenter";
import Script from 'next/script';

const InnovationPage = () => {
  return (
    <>
      <Head>
        <title>Yean</title>
      </Head>
      <InnovationCenterActivity />
      <Script src="/assets/js/main.js" />
    </>
  );
};

export default InnovationPage;
