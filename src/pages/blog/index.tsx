import React, { useEffect } from 'react';
import Head from 'next/head';
import BlogActivity from 'modules/activities/BlogActivity';
import Http from 'core/factory/fact.http';
import MetaData from 'modules/_partials/MetaData';

export async function getServerSideProps({
  query: { pageNumber },
}: any) {
  return Http.axios
    .get(
      `${process.env.DEFAULT_API}/api/articles?page=${
        pageNumber || 1
      }&limit=20`,
    )
    .then(resp => {
      return {
        props: { data: resp.data, status: resp.status },
      };
    })
    .catch(ex => {
      console.error(ex);
      return {
        props: { data: {}, status: 404 },
      };
    });
}

const BlogPage = (props: any) => {
  
  return (
    <>
      <Head>
        <title>Blogs - Yean</title>
        <MetaData />
      </Head>
      <BlogActivity data={props?.data} />
    </>
  );
};

export default BlogPage;
