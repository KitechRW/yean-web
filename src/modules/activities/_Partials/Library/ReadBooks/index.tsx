import { PictureAsPdf } from '@mui/icons-material';
import Image from 'next/image';
import React from 'react';
import swal from "sweetalert";
import axios from "axios";
import {useRouter} from "next/router";

const ReadBooks = ({books}:any) => {
  const route = useRouter();
  const downloadPDF = (book:any) => {
    axios({
      url: '/api/libraries/file', //your url
      method: 'POST',
      responseType: 'blob', // important
      data:{
        link: book?.link,
        name: book?.name
      }
    }).then((response) => {
      const url = window.URL.createObjectURL(new Blob([response.data]));
      const link = document.createElement('a');
      link.href = url;
      link.setAttribute('download', book?.name+'.pdf'); //or any other extension
      document.body.appendChild(link);
      link.click();
    }).catch(error => {
      swal("sorry", "fail to download", "error").then(r => console.log("he"))
    });
    // DefaultApi.PostRoute.postRoute(
    //   '/api/libraries/file',
    //   {
    //     link: book?.link,
    //     name: book?.name
    //   },
    // )
  }
  return (
    <>
      {books.map((element:any) => (
        <div
          key={element.id +"book_id_unic@22"}
          className="flex flex-shrink-0 space-x-2 max-w-[360px]"
        >
          <Image
            src="/assets/images/book-cover.png"
            alt=""
            width="250px"
            height="150px"
            layout="fixed"
            loading="lazy"
          />
          <div className="flex flex-col">
            <h1 className="uppercase font-semibold text-base">
              {element?.name}
            </h1>
            <p className="text-gray-600 mt-2">
              Cras lobortis, magna lobortis lacinia maximus, diam
              velit condimentum ex, at volutpat massa metus vel eli
            </p>
            <div className="flex items-center space-x-3 mt-3">
              <button onClick={()=> {route.push("/library/view/"+element?.id)}} className="bg-dark-green text-white p-2 text-xs">
                Read
              </button>
              <button onClick={()=> {downloadPDF(element)}} className="text-red-500 p-2">
                <PictureAsPdf />
              </button>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default ReadBooks;
