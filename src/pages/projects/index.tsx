import Head from 'next/head';
import React from 'react';
import ProjectsActivity from 'modules/activities/ProjectsActivity';
import Http from 'core/factory/fact.http';
import MetaData from 'modules/_partials/MetaData';

export async function getServerSideProps() {
  return Http.axios
    .get(`${process.env.DEFAULT_API}/api/projects`)
    .then(resp => {
      return {
        props: { data: resp.data?.data, status: resp.status },
      };
    })
    .catch(ex => {
      console.error(ex);
      return {
        props: { data: {}, status: 404 },
      };
    });
}

const ProjectsPage = (props: any) => {
  return (
    <>
      <Head>
        <title>Projects - Yean</title>
        <MetaData />
      </Head>
      <ProjectsActivity data={props.data} />
    </>
  );
};

export default ProjectsPage;
