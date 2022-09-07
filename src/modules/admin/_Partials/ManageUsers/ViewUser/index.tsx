import BlockIcon from "@mui/icons-material/Block";
import DeleteIcon from "@mui/icons-material/Delete";
import React from "react";
import Select from "react-select";
import {useForm} from "react-hook-form";
import {joiResolver} from "@hookform/resolvers/joi";
import joi from "joi";


const fields = {
  type: joi.string().required(),
  active: joi.object().required(),
  status: joi.string().required(),
};

const schema = joi.object(fields);
const ViewUser = () => {

  const {
    register,
    handleSubmit,
    setValue,
    getValues,
    reset,
    formState: { errors },
  } = useForm({
    resolver: joiResolver(schema),
  });






  return <>
    <tr className="border-b hover:bg-orange-100 bg-gray-100">
      <td className="p-3 px-5"><label  className="bg-transparent">Kwizera</label></td>
      <td className="p-3 px-5"><label  className="bg-transparent">Eric</label></td>
      <td className="p-3 px-5"><label  className="bg-transparent">Email.yean@gmail</label></td>
      <td className="p-3 px-5">
        <Select
          className="bg-transparent min-w-max"
          isMulti={false}
          {...register('type')}
          options={[{label:"Admin", value:"admin"}]}
          defaultValue={{label:"Admin", value:"admin"}}
          onChange={(newValue: any) => {
            setValue('type', newValue.value, {
              shouldDirty: true,
              shouldValidate: true,
            });
          }}
        />
      </td>
      <td className="p-3 px-5">
        <Select
          className="bg-transparent min-w-max"
          isMulti={false}
          {...register('active')}
          options={[{label:"Admin", value:"admin"}]}
          defaultValue={{label:"Admin", value:"admin"}}
          onChange={(newValue: any) => {
            setValue('active', newValue.value, {
              shouldDirty: true,
              shouldValidate: true,
            });
          }}
        />
      </td>
      <td className="p-3 px-5">
        <Select
          className="bg-transparent min-w-max"
          isMulti={false}
          {...register('status')}
          options={[{label:"Admin", value:"admin"}]}
          defaultValue={{label:"Admin", value:"admin"}}
          onChange={(newValue: any) => {
            setValue('status', newValue.value, {
              shouldDirty: true,
              shouldValidate: true,
            });
          }}
        />
      </td>


      <td className="p-3 px-5 flex justify-end">
        <button onClick={() => {console.log(getValues())}}
          type="button" className="mr-3 text-sm bg-blue-500 hover:bg-blue-700 text-white py-1 px-2 rounded focus:outline-none focus:shadow-outline">Save
        </button>
        <button type="button"
                className="text-sm bg-red-500 hover:bg-red-700 text-white py-1 px-2 rounded focus:outline-none focus:shadow-outline"><DeleteIcon/>
        </button>
      </td>
    </tr>
  </>
}

export default ViewUser
