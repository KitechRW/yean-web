import Head from 'next/head';
import React from 'react';
import ModelsActivity from 'modules/activities/ModelsActivity';
import Script from 'next/script';

const ModelsPage = () => {
  return (
    <>
      <Head>
        <title>Yean</title>
      </Head>
      <ModelsActivity />
      <Script src="/assets/js/main.js" />
    </>
  );
};

export default ModelsPage;
