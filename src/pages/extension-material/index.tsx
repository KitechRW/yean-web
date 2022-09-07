import Head from 'next/head';
import React from 'react';
import ExtensionMaterialsActivity from 'modules/activities/ExtensionMaterialsActivity';
import MetaData from 'modules/_partials/MetaData';

const ExtensionPage = () => {
  return (
    <>
      <Head>
        <title>Extension materials - Yean</title>
        <MetaData />
      </Head>
      <ExtensionMaterialsActivity />
    </>
  );
};

export default ExtensionPage;
