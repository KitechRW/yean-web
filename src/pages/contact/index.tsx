import React from 'react';
import Head from 'next/head';
import ContactActivity from 'modules/activities/ContactActivity';

const ContactPage = () => {
  return (
    <>
      <Head>
        <title>Yean</title>
      </Head>
      <ContactActivity />
    </>
  );
};

export default ContactPage;
