"use strict";
exports.id = 5834;
exports.ids = [5834];
exports.modules = {

/***/ 5834:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var modules_layouts_Scaffold__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2655);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _Partials_Blogs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(277);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__);








const BlogActivity = ({
  data,
  extension
}) => {
  const {
    push
  } = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();

  const handleClick = id => {
    push('/blog/' + id);
  };

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(modules_layouts_Scaffold__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z, {
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("div", {
      className: "w-full px-4 bg-white md:px-8 pt-12 border-b border-[#E6E6E6]",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
        className: "px-4 md:px-8 w-full max-w-6xl mx-auto flex items-center space-x-4",
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
          href: extension ? '/extension-material' : '/blog',
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("span", {
            className: "cursor-pointer text-sm font-medium pb-3 border-b-2 border-b-[#FCB316]",
            children: (extension === null || extension === void 0 ? void 0 : extension.category_name) || 'All'
          })
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("span", {
          className: "cursor-pointer text-sm font-medium pb-3",
          children: (extension === null || extension === void 0 ? void 0 : extension.sub) || 'Blogs'
        })]
      })
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("div", {
      className: "w-full px-4 bg-white md:px-8 py-6",
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx(_Partials_Blogs__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
        data: data,
        extension: extension,
        onClick: handleClick
      })
    })]
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (BlogActivity);

/***/ })

};
;