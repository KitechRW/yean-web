"use strict";
(() => {
var exports = {};
exports.id = 4994;
exports.ids = [4994];
exports.modules = {

/***/ 8432:
/***/ ((module) => {

module.exports = require("bcryptjs");

/***/ }),

/***/ 9344:
/***/ ((module) => {

module.exports = require("jsonwebtoken");

/***/ }),

/***/ 5184:
/***/ ((module) => {

module.exports = require("nodemailer");

/***/ }),

/***/ 1454:
/***/ ((module) => {

module.exports = import("iron-session");;

/***/ }),

/***/ 8210:
/***/ ((module) => {

module.exports = import("sequelize");;

/***/ }),

/***/ 1502:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var system_lib_withSession__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1547);
/* harmony import */ var apis_restful_controllers_AuthController__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1076);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([system_lib_withSession__WEBPACK_IMPORTED_MODULE_0__, apis_restful_controllers_AuthController__WEBPACK_IMPORTED_MODULE_1__]);
([system_lib_withSession__WEBPACK_IMPORTED_MODULE_0__, apis_restful_controllers_AuthController__WEBPACK_IMPORTED_MODULE_1__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);



async function loginRoute(req, res) {
  if (req.method !== 'POST') {
    return res.status(404).send('404 page not found');
  }

  return apis_restful_controllers_AuthController__WEBPACK_IMPORTED_MODULE_1__/* ["default"].signIn */ .Z.signIn(req, res);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,system_lib_withSession__WEBPACK_IMPORTED_MODULE_0__/* .withSessionRoute */ .j)(loginRoute));
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [8534,1383,6207,1547,1076], () => (__webpack_exec__(1502)));
module.exports = __webpack_exports__;

})();