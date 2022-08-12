import EditAboutUs from "modules/admin/_Partials/ManageAboutUs/Edit";

const AboutUsActivity = ()=> {
  return <div className={"flex flex-col"}>
    <h2 className={"mx-10 mt-10 text-xl md:text-2xl font-black text-dark-green tracking-wide"}>Manage About us pane</h2>
    <div className={"my-12 mx-5"}>
      <EditAboutUs/>
    </div>
  </div>
}

export default AboutUsActivity
