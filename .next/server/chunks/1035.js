"use strict";
exports.id = 1035;
exports.ids = [1035];
exports.modules = {

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

/***/ 1035:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ ArticleServices)
/* harmony export */ });
/* harmony import */ var apis_database_models_user_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3093);
/* harmony import */ var _database_models_article_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8803);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([apis_database_models_user_model__WEBPACK_IMPORTED_MODULE_0__, _database_models_article_model__WEBPACK_IMPORTED_MODULE_1__]);
([apis_database_models_user_model__WEBPACK_IMPORTED_MODULE_0__, _database_models_article_model__WEBPACK_IMPORTED_MODULE_1__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



class ArticleServices {
  static create(data) {
    return _database_models_article_model__WEBPACK_IMPORTED_MODULE_1__/* ["default"].create */ .Z.create(data);
  }

  static findAll() {
    return _database_models_article_model__WEBPACK_IMPORTED_MODULE_1__/* ["default"].findAll */ .Z.findAll();
  }

  static async findAndCountAll(where, attributes, autherAttributes, limit, offset) {
    const {
      count,
      rows
    } = await _database_models_article_model__WEBPACK_IMPORTED_MODULE_1__/* ["default"].findAndCountAll */ .Z.findAndCountAll({
      attributes,
      where,
      limit,
      offset,
      order: [['id', 'DESC']]
    });
    rows.sort((a, b) => Number(b.id) - Number(a.id));
    const articleRows = await Promise.all(rows.map(row => {
      var _row$toJSON;

      return apis_database_models_user_model__WEBPACK_IMPORTED_MODULE_0__/* ["default"].findByPk */ .Z.findByPk((_row$toJSON = row.toJSON()) === null || _row$toJSON === void 0 ? void 0 : _row$toJSON.author_id, {
        attributes: autherAttributes
      }).then(author => _objectSpread({
        author
      }, row.toJSON()));
    }));
    return {
      count,
      rows: articleRows
    };
  }

  static async findOne(where, attributes, autherAttributes) {
    var _article$toJSON;

    const article = await _database_models_article_model__WEBPACK_IMPORTED_MODULE_1__/* ["default"].findOne */ .Z.findOne({
      attributes,
      where
    });
    const articleRows = await apis_database_models_user_model__WEBPACK_IMPORTED_MODULE_0__/* ["default"].findByPk */ .Z.findByPk((_article$toJSON = article.toJSON()) === null || _article$toJSON === void 0 ? void 0 : _article$toJSON.author_id, {
      attributes: autherAttributes
    }).then(author => ({
      article,
      author
    }));
    return articleRows;
  }

  static findByPk(id) {
    return _database_models_article_model__WEBPACK_IMPORTED_MODULE_1__/* ["default"].findByPk */ .Z.findByPk(id);
  }

  static update(set, conditon) {
    return _database_models_article_model__WEBPACK_IMPORTED_MODULE_1__/* ["default"].update */ .Z.update(set, {
      where: conditon,
      returning: true
    });
  }

  static destroy(condition) {
    return _database_models_article_model__WEBPACK_IMPORTED_MODULE_1__/* ["default"].destroy */ .Z.destroy({
      where: condition
    });
  }

}
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;