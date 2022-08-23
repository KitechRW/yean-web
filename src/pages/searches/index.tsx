import Head from 'next/head';
import React from 'react';
import SearchActivity from 'modules/activities/SearchActivity';

const SearchPage = () => {
  return (
    <>
      <Head>
        <title>Yean</title>
      </Head>
      <SearchActivity />
    </>
  );
};

export default SearchPage;
