import React from 'react';
import Head from 'next/head';
import LandingActivity from 'modules/activities/LandingActivity';

const LandingPage = () => {
  return (
    <>
      <Head>
        <title>Yean</title>
      </Head>
      <LandingActivity />
    </>
  );
};

export default LandingPage;
