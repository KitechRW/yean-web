"use strict";
exports.id = 6635;
exports.ids = [6635];
exports.modules = {

/***/ 6635:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Nv": () => (/* binding */ useProtectedFetcher),
/* harmony export */   "TB": () => (/* binding */ useOpenFetcher)
/* harmony export */ });
/* unused harmony exports openFetcher, protectedFetcher */
/* harmony import */ var apis_restful__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3751);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2167);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5941);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([swr__WEBPACK_IMPORTED_MODULE_2__]);
swr__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];




const fetcher = config => axios.request(config).then(res => res.data);

/* unused harmony default export */ var __WEBPACK_DEFAULT_EXPORT__ = ((/* unused pure expression or super */ null && (fetcher)));
const openFetcher = async path => {
  return apis_restful__WEBPACK_IMPORTED_MODULE_0__/* ["default"].OpenRoute.getRoute */ .Z.OpenRoute.getRoute(path);
};
const protectedFetcher = async path => {
  return apis_restful__WEBPACK_IMPORTED_MODULE_0__/* ["default"].GetRoute.getRoute */ .Z.GetRoute.getRoute(path);
};
const useOpenFetcher = pathname => {
  const {
    data,
    error
  } = (0,swr__WEBPACK_IMPORTED_MODULE_2__["default"])(pathname, openFetcher);
  return {
    data: (data === null || data === void 0 ? void 0 : data.data) || {},
    isLoading: !error && !data,
    isError: error
  };
};
const useProtectedFetcher = pathname => {
  const {
    data,
    error
  } = (0,swr__WEBPACK_IMPORTED_MODULE_2__["default"])(pathname, protectedFetcher);
  return {
    data: (data === null || data === void 0 ? void 0 : data.data) || {},
    isLoading: !error && !data,
    isError: error
  };
};
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;