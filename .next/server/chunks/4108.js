"use strict";
exports.id = 4108;
exports.ids = [4108];
exports.modules = {

/***/ 4108:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _mui_icons_material_NavigateBefore__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7460);
/* harmony import */ var _mui_icons_material_NavigateBefore__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_mui_icons_material_NavigateBefore__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _mui_icons_material_NavigateNext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6179);
/* harmony import */ var _mui_icons_material_NavigateNext__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_mui_icons_material_NavigateNext__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__);





const Pagination = ({
  currentPage = 1,
  pageCount = 1,
  setPageNumber,
  showNumbers = true
}) => {
  const handleNextPage = () => {
    setPageNumber(currentPage + 1);
  };

  const navTo = pageNumber => {
    setPageNumber(pageNumber);
  };

  const handlePrevPage = () => {
    setPageNumber(currentPage - 1);
  };

  if (pageCount <= 1) {
    return null;
  }

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
    className: "cursor-pointer flex",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("button", {
      disabled: currentPage <= 1,
      onClick: handlePrevPage,
      className: "disabled:cursor-not-allowed disabled:opacity-50 flex items-center space-x-1 py-2 px-3 text-gray-500 bg-white rounded-l border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white",
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx((_mui_icons_material_NavigateBefore__WEBPACK_IMPORTED_MODULE_0___default()), {}), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("span", {
        children: "Previous"
      })]
    }), showNumbers && new Array(pageCount || 1).fill(0).map((element, index) => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("button", {
      onClick: () => {
        navTo(index + 1);
      },
      className: `flex flex-col justify-center items-center ${index + 1 === currentPage ? 'py-2 px-3 text-blue-600 bg-blue-50 border border-gray-300 hover:bg-blue-100 hover:text-blue-700 dark:border-gray-700 dark:bg-gray-700 dark:text-white' : 'py-2 px-3 text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white'}`,
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("span", {
        children: index + 1
      })
    }, index + 'paginationKey')), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("button", {
      disabled: currentPage >= pageCount,
      onClick: handleNextPage,
      className: "disabled:cursor-not-allowed disabled:opacity-50 flex items-center py-2 px-3 text-gray-500 bg-white rounded-r border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white",
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("span", {
        children: "Next"
      }), " ", /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx((_mui_icons_material_NavigateNext__WEBPACK_IMPORTED_MODULE_1___default()), {})]
    })]
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Pagination);

/***/ })

};
;