"use strict";
(() => {
var exports = {};
exports.id = 3265;
exports.ids = [3265];
exports.modules = {

/***/ 5142:
/***/ ((module) => {

module.exports = require("dotenv");

/***/ }),

/***/ 8210:
/***/ ((module) => {

module.exports = import("sequelize");;

/***/ }),

/***/ 8945:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ handler)
/* harmony export */ });
/* harmony import */ var apis_restful_controllers_CommentControllers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5466);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([apis_restful_controllers_CommentControllers__WEBPACK_IMPORTED_MODULE_0__]);
apis_restful_controllers_CommentControllers__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];

function handler(req, res) {
  if (req.method === 'GET') {
    return apis_restful_controllers_CommentControllers__WEBPACK_IMPORTED_MODULE_0__/* ["default"].getAllComments */ .Z.getAllComments(req, res);
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
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [1501,3716,5466], () => (__webpack_exec__(8945)));
module.exports = __webpack_exports__;

})();