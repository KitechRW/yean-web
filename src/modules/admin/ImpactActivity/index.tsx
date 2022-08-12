import EditImpact from "modules/admin/_Partials/ManageImpact/Edit";

const ImpactActivity = () => {
  return <div className={"flex gap-4 flex-col"}>
    <h2 className={"mx-10 mt-10 text-xl md:text-2xl font-black text-dark-green tracking-wide"}>Impact page</h2>

    <div>
      <EditImpact/>
    </div>
  </div>
}
export default ImpactActivity
