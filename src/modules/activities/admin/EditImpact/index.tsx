import DrawerLayout from "modules/layouts/DrawerLayout";
import React, { useState} from "react";
import SlideForm from "modules/activities/admin/EditLandingPage/_Partials/SlideForm";
import CreateBanner from "modules/activities/admin/Banner/Create";
import UploadImage from "modules/_partials/UploadImage";

const EditImpact = ({children}:any) => {
  const [toggle, setToggle] = React.useState(false);
  const [slidesForm, setSlidesForm] = useState<any[]>([])

  const handleRemove = (id:string) =>{
    let slides : any[] = []
    slidesForm.forEach((each) => {
      if(each.id !== id){
        slides.push(each)
      }
    });
    setSlidesForm([...slides]);
  }
  const handleSubmit = async () => {
    const formData = new FormData();


  };



  return <>
    <DrawerLayout
      title={"edit  page"}
      toggle={toggle}
      setToggle={setToggle}
    >
      {children}
      <div className="flex flex-col">
        <form
          onSubmit={event => {
            event.preventDefault();
            handleSubmit();
          }}
          className="pt-4"
        >
          <div className={"flex flex-col"}>

            <div className="mt-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" >
                Top Image
              </label>
              <div className={"mx-5"}>
                <UploadImage  updateFilesCb={() =>{}} />
              </div>
            </div>
            <div className="mt-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="partner_with_us_description">
                Partner with us description
              </label>
              <textarea id="partner_with_us_description" rows={5}
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        placeholder="Write a descrition..." required></textarea>
            </div>

          </div>

          <div className=''>
          </div>

          <button
            type="submit"
            className="text-white mt-12 bg-brand-green/80 hover:bg-brand-green focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Save
          </button>
        </form>
      </div>
    </DrawerLayout>
  </>
}
export default EditImpact
