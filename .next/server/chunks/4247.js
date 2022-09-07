"use strict";
exports.id = 4247;
exports.ids = [4247];
exports.modules = {

/***/ 9838:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* unused harmony export sequelize */
/* harmony import */ var sequelize__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8210);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([sequelize__WEBPACK_IMPORTED_MODULE_0__]);
sequelize__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];

const sequelize = new sequelize__WEBPACK_IMPORTED_MODULE_0__.Sequelize(`${process.env.DATABASE_URL}`, {
  logging: false,
  dialect: 'mysql' // dialectOptions: {
  //   ssl: {
  //     require: true,
  //     rejectUnauthorized: false,
  //   },
  // },

});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (sequelize);
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 8047:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var sequelize__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8210);
/* harmony import */ var _config_sequelize__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9838);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([sequelize__WEBPACK_IMPORTED_MODULE_0__, _config_sequelize__WEBPACK_IMPORTED_MODULE_1__]);
([sequelize__WEBPACK_IMPORTED_MODULE_0__, _config_sequelize__WEBPACK_IMPORTED_MODULE_1__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);


const Partner = _config_sequelize__WEBPACK_IMPORTED_MODULE_1__/* ["default"].define */ .Z.define('Partner', {
  companyName: sequelize__WEBPACK_IMPORTED_MODULE_0__.DataTypes.STRING,
  portfolio: sequelize__WEBPACK_IMPORTED_MODULE_0__.DataTypes.STRING,
  email: sequelize__WEBPACK_IMPORTED_MODULE_0__.DataTypes.STRING,
  phone: sequelize__WEBPACK_IMPORTED_MODULE_0__.DataTypes.STRING,
  address: sequelize__WEBPACK_IMPORTED_MODULE_0__.DataTypes.STRING,
  message: sequelize__WEBPACK_IMPORTED_MODULE_0__.DataTypes.TEXT,
  image: sequelize__WEBPACK_IMPORTED_MODULE_0__.DataTypes.STRING,
  confirmed: {
    type: sequelize__WEBPACK_IMPORTED_MODULE_0__.DataTypes.BOOLEAN,
    defaultValue: false
  }
}, {
  tableName: 'tbl_partner',
  timestamps: false
});

(async () => {
  await _config_sequelize__WEBPACK_IMPORTED_MODULE_1__/* ["default"].sync */ .Z.sync({
    alter: true
  });
})();

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Partner);
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 4247:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ PartnerController)
/* harmony export */ });
/* harmony import */ var apis_utils_helpers_response__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9620);
/* harmony import */ var apis_database_models_partner_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8047);
/* harmony import */ var apis_utils_libForm__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3122);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([apis_database_models_partner_model__WEBPACK_IMPORTED_MODULE_0__]);
apis_database_models_partner_model__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




class PartnerController {
  static async getOne(req, res) {
    const {
      id
    } = req.query;

    try {
      return apis_utils_helpers_response__WEBPACK_IMPORTED_MODULE_2__/* ["default"].success */ .Z.success(res, 200, {
        message: 'Partners fetched successfuly',
        data: await apis_database_models_partner_model__WEBPACK_IMPORTED_MODULE_0__/* ["default"].findByPk */ .Z.findByPk(`${id}`)
      });
    } catch (error) {
      return apis_utils_helpers_response__WEBPACK_IMPORTED_MODULE_2__/* ["default"].error */ .Z.error(res, 500, {
        message: 'something went wrong'
      });
    }
  }

