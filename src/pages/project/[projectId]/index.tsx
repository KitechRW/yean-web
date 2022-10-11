import { NextPage } from 'next';
import Head from 'next/head';
import React from 'react';
import ProjectActivity from 'modules/activities/ProjectActivity';
import { useRouter } from 'next/router';
import axios from 'axios';
import MetaData from 'modules/_partials/MetaData';

const ProjectPage: NextPage = () => {
  const router = useRouter();
  return (
    <>
      <Head>
        <title>Project - Yean</title>
        <MetaData />
      </Head>
      <ProjectActivity />
    </>
  );
};
export default ProjectPage;
