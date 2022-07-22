import Head from 'next/head';
import React from 'react';
import CarrersActivity from 'modules/activities/CarrersActivity';

const CarrersPage = () => {
  return (
    <>
      <Head>
        <title>Yean</title>
      </Head>
      <CarrersActivity />
    </>
  );
};

export default CarrersPage;
