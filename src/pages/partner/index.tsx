import Head from 'next/head';
import React from 'react';
import PartnerActivity from 'modules/activities/PartnerActivity';
import MetaData from 'modules/_partials/MetaData';

const PartnerPage = () => {
  return (
    <>
      <Head>
        <title>Partner with us - Yean</title>
        <MetaData />
      </Head>
      <PartnerActivity />
    </>
  );
};

export default PartnerPage;
