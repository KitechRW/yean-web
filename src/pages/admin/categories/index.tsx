import React from 'react';
import { NextPage } from 'next';
import Head from 'next/head';
import AdminScaffold from 'modules/layouts/AdminScaffold';
import TopNav from 'modules/_partials/TopNav';
import CategoryActivity from 'modules/admin/CategoryActivity';

const Category: NextPage = () => {
  return (
    <>
      <Head>
        <title>Yean</title>
      </Head>
      <AdminScaffold>
        <CategoryActivity />
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

export default Category;