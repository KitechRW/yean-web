import {NextPage} from "next";
import Head from "next/head";
import AdminScaffold from "modules/layouts/AdminScaffold";
import React from "react";
import AdminJobActivity from "modules/admin/JobActivity";

const Job: NextPage = () => {
  return (
    <>
      <Head>
        <title>Forshop</title>
      </Head>
      <AdminScaffold>
        <AdminJobActivity />
      </AdminScaffold>
    </>
  );
};

export default Job;
