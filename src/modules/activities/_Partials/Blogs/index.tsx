import { Avatar } from '@mui/material';
import CustomImage from 'modules/_partials/CustomImage';
import Image from 'next/image';
import React from 'react';
import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import {useRouter} from "next/router";

const Blogs = ({
  size = 18,
  onClick = (id: any) => {},
  data = {},
}:any) => {
  const fetchUser = (userId: number) => {
    return { firstName: 'nkubito' };
  };
  const router = useRouter()


  // React.useEffect(()=> {
  //   if(!(data?.pagination?.currentPage)){
  //     router.push("/blog?pageNumber="+1).then(r => console.log("navigate " + JSON.stringify(r)))
  //   }
  // }, [data, router])

  const handleNextPage = () => {
    if(data?.pagination?.currentPage!==data?.pagination?.pageCount){
      const nextPage = data?.pagination?.currentPage + 1;
      router.push("/blog?pageNumber="+nextPage).then(r => console.log("navigate " + JSON.stringify(r)))
    }
  }
  const navTo = (pageNumber:number) =>{
    router.push("/blog?pageNumber="+pageNumber).then(r => console.log("navigate " + JSON.stringify(r)))
  }
  const handlePrevPage = () => {
    if(data?.pagination?.currentPage!==1){
      const prev = data?.pagination?.currentPage - 1;
      router.push("/blog?pageNumber="+prev).then(r => console.log("navigate " + JSON.stringify(r)))
    }
  }
  return (
    <div className={"flex flex-col"}>
      <div>
        <div className="w-full justify-center max-w-6xl mx-auto flex flex-wrap gap-4">
          {data?.data?.map((element: any, index:number) => (
            <div
              key={JSON.stringify(element)}
              role="button"
              tabIndex={index}
              onClick={() => {
                onClick(element?.id);
              }}
              className="flex flex-col w-full max-w-[298px] border border-[#E6E6E6] rounded-sm"
            >
              <div className="group-hover:opacity-80 flex flex-col relative min-w-[298px] min-h-[153px]">
                <CustomImage
                  src={element.image}
                  alt=""
                  layout="fill"
                  loading="lazy"
                />
                <div className="bottom-0 left-0 right-0 absolute flex flex-col items-start w-ful">
                  <p className="text-dark-green bg-[#FCB316] px-4 py-3">
                    Blog
                  </p>
                  <p className="w-full bg-[#FCB316] h-1" />
                </div>
              </div>
              <p className="px-3 py-4 text-[#6F7D1D] w-full line-clamp-1">
                {element?.title}
              </p>
              <div className="px-3 pb-3 space-x-2 flex items-center mt-auto pt-3">
                <Avatar
                  src="/assets/images/avatar.png"
                  sx={{ width: '24px', height: '24px' }}
                  alt={element?.author?.firstname}
                />
                <div className="flex flex-col text-[#767676]">
                  <h1 className="text-xs">
                    {element?.author?.firstname}{' '}
                    {element?.author?.lastname}
                  </h1>
                  {/* <p className="text-xs">12 April 2022</p> */}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div>
        <div className={"justify-center flex mt-10"}>

          <nav aria-label="Page navigation example">
            <ul className="inline-flex -space-x-px">
              {
                (data?.pagination?.currentPage<=1 || !data?.pagination)?null:<li>
                  <button onClick={handlePrevPage}>
                <span
                  className="py-2 px-3 ml-0 leading-tight text-gray-500 bg-white rounded-l-lg border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
                  <NavigateBeforeIcon/>Previous
              </span>
                  </button>
                </li>
              }
              {new Array(data?.pagination?.pageCount || 0).fill(0).map((element,index) => (
                <li key={index+"paginationKey"}>
                  <button onClick={()=> {navTo(index+1)}}>
                    {(index+1) === data?.pagination?.currentPage ?<span aria-current="page"
                                                     className="py-2 px-3 text-blue-600 bg-blue-50 border border-gray-300 hover:bg-blue-100 hover:text-blue-700 dark:border-gray-700 dark:bg-gray-700 dark:text-white">
                {index+1}
              </span>:<span
                      className="py-2 px-3 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
                {index+1}
              </span>}
                  </button>
                </li>
              ))}
              {
                (data?.pagination?.currentPage>=data?.pagination?.pageCount || !data?.pagination)?null:<li>
                  <button onClick={handleNextPage}>
                <span className="py-2 px-3 leading-tight text-gray-500 bg-white rounded-r-lg border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
                  Next <NavigateNextIcon/>
              </span>
                  </button>

                </li>
              }
            </ul>
          </nav>

        </div>
      </div>
    </div>

  );
};

export default Blogs;
