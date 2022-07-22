import Head from 'next/head';
import React from 'react';
import FarmerPlatformActivity from "modules/activities/FarmerPlatformActivity";

const FarmerPlatformPage = () => {
  return (
    <>
      <Head>
        <title>Yean</title>
      </Head>
      <FarmerPlatformActivity />
    </>
  );
};

export default FarmerPlatformPage;
