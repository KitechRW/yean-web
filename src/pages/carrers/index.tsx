import Head from 'next/head';
import React from 'react';
import CarrersActivity from 'modules/activities/CarrersActivity';
import Http from "core/factory/fact.http";

export async function getStaticProps() {
  return Http.axios
    .get(`${process.env.DEFAULT_API}/api/jobs`)
    .then(resp => {
      return {
        props: { data: resp.data?.data, status:resp.status }
      };
    })
    .catch(ex => {
      console.error(ex);
      return {
        props: { data: {}, status:404 },
      };
    });
}
const CarrersPage = (props:any) => {
  return (
    <>
      <Head>
        <title>Yean</title>
      </Head>
      <CarrersActivity data={props.data} />
    </>
  );
};

export default CarrersPage;
