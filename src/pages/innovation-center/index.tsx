import Head from 'next/head';
import React from 'react';
import InnovationCenterActivity from "modules/activities/InnovationCenter";

const InnovationPage = () => {
  return (
    <>
      <Head>
        <title>Yean</title>
      </Head>
      <InnovationCenterActivity />
    </>
  );
};

export default InnovationPage;
