import DrawerLayout from "modules/layouts/DrawerLayout";
import React, { useState} from "react";
import SlideForm from "modules/activities/admin/EditLandingPage/_Partials/SlideForm";
import CreateBanner from "modules/activities/admin/Banner/Create";
import UploadImage from "modules/_partials/UploadImage";

const EditAboutUs = ({children}:any) => {
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
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Top Image
              </label>
              <div className={"mx-5"}>
                <UploadImage  updateFilesCb={() =>{}} />
              </div>
            </div>
            <div className="mt-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="about_us_area">
                About us
              </label>
              <textarea id="about_us_area" rows={5}
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        placeholder="Write a about us..." required></textarea>
            </div>

            <div className={"mt-4"}>
              <h2>Our Mission</h2>
            </div>
            <div className="mt-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="first_banner_area">
                First banner
              </label>
              <CreateBanner/>
            </div>
            <div className="mt-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="second_banner_area">
                Second banner
              </label>
              <CreateBanner/>
            </div>
            <div className="mt-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="second_banner_area">
                Third banner
              </label>
              <CreateBanner/>
            </div>
            <div className="mt-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="our_History_area">
                Our History
              </label>
              <textarea id="about_us_area" rows={5}
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        placeholder="Write our history..." required></textarea>
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
export default EditAboutUs
