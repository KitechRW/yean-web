import React from 'react';
import { NextPage } from 'next';
import Head from 'next/head';
import AdminScaffold from 'modules/layouts/AdminScaffold';
import FileUploadActivity from 'modules/admin/FileUploadActivity';
import { withSessionSsr } from 'system/lib/withSession';

const FileUpload: NextPage = () => {
  return (
    <>
      <Head>
        <title>File Upload System</title>
      </Head>
      <AdminScaffold>
        <FileUploadActivity />
      </AdminScaffold>
    </>
  );
};

export const getServerSideProps = withSessionSsr(
  async ({ req, res }) => {
    const { user, token } = req.session;

    if (!token) {
      return {
        redirect: {
          permanent: false,
          destination: '/logout',
        },
      };
    }

    if (!['admin'].includes(`${user?.type}`)) {
      return {
        redirect: {
          permanent: false,
          destination: '/',
        },
      };
    }

    return {
      props: {
        user: user || null,
        token: token || null,
      },
    };
  },
);

export default FileUpload;