  static async getAll(req, res) {
    try {
      return apis_utils_helpers_response__WEBPACK_IMPORTED_MODULE_2__/* ["default"].success */ .Z.success(res, 200, {
        message: 'Partners fetched successfuly',
        data: await apis_database_models_partner_model__WEBPACK_IMPORTED_MODULE_0__/* ["default"].findAndCountAll */ .Z.findAndCountAll()
      });
    } catch (error) {
      return apis_utils_helpers_response__WEBPACK_IMPORTED_MODULE_2__/* ["default"].error */ .Z.error(res, 500, {
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
        return apis_utils_helpers_response__WEBPACK_IMPORTED_MODULE_2__/* ["default"].error */ .Z.error(res, 500, {
          message: 'Please upload image'
        });
      }

      const file = files.media;
      let images = Array.isArray(file) ? file.map(f => `/uploads/${f.newFilename}`) : `/uploads/${file.newFilename}`;

      const payload = _objectSpread(_objectSpread({}, fields), {}, {
        image: images
      });

      return apis_utils_helpers_response__WEBPACK_IMPORTED_MODULE_2__/* ["default"].success */ .Z.success(res, 200, {
        message: 'Partner created successfuly',
        data: await apis_database_models_partner_model__WEBPACK_IMPORTED_MODULE_0__/* ["default"].create */ .Z.create(payload)
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
      const item = await apis_database_models_partner_model__WEBPACK_IMPORTED_MODULE_0__/* ["default"].findByPk */ .Z.findByPk(`${id}`);

      if (!(item !== null && item !== void 0 && item.toJSON())) {
        return apis_utils_helpers_response__WEBPACK_IMPORTED_MODULE_2__/* ["default"].error */ .Z.error(res, 404, {
          message: 'Partner is not found'
        });
      }

      const {
        fields,
        files
      } = await (0,apis_utils_libForm__WEBPACK_IMPORTED_MODULE_1__/* .parseForm */ .cG)(req);

      if (!files.media) {
        return apis_utils_helpers_response__WEBPACK_IMPORTED_MODULE_2__/* ["default"].error */ .Z.error(res, 500, {
          message: 'Please upload image'
        });
      }

      const file = files.media;
      let images = Array.isArray(file) ? file.map(f => `/uploads/${f.newFilename}`) : `/uploads/${file.newFilename}`;

      if (images) {
        var _item$toJSON;

        (0,apis_utils_libForm__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .ZP)((_item$toJSON = item.toJSON()) === null || _item$toJSON === void 0 ? void 0 : _item$toJSON.image);
      }

      const payload = _objectSpread(_objectSpread({}, fields), {}, {
        image: images
      });

      item.set(payload);
      return apis_utils_helpers_response__WEBPACK_IMPORTED_MODULE_2__/* ["default"].success */ .Z.success(res, 200, {
        message: 'Partner updated successfuly',
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
      const item = await apis_database_models_partner_model__WEBPACK_IMPORTED_MODULE_0__/* ["default"].findByPk */ .Z.findByPk(`${id}`);

      if (!item) {
        return apis_utils_helpers_response__WEBPACK_IMPORTED_MODULE_2__/* ["default"].error */ .Z.error(res, 409, {
          message: 'Partner is not found'
        });
      }

      return apis_utils_helpers_response__WEBPACK_IMPORTED_MODULE_2__/* ["default"].success */ .Z.success(res, 200, {
        message: 'Partners deleted successfuly',
        data: await item.destroy()
      });
    } catch (error) {
      return apis_utils_helpers_response__WEBPACK_IMPORTED_MODULE_2__/* ["default"].error */ .Z.error(res, 500, {
        message: 'something went wrong'
      });
    }
  }

  static async request(req, res) {
    try {
      const {
        companyName,
        email,
        phone,
        address,
        message
      } = req.body;
      await apis_database_models_partner_model__WEBPACK_IMPORTED_MODULE_0__/* ["default"].create */ .Z.create({
        companyName,
        email,
        phone,
        address,
        message
      }).then(resp => {
        return apis_utils_helpers_response__WEBPACK_IMPORTED_MODULE_2__/* ["default"].success */ .Z.success(res, 201, {
          message: "request sent successfully",
          data: resp
        });
      }).catch(error => {
        return apis_utils_helpers_response__WEBPACK_IMPORTED_MODULE_2__/* ["default"].error */ .Z.error(res, 403, {
          message: "Something failed",
          error: error.message
        });
      });
    } catch (error) {
      return apis_utils_helpers_response__WEBPACK_IMPORTED_MODULE_2__/* ["default"].error */ .Z.error(res, 500, {
        message: 'server error',
        error: error.message
      });
    }
  }

}
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 9620:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ Response)
/* harmony export */ });
class Response {
  static error(res, status, error) {
    return res.status(status).json(error);
  }

  static success(res, status, data) {
    return res.status(status).json(data);
  }

}

/***/ })

};
;