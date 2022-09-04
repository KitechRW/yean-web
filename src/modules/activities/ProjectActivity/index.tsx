import Scaffold from "modules/layouts/Scaffold";
import Image from "next/image";
import React from "react";
import { projects } from './data';


const ProjectActivity = ({data}:any) =>{
  return <>
    <Scaffold>
      <div className="flex flex-col items-center w-full p-4 md:p-8 max-w-4xl mx-auto">
        {data?.image?<Image
          src={data?.image}
          width="656"
          height="332"
          alt=""
          priority
        />:null}


        <div
          className={`flex flex-col`}
        >
          <div className="flex flex-col">
            <h1 className="text-center mt-10 text-2xl md:text-4xl font-black text-dark-green tracking-wide">
              {data?.name}
            </h1>
            <p className="text-gray-600 mt-3 text-justify">
              {data?.description}
            </p>
          </div>
        </div>
      </div>
    </Scaffold>
  </>

}
export default ProjectActivity;
