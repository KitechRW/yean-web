import { PictureAsPdf } from '@mui/icons-material';
import Image from 'next/image';
import React from 'react';
import swal from 'sweetalert';
import { useRouter } from 'next/router';
import PDFPreview from 'modules/_partials/PDFPreview';

const ReadBooks = ({ books }: any) => {
  const route = useRouter();
  const downloadPDF = (book: any) => {
    let link: string = book.link;
    if (
      link &&
      !link.startsWith('/uploads/') &&
      !link.startsWith('http')
    ) {
      link = `/uploads/${link}`;
    }
    fetch(link)
      .then(response => response.blob())
      .then(blob => {
        const url = window.URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.href = url;
        link.setAttribute('download', book?.name + '.pdf'); //or any other extension
        document.body.appendChild(link);
        link.click();
      })
      .catch(error => {
        swal('sorry', 'fail to download', 'error').then(r =>
          console.log('he'),
        );
      });
  };
  return (
    <>
      {books.map((element: any) => (
        <div
          key={element.id + 'book_id_unic@22'}
          className="flex flex-shrink-0 space-x-2 max-w-[360px]"
        >
          <div className="flex flex-col">
            <Image
              src={element.cover || '/assets/images/book-cover.png'}
              alt=""
              width="150px"
              height="150px"
              layout="fixed"
              loading="lazy"
            />
          </div>
          <div className="flex flex-col">
            <h1 className="uppercase font-semibold text-base line-clamp-2">
              {element?.name}
            </h1>
            <p className="text-gray-600 mt-2">{element.desc}</p>
            <div className="flex items-center space-x-3 mt-3">
              <PDFPreview title={element?.name} src={element.link}>
                <span className="bg-dark-green text-white p-2 text-xs">
                  Read
                </span>
              </PDFPreview>

              <button
                onClick={() => {
                  downloadPDF(element);
                }}
                className="text-red-500 p-2"
              >
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
