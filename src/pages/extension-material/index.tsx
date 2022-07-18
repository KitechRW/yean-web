import Head from 'next/head';
import React from 'react';
import ExtensionMaterialsActivity from "modules/activities/ExtensionMaterialsActivity";

const ExtensionPage = () => {
  return (
    <>
      <Head>
        <title>Yean</title>
      </Head>
      <ExtensionMaterialsActivity />
    </>
  );
};

export default ExtensionPage;
