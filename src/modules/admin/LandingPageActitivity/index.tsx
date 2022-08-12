import React, {useState} from 'react';
import Scaffold from "modules/layouts/Scaffold";
import {LocalLibrary} from "@mui/icons-material";
import Image from "next/image";
import EditLandingPage from "modules/admin/_Partials/ManageLandingPage/Edit";

const EditLandingPageActivity = () => {

  return <div className={"flex flex-col gap-5"}>
    <h2 className={"mx-10 mt-10 text-xl md:text-2xl font-black text-dark-green tracking-wide"}> Landing page </h2>
    <div className={"mx-5"}>
      <EditLandingPage/>
    </div>
  </div>
}

export default EditLandingPageActivity;
