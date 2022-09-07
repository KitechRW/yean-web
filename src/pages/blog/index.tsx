import React, { useEffect } from 'react';
import Head from 'next/head';
import BlogActivity from 'modules/activities/BlogActivity';
import Http from 'core/factory/fact.http';
import { useRouter } from 'next/router';
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
  const router = useRouter();

  useEffect(() => {
    if (props.status === 404) {
      router
        .push('/404')
        .then(r => console.log('navigate ' + JSON.stringify(r)));
    } else if (props.status === 500) {
      router
        .push('/500')
        .then(r => console.log('navigate ' + JSON.stringify(r)));
    }
  }, []);
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
