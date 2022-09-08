"use strict";
(() => {
var exports = {};
exports.id = 7030;
exports.ids = [7030];
exports.modules = {

/***/ 1454:
/***/ ((module) => {

module.exports = import("iron-session");;

/***/ }),

/***/ 3240:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var system_lib_withSession__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1547);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([system_lib_withSession__WEBPACK_IMPORTED_MODULE_0__]);
system_lib_withSession__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


async function logoutRoute(req, res) {
  await req.session.destroy();
  res.send('Logged out');
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,system_lib_withSession__WEBPACK_IMPORTED_MODULE_0__/* .withSessionRoute */ .j)(logoutRoute));
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [8534,1547], () => (__webpack_exec__(3240)));
module.exports = __webpack_exports__;

})();