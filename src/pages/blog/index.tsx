import React from 'react';
import Head from 'next/head';
import BlogActivity from 'modules/activities/BlogActivity';
import axios from 'axios';


export async function getStaticProps() {
  return axios.get('http://localhost:3001/api/articles').then(resp => {

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

const BlogPage = (props:any) => {


  
  return (
    <>
      <Head>
        <title>Yean</title>
      </Head>
      <BlogActivity articles={props?.data}  />
    </>
  );
};

export default BlogPage;
