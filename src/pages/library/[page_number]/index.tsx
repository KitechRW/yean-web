import axios from "axios";
import Head from "next/head";
import LibraryActivity from "modules/activities/LibraryActivity";
import React from "react";

export async function getServerSideProps({query: {page_number}}:any) {
  return axios.get(`${process.env.HOST}/api/libraries`).then(resp => {

    return {
      props: { data: resp.data.data, pageNumber:page_number},
    }
  }).catch(ex => {

    console.error(ex)
    return {
      props:{data:{},pageNumber:page_number}
    }
  });
}
const LibraryPage = ({data, pageNumber}:any) => {
  return (
    <>
      <Head>
        <title>Yean</title>
      </Head>
      <LibraryActivity activePage={parseInt(pageNumber)} books={data} />
    </>
  );
};

export default LibraryPage;
