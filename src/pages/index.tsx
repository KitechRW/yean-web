import React from 'react';
import Head from 'next/head';
import LandingActivity from 'modules/activities/LandingActivity';
import Http from 'core/factory/fact.http';

const LandingPage = ({ data }: { data: any }) => {
  return (
    <>
      <Head>
        <title>Yean</title>
      </Head>
      <LandingActivity data={data} />
    </>
  );
};

export async function getStaticProps() {
  let results = null;
  let resError = null;
  try {
    const { data } = await Http.axios.get('/api/landing/1');
    results = data?.data;
  } catch (error) {}
  return {
    props: {
      data: results,
    },
    revalidate: 10,
  };
}

export default LandingPage;
