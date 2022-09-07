import {NextPage} from "next";
import Head from "next/head";
import AdminScaffold from "modules/layouts/AdminScaffold";
import React from "react";
import UsersActivity from "modules/admin/UsersActivity";
import axios from "axios";



export async function getServerSideProps({query:{page}}:any) {

  return{
    props:{page:page||null}
  }

}


const Users: NextPage = (props:any) => {
  return (
    <>
      <Head>
        <title>Yean</title>
      </Head>
      <AdminScaffold>
        <UsersActivity page={props.page}/>
      </AdminScaffold>
    </>
  );
};

export default Users;
