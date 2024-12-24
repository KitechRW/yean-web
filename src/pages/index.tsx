import React from 'react';
import Head from 'next/head';
import LandingActivity from 'modules/activities/LandingActivity';
import Http from 'core/factory/fact.http';
import Script from 'next/script';
import MetaData from 'modules/_partials/MetaData';
import { Banner } from 'types/types';

const LandingPage = ({
                       data,
                       articles,
                       partners,
                       materials,
                       banners,
                     }: {
  data: any;
  articles: any;
  partners: any;
  materials: any;
  banners: Banner[];
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
        banners={banners}
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
  let banners = null;

  try {
    const { data } = await Http.axios.get('/api/landing/1');
    results = data?.data;
  } catch (error) {
    console.log(error);
  }

  try {
    const { data: articles } = await Http.axios.get(
      '/api/landing/1?attributes=id,title,author_name,comment,views,category_name,status,image',
    );
    resultArticles = articles?.data;
    // materials = articles?.materials;
  } catch (error: any) {
    console.log(error.message);
  }

  // Fetch banners
  try {
    const { data: bannersResponse } = await Http.axios.get('/api/banners');
    banners = bannersResponse;
  } catch (error) {
    console.log('Error fetching banners:', error);
  }

  return {
    props: {
      data: results,
      articles: resultArticles,
      partners,
      materials,
      banners,
    },
  };
}

export default LandingPage;
