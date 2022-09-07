"use strict";
(() => {
var exports = {};
exports.id = 3222;
exports.ids = [3222];
exports.modules = {

/***/ 9344:
/***/ ((module) => {

module.exports = require("jsonwebtoken");

/***/ }),

/***/ 1454:
/***/ ((module) => {

module.exports = import("iron-session");;

/***/ }),

/***/ 8210:
/***/ ((module) => {

module.exports = import("sequelize");;

/***/ }),

/***/ 8803:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var sequelize__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8210);
/* harmony import */ var _config_sequelize__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9838);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([sequelize__WEBPACK_IMPORTED_MODULE_0__, _config_sequelize__WEBPACK_IMPORTED_MODULE_1__]);
([sequelize__WEBPACK_IMPORTED_MODULE_0__, _config_sequelize__WEBPACK_IMPORTED_MODULE_1__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);


const Article = _config_sequelize__WEBPACK_IMPORTED_MODULE_1__/* ["default"].define */ .Z.define('Article', {
  title: sequelize__WEBPACK_IMPORTED_MODULE_0__.DataTypes.STRING,
  image: sequelize__WEBPACK_IMPORTED_MODULE_0__.DataTypes.STRING,
  text: sequelize__WEBPACK_IMPORTED_MODULE_0__.DataTypes.TEXT,
  category: sequelize__WEBPACK_IMPORTED_MODULE_0__.DataTypes.STRING,
  views: {
    type: sequelize__WEBPACK_IMPORTED_MODULE_0__.DataTypes.BIGINT,
    defaultValue: 0
  },
  author_id: sequelize__WEBPACK_IMPORTED_MODULE_0__.DataTypes.BIGINT,
  tags: sequelize__WEBPACK_IMPORTED_MODULE_0__.DataTypes.STRING,
  comment: {
    type: sequelize__WEBPACK_IMPORTED_MODULE_0__.DataTypes.BIGINT,
    defaultValue: 0
  },
  status: {
    type: sequelize__WEBPACK_IMPORTED_MODULE_0__.DataTypes.STRING,
    defaultValue: 'online'
  },
  success: sequelize__WEBPACK_IMPORTED_MODULE_0__.DataTypes.STRING,
  success_photo: sequelize__WEBPACK_IMPORTED_MODULE_0__.DataTypes.STRING
}, {
  tableName: 'article',
  timestamps: true
});

(async () => {
  await _config_sequelize__WEBPACK_IMPORTED_MODULE_1__/* ["default"].sync */ .Z.sync({
    alter: true
  });
})();

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Article);
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 3262:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var sequelize__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8210);
/* harmony import */ var _config_sequelize__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9838);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([sequelize__WEBPACK_IMPORTED_MODULE_0__, _config_sequelize__WEBPACK_IMPORTED_MODULE_1__]);
([sequelize__WEBPACK_IMPORTED_MODULE_0__, _config_sequelize__WEBPACK_IMPORTED_MODULE_1__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);


const Job = _config_sequelize__WEBPACK_IMPORTED_MODULE_1__/* ["default"].define */ .Z.define('Job', {
  title: sequelize__WEBPACK_IMPORTED_MODULE_0__.DataTypes.STRING,
  category: sequelize__WEBPACK_IMPORTED_MODULE_0__.DataTypes.STRING,
  keyword: sequelize__WEBPACK_IMPORTED_MODULE_0__.DataTypes.STRING,
  location: sequelize__WEBPACK_IMPORTED_MODULE_0__.DataTypes.STRING,
  description: sequelize__WEBPACK_IMPORTED_MODULE_0__.DataTypes.TEXT
}, {
  tableName: 'tbl_jobs',
  timestamps: false
});

(async () => {
  await _config_sequelize__WEBPACK_IMPORTED_MODULE_1__/* ["default"].sync */ .Z.sync({
    alter: true
  });
})();

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Job);
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 5107:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var sequelize__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8210);
/* harmony import */ var _config_sequelize__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9838);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([sequelize__WEBPACK_IMPORTED_MODULE_0__, _config_sequelize__WEBPACK_IMPORTED_MODULE_1__]);
([sequelize__WEBPACK_IMPORTED_MODULE_0__, _config_sequelize__WEBPACK_IMPORTED_MODULE_1__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);

 // import User from './user.model';

const Library = _config_sequelize__WEBPACK_IMPORTED_MODULE_1__/* ["default"].define */ .Z.define('Library', {
  link: sequelize__WEBPACK_IMPORTED_MODULE_0__.DataTypes.STRING,
  size: sequelize__WEBPACK_IMPORTED_MODULE_0__.DataTypes.BIGINT,
  name: sequelize__WEBPACK_IMPORTED_MODULE_0__.DataTypes.STRING,
  cat: sequelize__WEBPACK_IMPORTED_MODULE_0__.DataTypes.BIGINT,
  desc: sequelize__WEBPACK_IMPORTED_MODULE_0__.DataTypes.TEXT,
  cover: sequelize__WEBPACK_IMPORTED_MODULE_0__.DataTypes.STRING
}, {
  tableName: 'library',
  timestamps: false
});

(async () => {
  await _config_sequelize__WEBPACK_IMPORTED_MODULE_1__/* ["default"].sync */ .Z.sync({
    alter: true
  }); //   POST.belongsTo(User, {
  //     as: 'user',
  //     foreignKey: {
  //       name: 'post_id',
  //     },
  //   });
})();

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Library);
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

