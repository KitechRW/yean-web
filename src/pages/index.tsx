import React from 'react';
import Head from 'next/head';
import LandingActivity from 'modules/activities/LandingActivity';
import Http from 'core/factory/fact.http';
import Script from 'next/script';
import MetaData from 'modules/_partials/MetaData';

const LandingPage = ({
  data,
  articles,
  partners,
}: {
  data: any;
  articles: any;
  partners: any;
}) => {
  return (
    <>
      <Head>
        <title>YEAN - My farming story</title>
        <MetaData />
      </Head>
      <LandingActivity
        data={data}
        articles={articles}
        partners={partners}
      />
      <Script src="/assets/js/main.js" />
    </>
  );
};

export async function getServerSideProps() {
  let results = null;
  let resultArticles = null;
  let partners = null;
  await Http.axios.get('/api/partners').then(response => {
    partners = response.data.data;
  });
  try {
    const { data } = await Http.axios.get('/api/landing/1');
    results = data?.data;
  } catch (error) {
    console.log(error);
  }

  try {
    const { data: articles } = await Http.axios.get(
      '/api/landing/1?attributes=id,title,author_id,comment,views,category',
    );
    resultArticles = articles?.data;
  } catch (error: any) {
    console.log(error.message);
  }
  return {
    props: {
      data: results,
      articles: resultArticles,
      partners,
    },
  };
}

export default LandingPage;
