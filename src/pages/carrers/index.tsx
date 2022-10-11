import Head from 'next/head';
import React from 'react';
import CarrersActivity from 'modules/activities/CarrersActivity';
import MetaData from 'modules/_partials/MetaData';

const CarrersPage = () => {
  return (
    <>
      <Head>
        <title>Jobs - Yean</title>
        <MetaData />
      </Head>
      <CarrersActivity />
    </>
  );
};

export default CarrersPage;
