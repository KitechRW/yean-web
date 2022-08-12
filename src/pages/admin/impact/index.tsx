import {NextPage} from "next";
import Head from "next/head";
import AdminScaffold from "modules/layouts/AdminScaffold";
import React from "react";
import ImpactActivity from "modules/admin/ImpactActivity";

const ImpactPage:NextPage = () => {
  return <>
    <Head>
      <title>Yean</title>
    </Head>
    <AdminScaffold>
      <ImpactActivity />
    </AdminScaffold>
  </>
}

export default ImpactPage
