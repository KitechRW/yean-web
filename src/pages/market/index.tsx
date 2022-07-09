import Head from 'next/head';
import React from 'react';
import MarketActivity from 'modules/activities/MarketActivity';

const MarketPage = () => {
  return (
    <>
      <Head>
        <title>Yean</title>
      </Head>
      <MarketActivity />
    </>
  );
};

export default MarketPage;
