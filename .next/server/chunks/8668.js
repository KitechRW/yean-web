"use strict";
exports.id = 8668;
exports.ids = [8668];
exports.modules = {

/***/ 8668:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var nprogress__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(808);
/* harmony import */ var nprogress__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(nprogress__WEBPACK_IMPORTED_MODULE_1__);


nprogress__WEBPACK_IMPORTED_MODULE_1___default().configure({
  minimum: 0.3,
  easing: 'ease',
  speed: 500,
  showSpinner: false
});
next_router__WEBPACK_IMPORTED_MODULE_0___default().events.on('routeChangeStart', () => nprogress__WEBPACK_IMPORTED_MODULE_1___default().start());
next_router__WEBPACK_IMPORTED_MODULE_0___default().events.on('routeChangeComplete', () => nprogress__WEBPACK_IMPORTED_MODULE_1___default().done());
next_router__WEBPACK_IMPORTED_MODULE_0___default().events.on('routeChangeError', () => nprogress__WEBPACK_IMPORTED_MODULE_1___default().done());

const ProgressBar = () => {
  return null;
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ProgressBar);

/***/ })

};
;