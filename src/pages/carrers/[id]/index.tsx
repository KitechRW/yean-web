import {NextPage} from "next";
import Head from "next/head";
import CarrersActivity from "modules/activities/CarrersActivity";
import React from "react";
import CarrerActivity from "modules/activities/CarrerActivity";

const JobDescriptionPage :NextPage = ()=> {
  return <>
    <Head>
      <title>Yean</title>
    </Head>
    <CarrerActivity />
  </>
}

export default JobDescriptionPage;
