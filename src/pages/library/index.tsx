import Head from 'next/head';
import React from 'react';
import LibraryActivity from 'modules/activities/LibraryActivity';

const LibraryPage = () => {
  return (
    <>
      <Head>
        <title>Yean</title>
      </Head>
      <LibraryActivity />
    </>
  );
};

export default LibraryPage;
