import Head from 'next/head';
import React from 'react';
import SearchActivity from 'modules/activities/SearchActivity';
import MetaData from 'modules/_partials/MetaData';

const SearchPage = () => {
  return (
    <>
      <Head>
        <title>Yean</title>
        <MetaData />
      </Head>
      <SearchActivity />
    </>
  );
};

export default SearchPage;
