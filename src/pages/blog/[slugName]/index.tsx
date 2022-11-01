import React from 'react';
import Head from 'next/head';
import SingleBlogActivity from 'modules/activities/SingleBlogActivity';
import Http from 'core/factory/fact.http';
import MetaData from 'modules/_partials/MetaData';

// export async function getServerSideProps({ query }: any) {
//   return Http.axios
//     .get(`${process.env.DEFAULT_API}/api/articles/${query.slugName}`)
//     .then(resp => {
//       return {
//         props: { data: resp.data.data },
//       };
//     })
//     .catch(ex => {
//       console.error(ex);
//       return {
//         props: { data: {} },
//       };
//     });
// }
const SingleBlogPage = ({ data }: any) => {
  return (
    <>
      <Head>
        <title>Yean</title>
        <MetaData />
      </Head>
      <SingleBlogActivity />
    </>
  );
};

export default SingleBlogPage;
