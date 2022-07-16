import Head from 'next/head';
import React from 'react';
import PartnerActivity from 'modules/activities/PartnerActivity';

const PartnerPage = () => {
  return (
    <>
      <Head>
        <title>Yean</title>
      </Head>
      <PartnerActivity />
    </>
  );
};

export default PartnerPage;
