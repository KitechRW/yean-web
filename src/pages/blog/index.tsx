import React from 'react';
import Head from 'next/head';
import BlogActivity from 'modules/activities/BlogActivity';

const BlogPage = () => {
  return (
    <>
      <Head>
        <title>Yean</title>
      </Head>
      <BlogActivity />
    </>
  );
};

export default BlogPage;
