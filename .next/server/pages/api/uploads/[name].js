"use strict";
(() => {
var exports = {};
exports.id = 7768;
exports.ids = [7768];
exports.modules = {

/***/ 4005:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "config": () => (/* binding */ config),
  "default": () => (/* binding */ _name_)
});

;// CONCATENATED MODULE: external "express"
const external_express_namespaceObject = require("express");
var external_express_default = /*#__PURE__*/__webpack_require__.n(external_express_namespaceObject);
;// CONCATENATED MODULE: ./src/pages/api/uploads/[name].ts
const config = {
  api: {
    externalResolver: true
  }
};

const handler = external_express_default()();
const serveFiles = external_express_default()["static"]('public/uploads');
handler.use(['/api/uploads', '/uploads'], serveFiles); //               ^              ^
// Multiple endpoints are passed. The first one is used when visiting /api/images.
// The second one is used when visiting /images using the middleware rewrite I mention below.
// express is just a function that takes (http.IncomingMessage, http.ServerResponse),
// which Next.js supports when externalResolver is enabled.

/* harmony default export */ const _name_ = (handler);

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(4005));
module.exports = __webpack_exports__;

})();