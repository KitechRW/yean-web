"use strict";
exports.id = 8652;
exports.ids = [8652];
exports.modules = {

/***/ 3262:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var sequelize__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8210);
/* harmony import */ var _config_sequelize__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9838);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([sequelize__WEBPACK_IMPORTED_MODULE_0__, _config_sequelize__WEBPACK_IMPORTED_MODULE_1__]);
([sequelize__WEBPACK_IMPORTED_MODULE_0__, _config_sequelize__WEBPACK_IMPORTED_MODULE_1__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);


const Job = _config_sequelize__WEBPACK_IMPORTED_MODULE_1__/* ["default"].define */ .Z.define('Job', {
  title: sequelize__WEBPACK_IMPORTED_MODULE_0__.DataTypes.TEXT,
  category: sequelize__WEBPACK_IMPORTED_MODULE_0__.DataTypes.STRING,
  keyword: sequelize__WEBPACK_IMPORTED_MODULE_0__.DataTypes.STRING,
  location: sequelize__WEBPACK_IMPORTED_MODULE_0__.DataTypes.STRING,
  description: sequelize__WEBPACK_IMPORTED_MODULE_0__.DataTypes.TEXT
}, {
  tableName: 'tbl_jobs',
  timestamps: false
});

(async () => {
  await _config_sequelize__WEBPACK_IMPORTED_MODULE_1__/* ["default"].sync */ .Z.sync({
    alter: true
  });
})();

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Job);
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 8652:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ JobController)
/* harmony export */ });
/* harmony import */ var apis_utils_helpers_response__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9620);
/* harmony import */ var apis_database_models_jobs_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3262);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([apis_database_models_jobs_model__WEBPACK_IMPORTED_MODULE_0__]);
apis_database_models_jobs_model__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



class JobController {
  static async getOne(req, res) {
    const {
      id
    } = req.query;

    try {
      return apis_utils_helpers_response__WEBPACK_IMPORTED_MODULE_1__/* ["default"].success */ .Z.success(res, 200, {
        message: 'Jobs fetched successfuly',
        data: await apis_database_models_jobs_model__WEBPACK_IMPORTED_MODULE_0__/* ["default"].findByPk */ .Z.findByPk(`${id}`)
      });
    } catch (error) {
      return apis_utils_helpers_response__WEBPACK_IMPORTED_MODULE_1__/* ["default"].error */ .Z.error(res, 500, {
        message: 'something went wrong'
      });
    }
  }

  static async getAll(req, res) {
    try {
      const jobs = await apis_database_models_jobs_model__WEBPACK_IMPORTED_MODULE_0__/* ["default"].findAndCountAll */ .Z.findAndCountAll();
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
        reason: error === null || error === void 0 ? void 0 : error.message
      });
    }
  }

  static async create(req, res) {
    try {
      return apis_utils_helpers_response__WEBPACK_IMPORTED_MODULE_1__/* ["default"].success */ .Z.success(res, 200, {
        message: 'Job created successfuly',
        data: await apis_database_models_jobs_model__WEBPACK_IMPORTED_MODULE_0__/* ["default"].create */ .Z.create(req.body)
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
      const item = await apis_database_models_jobs_model__WEBPACK_IMPORTED_MODULE_0__/* ["default"].findByPk */ .Z.findByPk(`${id}`);

      if (!(item !== null && item !== void 0 && item.toJSON())) {
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
      const item = await apis_database_models_jobs_model__WEBPACK_IMPORTED_MODULE_0__/* ["default"].findByPk */ .Z.findByPk(`${id}`);

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