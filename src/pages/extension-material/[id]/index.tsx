import React, { useEffect } from 'react';
import Head from 'next/head';
import BlogActivity from 'modules/activities/BlogActivity';
import { useRouter } from 'next/router';
import { useOpenFetcher } from 'apis/utils/fetcher';
import MetaData from 'modules/_partials/MetaData';

const SingleExtensionMaterial = () => {
  const {
    query: { pageNumber, cat, id, category_name, sub },
  } = useRouter();
  let query = `cat=${cat}`;
  if (sub) {
    query = `sub=${cat}`;
  }
  const { data } = useOpenFetcher(
    `/api/articles?page=${
      pageNumber || 1
    }&limit=20&${query}&material=1`,
  );
  console.log(data)
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
