import Head from 'next/head';
import React from 'react';
import ModelsActivity from 'modules/activities/ModelsActivity';
import Script from 'next/script';
import MetaData from 'modules/_partials/MetaData';

const ModelsPage = () => {
  return (
    <>
      <Head>
        <title>Models - Yean</title>
        <MetaData />
      </Head>
      <ModelsActivity />
      <Script src="/assets/js/main.js" />
    </>
  );
};

export default ModelsPage;
