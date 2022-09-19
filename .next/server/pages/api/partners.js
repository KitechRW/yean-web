"use strict";
(() => {
var exports = {};
exports.id = 1614;
exports.ids = [1614];
exports.modules = {

/***/ 5142:
/***/ ((module) => {

module.exports = require("dotenv");

/***/ }),

/***/ 2616:
/***/ ((module) => {

module.exports = require("formidable");

/***/ }),

/***/ 9011:
/***/ ((module) => {

module.exports = require("mime");

/***/ }),

/***/ 8210:
/***/ ((module) => {

module.exports = import("sequelize");;

/***/ }),

/***/ 7147:
/***/ ((module) => {

module.exports = require("fs");

/***/ }),

/***/ 3292:
/***/ ((module) => {

module.exports = require("fs/promises");

/***/ }),

/***/ 1017:
/***/ ((module) => {

module.exports = require("path");

/***/ }),

/***/ 190:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "config": () => (/* binding */ config),
/* harmony export */   "default": () => (/* binding */ handler)
/* harmony export */ });
/* harmony import */ var apis_restful_controllers_PartnerController__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9978);
/* harmony import */ var apis_utils_helpers_response__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6828);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([apis_restful_controllers_PartnerController__WEBPACK_IMPORTED_MODULE_0__]);
apis_restful_controllers_PartnerController__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


function handler(req, res) {
  switch (req.method) {
    case 'GET':
      return apis_restful_controllers_PartnerController__WEBPACK_IMPORTED_MODULE_0__/* ["default"].getAll */ .Z.getAll(req, res);

    case 'POST':
      return apis_restful_controllers_PartnerController__WEBPACK_IMPORTED_MODULE_0__/* ["default"].create */ .Z.create(req, res);

    default:
      return apis_utils_helpers_response__WEBPACK_IMPORTED_MODULE_1__/* ["default"].error */ .Z.error(res, 405, {
        message: 'method is not allowed'
      });
  }
}
const config = {
  api: {
    bodyParser: false
  }
};
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [1501,6969,9978], () => (__webpack_exec__(190)));
module.exports = __webpack_exports__;

})();