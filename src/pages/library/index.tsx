import Head from 'next/head';
import React from 'react';
import LibraryActivity from 'modules/activities/LibraryActivity';
import axios from 'axios';
import MetaData from 'modules/_partials/MetaData';

export async function getServerSideProps({
  query: { pageNumber },
}: any) {
  return axios
    .get(
      `${process.env.DEFAULT_API}/api/libraries?page=${
        pageNumber || 1
      }&limit=20`,
    )
    .then(resp => {
      return {
        props: { data: resp.data },
      };
    })
    .catch(ex => {
      console.error(ex);
      return {
        props: { data: {} },
      };
    });
}
const LibraryPage = ({ data }: any) => {
  return (
    <>
      <Head>
        <title>Library - Yean</title>
        <MetaData />
      </Head>
      <LibraryActivity data={data} />
    </>
  );
};

export default LibraryPage;
