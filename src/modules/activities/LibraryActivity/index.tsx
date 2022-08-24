import Scaffold from 'modules/layouts/Scaffold';
import Image from 'next/image';
import { useRouter } from 'next/router';
import React from 'react';
import ReadBooks from '../_Partials/Library/ReadBooks';
import { stats } from './data';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';

const LibraryActivity = ({data}:any) => {
  const router = useRouter()

const [booksPart1, setBooksPart1] = React.useState<any[]>([])
const [booksPart2, setBooksPart2] = React.useState<any[]>([])
  const [booksPerPage, setBooksPerPage] = React.useState<number>(20)


React.useEffect(() => {
  if(data?.data?.rows){
    setBooksPart1([])
    setBooksPart2([])
    data?.data?.rows?.forEach((eachBook:any, index:number) => {
      if(index < 6){
        setBooksPart1((i:any[]) => [...i, eachBook])
      }
      else{
        setBooksPart2((i:any[]) => [...i, eachBook])
      }
    })
  }
}, [data])
  React.useEffect(()=> {
    if(data?.pagination?.currentPage > data?.pagination?.pageCount || !data?.pagination){
      router.push("/library?pageNumber="+1).then(r => console.log("navigate " + JSON.stringify(r)))
    }
  }, [data, router])

  const handleNextPage = () => {
    if(data?.pagination?.currentPage!==data?.pagination?.pageCount){
      const nextPage = data?.pagination?.currentPage + 1;
      router.push("/library?pageNumber="+nextPage).then(r => console.log("navigate " + JSON.stringify(r)))
    }
  }
  const navTo = (pageNumber:number) =>{
    router.push("/library?pageNumber="+pageNumber).then(r => console.log("navigate " + JSON.stringify(r)))
  }
  const handlePrevPage = () => {
    if(data?.pagination?.currentPage!==1){
      const prev = data?.pagination?.currentPage - 1;
      router.push("/library?pageNumber="+prev).then(r => console.log("navigate " + JSON.stringify(r)))
    }
  }

  return (
    <Scaffold>
      <div className="flex flex-col w-full relative bg-brand-green min-h-[312px]">
        <Image
          src="/assets/images/library.png"
          alt=""
          layout="fill"
          objectFit="cover"
          priority
        />
        <div className="flex flex-col h-full w-full items-center justify-center p-4 md:p-8 top-0 absolute z-10">
          <h1 className="text-3xl md:text-6xl font-black tracking-wide text-white">
            Library
          </h1>
          <div className="flex space-x-8 mt-3">
            <div className="w-24 h-0.5 bg-white" />
            <div className="w-24 h-0.5 bg-white" />
          </div>
          <p className="flex items-center space-x-2 mt-4 text-sm text-white max-w-3xl text-center">
            Welcome to YEAN E-Libray, We made it easier, You can find
            here documents, reports, articles, books and other
            AGRICULTURE related files
          </p>
        </div>
      </div>

      <div className="p-4 md:p-8 justify-center flex gap-3 md:gap-x-10 flex-wrap flex-shrink-0 whitespace-nowrap">

        {stats.map((stat, index) => (
          <div
            key={stat.title}
            className={`flex flex-col p-3 px-8 justify-center min-w-[255px] min-h-[145px] drop-shadow rounded-lg ${
              index === 0 ? 'bg-[#216B07]/60' : 'bg-white'
            }`}
          >
            <h2
              className={`text-base font-semibold ${
                index === 0 ? 'text-white' : ''
              }`}
            >
              Reports
            </h2>
            <div className="flex items-center space-x-2 mt-3">
              <p
                className={`bg-[#E6F3FF] p-2 px-3 rounded text-dark-green font-bold`}
              >
                {stat.count}
              </p>
              <p
                className={`${
                  index === 0 ? 'text-white' : 'text-[#AAB1B7]'
                }`}
              >
                {stat.desc}
              </p>
            </div>
          </div>
        ))}
        <div
            className={`flex flex-col p-3 px-8 justify-center min-w-[255px] min-h-[145px] drop-shadow rounded-lg bg-white
            }`}
          >
            <h2
              className={`text-base font-semibold `}
            >
              Books
            </h2>
            <div className="flex items-center space-x-2 mt-3">
              <p
                className={`bg-[#E6F3FF] p-2 px-3 rounded text-dark-green font-bold`}
              >
                {data?.pagination?.count}
              </p>
              <p
                className={`text-[#AAB1B7]`}
              >
                {"PUblished"}
              </p>
            </div>
          </div>
      </div>

      <div className="p-4 md:p-8 justify-center gap-6 flex md:gap-x-10 flex-wrap w-full">
        <ReadBooks books={booksPart1} />
        <div className="w-full justify-center flex p-4 md:p-8 gap-3 items-center">
          <Image
            src="/assets/images/green-book.png"
            alt=""
            width="190"
            height="322"
          />
          <h1 className="text-3xl font-black text-dark-green tracking-wide">
            FEATURED Things To Know About Green Flat Design
          </h1>
        </div>
        <ReadBooks books={booksPart2} />
      </div>
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
              <li key={index+"paginationKey"} className={"hidden sm:block"}>
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
    </Scaffold>
  );
};

export default LibraryActivity;
