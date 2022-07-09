import Head from 'next/head';
import React from 'react';
import ModelsActivity from 'modules/activities/ModelsActivity';

const ModelsPage = () => {
  return (
    <>
      <Head>
        <title>Yean</title>
      </Head>
      <ModelsActivity />
    </>
  );
};

export default ModelsPage;
