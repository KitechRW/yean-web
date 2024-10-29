import { NextPage } from 'next';
import Head from 'next/head';
import AdminScaffold from 'modules/layouts/AdminScaffold';
import React from 'react';
import SubscribersActivity from 'modules/admin/SubscribersActivity';

const Users: NextPage = (props: any) => {
  return (
    <>
      <Head>
        <title>Yean</title>
      </Head>
      <AdminScaffold>
        <SubscribersActivity />
      </AdminScaffold>
    </>
  );
};

export default Users;
