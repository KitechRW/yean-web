import BlockIcon from "@mui/icons-material/Block";
import DeleteIcon from "@mui/icons-material/Delete";
import React, {useEffect, useState} from "react";
import Select from "react-select";
import {useForm} from "react-hook-form";
import {joiResolver} from "@hookform/resolvers/joi";
import joi from "joi";
import DefaultApi from "apis/restful";



const ViewUser = ({key,user}:{key:any,user:any}) => {
  const [selectedType, setSelectedType] = useState<any>(null)

  const approve = (id:string) =>  {
    // DefaultApi.PatchRoute.patchRoute("/api")
  }

  useEffect(()=> {
    if(user?.type){
      setSelectedType({label:user?.type, value:user?.type})
    }
  }, [user])

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
            setSelectedType(newValue);
          }}
        />
      </td>


      <td className="p-3 px-5 flex justify-end">
        {!user?.active ?
        <button onClick={() => {approve(user?.id)}}
          type="button" className="mr-3 text-sm bg-blue-500 hover:bg-blue-700 text-white py-1 px-2 rounded focus:outline-none focus:shadow-outline">
          Approve
        </button> : null}
        <button type="button"
                className="text-sm bg-red-500 hover:bg-red-700 text-white py-1 px-2 rounded focus:outline-none focus:shadow-outline"><DeleteIcon/>
        </button>
      </td>
    </tr>
}

export default ViewUser
