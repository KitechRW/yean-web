import DeleteIcon from '@mui/icons-material/Delete';
import BlockIcon from '@mui/icons-material/Block';
import React, {useEffect, useState} from "react";
import {useOpenFetcher} from "apis/utils/fetcher";
import Pagination from "modules/_partials/Pagination";
import Select from "react-select";
import joi from "joi";
import {useForm} from "react-hook-form";
import {joiResolver} from "@hookform/resolvers/joi";
import ViewUser from "modules/admin/_Partials/ManageUsers/ViewUser";
import {useRouter} from "next/router";

const schema = joi.object({
  staff_type: joi.string(),
});


const UsersActivity = ({page}:any) => {
  const topRef = React.useRef(null);
  const router = useRouter();


  const {
    data: { data, pagination },
    isLoading,
  } = useOpenFetcher(
    `/api/users?attributes=id,type,email,firstname,lastname,phone,active&page=${page || 1}&limit=20`,
  );
  useEffect(()=> {
    const types = []
  }, [data])
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
    setJobTitleFilter(query['staff_type']);
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
            placeholder={'Staff Type'}
            isMulti={false}
            {...register('staff_type')}
            options={jobTitles}
            onChange={(newValue: any) => {
              setValue('staff_type', newValue.value);
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
        <div className="px-3 py-4 flex justify-center overflow-x-auto ">
          <table className="w-full text-md bg-white shadow-md rounded mb-4">
            <tbody>
            <tr className="border-b">
              <th className="text-left p-3 px-5">Names</th>
              <th className="text-left p-3 px-5">Phone</th>
              <th className="text-left p-3 px-5">Email</th>
              <th className="text-left p-3 px-5">Type</th>

              <th></th>
            </tr>
            {
              data?.map((eachUser:any) => <ViewUser key={eachUser.id+"unique@22!"} data={eachUser}/>)
            }

            </tbody>
          </table>
        </div>
        <Pagination
          showNumbers={false}
          pageCount={pagination?.pageCount}
          currentPage={pagination?.currentPage}
          setPageNumber={(page: number) => {
            router.push("/admin/users?page="+page);
          }}
        />
      </div>
    </div>
  )
}

export default UsersActivity;
