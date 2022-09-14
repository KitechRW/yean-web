"use strict";
(() => {
var exports = {};
exports.id = 8671;
exports.ids = [8671];
exports.modules = {

/***/ 5142:
/***/ ((module) => {

module.exports = require("dotenv");

/***/ }),

/***/ 8210:
/***/ ((module) => {

module.exports = import("sequelize");;

/***/ }),

/***/ 9008:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ SubscriberController)
/* harmony export */ });
/* harmony import */ var apis_services_subscriberSrvices__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5689);
/* harmony import */ var apis_utils_helpers_response__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9620);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([apis_services_subscriberSrvices__WEBPACK_IMPORTED_MODULE_0__]);
apis_services_subscriberSrvices__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


class SubscriberController {
  static async subscribe(req, res) {
    try {
      let {
        email
      } = req.body;
      email = email.toLowerCase();
      const emailExist = await apis_services_subscriberSrvices__WEBPACK_IMPORTED_MODULE_0__/* ["default"].findByEmail */ .Z.findByEmail(email);

      if (emailExist) {
        return apis_utils_helpers_response__WEBPACK_IMPORTED_MODULE_1__/* ["default"].error */ .Z.error(res, 401, {
          message: "email is already subscribed"
        });
      }

      await apis_services_subscriberSrvices__WEBPACK_IMPORTED_MODULE_0__/* ["default"].create */ .Z.create({
        email
      }).then(reslt => {
        return apis_utils_helpers_response__WEBPACK_IMPORTED_MODULE_1__/* ["default"].success */ .Z.success(res, 201, {
          message: "You subscribed successfull",
          data: reslt
        });
      }).catch(error => {
        return apis_utils_helpers_response__WEBPACK_IMPORTED_MODULE_1__/* ["default"].error */ .Z.error(res, 403, {
          message: "You failed to be our subscriber",
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

  static async unSubscrible(req, res) {
    try {
      let {
        email
      } = req.body;
      email = email.toLowerCase();
      const emailExist = await apis_services_subscriberSrvices__WEBPACK_IMPORTED_MODULE_0__/* ["default"].findByEmail */ .Z.findByEmail(email);

      if (!emailExist) {
        return apis_utils_helpers_response__WEBPACK_IMPORTED_MODULE_1__/* ["default"].error */ .Z.error(res, 404, {
          message: "email is not subscribed before"
        });
      }

      await apis_services_subscriberSrvices__WEBPACK_IMPORTED_MODULE_0__/* ["default"].destroy */ .Z.destroy({
        email
      }).then(rslt => {
        return apis_utils_helpers_response__WEBPACK_IMPORTED_MODULE_1__/* ["default"].success */ .Z.success(res, 200, {
          message: "User unsuscribed successful"
        });
      }).catch(error => {
        return apis_utils_helpers_response__WEBPACK_IMPORTED_MODULE_1__/* ["default"].error */ .Z.error(res, 403, {
          message: "We fail to unsubscriber you",
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

  static async getAllSubscribers(req, res) {
    try {
      await apis_services_subscriberSrvices__WEBPACK_IMPORTED_MODULE_0__/* ["default"].findAll */ .Z.findAll().then(rsp => {
        return apis_utils_helpers_response__WEBPACK_IMPORTED_MODULE_1__/* ["default"].success */ .Z.success(res, 200, {
          message: "List of All Subscribers",
          data: rsp
        });
      }).catch(error => {
        return apis_utils_helpers_response__WEBPACK_IMPORTED_MODULE_1__/* ["default"].error */ .Z.error(res, 403, {
          message: "Failed to retreive all subscribers",
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

/***/ 5689:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ SubscribeService)
/* harmony export */ });
/* harmony import */ var apis_database__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1748);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([apis_database__WEBPACK_IMPORTED_MODULE_0__]);
apis_database__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];

const {
  Subscribes: Subscribe
} = apis_database__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z;
class SubscribeService {
  static create(data) {
    return Subscribe.create(data);
  }

  static findAll() {
    return Subscribe.findAll();
  }

  static findByPk(id) {
    return Subscribe.findByPk(id);
  }

  static findByEmail(email) {
    return Subscribe.findOne({
      where: {
        email
      }
    });
  }

  static update(set, conditon) {
    return Subscribe.update(set, {
      where: conditon
    });
  }

  static destroy(condition) {
    return Subscribe.destroy({
      where: condition
    });
  }

}
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 9025:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ handler)
/* harmony export */ });
/* harmony import */ var apis_restful_controllers_SubscriberControllers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9008);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([apis_restful_controllers_SubscriberControllers__WEBPACK_IMPORTED_MODULE_0__]);
apis_restful_controllers_SubscriberControllers__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];

function handler(req, res) {
  if (req.method === 'POST') {
    apis_restful_controllers_SubscriberControllers__WEBPACK_IMPORTED_MODULE_0__/* ["default"].subscribe */ .Z.subscribe(req, res);
  } else if (req.method === 'GET') {
    apis_restful_controllers_SubscriberControllers__WEBPACK_IMPORTED_MODULE_0__/* ["default"].getAllSubscribers */ .Z.getAllSubscribers(req, res);
  } else if (req.method === 'DELETE') {
    apis_restful_controllers_SubscriberControllers__WEBPACK_IMPORTED_MODULE_0__/* ["default"].unSubscrible */ .Z.unSubscrible(req, res);
  } else {
    // Handle any other HTTP method
    return res.status(404).send('404 page not found');
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
var __webpack_exports__ = __webpack_require__.X(0, [1075], () => (__webpack_exec__(9025)));
module.exports = __webpack_exports__;

})();