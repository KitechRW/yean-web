import React from 'react';
import Head from 'next/head';
import LandingActivity from 'modules/activities/LandingActivity';
import Http from 'core/factory/fact.http';
import Script from 'next/script';
import MetaData from 'modules/_partials/MetaData';
import { Banner } from 'types/types';

const LandingPage = ({
  recentArticles,
  recentExtensionMaterials,
  slides,
  banners,
}: {
  banners: Record<string, Banner>;
  recentArticles: any[];
  recentExtensionMaterials: any[];
  slides: any[];
}) => {
  return (
    <>
      <Head>
        <title>YEAN - My farming story</title>
        <MetaData />
      </Head>
      <LandingActivity
        banners={banners}
        recentArticles={recentArticles}
        recentExtensionMaterials={recentExtensionMaterials}
        slides={slides}
      />
      <Script src="/assets/js/main.js" />
    </>
  );
};

export async function getServerSideProps() {
  let partners = null;

  let banners: any = {};
  let recentArticles = [];
  let recentExtensionMaterials = [];
  let slides = [];
  try {
    const { data } = await Http.axios.get('/api/landing');
    recentArticles = data?.recentArticles || [];
    slides = data?.slides || [];
    recentExtensionMaterials = data?.recentExtensionMaterials || [];
  } catch (error: any) {
    console.error(error);
  }

  // Fetch banners
  try {
    const { data: bannersResponse } = await Http.axios.get(
      '/api/banners',
    );
    banners.first =
      bannersResponse.find(
        (item: any) => item.section.toString() === '1',
      ) || null;
    banners.second =
      bannersResponse.find(
        (item: any) => item.section.toString() === '2',
      ) || null;
    banners.third =
      bannersResponse.find(
        (item: any) => item.section.toString() === '3',
      ) || null;
  } catch (error) {
    console.log('Error fetching banners:', error);
  }

  return {
    props: {
      partners,
      banners,
      recentArticles,
      recentExtensionMaterials,
      slides,
    },
  };
}

export default LandingPage;
