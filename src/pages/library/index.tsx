import Head from 'next/head';
import React from 'react';
import LibraryActivity from 'modules/activities/LibraryActivity';
import axios from 'axios';


export async function getStaticProps() {
  return axios.get(`${process.env.HOST}/api/libraries`).then(resp => {

    return {
      props: { data: resp.data.data}, 
    }
}).catch(ex => {

  console.error(ex)
  return {
    props:{data:{}}
  }
});
}
const LibraryPage = ({data}:any) => {
  return (
    <>
      <Head>
        <title>Yean</title>
      </Head>
      <LibraryActivity books={data} />
    </>
  );
};

export default LibraryPage;
