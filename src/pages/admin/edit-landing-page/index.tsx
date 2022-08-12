import React from 'react';
import { NextPage } from 'next';
import Head from 'next/head';
import AdminScaffold from 'modules/layouts/AdminScaffold';
import EditLandingPageActivity from "modules/admin/LandingPageActitivity";

const AdminHomePage: NextPage = () => {
  return (
    <>
      <Head>
        <title>Edit home</title>
      </Head>
      <AdminScaffold>
        <EditLandingPageActivity />
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

export default AdminHomePage;
