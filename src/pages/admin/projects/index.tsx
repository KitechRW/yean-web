import React from 'react';
import { NextPage } from 'next';
import Head from 'next/head';
import AdminScaffold from 'modules/layouts/AdminScaffold';
import ProjectActivity from 'modules/admin/ProjectActivity';

const Project: NextPage = () => {
  return (
    <>
      <Head>
        <title>Yean</title>
      </Head>
      <AdminScaffold>
        <ProjectActivity />
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

//     if (user?.roleId !== 1) {
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

export default Project;
