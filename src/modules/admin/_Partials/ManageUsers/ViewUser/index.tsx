import DeleteIcon from "@mui/icons-material/Delete";
import React, {useEffect, useState} from "react";
import Select from "react-select";
import DefaultApi from "apis/restful";
import swal from "sweetalert";



const ViewUser = ({key,data}:{key:any,data:any}) => {
  const [selectedType, setSelectedType] = useState<any>(null)
  const [prevSelectedType, setPrevSelectedType] = useState<any>(null)
  const [user, setUser] = useState(data);
  const [newData, setNewData] = useState(false)
  const update = (field:any, value:any) =>  {
    DefaultApi.PatchRoute.patchRoute("/api/users/"+user?.id, {[field]:value}).then(response => {
      swal(
        'Updated!',
        response.data.message || 'Updated successfully',
        'success',
      ).then(() => {
        setUser({...response.data?.data})
        setNewData(false)
      });


    })
  }

  useEffect(()=> {
    if(user?.type){
      setSelectedType({label:user?.type, value:user?.type})
      setPrevSelectedType({label:user?.type, value:user?.type})

    }
  }, [user])

  useEffect(()=>{
    if(selectedType?.value !== prevSelectedType?.value){
      setNewData(true)
    }
  }, [selectedType, prevSelectedType])

  return <tr key={key} className="border-b hover:bg-orange-100 bg-gray-100">
      <td className="p-3 px-5"><label  className="bg-transparent">{user?.firstname +" "+ user?.lastname}</label></td>
      <td className="p-3 px-5"><label  className="bg-transparent">{user?.phone}</label></td>
      <td className="p-3 px-5"><label  className="bg-transparent">{user?.email}</label></td>
      <td className="p-3 px-5">
        <Select
          className="bg-transparent min-w-max"
          isMulti={false}
          options={[{label:"admin", value:"admin"},{label:"member", value:"member"},]}
          value={selectedType}
          onChange={(newValue: any) => {
            if(!newData){
              setPrevSelectedType(selectedType)
            }else{
              if(prevSelectedType?.value===newValue?.value){
                setNewData(false)
              }
            }
            setSelectedType(newValue);
          }}
        />
      </td>


      <td className="p-3 px-5 flex justify-end">
        {newData?<button onClick={() => {update("type", selectedType.value)}}
            type="button" className="mr-3 text-sm bg-brand-green hover:bg-brand-green/80 text-white py-3 px-5 rounded focus:outline-none focus:shadow-outline">
          Save
          </button>:
        <div>
          {!user?.active ?
            <button onClick={() => {update("active", true)}}
                    type="button" className="mr-3 text-sm bg-emerald-700 hover:bg-emerald-900 text-white py-2 px-3 rounded focus:outline-none focus:shadow-outline">
              Approve
            </button> : null}
          <button type="button"
                  className="text-sm hover:bg-gray-100 text-black py-2 px-3 rounded focus:outline-none focus:shadow-outline"><DeleteIcon/>
          </button>
        </div>
        }

      </td>
    </tr>
}

export default ViewUser
