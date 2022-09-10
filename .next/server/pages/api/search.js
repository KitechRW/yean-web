"use strict";
(() => {
var exports = {};
exports.id = 5198;
exports.ids = [5198];
exports.modules = {

/***/ 8210:
/***/ ((module) => {

module.exports = import("sequelize");;

/***/ }),

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
  title: sequelize__WEBPACK_IMPORTED_MODULE_0__.DataTypes.TEXT,
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


const Library = _config_sequelize__WEBPACK_IMPORTED_MODULE_1__/* ["default"].define */ .Z.define('Library', {
  link: sequelize__WEBPACK_IMPORTED_MODULE_0__.DataTypes.STRING,
  size: sequelize__WEBPACK_IMPORTED_MODULE_0__.DataTypes.BIGINT,
  name: sequelize__WEBPACK_IMPORTED_MODULE_0__.DataTypes.TEXT,
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
  });
})();

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Library);
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 7110:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ SearchController)
/* harmony export */ });
/* harmony import */ var apis_database_models_article_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8803);
/* harmony import */ var apis_database_models_library_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5107);
/* harmony import */ var apis_utils_helpers_response__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9620);
/* harmony import */ var sequelize__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8210);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([apis_database_models_article_model__WEBPACK_IMPORTED_MODULE_0__, apis_database_models_library_model__WEBPACK_IMPORTED_MODULE_1__, sequelize__WEBPACK_IMPORTED_MODULE_2__]);
([apis_database_models_article_model__WEBPACK_IMPORTED_MODULE_0__, apis_database_models_library_model__WEBPACK_IMPORTED_MODULE_1__, sequelize__WEBPACK_IMPORTED_MODULE_2__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);




class SearchController {
  static async search(req, res) {
    const {
      search
    } = req.body;

    try {
      const articles = await apis_database_models_article_model__WEBPACK_IMPORTED_MODULE_0__/* ["default"].findAll */ .Z.findAll({
        attributes: ['id', 'title', 'image'],
        where: {
          title: {
            [sequelize__WEBPACK_IMPORTED_MODULE_2__.Op.like]: `%${search}%`
          }
        }
      });
      const books = await apis_database_models_library_model__WEBPACK_IMPORTED_MODULE_1__/* ["default"].findAll */ .Z.findAll({
        attributes: ['id', 'name', 'link'],
        where: {
          name: {
            [sequelize__WEBPACK_IMPORTED_MODULE_2__.Op.like]: `%${search}%`
          }
        },
        raw: true
      });
      return apis_utils_helpers_response__WEBPACK_IMPORTED_MODULE_3__/* ["default"].success */ .Z.success(res, 200, {
        articles,
        books
      });
    } catch (error) {
      return apis_utils_helpers_response__WEBPACK_IMPORTED_MODULE_3__/* ["default"].error */ .Z.error(res, 500, {
        message: 'something went wrong',
        reason: error === null || error === void 0 ? void 0 : error.message
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

/***/ }),

/***/ 5002:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ handler)
/* harmony export */ });
/* harmony import */ var apis_restful_controllers_SearchController__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7110);
/* harmony import */ var apis_utils_helpers_response__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9620);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([apis_restful_controllers_SearchController__WEBPACK_IMPORTED_MODULE_0__]);
apis_restful_controllers_SearchController__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


function handler(req, res) {
  switch (req.method) {
    case 'POST':
      return apis_restful_controllers_SearchController__WEBPACK_IMPORTED_MODULE_0__/* ["default"].search */ .Z.search(req, res);

    default:
      return apis_utils_helpers_response__WEBPACK_IMPORTED_MODULE_1__/* ["default"].error */ .Z.error(res, 405, {
        message: 'method is not allowed'
      });
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
var __webpack_exports__ = (__webpack_exec__(5002));
module.exports = __webpack_exports__;

})();