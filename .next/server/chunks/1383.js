"use strict";
exports.id = 1383;
exports.ids = [1383];
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

/***/ 3093:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var sequelize__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8210);
/* harmony import */ var _config_sequelize__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9838);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([sequelize__WEBPACK_IMPORTED_MODULE_0__, _config_sequelize__WEBPACK_IMPORTED_MODULE_1__]);
([sequelize__WEBPACK_IMPORTED_MODULE_0__, _config_sequelize__WEBPACK_IMPORTED_MODULE_1__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);


const User = _config_sequelize__WEBPACK_IMPORTED_MODULE_1__/* ["default"].define */ .Z.define('User', {
  type: sequelize__WEBPACK_IMPORTED_MODULE_0__.DataTypes.STRING,
  email: sequelize__WEBPACK_IMPORTED_MODULE_0__.DataTypes.STRING,
  password: sequelize__WEBPACK_IMPORTED_MODULE_0__.DataTypes.TEXT,
  level: sequelize__WEBPACK_IMPORTED_MODULE_0__.DataTypes.STRING,
  firstname: sequelize__WEBPACK_IMPORTED_MODULE_0__.DataTypes.STRING,
  lastname: sequelize__WEBPACK_IMPORTED_MODULE_0__.DataTypes.STRING,
  phone: sequelize__WEBPACK_IMPORTED_MODULE_0__.DataTypes.STRING,
  gender: sequelize__WEBPACK_IMPORTED_MODULE_0__.DataTypes.STRING,
  birthday: sequelize__WEBPACK_IMPORTED_MODULE_0__.DataTypes.DATE,
  province: sequelize__WEBPACK_IMPORTED_MODULE_0__.DataTypes.STRING,
  district: sequelize__WEBPACK_IMPORTED_MODULE_0__.DataTypes.STRING,
  sector: sequelize__WEBPACK_IMPORTED_MODULE_0__.DataTypes.STRING,
  agrilo: sequelize__WEBPACK_IMPORTED_MODULE_0__.DataTypes.STRING,
  essay: sequelize__WEBPACK_IMPORTED_MODULE_0__.DataTypes.TEXT,
  profile_image: sequelize__WEBPACK_IMPORTED_MODULE_0__.DataTypes.TEXT,
  active: {
    type: sequelize__WEBPACK_IMPORTED_MODULE_0__.DataTypes.BOOLEAN,
    defaultValue: false
  },
  status: {
    type: sequelize__WEBPACK_IMPORTED_MODULE_0__.DataTypes.INTEGER,
    comment: '0:offline,1:online',
    defaultValue: 0
  }
}, {
  tableName: 'user',
  timestamps: false
});

(async () => {
  await _config_sequelize__WEBPACK_IMPORTED_MODULE_1__/* ["default"].sync */ .Z.sync({
    alter: true
  });
})();

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (User);
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