/***/ 1087:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ DashboardController)
/* harmony export */ });
/* harmony import */ var apis_database_models_article_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8803);
/* harmony import */ var apis_database_models_jobs_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3262);
/* harmony import */ var apis_database_models_library_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5107);
/* harmony import */ var apis_database_models_partner_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8047);
/* harmony import */ var apis_database_models_user_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(3093);
/* harmony import */ var apis_utils_helpers_response__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(9620);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([apis_database_models_article_model__WEBPACK_IMPORTED_MODULE_0__, apis_database_models_jobs_model__WEBPACK_IMPORTED_MODULE_1__, apis_database_models_library_model__WEBPACK_IMPORTED_MODULE_2__, apis_database_models_partner_model__WEBPACK_IMPORTED_MODULE_3__, apis_database_models_user_model__WEBPACK_IMPORTED_MODULE_4__]);
([apis_database_models_article_model__WEBPACK_IMPORTED_MODULE_0__, apis_database_models_jobs_model__WEBPACK_IMPORTED_MODULE_1__, apis_database_models_library_model__WEBPACK_IMPORTED_MODULE_2__, apis_database_models_partner_model__WEBPACK_IMPORTED_MODULE_3__, apis_database_models_user_model__WEBPACK_IMPORTED_MODULE_4__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);






class DashboardController {
  static async stat(req, res) {
    try {
      const articles = await apis_database_models_article_model__WEBPACK_IMPORTED_MODULE_0__/* ["default"].findAndCountAll */ .Z.findAndCountAll();
      const users = await apis_database_models_user_model__WEBPACK_IMPORTED_MODULE_4__/* ["default"].findAndCountAll */ .Z.findAndCountAll();
      const books = await apis_database_models_library_model__WEBPACK_IMPORTED_MODULE_2__/* ["default"].findAndCountAll */ .Z.findAndCountAll();
      const partners = await apis_database_models_partner_model__WEBPACK_IMPORTED_MODULE_3__/* ["default"].findAndCountAll */ .Z.findAndCountAll();
      const jobs = await apis_database_models_jobs_model__WEBPACK_IMPORTED_MODULE_1__/* ["default"].findAndCountAll */ .Z.findAndCountAll();
      return apis_utils_helpers_response__WEBPACK_IMPORTED_MODULE_5__/* ["default"].success */ .Z.success(res, 200, {
        message: 'App statistics',
        data: {
          articles: articles.count,
          users: users.count,
          books: books.count,
          partners: partners.count,
          jobs: jobs.count
        }
      });
    } catch (error) {
      return apis_utils_helpers_response__WEBPACK_IMPORTED_MODULE_5__/* ["default"].error */ .Z.error(res, 500, {
        message: 'something went wrong',
        error: error.message
      });
    }
  }

}
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 6125:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var apis_middlewares_auth__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6207);
/* harmony import */ var apis_restful_controllers_DashboardController__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1087);
/* harmony import */ var apis_utils_helpers_response__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9620);
/* harmony import */ var system_lib_withSession__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1547);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([apis_middlewares_auth__WEBPACK_IMPORTED_MODULE_0__, apis_restful_controllers_DashboardController__WEBPACK_IMPORTED_MODULE_1__, system_lib_withSession__WEBPACK_IMPORTED_MODULE_2__]);
([apis_middlewares_auth__WEBPACK_IMPORTED_MODULE_0__, apis_restful_controllers_DashboardController__WEBPACK_IMPORTED_MODULE_1__, system_lib_withSession__WEBPACK_IMPORTED_MODULE_2__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);





function handler(req, res) {
  switch (req.method) {
    case 'GET':
      return apis_restful_controllers_DashboardController__WEBPACK_IMPORTED_MODULE_1__/* ["default"].stat */ .Z.stat(req, res);

    default:
      return apis_utils_helpers_response__WEBPACK_IMPORTED_MODULE_3__/* ["default"].error */ .Z.error(res, 405, {
        message: 'method is not allowed'
      });
  }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,system_lib_withSession__WEBPACK_IMPORTED_MODULE_2__/* .withSessionRoute */ .j)((0,apis_middlewares_auth__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z)(handler, ['admin'], ['GET'])));
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [8534,1383,6207,1547], () => (__webpack_exec__(6125)));
module.exports = __webpack_exports__;

})();