"use strict";
(() => {
var exports = {};
exports.id = 5198;
exports.ids = [5198];
exports.modules = {

/***/ 5142:
/***/ ((module) => {

module.exports = require("dotenv");

/***/ }),

/***/ 8210:
/***/ ((module) => {

module.exports = import("sequelize");;

/***/ }),

/***/ 7110:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ SearchController)
/* harmony export */ });
/* harmony import */ var apis_utils_helpers_response__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9620);
/* harmony import */ var sequelize__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8210);
/* harmony import */ var apis_database__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1748);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([sequelize__WEBPACK_IMPORTED_MODULE_0__, apis_database__WEBPACK_IMPORTED_MODULE_1__]);
([sequelize__WEBPACK_IMPORTED_MODULE_0__, apis_database__WEBPACK_IMPORTED_MODULE_1__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);



const {
  Articles: Article,
  Libraries: Library
} = apis_database__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z;
class SearchController {
  static async search(req, res) {
    const {
      search
    } = req.body;

    try {
      const articles = await Article.findAll({
        attributes: ['id', 'title', 'image'],
        where: {
          title: {
            [sequelize__WEBPACK_IMPORTED_MODULE_0__.Op.like]: `%${search}%`
          }
        }
      });
      const books = await Library.findAll({
        attributes: ['id', 'name', 'link'],
        where: {
          name: {
            [sequelize__WEBPACK_IMPORTED_MODULE_0__.Op.like]: `%${search}%`
          }
        },
        raw: true
      });
      return apis_utils_helpers_response__WEBPACK_IMPORTED_MODULE_2__/* ["default"].success */ .Z.success(res, 200, {
        articles,
        books
      });
    } catch (error) {
      return apis_utils_helpers_response__WEBPACK_IMPORTED_MODULE_2__/* ["default"].error */ .Z.error(res, 500, {
        message: 'something went wrong',
        reason: error === null || error === void 0 ? void 0 : error.message
      });
    }
  }

}
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 5002:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ handler)
/* harmony export */ });
/* harmony import */ var apis_restful_controllers_SearchController__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7110);
/* harmony import */ var apis_utils_helpers_response__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9620);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([apis_restful_controllers_SearchController__WEBPACK_IMPORTED_MODULE_0__]);
apis_restful_controllers_SearchController__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


function handler(req, res) {
  switch (req.method) {
    case 'POST':
      return apis_restful_controllers_SearchController__WEBPACK_IMPORTED_MODULE_0__/* ["default"].search */ .Z.search(req, res);

    default:
      return apis_utils_helpers_response__WEBPACK_IMPORTED_MODULE_1__/* ["default"].error */ .Z.error(res, 405, {
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
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [1075], () => (__webpack_exec__(5002)));
module.exports = __webpack_exports__;

})();