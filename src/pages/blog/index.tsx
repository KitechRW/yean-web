import React from 'react';
import Head from 'next/head';
import BlogActivity from 'modules/activities/BlogActivity';
import Http from 'core/factory/fact.http';

export async function getStaticProps() {
  return Http.axios
    .get(`${process.env.DEFAULT_API}/api/articles`)
    .then(resp => {
      return {
        props: { data: resp.data.data },
        revalidate: 10,
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
      <BlogActivity articles={props?.data} />
    </>
  );
};

export default BlogPage;
