"use strict";
exports.id = 7746;
exports.ids = [7746];
exports.modules = {

/***/ 7746:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ LandingController)
/* harmony export */ });
/* harmony import */ var apis_utils_helpers_response__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9620);
/* harmony import */ var apis_services_articleServices__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1035);
/* harmony import */ var apis_database__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1748);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([apis_services_articleServices__WEBPACK_IMPORTED_MODULE_0__, apis_database__WEBPACK_IMPORTED_MODULE_1__]);
([apis_services_articleServices__WEBPACK_IMPORTED_MODULE_0__, apis_database__WEBPACK_IMPORTED_MODULE_1__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




const {
  Articles: Article,
  Landings: Landing
} = apis_database__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z;
class LandingController {
  static async getOne(req, res) {
    const {
      id
    } = req.query;

    try {
      var _found;

      let found = await Landing.findByPk(`${id}`);

      if (!found) {
        const landings = await Landing.findAll();

        if (landings !== null && landings !== void 0 && landings.length) {
          found = landings[0];
        } else {
          return apis_utils_helpers_response__WEBPACK_IMPORTED_MODULE_2__/* ["default"].error */ .Z.error(res, 404, {
            message: 'page not found'
          });
        }
      }

      const {
        slideIds
      } = ((_found = found) === null || _found === void 0 ? void 0 : _found.toJSON()) || {};
      const ids = slideIds === null || slideIds === void 0 ? void 0 : slideIds.split(',');

      if (!(ids !== null && ids !== void 0 && ids.length)) {
        return apis_utils_helpers_response__WEBPACK_IMPORTED_MODULE_2__/* ["default"].error */ .Z.error(res, 409, {
          message: 'No slides'
        });
      }

      const slides = await Article.findAll({
        where: {
          id: ids
        }
      });
      return apis_utils_helpers_response__WEBPACK_IMPORTED_MODULE_2__/* ["default"].success */ .Z.success(res, 200, {
        message: 'Landings fetched successfuly',
        data: {
          slideIds: ids,
          slides
        }
      });
    } catch (error) {
      return apis_utils_helpers_response__WEBPACK_IMPORTED_MODULE_2__/* ["default"].error */ .Z.error(res, 500, {
        message: 'something went wrong',
        reason: error === null || error === void 0 ? void 0 : error.message
      });
    }
  }

  static async getAll(req, res) {
    try {
      return apis_utils_helpers_response__WEBPACK_IMPORTED_MODULE_2__/* ["default"].success */ .Z.success(res, 200, {
        message: 'Landings fetched successfuly',
        data: await Landing.findAndCountAll()
      });
    } catch (error) {
      return apis_utils_helpers_response__WEBPACK_IMPORTED_MODULE_2__/* ["default"].error */ .Z.error(res, 500, {
        message: 'something went wrong'
      });
    }
  }

  static async getSomeArticles(req, res) {
    try {
      let attributes = req.query.attributes;
      const articles = await apis_services_articleServices__WEBPACK_IMPORTED_MODULE_0__/* ["default"].findAndCountAll */ .Z.findAndCountAll(undefined, attributes === null || attributes === void 0 ? void 0 : attributes.split(','));
      return apis_utils_helpers_response__WEBPACK_IMPORTED_MODULE_2__/* ["default"].success */ .Z.success(res, 200, {
        message: 'Landings fetched successfuly',
        data: articles.rows.slice(0, 16)
      });
    } catch (error) {
      return apis_utils_helpers_response__WEBPACK_IMPORTED_MODULE_2__/* ["default"].error */ .Z.error(res, 500, {
        message: 'something went wrong',
        reason: error === null || error === void 0 ? void 0 : error.message
      });
    }
  }

  static async create(req, res) {
    try {
      return apis_utils_helpers_response__WEBPACK_IMPORTED_MODULE_2__/* ["default"].success */ .Z.success(res, 200, {
        message: 'Landing created successfuly',
        data: await Landing.create(req.body)
      });
    } catch (error) {
      return apis_utils_helpers_response__WEBPACK_IMPORTED_MODULE_2__/* ["default"].error */ .Z.error(res, 500, {
        message: 'something went wrong'
      });
    }
  }

  static async update(req, res) {
    const {
      id
    } = req.query;

    try {
      var _req$body$slideIds, _item;

      let item = await Landing.findByPk(`${id}`);

      const payload = _objectSpread(_objectSpread({}, req.body), {}, {
        slideIds: (_req$body$slideIds = req.body.slideIds) === null || _req$body$slideIds === void 0 ? void 0 : _req$body$slideIds.toString()
      });

      if (!((_item = item) !== null && _item !== void 0 && _item.toJSON())) {
        item = await Landing.create(payload);
      } else {
        var _item2, _item2$toJSON;

        item.set(_objectSpread(_objectSpread({}, payload), {}, {
          slideIds: payload.slideIds || ((_item2 = item) === null || _item2 === void 0 ? void 0 : (_item2$toJSON = _item2.toJSON()) === null || _item2$toJSON === void 0 ? void 0 : _item2$toJSON.slideIds)
        }));
      }

      return apis_utils_helpers_response__WEBPACK_IMPORTED_MODULE_2__/* ["default"].success */ .Z.success(res, 200, {
        message: 'Landing updated successfuly',
        data: await item.save()
      });
    } catch (error) {
      return apis_utils_helpers_response__WEBPACK_IMPORTED_MODULE_2__/* ["default"].error */ .Z.error(res, 500, {
        message: 'something went wrong'
      });
    }
  }

  static async delete(req, res) {
    const {
      id
    } = req.query;

    try {
      const item = await Landing.findByPk(`${id}`);

      if (!item) {
        return apis_utils_helpers_response__WEBPACK_IMPORTED_MODULE_2__/* ["default"].error */ .Z.error(res, 409, {
          message: 'Landing is not found'
        });
      }

      return apis_utils_helpers_response__WEBPACK_IMPORTED_MODULE_2__/* ["default"].success */ .Z.success(res, 200, {
        message: 'Landings deleted successfuly',
        data: await item.destroy()
      });
    } catch (error) {
      return apis_utils_helpers_response__WEBPACK_IMPORTED_MODULE_2__/* ["default"].error */ .Z.error(res, 500, {
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