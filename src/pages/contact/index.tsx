import React from 'react';
import Head from 'next/head';
import ContactActivity from 'modules/activities/ContactActivity';
import MetaData from 'modules/_partials/MetaData';

const ContactPage = () => {
  return (
    <>
      <Head>
        <title>Contact us - Yean</title>
        <MetaData />
      </Head>
      <ContactActivity />
    </>
  );
};

export default ContactPage;
