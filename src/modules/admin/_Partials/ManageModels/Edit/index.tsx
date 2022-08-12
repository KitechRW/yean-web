import UploadImage from "modules/_partials/UploadImage";
import React from "react";

const EditModels = () => {

  const handleSubmit = async () => {
    const formData = new FormData();


  };

  return <div>
    Edit model
    {/*<form*/}
    {/*  onSubmit={event => {*/}
    {/*    event.preventDefault();*/}
    {/*    handleSubmit();*/}
    {/*  }}*/}
    {/*  className="pt-4"*/}
    {/*>*/}
    {/*  <div className={"flex flex-col"}>*/}

    {/*    <div className="mt-4">*/}
    {/*      <label className="block text-gray-700 text-sm font-bold mb-2" >*/}
    {/*        Top Image*/}
    {/*      </label>*/}
    {/*      <div className={"mx-5"}>*/}
    {/*        <UploadImage  updateFilesCb={() =>{}}  multiple={false}/>*/}
    {/*      </div>*/}
    {/*    </div>*/}
    {/*    <div className="mt-4">*/}
    {/*      <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="partner_with_us_description">*/}
    {/*        Partner with us description*/}
    {/*      </label>*/}
    {/*      <textarea id="partner_with_us_description" rows={5}*/}
    {/*                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"*/}
    {/*                placeholder="Write a description..." required></textarea>*/}
    {/*    </div>*/}

    {/*  </div>*/}

    {/*  <div className=''>*/}
    {/*  </div>*/}

    {/*  <button*/}
    {/*    type="submit"*/}
    {/*    className="text-white mt-12 bg-brand-green/80 hover:bg-brand-green focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"*/}
    {/*  >*/}
    {/*    Save*/}
    {/*  </button>*/}
    {/*</form>*/}
  </div>
}


export default EditModels
