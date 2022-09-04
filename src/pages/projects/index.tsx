import Head from 'next/head';
import React from 'react';
import ProjectsActivity from 'modules/activities/ProjectsActivity';
import Http from "core/factory/fact.http";

export async function getStaticProps() {
  return Http.axios
    .get(`${process.env.DEFAULT_API}/api/projects`)
    .then(resp => {
      return {
        props: { data: resp.data?.data, status:resp.status }
      };
    })
    .catch(ex => {
      console.error(ex);
      return {
        props: { data: {}, status:404 },
      };
    });
}

const ProjectsPage = (props:any) => {
  return (
    <>
      <Head>
        <title>Yean</title>
      </Head>
      <ProjectsActivity data={props.data} />
    </>
  );
};

export default ProjectsPage;
