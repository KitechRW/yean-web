"use strict";
exports.id = 8547;
exports.ids = [8547];
exports.modules = {

/***/ 8547:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ CommentControllers)
/* harmony export */ });
/* harmony import */ var _services_commentServices__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9353);
/* harmony import */ var _services_articleServices__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1035);
/* harmony import */ var apis_utils_helpers_response__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9620);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_services_commentServices__WEBPACK_IMPORTED_MODULE_0__, _services_articleServices__WEBPACK_IMPORTED_MODULE_1__]);
([_services_commentServices__WEBPACK_IMPORTED_MODULE_0__, _services_articleServices__WEBPACK_IMPORTED_MODULE_1__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);



class CommentControllers {
  static async create(req, res) {
    try {
      const {
        username,
        comment,
        article_id
      } = req.body;
      await _services_articleServices__WEBPACK_IMPORTED_MODULE_1__/* ["default"].findByPk */ .Z.findByPk(article_id).then(async resp => {
        if (!resp) {
          return apis_utils_helpers_response__WEBPACK_IMPORTED_MODULE_2__/* ["default"].error */ .Z.error(res, 404, {
            message: "this article is not in the system"
          });
        }

        await _services_commentServices__WEBPACK_IMPORTED_MODULE_0__/* ["default"].create */ .Z.create({
          article_id,
          username,
          comment
        }).then(rslt => {
          return apis_utils_helpers_response__WEBPACK_IMPORTED_MODULE_2__/* ["default"].success */ .Z.success(res, 200, {
            message: "comment saved successfull",
            data: rslt
          });
        }).catch(error => {
          return apis_utils_helpers_response__WEBPACK_IMPORTED_MODULE_2__/* ["default"].error */ .Z.error(res, 403, {
            message: "comment fail to be saved",
            error: error.message
          });
        });
      }).catch(error => {
        return apis_utils_helpers_response__WEBPACK_IMPORTED_MODULE_2__/* ["default"].error */ .Z.error(res, 500, {
          message: "server error",
          error: error.message
        });
      });
    } catch (error) {}
  }

  static async getAllCommentsOfPost(req, res) {
    try {
      const {
        article_id
      } = req.query;
      await _services_commentServices__WEBPACK_IMPORTED_MODULE_0__/* ["default"].findAllByCondition */ .Z.findAllByCondition({
        article_id
      }).then(resp => {
        if (!resp) {
          return apis_utils_helpers_response__WEBPACK_IMPORTED_MODULE_2__/* ["default"].error */ .Z.error(res, 404, {
            message: "there is no comments on this article"
          });
        }

        return apis_utils_helpers_response__WEBPACK_IMPORTED_MODULE_2__/* ["default"].success */ .Z.success(res, 201, {
          message: 'comments received successfully',
          data: resp
        });
      }).catch(error => {
        return apis_utils_helpers_response__WEBPACK_IMPORTED_MODULE_2__/* ["default"].error */ .Z.error(res, 403, {
          message: "comments failed to be retreived",
          error: error.message
        });
      });
    } catch (error) {
      return apis_utils_helpers_response__WEBPACK_IMPORTED_MODULE_2__/* ["default"].error */ .Z.error(res, 500, {
        message: "server error",
        error: error.message
      });
    }
  }

  static async getAllComments(req, res) {
    try {
      await _services_commentServices__WEBPACK_IMPORTED_MODULE_0__/* ["default"].findAll */ .Z.findAll().then(resp => {
        if (!resp) {
          return apis_utils_helpers_response__WEBPACK_IMPORTED_MODULE_2__/* ["default"].error */ .Z.error(res, 404, {
            message: "there is no comments"
          });
        }

        return apis_utils_helpers_response__WEBPACK_IMPORTED_MODULE_2__/* ["default"].success */ .Z.success(res, 201, {
          message: 'comments received successfully',
          data: resp
        });
      }).catch(error => {
        return apis_utils_helpers_response__WEBPACK_IMPORTED_MODULE_2__/* ["default"].error */ .Z.error(res, 403, {
          message: "comments failed to be retreived",
          error: error.message
        });
      });
    } catch (error) {
      return apis_utils_helpers_response__WEBPACK_IMPORTED_MODULE_2__/* ["default"].error */ .Z.error(res, 500, {
        message: "server error",
        error: error.message
      });
    }
  }

}
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 9353:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ CommentServices)
/* harmony export */ });
/* harmony import */ var apis_database__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1748);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([apis_database__WEBPACK_IMPORTED_MODULE_0__]);
apis_database__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];

const {
  Comments: Comment
} = apis_database__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z;
class CommentServices {
  static create(data) {
    return Comment.create(data);
  }

  static findAll() {
    return Comment.findAndCountAll();
  }

  static findByPk(id) {
    return Comment.findByPk(id);
  }

  static update(set, conditon) {
    return Comment.update(set, {
      where: conditon,
      returning: true
    });
  }

  static findAllByCondition(conditon) {
    return Comment.findAndCountAll({
      where: conditon
    });
  }

  static destroy(condition) {
    return Comment.destroy({
      where: condition
    });
  }

}
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;