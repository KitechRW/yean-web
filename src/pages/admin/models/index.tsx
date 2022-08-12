import {NextPage} from "next";
import Head from "next/head";
import AdminScaffold from "modules/layouts/AdminScaffold";
import React from "react";
import ModelsActivity from "modules/admin/ModelsActivity";

const Models:NextPage = () => {
  return <>
    <Head>
      <title>Yean</title>
    </Head>
    <AdminScaffold>
      <ModelsActivity />
    </AdminScaffold>
  </>
}

export default Models
