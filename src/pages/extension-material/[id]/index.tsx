import React from 'react';
import Head from 'next/head';
import BlogActivity from 'modules/activities/BlogActivity';
import MetaData from 'modules/_partials/MetaData';
import Http from 'core/factory/fact.http';
import Keys from 'apis/utils/constants/keys';

export async function getServerSideProps({
  query: { pageNumber, id },
}: any) {
  return Http.axios
    .get(
      `${Keys.DEFAULT_API}/api/articles?page=${
        pageNumber || 1
      }&limit=20&cat=${id}&status=published`,
    )
    .then(resp => {
      return {
        props: { data: resp.data, status: resp.status, id },
      };
    })
    .catch(ex => {
      console.error(ex);
      return {
        props: { data: {}, status: 404 },
      };
    });
}

const SingleExtensionMaterial = ({ data, id }: any) => {
  return (
    <>
      <Head>
        <title>Yean</title>
        <MetaData />
      </Head>
      <BlogActivity data={data} extension={{ id }} />
    </>
  );
};

export default SingleExtensionMaterial;
