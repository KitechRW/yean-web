import {
  ChevronRight,
  ConnectWithoutContact,
  PictureAsPdf,
} from '@mui/icons-material';
import Scaffold from 'modules/layouts/Scaffold';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';
import ReadBooks from '../_Partials/Library/ReadBooks';
import { stats } from './data';

const LibraryActivity = ({books}:any) => {
const [booksPart1, setBooksPart1] = React.useState<any[]>([])
const [booksPart2, setBooksPart2] = React.useState<any[]>([])
const [booksCount, setBooksCount] = React.useState<any>([])

React.useEffect(() => {
  if(books && books.rows){
    setBooksPart1([])
    setBooksPart2([])
    setBooksCount(books.count)
    books.rows.forEach((eachBook:any, index:number) => {
      if(index < 6){
        setBooksPart1((i:any[]) => [...i, eachBook])
      }
      else{
        setBooksPart2((i:any[]) => [...i, eachBook])
      }
    })
  }
}, [books])

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
                {booksCount}
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
    </Scaffold>
  );
};

export default LibraryActivity;
