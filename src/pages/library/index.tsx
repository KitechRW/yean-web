import Head from 'next/head';
import React from 'react';
import LibraryActivity from 'modules/activities/LibraryActivity';
import axios from 'axios';


export async function getServerSideProps({query:{pageNumber}}:any) {
  return axios.get(`${process.env.DEFAULT_API}/api/libraries`).then(resp => {

    return {
      props: { data: resp.data.data, pageNumber:pageNumber||1},
    }
}).catch(ex => {

  console.error(ex)
  return {
    props:{data:{}}
  }
});
}
const LibraryPage = ({data,pageNumber}:any) => {
  return (
    <>
      <Head>
        <title>Yean</title>
      </Head>
      <LibraryActivity books={data} activePage={parseInt(pageNumber)} />
    </>
  );
};

export default LibraryPage;
