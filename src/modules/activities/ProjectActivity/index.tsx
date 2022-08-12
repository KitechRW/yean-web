import Scaffold from "modules/layouts/Scaffold";
import Image from "next/image";
import React from "react";
import { projects } from './data';


const ProjectActivity = ({id}:any) =>{
  const [project, setProject] = React.useState<any>({})
  React.useEffect(()=>{
    if(id){
      let proj;
      projects.forEach(each => {
        if(each.id === id){
          proj = each
        }
      })
      proj?setProject(proj):null
    }
  },[id])
  return <>
    <Scaffold>
      <div className="flex flex-col items-center w-full p-4 md:p-8 max-w-4xl mx-auto">
        {project?.imageUrl?<Image
          src={project?.imageUrl}
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
              {project?.title}
            </h1>
            <p className="text-gray-600 mt-3 text-justify">
              {project?.description}
            </p>
          </div>
        </div>
      </div>
    </Scaffold>
  </>

}
export default ProjectActivity;
