import React from 'react';
import Head from 'next/head';
import SingleBlogActivity from 'modules/activities/SingleBlogActivity';
import axios from 'axios';


export async function getServerSideProps({ query }:any) {
  return axios.get(`http://localhost:3001/api/articles/${query.slugName}`).then(resp => {

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
const SingleBlogPage = ({data}:any) => {
  return (
    <>
      <Head>
        <title>Yean</title>
      </Head>
      <SingleBlogActivity article={data} />
    </>
  );
};

export default SingleBlogPage;
