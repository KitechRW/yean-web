import {NextPage} from "next";
import Head from "next/head";
import AdminScaffold from "modules/layouts/AdminScaffold";
import React from "react";
import AboutUsActivity from "modules/admin/AboutUsActivity";

const AboutUs : NextPage = () => {
  return <>
    <Head>
      <title>Yean</title>
    </Head>
    <AdminScaffold>
      <AboutUsActivity />
    </AdminScaffold>
  </>
}

export default AboutUs
