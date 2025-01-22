import React, { useEffect } from 'react';
import Head from 'next/head';
import BlogActivity from 'modules/activities/BlogActivity';
import { useRouter } from 'next/router';
import { useOpenFetcher } from 'apis/utils/fetcher';
import MetaData from 'modules/_partials/MetaData';

const SingleExtensionMaterial = () => {
  const {
    query: { pageNumber, cat, id, category_name, sub, views },
  } = useRouter();

  const { data } = useOpenFetcher(
    `/api/articles?page=${
      pageNumber || 1
    }&limit=20&cat=${category_name}&sub=${sub}&material=1&views=${views}`, 
  );
  
  return (
    <>
      <Head>
        <title>Yean</title>
        <MetaData />
      </Head>
      <BlogActivity
        data={data}
        extension={{ id, cat, category_name, sub }}
      />
    </>
  );
};

export default SingleExtensionMaterial;
