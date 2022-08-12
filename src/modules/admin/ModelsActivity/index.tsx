import EditModels from "modules/admin/_Partials/ManageModels/Edit";

const ModelsActivity = () => {
  return <div className={"flex flex-col"}>
    <h2 className={"mx-10 mt-10 text-xl md:text-2xl font-black text-dark-green tracking-wide"}>Models Page</h2>
    <div className={"mx-5 mt-12"}>
      <EditModels/>
    </div>
  </div>
}
export default ModelsActivity
