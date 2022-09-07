"use strict";
exports.id = 1547;
exports.ids = [1547];
exports.modules = {

/***/ 7061:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const Keys = {
  DEFAULT_API: "https://witwad.com",
  DEFAULT_JWT_SECRET: "9ihsilZlxA",
  REDIRECT_TO: "0rx21MJ5vHEI2h9ZEdqImRy2sHu4Vpdb",
  USER_INFO: "1B28429678ED6E22",
  SPEECHLY_APP_ID: process.env.SPEECHLY_APP_ID,
  REACT_APP_ACCESS_TOKEN: "F926F54FAF8B261DDEE44445EA85F",
  ISSERVER: true,
  SESSION_PASSWORD: "{!-@5MytKz!eb\"hdBX-DM+~>EBeSw9n]",
  HOST: "https://witwad.com"
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Keys);

/***/ }),

/***/ 1438:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "q": () => (/* binding */ ironOptions)
/* harmony export */ });
/* harmony import */ var apis_utils_constants_keys__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7061);

const ironOptions = {
  cookieName: 'myapp_cookiename',
  password: `${apis_utils_constants_keys__WEBPACK_IMPORTED_MODULE_0__/* ["default"].SESSION_PASSWORD */ .Z.SESSION_PASSWORD}`,
  cookieOptions: {
    secure: true
  }
};

/***/ }),

/***/ 1547:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "j": () => (/* binding */ withSessionRoute)
/* harmony export */ });
/* unused harmony export withSessionSsr */
/* harmony import */ var iron_session_next__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8534);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1438);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([iron_session_next__WEBPACK_IMPORTED_MODULE_0__]);
iron_session_next__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


function withSessionRoute(handler) {
  return (0,iron_session_next__WEBPACK_IMPORTED_MODULE_0__/* .withIronSessionApiRoute */ .n)(handler, _config__WEBPACK_IMPORTED_MODULE_1__/* .ironOptions */ .q);
} // Theses types are compatible with InferGetStaticPropsType https://nextjs.org/docs/basic-features/data-fetching#typescript-use-getstaticprops

function withSessionSsr(handler) {
  return withIronSessionSsr(handler, ironOptions);
}
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;