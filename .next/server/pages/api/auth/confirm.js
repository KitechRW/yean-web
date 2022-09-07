"use strict";
(() => {
var exports = {};
exports.id = 3665;
exports.ids = [3665];
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

/***/ 8210:
/***/ ((module) => {

module.exports = import("sequelize");;

/***/ }),

/***/ 5096:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ handler)
/* harmony export */ });
/* harmony import */ var apis_restful_controllers_AuthController__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1076);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([apis_restful_controllers_AuthController__WEBPACK_IMPORTED_MODULE_0__]);
apis_restful_controllers_AuthController__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];

function handler(req, res) {
  if (req.method === 'POST') {
    return apis_restful_controllers_AuthController__WEBPACK_IMPORTED_MODULE_0__/* ["default"].confirmAccount */ .Z.confirmAccount(req, res);
  } else {
    // Handle any other HTTP method
    return res.status(404).send('404 page not found');
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
var __webpack_exports__ = __webpack_require__.X(0, [1383,6207,1076], () => (__webpack_exec__(5096)));
module.exports = __webpack_exports__;

})();