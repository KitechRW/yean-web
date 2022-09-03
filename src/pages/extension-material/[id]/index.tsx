import React, { useEffect } from 'react';
import Head from 'next/head';
import BlogActivity from 'modules/activities/BlogActivity';
import { useRouter } from 'next/router';
import { useOpenFetcher } from 'apis/utils/fetcher';

const SingleExtensionMaterial = () => {
  const {
    query: { pageNumber, cat, id, category_name, sub },
  } = useRouter();
  const { data } = useOpenFetcher(
    `/api/articles?page=${pageNumber || 1}&limit=20&cat=${cat}`,
  );

  return (
    <>
      <Head>
        <title>Yean</title>
      </Head>
      <BlogActivity
        data={data}
        extension={{ id, cat, category_name, sub }}
      />
    </>
  );
};

export default SingleExtensionMaterial;
