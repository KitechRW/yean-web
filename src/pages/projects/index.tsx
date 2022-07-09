import Head from 'next/head';
import React from 'react';
import ProjectsActivity from 'modules/activities/ProjectsActivity';

const ProjectsPage = () => {
  return (
    <>
      <Head>
        <title>Yean</title>
      </Head>
      <ProjectsActivity />
    </>
  );
};

export default ProjectsPage;
