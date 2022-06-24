import React from 'react';
import Head from 'next/head';
import LandingAcitivity from 'modules/activities/LandingActivity';

const LandingPage = () => {
  return (
    <>
      <Head>
        <title>Yean</title>
      </Head>
      <LandingAcitivity />
    </>
  );
};

export default LandingPage;
