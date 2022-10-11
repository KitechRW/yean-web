import Head from 'next/head';
import React from 'react';
import ProjectsActivity from 'modules/activities/ProjectsActivity';
import MetaData from 'modules/_partials/MetaData';

const ProjectsPage = (props: any) => {
  return (
    <>
      <Head>
        <title>Projects - Yean</title>
        <MetaData />
      </Head>
      <ProjectsActivity />
    </>
  );
};

export default ProjectsPage;
