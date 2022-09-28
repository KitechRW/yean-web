import React from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import './css.module.css';

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

const options = {
  cMapUrl: 'cmaps/',
  cMapPacked: true,
  standardFontDataUrl: 'standard_fonts/',
};

const ViewBook = ({ src }: { src: string }) => {
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
    <div className="PDF__container__document">
      <Document
        file={file}
        onLoadSuccess={onDocumentLoadSuccess}
        options={options}
      >
        {Array.from(new Array(numPages), (el, index) => (
          <Page key={`page_${index + 1}`} pageNumber={index + 1} />
        ))}
      </Document>
    </div>
  );
};

export default ViewBook;
