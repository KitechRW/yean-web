"use strict";
exports.id = 5648;
exports.ids = [5648];
exports.modules = {

/***/ 5648:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ ContactControllers)
/* harmony export */ });
/* harmony import */ var apis_services_contactServices__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3723);
/* harmony import */ var apis_utils_helpers_response__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6828);
/* harmony import */ var apis_utils_mocks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8318);
/* harmony import */ var apis_utils_sendEmail__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4340);
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
      const emailOptions = {
        email: process.env.SERVICE_USERNAME,
        from: name,
        message: await apis_utils_mocks__WEBPACK_IMPORTED_MODULE_1__/* ["default"].contact */ .Z.contact({
          name,
          email,
          message
        }),
        subject: 'New Contact'
      };
      await (0,apis_utils_sendEmail__WEBPACK_IMPORTED_MODULE_2__/* .emailSender */ .s)(emailOptions);
      await apis_services_contactServices__WEBPACK_IMPORTED_MODULE_0__/* ["default"].create */ .Z.create({
        name,
        email,
        message
      }).then(rslt => {
        return apis_utils_helpers_response__WEBPACK_IMPORTED_MODULE_3__/* ["default"].success */ .Z.success(res, 201, {
          message: 'thank you for contacting us',
          data: rslt
        });
      }).catch(error => {
        return apis_utils_helpers_response__WEBPACK_IMPORTED_MODULE_3__/* ["default"].error */ .Z.error(res, 403, {
          message: 'Fail to save this contact',
          error: error.message
        });
      });
    } catch (error) {
      return apis_utils_helpers_response__WEBPACK_IMPORTED_MODULE_3__/* ["default"].error */ .Z.error(res, 500, {
        message: 'server error',
        error: error.message
      });
    }
  }

  static async getAll(req, res) {
    try {
      await apis_services_contactServices__WEBPACK_IMPORTED_MODULE_0__/* ["default"].findAll */ .Z.findAll().then(rslt => {
        return apis_utils_helpers_response__WEBPACK_IMPORTED_MODULE_3__/* ["default"].success */ .Z.success(res, 200, {
          message: 'List of all contacts',
          data: rslt
        });
      }).catch(error => {
        return apis_utils_helpers_response__WEBPACK_IMPORTED_MODULE_3__/* ["default"].error */ .Z.error(res, 403, {
          message: 'Fail to retreive contacts',
          error: error.message
        });
      });
    } catch (error) {
      return apis_utils_helpers_response__WEBPACK_IMPORTED_MODULE_3__/* ["default"].error */ .Z.error(res, 500, {
        message: 'server error',
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
          return apis_utils_helpers_response__WEBPACK_IMPORTED_MODULE_3__/* ["default"].success */ .Z.success(res, 200, {
            message: 'this contact is not found'
          });
        }

        return apis_utils_helpers_response__WEBPACK_IMPORTED_MODULE_3__/* ["default"].success */ .Z.success(res, 200, {
          message: 'able to retreive it',
          data: rslt
        });
      }).catch(error => {
        return apis_utils_helpers_response__WEBPACK_IMPORTED_MODULE_3__/* ["default"].error */ .Z.error(res, 403, {
          message: 'Fail to retreive contacts',
          error: error.message
        });
      });
    } catch (error) {
      return apis_utils_helpers_response__WEBPACK_IMPORTED_MODULE_3__/* ["default"].error */ .Z.error(res, 500, {
        message: 'server error',
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
        return apis_utils_helpers_response__WEBPACK_IMPORTED_MODULE_3__/* ["default"].error */ .Z.error(res, 404, {
          message: 'This contact is not in system'
        });
      }

      await apis_services_contactServices__WEBPACK_IMPORTED_MODULE_0__/* ["default"].destroy */ .Z.destroy({
        id: contact_id
      }).then(rslt => {
        return apis_utils_helpers_response__WEBPACK_IMPORTED_MODULE_3__/* ["default"].success */ .Z.success(res, 200, {
          message: 'Contact deleted successfully'
        });
      }).catch(error => {
        return apis_utils_helpers_response__WEBPACK_IMPORTED_MODULE_3__/* ["default"].error */ .Z.error(res, 403, {
          message: 'Fail to retreive contacts',
          error: error.message
        });
      });
    } catch (error) {
      return apis_utils_helpers_response__WEBPACK_IMPORTED_MODULE_3__/* ["default"].error */ .Z.error(res, 500, {
        message: 'server error',
        error: error.message
      });
    }
  }

}
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 3723:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ ContactService)
/* harmony export */ });
/* harmony import */ var apis_database__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3509);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([apis_database__WEBPACK_IMPORTED_MODULE_0__]);
apis_database__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];

const {
  Contacts: Contact
} = apis_database__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z;
class ContactService {
  static create(data) {
    return Contact.create(data);
  }

  static findAll() {
    return Contact.findAll();
  }

  static findByPk(id) {
    return Contact.findByPk(id);
  }

  static update(set, conditon) {
    return Contact.update(set, {
      where: conditon
    });
  }

  static destroy(condition) {
    return Contact.destroy({
      where: condition
    });
  }

}
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;