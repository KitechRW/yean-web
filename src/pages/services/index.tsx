import Head from 'next/head';
import React from 'react';
import ServicesActivity from 'modules/activities/ServicesActivity';

const ServicesPage = () => {
  return (
    <>
      <Head>
        <title>Yean</title>
      </Head>
      <ServicesActivity />
    </>
  );
};

export default ServicesPage;
