"use strict";
(() => {
var exports = {};
exports.id = 6569;
exports.ids = [6569];
exports.modules = {

/***/ 5142:
/***/ ((module) => {

module.exports = require("dotenv");

/***/ }),

/***/ 9344:
/***/ ((module) => {

module.exports = require("jsonwebtoken");

/***/ }),

/***/ 1454:
/***/ ((module) => {

module.exports = import("iron-session");;

/***/ }),

/***/ 8210:
/***/ ((module) => {

module.exports = import("sequelize");;

/***/ }),

/***/ 1597:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var apis_middlewares_auth__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6207);
/* harmony import */ var apis_restful_controllers_JobController__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8652);
/* harmony import */ var apis_utils_helpers_response__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9620);
/* harmony import */ var system_lib_withSession__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1547);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([apis_middlewares_auth__WEBPACK_IMPORTED_MODULE_0__, apis_restful_controllers_JobController__WEBPACK_IMPORTED_MODULE_1__, system_lib_withSession__WEBPACK_IMPORTED_MODULE_2__]);
([apis_middlewares_auth__WEBPACK_IMPORTED_MODULE_0__, apis_restful_controllers_JobController__WEBPACK_IMPORTED_MODULE_1__, system_lib_withSession__WEBPACK_IMPORTED_MODULE_2__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);





function handler(req, res) {
  switch (req.method) {
    case 'GET':
      return apis_restful_controllers_JobController__WEBPACK_IMPORTED_MODULE_1__/* ["default"].getOne */ .Z.getOne(req, res);

    case 'PATCH':
      return apis_restful_controllers_JobController__WEBPACK_IMPORTED_MODULE_1__/* ["default"].update */ .Z.update(req, res);

    case 'DELETE':
      return apis_restful_controllers_JobController__WEBPACK_IMPORTED_MODULE_1__/* ["default"]["delete"] */ .Z["delete"](req, res);

    default:
      return apis_utils_helpers_response__WEBPACK_IMPORTED_MODULE_3__/* ["default"].success */ .Z.success(res, 405, {
        message: 'method is not allowed'
      });
  }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,system_lib_withSession__WEBPACK_IMPORTED_MODULE_2__/* .withSessionRoute */ .j)((0,apis_middlewares_auth__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z)(handler, ['admin'], ['PATCH', 'DELETE'])));
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [8534,1075,6207,1547,8652], () => (__webpack_exec__(1597)));
module.exports = __webpack_exports__;

})();