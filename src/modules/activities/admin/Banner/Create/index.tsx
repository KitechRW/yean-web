import React from "react";
import {Search} from "@mui/icons-material";
import UploadImage from "modules/_partials/UploadImage";

const CreateBanner = ({withSaveBtn = false}) => {
  return <div>
    {/*<form>*/}
      <div className={"flex flex-col"}>
        {withSaveBtn?<div className={"mt-2 mx-10 mb-10 "}>
          <h2 className={"text-brand-green text-xl font-bold"}>Create banner</h2>
        </div>:null}
        <div>
          <div className={"flex justify-center "}>
            <div className={"mx-5 flex-1 flex-wrap"}>
              <div className={"flex flex-col"}>
                <div className="mb-4">
                  <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="title_input">
                    Title
                  </label>
                  <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="title_input" type="text" placeholder="title..."/>
                </div>
                <div className="mb-4">
                  <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="description_input">
                    Description
                  </label>
                  <textarea id="description_area" rows={5}
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            placeholder="Write a description..." required></textarea>
                </div>

              </div>
            </div>
            <div className={"mx-5 flex-1 self-center"}>
              <UploadImage  updateFilesCb={() =>{}} />
            </div>
          </div>
        </div>
        {withSaveBtn ?<div className={"mt-2 mx-10"}>
          <button type={"button"} className="bg-brand-green px-3 text-white rounded py-2">Save</button>
        </div>:null}
      </div>
    {/*</form>*/}
  </div>
}

export default CreateBanner;
