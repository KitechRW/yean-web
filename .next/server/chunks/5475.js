"use strict";
exports.id = 5475;
exports.ids = [5475];
exports.modules = {

/***/ 5475:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _mui_material_Avatar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2120);
/* harmony import */ var _mui_material_Avatar__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Avatar__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var modules_partials_CustomImage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1663);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var modules_partials_Pagination__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2862);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__);








const Blogs = ({
  onClick = id => {},
  data = {},
  extension = {}
}) => {
  const router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
    className: 'flex flex-col items-center space-y-6',
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("div", {
      className: "w-full justify-center max-w-6xl mx-auto flex flex-wrap gap-4",
      children: data?.data?.map((element, index) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
        role: "button",
        tabIndex: index,
        onClick: () => {
          onClick(element?.id);
        },
        className: "flex flex-col w-full max-w-[298px] border border-[#E6E6E6] rounded-sm",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
          className: "group-hover:opacity-80 flex flex-col relative min-w-[298px] min-h-[153px]",
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx(modules_partials_CustomImage__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
            src: element.image,
            alt: "",
            layout: "fill",
            loading: "lazy"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
            className: "bottom-0 left-0 right-0 absolute flex flex-col items-start w-ful",
            children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("p", {
              className: "text-dark-green bg-[#FCB316] px-4 py-3",
              children: extension?.sub || 'Blog'
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("p", {
              className: "w-full bg-[#FCB316] h-1"
            })]
          })]
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("p", {
          className: "px-3 py-4 text-[#6F7D1D] w-full line-clamp-1",
          children: element?.title
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
          className: "px-3 pb-3 space-x-2 flex items-center mt-auto pt-3",
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx((_mui_material_Avatar__WEBPACK_IMPORTED_MODULE_0___default()), {
            src: "/assets/images/avatar.png",
            sx: {
              width: '24px',
              height: '24px'
            },
            alt: element?.author?.firstname
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("div", {
            className: "flex flex-col text-[#767676]",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("h1", {
              className: "text-xs",
              children: [element?.author?.firstname, ' ', element?.author?.lastname]
            })
          })]
        })]
      }, JSON.stringify(element)))
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx(modules_partials_Pagination__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
      pageCount: data?.pagination?.pageCount,
      currentPage: data?.pagination?.currentPage,
      setPageNumber: page => {
        router.query.pageNumber = String(page);
        router.push(router);
      }
    })]
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Blogs);

/***/ })

};
;