import { NextPage } from 'next';
import Head from 'next/head';
import React from 'react';
import ProjectActivity from 'modules/activities/ProjectActivity';
import { useRouter } from 'next/router';
import axios from 'axios';
import MetaData from 'modules/_partials/MetaData';

export async function getServerSideProps({
  query: { projectId },
}: any) {
  return axios
    .get(`${process.env.DEFAULT_API}/api/projects/${projectId}`)
    .then(resp => {
      return {
        props: { data: resp.data.data },
      };
    })
    .catch(ex => {
      console.error(ex);
      return {
        props: { data: {} },
      };
    });
}
const ProjectPage: NextPage = (props: any) => {
  const router = useRouter();
  return (
    <>
      <Head>
        <title>Project - Yean</title>
        <MetaData />
      </Head>
      <ProjectActivity data={props.data} />
    </>
  );
};
export default ProjectPage;
