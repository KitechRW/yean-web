"use strict";
exports.id = 2881;
exports.ids = [2881];
exports.modules = {

/***/ 2881:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "W": () => (/* binding */ downloadPDF),
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _mui_icons_material_PictureAsPdf__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9184);
/* harmony import */ var _mui_icons_material_PictureAsPdf__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_mui_icons_material_PictureAsPdf__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5675);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var sweetalert__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4701);
/* harmony import */ var sweetalert__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(sweetalert__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var modules_partials_PDFPreview__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9843);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__);








const downloadPDF = book => {
  let link = book.link;

  if (link && !link.startsWith('/uploads/') && !link.startsWith('http')) {
    link = `/uploads/${link}`;
  }

  fetch(link).then(response => response.blob()).then(blob => {
    const url = window.URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', book?.name + '.pdf'); //or any other extension

    document.body.appendChild(link);
    link.click();
  }).catch(error => {
    sweetalert__WEBPACK_IMPORTED_MODULE_3___default()('sorry', 'fail to download', 'error').then(r => console.log('he'));
  });
};

const ReadBooks = ({
  books
}) => {
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.Fragment, {
    children: books.map(element => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
      className: "flex flex-shrink-0 space-x-2 max-w-[360px]",
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("div", {
        className: "flex flex-col",
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {
          src: element.cover || '/assets/images/book-cover.png',
          alt: "",
          width: "150px",
          height: "150px",
          layout: "fixed",
          loading: "lazy"
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
        className: "flex flex-col",
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("h1", {
          className: "first-letter:uppercase font-semibold text-base line-clamp-6",
          children: element?.name
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("p", {
          className: "text-gray-600 mt-2",
          children: element.desc
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
          className: "flex items-center space-x-3 mt-3",
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx(modules_partials_PDFPreview__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
            title: element?.name,
            src: element.link,
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("span", {
              className: "bg-dark-green text-white p-2 text-xs",
              children: "Read"
            })
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("button", {
            onClick: () => {
              downloadPDF(element);
            },
            className: "text-red-500 p-2",
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx((_mui_icons_material_PictureAsPdf__WEBPACK_IMPORTED_MODULE_0___default()), {})
          })]
        })]
      })]
    }, element.id + 'book_id_unic@22'))
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ReadBooks);

/***/ })

};
;