"use strict";
exports.id = 401;
exports.ids = [401];
exports.modules = {

/***/ 401:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_pdf__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5876);
/* harmony import */ var react_pdf__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_pdf__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__);




react_pdf__WEBPACK_IMPORTED_MODULE_1__.pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${react_pdf__WEBPACK_IMPORTED_MODULE_1__.pdfjs.version}/pdf.worker.js`;
const options = {
  cMapUrl: 'cmaps/',
  cMapPacked: true,
  standardFontDataUrl: 'standard_fonts/'
};

const ViewBook = ({
  src
}) => {
  const [file, setFile] = react__WEBPACK_IMPORTED_MODULE_0___default().useState(src);
  const [numPages, setNumPages] = react__WEBPACK_IMPORTED_MODULE_0___default().useState(0);

  function onDocumentLoadSuccess({
    numPages: nextNumPages
  }) {
    setNumPages(nextNumPages);
  }

  react__WEBPACK_IMPORTED_MODULE_0___default().useEffect(() => {
    if (src && !src.startsWith('/uploads/') && !src.startsWith('http')) {
      setFile(`/uploads/${src}`);
    }
  }, [src]);

  if (!file) {
    return null;
  }

  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("div", {
    className: "PDF__container__document",
    children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx(react_pdf__WEBPACK_IMPORTED_MODULE_1__.Document, {
      file: file,
      onLoadSuccess: onDocumentLoadSuccess,
      options: options,
      children: Array.from(new Array(numPages), (el, index) => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx(react_pdf__WEBPACK_IMPORTED_MODULE_1__.Page, {
        pageNumber: index + 1
      }, `page_${index + 1}`))
    })
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ViewBook);

/***/ })

};
;