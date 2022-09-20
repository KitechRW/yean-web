"use strict";
exports.id = 4115;
exports.ids = [4115];
exports.modules = {

/***/ 8466:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "C": () => (/* binding */ isloggedIn),
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var apis_utils_jwt__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4724);
/* harmony import */ var apis_services_userServices__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3496);
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
      if (!roles.includes(req.session.user?.type)) {
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

/***/ 3496:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ UserService)
/* harmony export */ });
/* harmony import */ var apis_database__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3509);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([apis_database__WEBPACK_IMPORTED_MODULE_0__]);
apis_database__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];

const {
  Users: User
} = apis_database__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z;
class UserService {
  static create(data) {
    return User.create(data);
  }

  static findAll() {
    return User.findAll();
  }

  static findByPk(id) {
    return User.findByPk(id);
  }

  static findByEmail(email) {
    return User.findOne({
      where: {
        email
      }
    });
  }

  static update(set, conditon) {
    return User.update(set, {
      where: conditon
    });
  }

  static destroy(condition) {
    return User.destroy({
      where: condition
    });
  }

}
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 4724:
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