import Head from 'next/head';
import React from 'react';
import ExtensionMaterialsActivity from 'modules/activities/ExtensionMaterialsActivity';
import MetaData from 'modules/_partials/MetaData';
import Http from 'core/factory/fact.http';
import Keys from 'apis/utils/constants/keys';

export async function getServerSideProps({
  query: { pageNumber },
}: any) {
  return Http.axios
    .get(`${Keys.DEFAULT_API}/api/categories`)
    .then(resp => {
      const categories = resp.data.data.rows.filter(
        (item: any) => !item.parent_id,
      );
      const subCategories = resp.data.data.rows.filter(
        (item: any) => !!item.parent_id,
      );
      return {
        props: { categories, subCategories, status: resp.status },
      };
    })
    .catch(ex => {
      console.error(ex);
      return {
        props: { data: {}, status: 404 },
      };
    });
}

const ExtensionPage = ({ subCategories, categories, ...rest }: any) => {
  return (
    <>
      <Head>
        <title>Extension materials - Yean</title>
        <MetaData />
      </Head>
      <ExtensionMaterialsActivity
        {...{ categories, subCategories }}
      />
    </>
  );
};

export default ExtensionPage;
