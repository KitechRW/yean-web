import React from 'react';
import Head from 'next/head';
import LandingActivity from 'modules/activities/LandingActivity';
import Http from 'core/factory/fact.http';

const LandingPage = ({
  data,
  articles,
}: {
  data: any;
  articles: any;
}) => {
  return (
    <>
      <Head>
        <title>Yean</title>
      </Head>
      <LandingActivity data={data} articles={articles} />
    </>
  );
};

export async function getStaticProps() {
  let results = null;
  let resultArticles = null;
  try {
    const { data } = await Http.axios.get('/api/landing/1');
    results = data?.data;

    const { data: articles } = await Http.axios.get(
      '/api/landing/1?attributes=id,title,author_id,comment,views',
    );
    resultArticles = articles?.data;
  } catch (error) {
    console.log(error)
  }
  return {
    props: {
      data: results,
      articles: resultArticles,
    },
    revalidate: 10,
  };
}

export default LandingPage;
