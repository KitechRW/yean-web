import React from 'react';
import { NextPage } from 'next';
import Head from 'next/head';
import AdminScaffold from 'modules/layouts/AdminScaffold';
import AdminPartnersActivity from 'modules/activities/AdminPartnersActivity';
import { withSessionSsr } from 'system/lib/withSession';
import isAuth from 'system/helpers/isAuth';
import Keys from 'apis/utils/constants/keys';

const AdminPartners: NextPage = () => {
  return (
    <>
      <Head>
        <title>Forshop</title>
      </Head>
      <AdminScaffold>
        <AdminPartnersActivity />
      </AdminScaffold>
    </>
  );
};

// export const getServerSideProps = withSessionSsr(
//   async ({ req, res }) => {
//     const { user, token } = req.session;

//     if (token && !isAuth(token)) {
//       return {
//         redirect: {
//           permanent: false,
//           destination: '/logout',
//         },
//       };
//     }

//     if (!['admin', 'member'].includes(`${user?.type}`)) {
//       return {
//         redirect: {
//           permanent: false,
//           destination: '/',
//         },
//       };
//     }

//     return {
//       props: {
//         user: user || null,
//         token: token || null,
//       },
//     };
//   },
// );

export default AdminPartners;
