import {NextPage} from "next";
import Head from "next/head";
import AdminScaffold from "modules/layouts/AdminScaffold";
import React from "react";
import UsersActivity from "modules/admin/UsersActivity";

const Users: NextPage = () => {
  return (
    <>
      <Head>
        <title>Yean</title>
      </Head>
      <AdminScaffold>
        <UsersActivity />
      </AdminScaffold>
    </>
  );
};

export default Users;
