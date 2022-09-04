import DeleteIcon from '@mui/icons-material/Delete';
import BlockIcon from '@mui/icons-material/Block';
import React, {useState} from "react";
import {useOpenFetcher} from "apis/utils/fetcher";
import Pagination from "modules/_partials/Pagination";
import Select from "react-select";
import joi from "joi";
import {useForm} from "react-hook-form";
import {joiResolver} from "@hookform/resolvers/joi";

const schema = joi.object({
  staff_role: joi.string(),
});


const UsersActivity = () => {
  const topRef = React.useRef(null);
  const [pageNumber, setPageNumber] = React.useState(1);


  const {
    data: { data, pagination },
    isLoading,
  } = useOpenFetcher(
    `/api/users?page=${pageNumber || 1}&limit=20`,
  );
  const [jobTitles, setJobTitles] = useState<any>([]);

  const [jobTitleFilter, setJobTitleFilter] = useState(null);
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

  const onSubmit = async (query: any) => {
    setJobTitleFilter(query['staff_role']);
  };

  return(
    <div ref={topRef}>
      <div className="">
        <div className="p-4 flex">
          <h1 className="text-3xl">
            Users
          </h1>
        </div>
        <form
          onSubmit={event => {
            handleSubmit(onSubmit)(event);
          }}
          className="mt-6 w-full justify-center flex items-center gap-6 flex-wrap"
        >
          <Select
            placeholder={'Staff role'}
            isMulti={false}
            {...register('staff_role')}
            options={jobTitles}
            onChange={(newValue: any) => {
              setValue('staff_role', newValue.value);
            }}
          />

          {/*<button className="text-gray-400 rounded-lg py-3 px-12 border border-gray-200 bg-white">*/}
          {/*  Keyword*/}
          {/*</button>*/}

          <button
            type={'submit'}
            className="text-white rounded-lg py-3 px-12 border border-dark-green bg-dark-green"
          >
            Find
          </button>
        </form>
        <div className="px-3 py-4 flex justify-center">
          <table className="w-full text-md bg-white shadow-md rounded mb-4">
            <tbody>
            <tr className="border-b">
              <th className="text-left p-3 px-5">First name</th>
              <th className="text-left p-3 px-5">Email</th>
              <th className="text-left p-3 px-5">Role</th>
              <th></th>
            </tr>
            <tr className="border-b hover:bg-orange-100 bg-gray-100">
              <td className="p-3 px-5"><label  className="bg-transparent">Kwizera</label></td>
              <td className="p-3 px-5"><label  className="bg-transparent">Email.yean@gmail</label></td>
              <td className="p-3 px-5">
                <select value="user.role" className="bg-transparent">
                  <option value="user">user</option>
                  <option value="admin">admin</option>
                </select>
              </td>
              <td className="p-3 px-5 flex justify-end">
                <button type="button"
                        className="mr-3 text-sm bg-blue-500 hover:bg-blue-700 text-white py-1 px-2 rounded focus:outline-none focus:shadow-outline"><BlockIcon/>
                </button>
                <button type="button"
                        className="text-sm bg-red-500 hover:bg-red-700 text-white py-1 px-2 rounded focus:outline-none focus:shadow-outline"><DeleteIcon/>
                </button>
              </td>
            </tr>
            </tbody>
          </table>
        </div>
        {/*<Pagination*/}
        {/*  pageCount={pagination?.pageCount}*/}
        {/*  currentPage={pagination?.currentPage}*/}
        {/*  setPageNumber={(page: number) => {*/}
        {/*    setPageNumber(page);*/}
        {/*    // @ts-ignore*/}
        {/*    topRef.current.scrollIntoView();*/}
        {/*  }}*/}
        {/*/>*/}
        <Pagination
          pageCount={10}
          currentPage={3}
          setPageNumber={(page: number) => {
            setPageNumber(page);
            // @ts-ignore
            topRef.current.scrollIntoView();
          }}
        />
      </div>
    </div>
  )
}

export default UsersActivity;