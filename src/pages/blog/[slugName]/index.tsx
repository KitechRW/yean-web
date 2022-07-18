import React from 'react';
import Head from 'next/head';
import SingleBlogActivity from 'modules/activities/SingleBlogActivity';

const SingleBlogPage = () => {
  return (
    <>
      <Head>
        <title>Yean</title>
      </Head>
      <SingleBlogActivity />
    </>
  );
};

export default SingleBlogPage;
