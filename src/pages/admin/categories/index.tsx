import React from 'react';
import { NextPage } from 'next';
import Head from 'next/head';
import AdminScaffold from 'modules/layouts/AdminScaffold';
import TopNav from 'modules/_partials/TopNav';
import CategoryActivity from 'modules/admin/CategoryActivity';
import SubCategoryActivity from 'modules/admin/SubCategoryActivity';

const Category: NextPage = () => {
  return (
    <>
      <Head>
        <title>Yean</title>
      </Head>
      <AdminScaffold>
        <div className="md:flex gap-3 md:gap-2 flex-grow">
          <CategoryActivity />
          <div className="w-0.5 bg-gray-200 h-full" />
          <SubCategoryActivity />
        </div>
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
