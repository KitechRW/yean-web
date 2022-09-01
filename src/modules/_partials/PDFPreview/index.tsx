import DrawerLayout from 'modules/layouts/DrawerLayout';
import React from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import './css.module.css';

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

const options = {
  cMapUrl: 'cmaps/',
  cMapPacked: true,
  standardFontDataUrl: 'standard_fonts/',
};

const PDFPreview = ({
  children,
  src,
  title,
}: {
  children: any;
  src: string;
  title: string;
}) => {
  const [toggle, setToggle] = React.useState(false);

  const [file, setFile] = React.useState(src);
  const [numPages, setNumPages] = React.useState<number>(0);

  function onDocumentLoadSuccess({
    numPages: nextNumPages,
  }: {
    numPages: number;
  }) {
    setNumPages(nextNumPages);
  }

  React.useEffect(() => {
    if (
      src &&
      !src.startsWith('/uploads/') &&
      !src.startsWith('http')
    ) {
      setFile(`/uploads/${src}`);
    }
  }, [src]);

  if (!file) {
    return null;
  }

  return (
    <DrawerLayout toggle={toggle} setToggle={setToggle} title={title}>
      {children}
      <div className="flex flex-col">
        <div className="PDF__container__document">
          <Document
            file={file}
            onLoadSuccess={onDocumentLoadSuccess}
            options={options}
          >
            {Array.from(new Array(numPages), (el, index) => (
              <Page
                key={`page_${index + 1}`}
                pageNumber={index + 1}
              />
            ))}
          </Document>
        </div>
      </div>
    </DrawerLayout>
  );
};

export default PDFPreview;
