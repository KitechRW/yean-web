import { NextPage } from "next";
import Head from "next/head";
import React from "react";
import ProjectActivity from "modules/activities/ProjectActivity";
import { useRouter } from 'next/router'

const ProjectPage:NextPage = () => {
  const router = useRouter();
  return <>
    <Head>
      <title>Yean</title>
    </Head>
    <ProjectActivity id={router.query.projectId} />
  </>
}
export default ProjectPage
