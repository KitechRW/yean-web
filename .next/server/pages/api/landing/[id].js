"use strict";
(() => {
var exports = {};
exports.id = 8080;
exports.ids = [8080];
exports.modules = {

/***/ 5142:
/***/ ((module) => {

module.exports = require("dotenv");

/***/ }),

/***/ 8210:
/***/ ((module) => {

module.exports = import("sequelize");;

/***/ }),

/***/ 5328:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ handler)
/* harmony export */ });
/* harmony import */ var apis_restful_controllers_LandingController__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5538);
/* harmony import */ var apis_utils_helpers_response__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6828);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([apis_restful_controllers_LandingController__WEBPACK_IMPORTED_MODULE_0__]);
apis_restful_controllers_LandingController__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


function handler(req, res) {
  switch (req.method) {
    case 'GET':
      if (req.query.attributes) {
        return apis_restful_controllers_LandingController__WEBPACK_IMPORTED_MODULE_0__/* ["default"].getSomeArticles */ .Z.getSomeArticles(req, res);
      }

      return apis_restful_controllers_LandingController__WEBPACK_IMPORTED_MODULE_0__/* ["default"].getOne */ .Z.getOne(req, res);

    case 'PATCH':
      return apis_restful_controllers_LandingController__WEBPACK_IMPORTED_MODULE_0__/* ["default"].update */ .Z.update(req, res);

    case 'DELETE':
      return apis_restful_controllers_LandingController__WEBPACK_IMPORTED_MODULE_0__/* ["default"]["delete"] */ .Z["delete"](req, res);

    default:
      return apis_utils_helpers_response__WEBPACK_IMPORTED_MODULE_1__/* ["default"].success */ .Z.success(res, 405, {
        message: 'method is not allowed'
      });
  }
}
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [1501,3716,5538], () => (__webpack_exec__(5328)));
module.exports = __webpack_exports__;

})();