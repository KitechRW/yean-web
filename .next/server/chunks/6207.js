"use strict";
exports.id = 6207;
exports.ids = [6207];
exports.modules = {

/***/ 6207:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "C": () => (/* binding */ isloggedIn),
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var apis_utils_jwt__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5272);
/* harmony import */ var apis_services_userServices__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8808);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([apis_services_userServices__WEBPACK_IMPORTED_MODULE_1__]);
apis_services_userServices__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


const isloggedIn = async (req, res) => {
  let token = req.headers.authorization;

  if (!token) {
    return false;
  }

  try {
    token = token.split(' ')[1];
    const decoded = (0,apis_utils_jwt__WEBPACK_IMPORTED_MODULE_0__/* .decode */ .J)(token);
    const freshUser = await apis_services_userServices__WEBPACK_IMPORTED_MODULE_1__/* ["default"].findByPk */ .Z.findByPk(decoded.id);

    if (!freshUser.status) {
      return false;
    }

    return freshUser.toJSON();
  } catch (error) {
    return false;
  }
};

const withRoles = (handler, roles, methods) => {
  return async (req, res) => {
    if (methods.includes(req.method)) {
      var _req$session$user;

      if (!roles.includes((_req$session$user = req.session.user) === null || _req$session$user === void 0 ? void 0 : _req$session$user.type)) {
        return res.status(403).json({
          success: false,
          message: 'You do not have permission to perform this action.'
        });
      }
    }

    return handler(req, res);
  };
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (withRoles);
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 8808:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ UserService)
/* harmony export */ });
/* harmony import */ var _database_models_user_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3093);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_database_models_user_model__WEBPACK_IMPORTED_MODULE_0__]);
_database_models_user_model__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];

class UserService {
  static create(data) {
    return _database_models_user_model__WEBPACK_IMPORTED_MODULE_0__/* ["default"].create */ .Z.create(data);
  }

  static findAll() {
    return _database_models_user_model__WEBPACK_IMPORTED_MODULE_0__/* ["default"].findAll */ .Z.findAll();
  }

  static findByPk(id) {
    return _database_models_user_model__WEBPACK_IMPORTED_MODULE_0__/* ["default"].findByPk */ .Z.findByPk(id);
  }

  static findByEmail(email) {
    return _database_models_user_model__WEBPACK_IMPORTED_MODULE_0__/* ["default"].findOne */ .Z.findOne({
      where: {
        email
      }
    });
  }

  static update(set, conditon) {
    return _database_models_user_model__WEBPACK_IMPORTED_MODULE_0__/* ["default"].update */ .Z.update(set, {
      where: conditon
    });
  }

  static destroy(condition) {
    return _database_models_user_model__WEBPACK_IMPORTED_MODULE_0__/* ["default"].destroy */ .Z.destroy({
      where: condition
    });
  }

}
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 5272:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "F": () => (/* binding */ signinToken),
/* harmony export */   "J": () => (/* binding */ decode)
/* harmony export */ });
/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9344);
/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jsonwebtoken__WEBPACK_IMPORTED_MODULE_0__);

const signinToken = (params, time = process.env.EXPIRES_IN || '24h', secret = process.env.JWT_SECRET) => {
  const token = jsonwebtoken__WEBPACK_IMPORTED_MODULE_0___default().sign(params, secret, {
    expiresIn: time
  });
  return token;
};
const decode = (token, secret = process.env.JWT_SECRET) => {
  const payload = jsonwebtoken__WEBPACK_IMPORTED_MODULE_0___default().verify(token, secret);
  return payload;
};

/***/ })

};
;