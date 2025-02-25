import {NextPage} from "next";
import Head from "next/head";
import CarrersActivity from "modules/activities/CarrersActivity";
import React from "react";
import CarrerActivity from "modules/activities/CarrerActivity";
import axios from "axios";
import MetaData from "modules/_partials/MetaData";
import Keys from "apis/utils/constants/keys";

export async function getServerSideProps({query:{id}}:any) {
  return axios.get(`${Keys.DEFAULT_API}/api/jobs/${id}`).then(resp => {

    return {
      props: { data: resp.data.data},
    }
  }).catch(ex => {

    console.error(ex)
    return {
      props:{data:{}}
    }
  });
}

const JobDescriptionPage :NextPage = (props:any)=> {
  return <>
    <Head>
      <title>Yean</title>
      <MetaData />
    </Head>
    <CarrerActivity />
  </>
}

export default JobDescriptionPage;
