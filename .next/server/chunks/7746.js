"use strict";
exports.id = 7746;
exports.ids = [7746];
exports.modules = {

/***/ 7237:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var sequelize__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8210);
/* harmony import */ var _config_sequelize__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9838);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([sequelize__WEBPACK_IMPORTED_MODULE_0__, _config_sequelize__WEBPACK_IMPORTED_MODULE_1__]);
([sequelize__WEBPACK_IMPORTED_MODULE_0__, _config_sequelize__WEBPACK_IMPORTED_MODULE_1__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);


const Landing = _config_sequelize__WEBPACK_IMPORTED_MODULE_1__/* ["default"].define */ .Z.define('Landing', {
  id: {
    type: sequelize__WEBPACK_IMPORTED_MODULE_0__.DataTypes.BIGINT,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
    unique: true
  },
  slideIds: {
    type: sequelize__WEBPACK_IMPORTED_MODULE_0__.DataTypes.STRING
  }
}, {
  tableName: 'tbl_landing',
  timestamps: false
});

(async () => {
  await _config_sequelize__WEBPACK_IMPORTED_MODULE_1__/* ["default"].sync */ .Z.sync({
    alter: true
  });
})();

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Landing);
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 7746:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ LandingController)
/* harmony export */ });
/* harmony import */ var apis_utils_helpers_response__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9620);
/* harmony import */ var apis_database_models_landing_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7237);
/* harmony import */ var apis_database_models_article_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8803);
/* harmony import */ var apis_services_articleServices__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1035);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([apis_database_models_landing_model__WEBPACK_IMPORTED_MODULE_0__, apis_database_models_article_model__WEBPACK_IMPORTED_MODULE_1__, apis_services_articleServices__WEBPACK_IMPORTED_MODULE_2__]);
([apis_database_models_landing_model__WEBPACK_IMPORTED_MODULE_0__, apis_database_models_article_model__WEBPACK_IMPORTED_MODULE_1__, apis_services_articleServices__WEBPACK_IMPORTED_MODULE_2__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





class LandingController {
  static async getOne(req, res) {
    const {
      id
    } = req.query;

    try {
      var _found;

      let found = await apis_database_models_landing_model__WEBPACK_IMPORTED_MODULE_0__/* ["default"].findByPk */ .Z.findByPk(`${id}`);

      if (!found) {
        const landings = await apis_database_models_landing_model__WEBPACK_IMPORTED_MODULE_0__/* ["default"].findAll */ .Z.findAll();

        if (landings !== null && landings !== void 0 && landings.length) {
          found = landings[0];
        } else {
          return apis_utils_helpers_response__WEBPACK_IMPORTED_MODULE_3__/* ["default"].error */ .Z.error(res, 404, {
            message: 'page not found'
          });
        }
      }

      const {
        slideIds
      } = ((_found = found) === null || _found === void 0 ? void 0 : _found.toJSON()) || {};
      const ids = slideIds === null || slideIds === void 0 ? void 0 : slideIds.split(',');

      if (!(ids !== null && ids !== void 0 && ids.length)) {
        return apis_utils_helpers_response__WEBPACK_IMPORTED_MODULE_3__/* ["default"].error */ .Z.error(res, 409, {
          message: 'No slides'
        });
      }

      const slides = await apis_database_models_article_model__WEBPACK_IMPORTED_MODULE_1__/* ["default"].findAll */ .Z.findAll({
        where: {
          id: ids
        }
      });
      return apis_utils_helpers_response__WEBPACK_IMPORTED_MODULE_3__/* ["default"].success */ .Z.success(res, 200, {
        message: 'Landings fetched successfuly',
        data: {
          slideIds: ids,
          slides
        }
      });
    } catch (error) {
      return apis_utils_helpers_response__WEBPACK_IMPORTED_MODULE_3__/* ["default"].error */ .Z.error(res, 500, {
        message: 'something went wrong',
        reason: error === null || error === void 0 ? void 0 : error.message
      });
    }
  }

  static async getAll(req, res) {
    try {
      return apis_utils_helpers_response__WEBPACK_IMPORTED_MODULE_3__/* ["default"].success */ .Z.success(res, 200, {
        message: 'Landings fetched successfuly',
        data: await apis_database_models_landing_model__WEBPACK_IMPORTED_MODULE_0__/* ["default"].findAndCountAll */ .Z.findAndCountAll()
      });
    } catch (error) {
      return apis_utils_helpers_response__WEBPACK_IMPORTED_MODULE_3__/* ["default"].error */ .Z.error(res, 500, {
        message: 'something went wrong'
      });
    }
  }

  static async getSomeArticles(req, res) {
    try {
      let attributes = req.query.attributes;
      const articles = await apis_services_articleServices__WEBPACK_IMPORTED_MODULE_2__/* ["default"].findAndCountAll */ .Z.findAndCountAll(undefined, attributes === null || attributes === void 0 ? void 0 : attributes.split(','));
      return apis_utils_helpers_response__WEBPACK_IMPORTED_MODULE_3__/* ["default"].success */ .Z.success(res, 200, {
        message: 'Landings fetched successfuly',
        data: articles.rows.slice(0, 16)
      });
    } catch (error) {
      return apis_utils_helpers_response__WEBPACK_IMPORTED_MODULE_3__/* ["default"].error */ .Z.error(res, 500, {
        message: 'something went wrong',
        reason: error === null || error === void 0 ? void 0 : error.message
      });
    }
  }

  static async create(req, res) {
    try {
      return apis_utils_helpers_response__WEBPACK_IMPORTED_MODULE_3__/* ["default"].success */ .Z.success(res, 200, {
        message: 'Landing created successfuly',
        data: await apis_database_models_landing_model__WEBPACK_IMPORTED_MODULE_0__/* ["default"].create */ .Z.create(req.body)
      });
    } catch (error) {
      return apis_utils_helpers_response__WEBPACK_IMPORTED_MODULE_3__/* ["default"].error */ .Z.error(res, 500, {
        message: 'something went wrong'
      });
    }
  }

  static async update(req, res) {
    const {
      id
    } = req.query;

    try {
      var _item;

      let item = await apis_database_models_landing_model__WEBPACK_IMPORTED_MODULE_0__/* ["default"].findByPk */ .Z.findByPk(`${id}`);

      if (!((_item = item) !== null && _item !== void 0 && _item.toJSON())) {
        item = await apis_database_models_landing_model__WEBPACK_IMPORTED_MODULE_0__/* ["default"].create */ .Z.create(req.body);
      } else {
        var _req$body$slideIds;

        item.set(_objectSpread(_objectSpread({}, req.body), {}, {
          slideIds: ((_req$body$slideIds = req.body.slideIds) === null || _req$body$slideIds === void 0 ? void 0 : _req$body$slideIds.toString()) || item.toJSON().slideIds
        }));
      }

      return apis_utils_helpers_response__WEBPACK_IMPORTED_MODULE_3__/* ["default"].success */ .Z.success(res, 200, {
        message: 'Landing updated successfuly',
        data: await item.save()
      });
    } catch (error) {
      return apis_utils_helpers_response__WEBPACK_IMPORTED_MODULE_3__/* ["default"].error */ .Z.error(res, 500, {
        message: 'something went wrong'
      });
    }
  }

  static async delete(req, res) {
    const {
      id
    } = req.query;

    try {
      const item = await apis_database_models_landing_model__WEBPACK_IMPORTED_MODULE_0__/* ["default"].findByPk */ .Z.findByPk(`${id}`);

      if (!item) {
        return apis_utils_helpers_response__WEBPACK_IMPORTED_MODULE_3__/* ["default"].error */ .Z.error(res, 409, {
          message: 'Landing is not found'
        });
      }

      return apis_utils_helpers_response__WEBPACK_IMPORTED_MODULE_3__/* ["default"].success */ .Z.success(res, 200, {
        message: 'Landings deleted successfuly',
        data: await item.destroy()
      });
    } catch (error) {
      return apis_utils_helpers_response__WEBPACK_IMPORTED_MODULE_3__/* ["default"].error */ .Z.error(res, 500, {
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