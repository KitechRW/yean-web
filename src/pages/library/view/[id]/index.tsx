import React from 'react';
import Head from 'next/head';
import Http from 'core/factory/fact.http';
import ViewBookActivity from "modules/activities/ViewBookActivity";

export async function getServerSideProps({ query }: any) {
  if(!query.id){
    return {
      props: { data: {}, status:404 },
    };
  }
  return Http.axios
    .get(`${process.env.DEFAULT_API}/api/libraries/${query.id}`)
    .then(resp => {
      return {
        props: { data: resp.data.data, status:resp.status },
      };
    })
    .catch(ex => {
      console.error(ex);
      return {
        props: { data: {}, status:500 },
      };
    });
}
const ViewBook = ({ data }: any) => {
  return (
    <>
      <Head>
        <title>Yean</title>
      </Head>
      <ViewBookActivity book={data} />
    </>
  );
};

export default ViewBook;
