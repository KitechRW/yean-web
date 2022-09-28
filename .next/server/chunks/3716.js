"use strict";
exports.id = 3716;
exports.ids = [3716];
exports.modules = {

/***/ 3716:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ ArticleServices)
/* harmony export */ });
/* harmony import */ var apis_database__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3509);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([apis_database__WEBPACK_IMPORTED_MODULE_0__]);
apis_database__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


const {
  Articles: Article,
  Users: User
} = apis_database__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z;
class ArticleServices {
  static create(data) {
    return Article.create(data);
  }

  static findAll() {
    return Article.findAll();
  }

  static async findAndCountAll(where, attributes, autherAttributes, limit, offset) {
    const {
      count,
      rows
    } = await Article.findAndCountAll({
      attributes,
      where,
      limit,
      offset,
      order: [['id', 'DESC']]
    });
    const articleRows = await Promise.all(rows.map(row => {
      return User.findByPk(row.toJSON()?.author_id, {
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
    const article = await Article.findOne({
      attributes,
      where
    });
    const articleRows = await User.findByPk(article.toJSON()?.author_id, {
      attributes: autherAttributes
    }).then(author => ({
      article,
      author
    }));
    return articleRows;
  }

  static findByPk(id) {
    return Article.findByPk(id);
  }

  static update(set, conditon) {
    return Article.update(set, {
      where: conditon,
      returning: true
    });
  }

  static destroy(condition) {
    return Article.destroy({
      where: condition
    });
  }

}
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;