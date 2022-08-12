import React, {useState} from "react";
import SlideForm from "modules/admin/_Partials/ManageLandingPage/_Partials/SlideForm";


const EditLandingPage = () => {
  const [newSlidesCounter, setNewSlidesCounter] = useState(0)
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


  return <div>

    <form
      onSubmit={event => {
        event.preventDefault();
        handleSubmit();
      }}
      className="pt-4"
    >
      <div className={"flex flex-col"}>
        <div> <h2>Edit top slide</h2></div>
        <div>
          <div className={"flex flex-col divide-y"}>
            {
              slidesForm?.map((slideForm, index) => {
                return <div key={"slideForm "+ index+slideForm.id} className={"ml-5 mt-5 "}>
                  {slideForm.form}
                </div>
              })
            }
          </div>
        </div>
        <div>
          <button onClick={() => {
            setNewSlidesCounter(i=> ++i)
            let id = "newSlideUniqueId" + newSlidesCounter;
            setSlidesForm((slides) =>[...slides,{id:id,form:(<div key={id}><SlideForm id={id} handleRemove={handleRemove} /></div>)}
            ] )
          }
          }
                  className="hover:border-blue-500 hover:border-solid hover:bg-white hover:text-blue-500 group w-full flex flex-col items-center justify-center rounded-md border-2 border-dashed border-slate-300 text-sm leading-6 text-slate-900 font-medium py-3">
            <svg
              className="group-hover:text-blue-500 mb-1 text-slate-400"
              width="20"
              height="20"
              fill="currentColor"
              aria-hidden="true"
            >
              <path d="M10 5a1 1 0 0 1 1 1v3h3a1 1 0 1 1 0 2h-3v3a1 1 0 1 1-2 0v-3H6a1 1 0 1 1 0-2h3V6a1 1 0 0 1 1-1Z" />
            </svg>
            New
          </button>
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
}

export default EditLandingPage
