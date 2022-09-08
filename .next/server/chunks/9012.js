"use strict";
exports.id = 9012;
exports.ids = [9012];
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

/***/ 7019:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var sequelize__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8210);
/* harmony import */ var _config_sequelize__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9838);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([sequelize__WEBPACK_IMPORTED_MODULE_0__, _config_sequelize__WEBPACK_IMPORTED_MODULE_1__]);
([sequelize__WEBPACK_IMPORTED_MODULE_0__, _config_sequelize__WEBPACK_IMPORTED_MODULE_1__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);


const Contact = _config_sequelize__WEBPACK_IMPORTED_MODULE_1__/* ["default"].define */ .Z.define('Contact', {
  name: sequelize__WEBPACK_IMPORTED_MODULE_0__.DataTypes.STRING,
  email: sequelize__WEBPACK_IMPORTED_MODULE_0__.DataTypes.STRING,
  message: sequelize__WEBPACK_IMPORTED_MODULE_0__.DataTypes.TEXT
}, {
  tableName: 'contacts',
  timestamps: true
});

(async () => {
  await _config_sequelize__WEBPACK_IMPORTED_MODULE_1__/* ["default"].sync */ .Z.sync({
    alter: true
  });
})();

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Contact);
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 9012:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ ContactControllers)
/* harmony export */ });
/* harmony import */ var apis_services_contactServices__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(488);
/* harmony import */ var apis_utils_helpers_response__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9620);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([apis_services_contactServices__WEBPACK_IMPORTED_MODULE_0__]);
apis_services_contactServices__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


class ContactControllers {
  static async create(req, res) {
    try {
      let {
        name,
        email,
        message
      } = req.body;
      await apis_services_contactServices__WEBPACK_IMPORTED_MODULE_0__/* ["default"].create */ .Z.create({
        name,
        email,
        message
      }).then(rslt => {
        return apis_utils_helpers_response__WEBPACK_IMPORTED_MODULE_1__/* ["default"].success */ .Z.success(res, 201, {
          message: "thank you for contacting us",
          data: rslt
        });
      }).catch(error => {
        return apis_utils_helpers_response__WEBPACK_IMPORTED_MODULE_1__/* ["default"].error */ .Z.error(res, 403, {
          message: "Fail to save this contact",
          error: error.message
        });
      });
    } catch (error) {
      return apis_utils_helpers_response__WEBPACK_IMPORTED_MODULE_1__/* ["default"].error */ .Z.error(res, 500, {
        message: "server error",
        error: error.message
      });
    }
  }

  static async getAll(req, res) {
    try {
      await apis_services_contactServices__WEBPACK_IMPORTED_MODULE_0__/* ["default"].findAll */ .Z.findAll().then(rslt => {
        return apis_utils_helpers_response__WEBPACK_IMPORTED_MODULE_1__/* ["default"].success */ .Z.success(res, 200, {
          message: "List of all contacts",
          data: rslt
        });
      }).catch(error => {
        return apis_utils_helpers_response__WEBPACK_IMPORTED_MODULE_1__/* ["default"].error */ .Z.error(res, 403, {
          message: "Fail to retreive contacts",
          error: error.message
        });
      });
    } catch (error) {
      return apis_utils_helpers_response__WEBPACK_IMPORTED_MODULE_1__/* ["default"].error */ .Z.error(res, 500, {
        message: "server error",
        error: error.message
      });
    }
  }

  static async getOne(req, res) {
    try {
      const {
        contact_id
      } = req.query;
      await apis_services_contactServices__WEBPACK_IMPORTED_MODULE_0__/* ["default"].findByPk */ .Z.findByPk(contact_id).then(rslt => {
        if (!rslt) {
          return apis_utils_helpers_response__WEBPACK_IMPORTED_MODULE_1__/* ["default"].success */ .Z.success(res, 200, {
            message: "this contact is not found"
          });
        }

        return apis_utils_helpers_response__WEBPACK_IMPORTED_MODULE_1__/* ["default"].success */ .Z.success(res, 200, {
          message: "able to retreive it",
          data: rslt
        });
      }).catch(error => {
        return apis_utils_helpers_response__WEBPACK_IMPORTED_MODULE_1__/* ["default"].error */ .Z.error(res, 403, {
          message: "Fail to retreive contacts",
          error: error.message
        });
      });
    } catch (error) {
      return apis_utils_helpers_response__WEBPACK_IMPORTED_MODULE_1__/* ["default"].error */ .Z.error(res, 500, {
        message: "server error",
        error: error.message
      });
    }
  }

  static async delete(req, res) {
    try {
      const {
        contact_id
      } = req.query;
      const isContactExist = await apis_services_contactServices__WEBPACK_IMPORTED_MODULE_0__/* ["default"].findByPk */ .Z.findByPk(contact_id);

      if (!isContactExist) {
        return apis_utils_helpers_response__WEBPACK_IMPORTED_MODULE_1__/* ["default"].error */ .Z.error(res, 404, {
          message: "This contact is not in system"
        });
      }

      await apis_services_contactServices__WEBPACK_IMPORTED_MODULE_0__/* ["default"].destroy */ .Z.destroy({
        id: contact_id
      }).then(rslt => {
        return apis_utils_helpers_response__WEBPACK_IMPORTED_MODULE_1__/* ["default"].success */ .Z.success(res, 200, {
          message: "Contact deleted successfully"
        });
      }).catch(error => {
        return apis_utils_helpers_response__WEBPACK_IMPORTED_MODULE_1__/* ["default"].error */ .Z.error(res, 403, {
          message: "Fail to retreive contacts",
          error: error.message
        });
      });
    } catch (error) {
      return apis_utils_helpers_response__WEBPACK_IMPORTED_MODULE_1__/* ["default"].error */ .Z.error(res, 500, {
        message: "server error",
        error: error.message
      });
    }
  }

}
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 488:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ ContactService)
/* harmony export */ });
/* harmony import */ var apis_database_models_contact_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7019);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([apis_database_models_contact_model__WEBPACK_IMPORTED_MODULE_0__]);
apis_database_models_contact_model__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];

class ContactService {
  static create(data) {
    return apis_database_models_contact_model__WEBPACK_IMPORTED_MODULE_0__/* ["default"].create */ .Z.create(data);
  }

  static findAll() {
    return apis_database_models_contact_model__WEBPACK_IMPORTED_MODULE_0__/* ["default"].findAll */ .Z.findAll();
  }

  static findByPk(id) {
    return apis_database_models_contact_model__WEBPACK_IMPORTED_MODULE_0__/* ["default"].findByPk */ .Z.findByPk(id);
  }

  static update(set, conditon) {
    return apis_database_models_contact_model__WEBPACK_IMPORTED_MODULE_0__/* ["default"].update */ .Z.update(set, {
      where: conditon
    });
  }

  static destroy(condition) {
    return apis_database_models_contact_model__WEBPACK_IMPORTED_MODULE_0__/* ["default"].destroy */ .Z.destroy({
      where: condition
    });
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