"use strict";
exports.id = 3097;
exports.ids = [3097];
exports.modules = {

/***/ 3097:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ ArticleController)
/* harmony export */ });
/* harmony import */ var apis_utils_helpers_response__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6828);
/* harmony import */ var apis_services_articleServices__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3716);
/* harmony import */ var apis_utils_libForm__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6969);
/* harmony import */ var apis_utils_pagnation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(3537);
/* harmony import */ var apis_database__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3509);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([apis_services_articleServices__WEBPACK_IMPORTED_MODULE_0__, apis_database__WEBPACK_IMPORTED_MODULE_2__]);
([apis_services_articleServices__WEBPACK_IMPORTED_MODULE_0__, apis_database__WEBPACK_IMPORTED_MODULE_2__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






const {
  Articles: Article
} = apis_database__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z;
class ArticleController {
  static async getOne(req, res) {
    const {
      id
    } = req.query;

    try {
      return apis_utils_helpers_response__WEBPACK_IMPORTED_MODULE_3__/* ["default"].success */ .Z.success(res, 200, {
        message: 'Articles fetched successfuly',
        data: await apis_services_articleServices__WEBPACK_IMPORTED_MODULE_0__/* ["default"].findOne */ .Z.findOne({
          id
        }, ['id', 'title', 'image', 'author_id', 'text', 'category', 'createdAt'], ['firstname', 'lastname', 'phone', 'gender'])
      });
    } catch (error) {
      return apis_utils_helpers_response__WEBPACK_IMPORTED_MODULE_3__/* ["default"].error */ .Z.error(res, 500, {
        message: 'something went wrong',
        error: error.message
      });
    }
  }

  static async getAll(req, res) {
    try {
      let {
        page = 1,
        limit = 10,
        cat
      } = req.query;
      page = Number(page);
      limit = Number(limit);
      const where = {};

      if (Number(cat)) {
        where.category = cat;
      }

      const offset = (page - 1) * limit;
      const {
        rows,
        count
      } = await apis_services_articleServices__WEBPACK_IMPORTED_MODULE_0__/* ["default"].findAndCountAll */ .Z.findAndCountAll(where, ['id', 'title', 'image', 'author_id', 'category'], ['firstname', 'lastname', 'phone', 'gender'], limit, offset);
      const pagination = (0,apis_utils_pagnation__WEBPACK_IMPORTED_MODULE_4__/* .paginate */ .V)(page, count, rows, limit);

      if (offset >= count) {
        return apis_utils_helpers_response__WEBPACK_IMPORTED_MODULE_3__/* ["default"].success */ .Z.success(res, 404, {
          message: 'page not found'
        });
      }

      return apis_utils_helpers_response__WEBPACK_IMPORTED_MODULE_3__/* ["default"].success */ .Z.success(res, 200, {
        message: 'Articles fetched successfuly',
        pagination,
        data: rows
      });
    } catch (error) {
      return apis_utils_helpers_response__WEBPACK_IMPORTED_MODULE_3__/* ["default"].error */ .Z.error(res, 500, {
        message: 'something went wrong',
        error: error.message
      });
    }
  }

  static async create(req, res) {
    try {
      const {
        fields,
        files
      } = await (0,apis_utils_libForm__WEBPACK_IMPORTED_MODULE_1__/* .parseForm */ .cG)(req);

      if (!files.media) {
        return apis_utils_helpers_response__WEBPACK_IMPORTED_MODULE_3__/* ["default"].error */ .Z.error(res, 500, {
          message: 'Please upload image'
        });
      }

      const file = files.media;
      let images = Array.isArray(file) ? file.map(f => `/uploads/${f.newFilename}`) : `/uploads/${file.newFilename}`;

      const payload = _objectSpread(_objectSpread({}, fields), {}, {
        image: images
      });

      return apis_utils_helpers_response__WEBPACK_IMPORTED_MODULE_3__/* ["default"].success */ .Z.success(res, 200, {
        message: 'Article created successfuly',
        data: await Article.create(payload)
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
      const item = await Article.findByPk(`${id}`);

      if (!item?.toJSON()) {
        return apis_utils_helpers_response__WEBPACK_IMPORTED_MODULE_3__/* ["default"].error */ .Z.error(res, 404, {
          message: 'Article is not found'
        });
      }

      const {
        fields,
        files
      } = await (0,apis_utils_libForm__WEBPACK_IMPORTED_MODULE_1__/* .parseForm */ .cG)(req);

      if (!files.media) {
        return apis_utils_helpers_response__WEBPACK_IMPORTED_MODULE_3__/* ["default"].error */ .Z.error(res, 500, {
          message: 'Please upload image'
        });
      }

      const file = files.media;
      let images = Array.isArray(file) ? file.map(f => `/uploads/${f.newFilename}`) : `/uploads/${file.newFilename}`;

      if (images) {
        (0,apis_utils_libForm__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .ZP)(item.toJSON()?.image);
      }

      const payload = _objectSpread(_objectSpread({}, fields), {}, {
        image: images
      });

      item.set(payload);
      return apis_utils_helpers_response__WEBPACK_IMPORTED_MODULE_3__/* ["default"].success */ .Z.success(res, 200, {
        message: 'Article updated successfuly',
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
      const item = await Article.findByPk(`${id}`);

      if (!item) {
        return apis_utils_helpers_response__WEBPACK_IMPORTED_MODULE_3__/* ["default"].error */ .Z.error(res, 409, {
          message: 'Article is not found'
        });
      }

      return apis_utils_helpers_response__WEBPACK_IMPORTED_MODULE_3__/* ["default"].success */ .Z.success(res, 200, {
        message: 'Articles deleted successfuly',
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

/***/ }),

/***/ 3537:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "V": () => (/* binding */ paginate)
/* harmony export */ });
/**
 * @function paginate
 * @param {number} currentPage page number to get
 * @param {number} count total number of items
 * @param {array} rows items
 * @param {number} pageLimit number of items per page/request
 * @returns {object} return the meta for pagination
 */
const paginate = (currentPage, count, rows, pageLimit = 20) => {
  const meta = {
    currentPage: Number(currentPage) || 1,
    pageCount: Math.ceil(count / Number(pageLimit)),
    pageSize: rows.length,
    count
  };
  return meta;
};

/***/ })

};
;