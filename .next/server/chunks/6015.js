"use strict";
exports.id = 6015;
exports.ids = [6015];
exports.modules = {

/***/ 6015:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ LibraryController)
/* harmony export */ });
/* harmony import */ var apis_utils_helpers_response__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(6828);
/* harmony import */ var apis_services_libraryServices__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1841);
/* harmony import */ var apis_utils_libForm__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6969);
/* harmony import */ var apis_utils_pagnation__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(3537);
/* harmony import */ var apis_utils_constants_keys__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5810);
/* harmony import */ var stream__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2781);
/* harmony import */ var stream__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(stream__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var util__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(3837);
/* harmony import */ var util__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(util__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var node_fetch__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6544);
/* harmony import */ var apis_database__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(3509);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([apis_services_libraryServices__WEBPACK_IMPORTED_MODULE_0__, node_fetch__WEBPACK_IMPORTED_MODULE_5__, apis_database__WEBPACK_IMPORTED_MODULE_6__]);
([apis_services_libraryServices__WEBPACK_IMPORTED_MODULE_0__, node_fetch__WEBPACK_IMPORTED_MODULE_5__, apis_database__WEBPACK_IMPORTED_MODULE_6__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }










const {
  Libraries: Library
} = apis_database__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z;
class LibraryController {
  static async getOne(req, res) {
    const {
      id
    } = req.query;

    try {
      return apis_utils_helpers_response__WEBPACK_IMPORTED_MODULE_7__/* ["default"].success */ .Z.success(res, 200, {
        message: 'Librarys fetched successfuly',
        data: await Library.findByPk(`${id}`)
      });
    } catch (error) {
      return apis_utils_helpers_response__WEBPACK_IMPORTED_MODULE_7__/* ["default"].error */ .Z.error(res, 500, {
        message: 'something went wrong'
      });
    }
  }

  static async getAll(req, res) {
    try {
      let {
        page = 1,
        limit = 20
      } = req.query;
      page = Number(page);
      limit = Number(limit);
      const offset = (page - 1) * limit;
      const {
        rows,
        count
      } = await apis_services_libraryServices__WEBPACK_IMPORTED_MODULE_0__/* ["default"].findAndCountAll */ .Z.findAndCountAll(undefined, undefined, limit, offset);
      const pagination = (0,apis_utils_pagnation__WEBPACK_IMPORTED_MODULE_8__/* .paginate */ .V)(page, count, rows, limit);

      if (offset >= count) {
        return apis_utils_helpers_response__WEBPACK_IMPORTED_MODULE_7__/* ["default"].success */ .Z.success(res, 404, {
          message: 'page not found'
        });
      }

      return apis_utils_helpers_response__WEBPACK_IMPORTED_MODULE_7__/* ["default"].success */ .Z.success(res, 200, {
        message: 'Librarys fetched successfuly',
        pagination,
        data: {
          rows
        }
      });
    } catch (error) {
      console.log(error);
      return apis_utils_helpers_response__WEBPACK_IMPORTED_MODULE_7__/* ["default"].error */ .Z.error(res, 500, {
        message: 'something went wrong'
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
        return apis_utils_helpers_response__WEBPACK_IMPORTED_MODULE_7__/* ["default"].error */ .Z.error(res, 500, {
          message: 'Please upload book'
        });
      }

      const file = files.media;
      let images = Array.isArray(file) ? file.map(f => `/uploads/${f.newFilename}`) : `/uploads/${file.newFilename}`;

      const payload = _objectSpread(_objectSpread({}, fields), {}, {
        link: images
      });

      return apis_utils_helpers_response__WEBPACK_IMPORTED_MODULE_7__/* ["default"].success */ .Z.success(res, 200, {
        message: 'Library created successfuly',
        data: await Library.create(payload)
      });
    } catch (error) {
      return apis_utils_helpers_response__WEBPACK_IMPORTED_MODULE_7__/* ["default"].error */ .Z.error(res, 500, {
        message: 'something went wrong'
      });
    }
  }

  static async update(req, res) {
    const {
      id
    } = req.query;

    try {
      const item = await Library.findByPk(`${id}`);

      if (!item?.toJSON()) {
        return apis_utils_helpers_response__WEBPACK_IMPORTED_MODULE_7__/* ["default"].error */ .Z.error(res, 404, {
          message: 'Library is not found'
        });
      }

      const {
        fields,
        files
      } = await (0,apis_utils_libForm__WEBPACK_IMPORTED_MODULE_1__/* .parseForm */ .cG)(req);

      if (!files.media) {
        return apis_utils_helpers_response__WEBPACK_IMPORTED_MODULE_7__/* ["default"].error */ .Z.error(res, 500, {
          message: 'Please upload book'
        });
      }

      const file = files.media;
      let images = Array.isArray(file) ? file.map(f => `/uploads/${f.newFilename}`) : `/uploads/${file.newFilename}`;

      if (images) {
        (0,apis_utils_libForm__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .ZP)(item.toJSON()?.image);
      }

      const payload = _objectSpread(_objectSpread({}, fields), {}, {
        link: images
      });

      item.set(payload);
      return apis_utils_helpers_response__WEBPACK_IMPORTED_MODULE_7__/* ["default"].success */ .Z.success(res, 200, {
        message: 'Library updated successfuly',
        data: await item.save()
      });
    } catch (error) {
      return apis_utils_helpers_response__WEBPACK_IMPORTED_MODULE_7__/* ["default"].error */ .Z.error(res, 500, {
        message: 'something went wrong'
      });
    }
  }

  static async delete(req, res) {
    const {
      id
    } = req.query;

    try {
      const item = await Library.findByPk(`${id}`);

      if (!item) {
        return apis_utils_helpers_response__WEBPACK_IMPORTED_MODULE_7__/* ["default"].error */ .Z.error(res, 409, {
          message: 'Library is not found'
        });
      }

      return apis_utils_helpers_response__WEBPACK_IMPORTED_MODULE_7__/* ["default"].success */ .Z.success(res, 200, {
        message: 'Librarys deleted successfuly',
        data: await item.destroy()
      });
    } catch (error) {
      return apis_utils_helpers_response__WEBPACK_IMPORTED_MODULE_7__/* ["default"].error */ .Z.error(res, 500, {
        message: 'something went wrong'
      });
    }
  }

  static async downloadFile(req, res) {
    try {
      // const url = `${Keys.HOST}/uploads/media-1661364328169-412504610.pdf`;
      let {
        link,
        name
      } = req.body;

      if (!link.startsWith('/uploads/')) {
        link = `/uploads/${link}`;
        console.log('string starts with /uploads/');
      }

      const url = `${apis_utils_constants_keys__WEBPACK_IMPORTED_MODULE_2__/* ["default"].HOST */ .Z.HOST}${link}`;
      const pipeline = (0,util__WEBPACK_IMPORTED_MODULE_4__.promisify)((stream__WEBPACK_IMPORTED_MODULE_3___default().pipeline));
      const response = await (0,node_fetch__WEBPACK_IMPORTED_MODULE_5__["default"])(url);
      if (!response.ok) throw new Error(`unexpected response ${response.statusText}`);
      res.setHeader('Content-Type', 'application/pdf');
      res.setHeader('Content-Disposition', `attachment; filename=${name}.pdf`);
      await pipeline(response.body, res);
      return apis_utils_helpers_response__WEBPACK_IMPORTED_MODULE_7__/* ["default"].error */ .Z.error(res, 201, {
        message: 'File downloaded successfully'
      });
    } catch (error) {
      return apis_utils_helpers_response__WEBPACK_IMPORTED_MODULE_7__/* ["default"].error */ .Z.error(res, 500, {
        message: 'something went wrong',
        error: error.message
      });
    }
  }

  static async readFile(req, res) {
    try {
      // const url = `${Keys.HOST}/uploads/media-1661364328169-412504610.pdf`;
      let {
        link
      } = req.body;
      const linkFound = await apis_services_libraryServices__WEBPACK_IMPORTED_MODULE_0__/* ["default"].findByCondition */ .Z.findByCondition({
        link
      });

      if (!linkFound) {
        return apis_utils_helpers_response__WEBPACK_IMPORTED_MODULE_7__/* ["default"].error */ .Z.error(res, 404, {
          message: "this book is not found"
        });
      }

      if (!link.startsWith('/uploads/')) {
        link = `/uploads/${link}`;
        console.log('string starts with /uploads/');
      }

      const url = `${apis_utils_constants_keys__WEBPACK_IMPORTED_MODULE_2__/* ["default"].HOST */ .Z.HOST}${link}`;
      return apis_utils_helpers_response__WEBPACK_IMPORTED_MODULE_7__/* ["default"].error */ .Z.error(res, 201, {
        message: 'Book retreived successfully',
        data: {
          url
        }
      });
    } catch (error) {
      return apis_utils_helpers_response__WEBPACK_IMPORTED_MODULE_7__/* ["default"].error */ .Z.error(res, 500, {
        message: 'something went wrong',
        error: error.message
      });
    }
  }

}
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 1841:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ LibraryServices)
/* harmony export */ });
/* harmony import */ var apis_database__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3509);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([apis_database__WEBPACK_IMPORTED_MODULE_0__]);
apis_database__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];

const {
  Libraries: Library
} = apis_database__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z;
class LibraryServices {
  static create(data) {
    return Library.create(data);
  }

  static findAll() {
    return Library.findAll({
      order: [['id', 'DESC']]
    });
  }

  static async findAndCountAll(where, attributes, limit, offset) {
    const {
      count,
      rows
    } = await Library.findAndCountAll({
      attributes,
      where,
      limit,
      offset,
      order: [['id', 'DESC']]
    });
    return {
      count,
      rows
    };
  }

  static findByPk(id) {
    return Library.findByPk(id);
  }

  static update(set, conditon) {
    return Library.update(set, {
      where: conditon,
      returning: true
    });
  }

  static destroy(condition) {
    return Library.destroy({
      where: condition
    });
  }

  static findByCondition(condition) {
    return Library.findOne({
      where: condition
    });
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