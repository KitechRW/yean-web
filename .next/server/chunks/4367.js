"use strict";
exports.id = 4367;
exports.ids = [4367];
exports.modules = {

/***/ 4367:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ AuthController)
/* harmony export */ });
/* harmony import */ var _services_userServices__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3496);
/* harmony import */ var bcryptjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8432);
/* harmony import */ var bcryptjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(bcryptjs__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var apis_utils_jwt__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4724);
/* harmony import */ var apis_utils_helpers_response__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(6828);
/* harmony import */ var apis_utils_sendEmail__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4340);
/* harmony import */ var apis_utils_mocks__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(8318);
/* harmony import */ var _middlewares_auth__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(8466);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_services_userServices__WEBPACK_IMPORTED_MODULE_0__, _middlewares_auth__WEBPACK_IMPORTED_MODULE_5__]);
([_services_userServices__WEBPACK_IMPORTED_MODULE_0__, _middlewares_auth__WEBPACK_IMPORTED_MODULE_5__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }








class AuthController {
  /**
   * Create user account
   * @param {Request} req Request
   * @param {Response} res Response
   */
  static async signUp(req, res) {
    const newUser = req.body;

    try {
      newUser.email = newUser.email.toLowerCase();
      const userExist = await _services_userServices__WEBPACK_IMPORTED_MODULE_0__/* ["default"].findByEmail */ .Z.findByEmail(newUser.email);

      if (userExist) {
        return apis_utils_helpers_response__WEBPACK_IMPORTED_MODULE_6__/* ["default"].error */ .Z.error(res, 400, {
          message: 'user exists'
        });
      }

      newUser.password = await bcryptjs__WEBPACK_IMPORTED_MODULE_1___default().hash(newUser.password, 12);
      const user = await _services_userServices__WEBPACK_IMPORTED_MODULE_0__/* ["default"].create */ .Z.create(newUser); // const user = user.toJSON();

      const userData = {
        id: user.id,
        email: user.email
      };
      const token = (0,apis_utils_jwt__WEBPACK_IMPORTED_MODULE_2__/* .signinToken */ .F)(userData);
      const emailOptions = {
        email: user.email,
        message: await apis_utils_mocks__WEBPACK_IMPORTED_MODULE_4__/* ["default"].verifyAccount */ .Z.verifyAccount(_objectSpread(_objectSpread({}, userData), {}, {
          token
        })),
        subject: 'Account Verification Link'
      };
      await (0,apis_utils_sendEmail__WEBPACK_IMPORTED_MODULE_3__/* .emailSender */ .s)(emailOptions);
      return apis_utils_helpers_response__WEBPACK_IMPORTED_MODULE_6__/* ["default"].success */ .Z.success(res, 201, {
        message: `Dear ${user.email}, verify your email`,
        user: userData,
        token
      });
    } catch (error) {
      return apis_utils_helpers_response__WEBPACK_IMPORTED_MODULE_6__/* ["default"].error */ .Z.error(res, 500, {
        error: error.message,
        message: 'something went wrong'
      });
    }
  } //   /**
  //    * User signin
  //    * @param {Request} req Request
  //  * @param {Response} res Response
  //  */


  static async signIn(req, res) {
    const {
      email,
      password
    } = req.body;

    try {
      let user = await _services_userServices__WEBPACK_IMPORTED_MODULE_0__/* ["default"].findByEmail */ .Z.findByEmail(email);

      if (!user) {
        return apis_utils_helpers_response__WEBPACK_IMPORTED_MODULE_6__/* ["default"].error */ .Z.error(res, 404, {
          message: 'Invalid username or password'
        });
      }

      const foundUser = user.toJSON();
      const isEqual = await bcryptjs__WEBPACK_IMPORTED_MODULE_1___default().compare(password, foundUser.password);

      if (!isEqual) {
        return apis_utils_helpers_response__WEBPACK_IMPORTED_MODULE_6__/* ["default"].error */ .Z.error(res, 404, {
          message: 'Invalid username or password'
        });
      }

      if (!foundUser.active) {
        return apis_utils_helpers_response__WEBPACK_IMPORTED_MODULE_6__/* ["default"].error */ .Z.error(res, 400, {
          message: 'email is not verified',
          active: foundUser.active
        });
      }

      user.status = 1; // update login status

      user = await user.save();
      const inUser = user.toJSON();
      const userData = {
        id: inUser.id,
        email: inUser.email,
        type: inUser.type
      };
      const token = (0,apis_utils_jwt__WEBPACK_IMPORTED_MODULE_2__/* .signinToken */ .F)(userData);
      req.session.user = userData;
      req.session.token = token;
      await req.session.save();
      return apis_utils_helpers_response__WEBPACK_IMPORTED_MODULE_6__/* ["default"].success */ .Z.success(res, 200, {
        message: 'login successfully',
        user: userData,
        token
      });
    } catch (error) {
      const message = error ? error.message : 'something went wrong';
      return apis_utils_helpers_response__WEBPACK_IMPORTED_MODULE_6__/* ["default"].error */ .Z.error(res, 500, {
        message
      });
    }
  }
  /**
   * Confirm user account
   * @param {Request} req Request
   * @param {Response} res Response
   */


  static async confirmAccount(req, res) {
    const {
      token
    } = req.body;

    try {
      const decodedToken = (0,apis_utils_jwt__WEBPACK_IMPORTED_MODULE_2__/* .decode */ .J)(token);
      console.log(decodedToken);

      if (!decodedToken) {
        return apis_utils_helpers_response__WEBPACK_IMPORTED_MODULE_6__/* ["default"].error */ .Z.error(res, 400, {
          message: 'Your verification link may have expired.'
        });
      }

      const user = await _services_userServices__WEBPACK_IMPORTED_MODULE_0__/* ["default"].findByPk */ .Z.findByPk(decodedToken.id);

      if (!user) {
        return apis_utils_helpers_response__WEBPACK_IMPORTED_MODULE_6__/* ["default"].error */ .Z.error(res, 401, {
          message: 'user not found, signup first'
        });
      }

      const foundUser = user.toJSON();

      if (foundUser.active) {
        return apis_utils_helpers_response__WEBPACK_IMPORTED_MODULE_6__/* ["default"].success */ .Z.success(res, 200, {
          message: 'user verified, login',
          user: {
            active: true
          }
        });
      }

      user.active = true;
      await user.save();
      return apis_utils_helpers_response__WEBPACK_IMPORTED_MODULE_6__/* ["default"].success */ .Z.success(res, 200, {
        message: 'verified successfully',
        user: {
          active: true
        }
      });
    } catch (err) {
      const message = err.message || 'something went wrong';
      return apis_utils_helpers_response__WEBPACK_IMPORTED_MODULE_6__/* ["default"].error */ .Z.error(res, 500, {
        message
      });
    }
  }
  /**
   * User logout
   * @param {Request} req Request
   * @param {Response} res Response
   */


  static async logout(req, res) {
    const isLogged = await (0,_middlewares_auth__WEBPACK_IMPORTED_MODULE_5__/* .isloggedIn */ .C)(req, res);

    if (!isLogged) {
      return apis_utils_helpers_response__WEBPACK_IMPORTED_MODULE_6__/* ["default"].error */ .Z.error(res, 404, {
        message: "you aren't logged in"
      });
    }

    try {
      let user = isLogged;
      user = await _services_userServices__WEBPACK_IMPORTED_MODULE_0__/* ["default"].update */ .Z.update({
        status: 0
      }, {
        email: user.email
      }); // req.session.destroy();

      return apis_utils_helpers_response__WEBPACK_IMPORTED_MODULE_6__/* ["default"].success */ .Z.success(res, 201, {
        message: 'logout successfully'
      });
    } catch (error) {
      return apis_utils_helpers_response__WEBPACK_IMPORTED_MODULE_6__/* ["default"].error */ .Z.error(res, 500, {
        message: 'something went wrong',
        error: error.message
      });
    }
  }
  /**
   * Forget password
   * @param {Request} req Request
   * @param {Response} res Response
   * @returns
   */


  static async forgettingPassword(req, res) {
    const {
      email
    } = req.body;

    try {
      const user = await _services_userServices__WEBPACK_IMPORTED_MODULE_0__/* ["default"].findByEmail */ .Z.findByEmail(email);

      if (!user) {
        return apis_utils_helpers_response__WEBPACK_IMPORTED_MODULE_6__/* ["default"].error */ .Z.error(res, 401, {
          message: 'user not found, signup'
        });
      }

      const inUser = user.toJSON();
      const userData = {
        id: inUser.id,
        email: inUser.email
      };
      const token = (0,apis_utils_jwt__WEBPACK_IMPORTED_MODULE_2__/* .signinToken */ .F)(userData);
      const emailOptions = {
        email: inUser.email,
        message: await apis_utils_mocks__WEBPACK_IMPORTED_MODULE_4__/* ["default"].forgetPassword */ .Z.forgetPassword(_objectSpread(_objectSpread({}, inUser), {}, {
          token
        })),
        subject: 'Reset Password Link'
      };
      await (0,apis_utils_sendEmail__WEBPACK_IMPORTED_MODULE_3__/* .emailSender */ .s)(emailOptions);
      return apis_utils_helpers_response__WEBPACK_IMPORTED_MODULE_6__/* ["default"].success */ .Z.success(res, 201, {
        message: 'check your email'
      });
    } catch (error) {
      return apis_utils_helpers_response__WEBPACK_IMPORTED_MODULE_6__/* ["default"].error */ .Z.error(res, 500, {
        message: 'something went wrong',
        error: error.message
      });
    }
  }
  /**
   * Reset password
   * @param {Request} req Request
   * @param {Response} res Response
   */


  static async resetingPassword(req, res) {
    const {
      password,
      token
    } = req.body;

    try {
      const {
        id
      } = (0,apis_utils_jwt__WEBPACK_IMPORTED_MODULE_2__/* .decode */ .J)(token);
      let user = await _services_userServices__WEBPACK_IMPORTED_MODULE_0__/* ["default"].findByPk */ .Z.findByPk(id);

      if (!user) {
        return apis_utils_helpers_response__WEBPACK_IMPORTED_MODULE_6__/* ["default"].error */ .Z.error(res, 401, {
          message: 'user not found, signup'
        });
      }

      user.password = await bcryptjs__WEBPACK_IMPORTED_MODULE_1___default().hash(password, 12);
      user = await user.save();
      return apis_utils_helpers_response__WEBPACK_IMPORTED_MODULE_6__/* ["default"].success */ .Z.success(res, 201, {
        message: 'password updated'
      });
    } catch (err) {
      if (err.message === 'jwt malformed' || err.message === 'invalid token' || err.message === 'jwt expired') {
        return apis_utils_helpers_response__WEBPACK_IMPORTED_MODULE_6__/* ["default"].error */ .Z.error(res, 400, {
          message: 'You are using Incorrect or Expired Link!',
          error: err.message
        });
      }

      return apis_utils_helpers_response__WEBPACK_IMPORTED_MODULE_6__/* ["default"].error */ .Z.error(res, 500, {
        message: 'server errror',
        error: err.message
      });
    }
  }
  /**
   * Get my profile
   * @param {object} req Request
   * @param {Response} res Response
   */


  static async getProfile(req, res) {
    const isLogged = await (0,_middlewares_auth__WEBPACK_IMPORTED_MODULE_5__/* .isloggedIn */ .C)(req, res);

    if (!isLogged) {
      return apis_utils_helpers_response__WEBPACK_IMPORTED_MODULE_6__/* ["default"].error */ .Z.error(res, 404, {
        message: "you aren't logged in"
      });
    }

    try {
      isLogged.password = undefined;
      return apis_utils_helpers_response__WEBPACK_IMPORTED_MODULE_6__/* ["default"].success */ .Z.success(res, 201, {
        message: 'your profile',
        profile: isLogged
      });
    } catch (error) {
      return apis_utils_helpers_response__WEBPACK_IMPORTED_MODULE_6__/* ["default"].error */ .Z.error(res, 500, {
        message: 'something went wrong',
        error: error.message
      });
    }
  }

}
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;