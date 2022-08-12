import {NextPage} from "next";
import Head from "next/head";
import AdminScaffold from "modules/layouts/AdminScaffold";
import React from "react";
import PartnerWithUsActivity from "modules/admin/PartnerWithUsActivity";

const PartnerWithUs:NextPage = () => {
  return <>
    <Head>
      <title>Yean</title>
    </Head>
    <AdminScaffold>
      <PartnerWithUsActivity />
    </AdminScaffold>
  </>
}
export default PartnerWithUs;
