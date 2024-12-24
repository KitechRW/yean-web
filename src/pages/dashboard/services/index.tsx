import React from 'react';
import { NextPage } from 'next';
import Head from 'next/head';
import AdminScaffold from 'modules/layouts/AdminScaffold';
import ServiceActivity from 'modules/admin/ServiceActivity';
import { withSessionSsr } from 'system/lib/withSession';

const Service: NextPage = () => {
  return (
    <>
      <Head>
        <title>Yean</title>
      </Head>
      <AdminScaffold>
        <ServiceActivity />
      </AdminScaffold>
    </>
  );
};

export const getServerSideProps = withSessionSsr(
  async ({ req, res }) => {
    const { user, token } = req.session;

    if (!token) {
      return {
        redirect: {
          permanent: false,
          destination: '/logout',
        },
      };
    }

    if (!['admin'].includes(`${user?.type}`)) {
      return {
        redirect: {
          permanent: false,
          destination: '/',
        },
      };
    }

    return {
      props: {
        user: user || null,
        token: token || null,
      },
    };
  },
);

export default Service;
