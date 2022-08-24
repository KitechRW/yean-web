import React from 'react';
import Head from 'next/head';
import BlogActivity from 'modules/activities/BlogActivity';
import Http from 'core/factory/fact.http';

export async function getServerSideProps({query:{pageNumber}}:any) {
  return Http.axios
    .get(`${process.env.DEFAULT_API}/api/articles?page=${pageNumber || 1}&limit=20`)
    .then(resp => {
      return {
        props: { data: resp.data }
      };
    })
    .catch(ex => {
      console.error(ex);
      return {
        props: { data: {} },
      };
    });
}

const BlogPage = (props: any) => {
  return (
    <>
      <Head>
        <title>Yean</title>
      </Head>
      <BlogActivity data={props?.data} />
    </>
  );
};

export default BlogPage;
