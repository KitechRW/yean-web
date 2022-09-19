"use strict";
exports.id = 9085;
exports.ids = [9085];
exports.modules = {

/***/ 9085:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ JobController)
/* harmony export */ });
/* harmony import */ var apis_utils_helpers_response__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6828);
/* harmony import */ var apis_database__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3509);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([apis_database__WEBPACK_IMPORTED_MODULE_0__]);
apis_database__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



const {
  Jobs: Job
} = apis_database__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z;
class JobController {
  static async getOne(req, res) {
    const {
      id
    } = req.query;

    try {
      return apis_utils_helpers_response__WEBPACK_IMPORTED_MODULE_1__/* ["default"].success */ .Z.success(res, 200, {
        message: 'Jobs fetched successfuly',
        data: await Job.findByPk(`${id}`)
      });
    } catch (error) {
      return apis_utils_helpers_response__WEBPACK_IMPORTED_MODULE_1__/* ["default"].error */ .Z.error(res, 500, {
        message: 'something went wrong'
      });
    }
  }

  static async getAll(req, res) {
    try {
      const jobs = await Job.findAndCountAll();
      const categories = [];
      const keywords = [];
      const locations = [];
      jobs.rows.forEach(item => {
        if (!categories.includes(item.toJSON().category)) {
          categories.push(item.toJSON().category);
        }

        if (!keywords.includes(item.toJSON().keyword)) {
          keywords.push(item.toJSON().keyword);
        }

        if (!locations.includes(item.toJSON().location)) {
          locations.push(item.toJSON().location);
        }
      });
      return apis_utils_helpers_response__WEBPACK_IMPORTED_MODULE_1__/* ["default"].success */ .Z.success(res, 200, {
        message: 'Jobs fetched successfuly',
        data: _objectSpread(_objectSpread({}, jobs), {}, {
          categories,
          keywords,
          locations
        })
      });
    } catch (error) {
      return apis_utils_helpers_response__WEBPACK_IMPORTED_MODULE_1__/* ["default"].error */ .Z.error(res, 500, {
        message: 'something went wrong',
        reason: error?.message
      });
    }
  }

  static async create(req, res) {
    try {
      return apis_utils_helpers_response__WEBPACK_IMPORTED_MODULE_1__/* ["default"].success */ .Z.success(res, 200, {
        message: 'Job created successfuly',
        data: await Job.create(req.body)
      });
    } catch (error) {
      return apis_utils_helpers_response__WEBPACK_IMPORTED_MODULE_1__/* ["default"].error */ .Z.error(res, 500, {
        message: 'something went wrong'
      });
    }
  }

  static async update(req, res) {
    const {
      id
    } = req.query;

    try {
      const item = await Job.findByPk(`${id}`);

      if (!item?.toJSON()) {
        return apis_utils_helpers_response__WEBPACK_IMPORTED_MODULE_1__/* ["default"].error */ .Z.error(res, 404, {
          message: 'Job is not found'
        });
      }

      item.set(req.body);
      return apis_utils_helpers_response__WEBPACK_IMPORTED_MODULE_1__/* ["default"].success */ .Z.success(res, 200, {
        message: 'Job updated successfuly',
        data: await item.save()
      });
    } catch (error) {
      return apis_utils_helpers_response__WEBPACK_IMPORTED_MODULE_1__/* ["default"].error */ .Z.error(res, 500, {
        message: 'something went wrong'
      });
    }
  }

  static async delete(req, res) {
    const {
      id
    } = req.query;

    try {
      const item = await Job.findByPk(`${id}`);

      if (!item) {
        return apis_utils_helpers_response__WEBPACK_IMPORTED_MODULE_1__/* ["default"].error */ .Z.error(res, 409, {
          message: 'Job is not found'
        });
      }

      return apis_utils_helpers_response__WEBPACK_IMPORTED_MODULE_1__/* ["default"].success */ .Z.success(res, 200, {
        message: 'Jobs deleted successfuly',
        data: await item.destroy()
      });
    } catch (error) {
      return apis_utils_helpers_response__WEBPACK_IMPORTED_MODULE_1__/* ["default"].error */ .Z.error(res, 500, {
        message: 'something went wrong'
      });
    }
  }

}
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;