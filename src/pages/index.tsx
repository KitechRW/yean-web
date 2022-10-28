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
  materials,
}: {
  data: any;
  articles: any;
  partners: any;
  materials: any;
}) => {
  return (
    <>
      <Head>
        <title>YEAN - My farming story</title>
        <MetaData />
      </Head>
      <LandingActivity
        data={data}
        materials={materials}
        articles={articles}
      />
      <Script src="/assets/js/main.js" />
    </>
  );
};

export async function getServerSideProps() {
  let results = null;
  let resultArticles = null;
  let partners = null;
  let materials = null;
  try {
    const { data } = await Http.axios.get('/api/landing/1');
    results = data?.data;
  } catch (error) {
    console.log(error);
  }

  try {
    const { data: articles } = await Http.axios.get(
      '/api/landing/1?attributes=id,title,author_id,comment,views,category,image',
    );
    resultArticles = articles?.data;
    materials = articles?.materials;
  } catch (error: any) {
    console.log(error.message);
  }
  return {
    props: {
      data: results,
      articles: resultArticles,
      partners,
      materials,
    },
  };
}

export default LandingPage;
