"use strict";
exports.id = 637;
exports.ids = [637];
exports.modules = {

/***/ 637:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ restful)
});

// UNUSED EXPORTS: DirectSupport

// NAMESPACE OBJECT: ./src/apis/restful/middlewares/auth.ts
var auth_namespaceObject = {};
__webpack_require__.r(auth_namespaceObject);
__webpack_require__.d(auth_namespaceObject, {
  "customHeader": () => (customHeader),
  "deliveryHeader": () => (deliveryHeader),
  "userPayload": () => (userPayload)
});

;// CONCATENATED MODULE: ./src/apis/restful/routes/openRoute/index.ts
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/* eslint-disable no-underscore-dangle */
class Open {
  constructor({
    RemoteServer,
    Auth
  }) {
    _defineProperty(this, "Server", void 0);

    _defineProperty(this, "_Auth", void 0);

    this.Server = RemoteServer.instance;
    this._Auth = Auth;
  }

  async getRoute(endpoint, req) {
    return this.Server.get(endpoint, req).then(res => ({
      data: res.data || res
    })).catch(err => ({
      error: err.response?.data || err.response || err
    }));
  }

  async postRoute(endpoint, req) {
    return this.Server.post(endpoint, req).then(res => ({
      data: res.data || res
    })).catch(err => ({
      error: err.response?.data || err.response || err
    }));
  }

}

/* harmony default export */ const openRoute = (Open);
;// CONCATENATED MODULE: ./src/apis/restful/routes/get/index.ts
function get_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/* eslint-disable no-underscore-dangle */
class Get {
  constructor({
    RemoteServer,
    Auth
  }) {
    get_defineProperty(this, "SERVER", void 0);

    get_defineProperty(this, "_Auth", void 0);

    this.SERVER = RemoteServer.instance;
    this._Auth = Auth;
  }

  async getRoute(endpoint, req) {
    this._Auth.customHeader(this.SERVER);

    return this.SERVER.get(endpoint, req).then(res => ({
      data: res.data || res
    })).catch(err => ({
      error: err.response?.data || err.response || err
    }));
  }

}

/* harmony default export */ const get = (Get);
;// CONCATENATED MODULE: ./src/apis/restful/routes/post/index.ts
function post_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/* eslint-disable no-underscore-dangle */
class Post {
  constructor({
    RemoteServer,
    Auth
  }) {
    post_defineProperty(this, "SERVER", void 0);

    post_defineProperty(this, "_Auth", void 0);

    this.SERVER = RemoteServer.instance;
    this._Auth = Auth;
  }

  async postRoute(endpoint, req) {
    this._Auth.customHeader(this.SERVER);

    return this.SERVER.post(endpoint, req).then(res => ({
      data: res.data || res
    })).catch(err => ({
      error: err.response?.data || err.response || err
    }));
  }

}

/* harmony default export */ const post = (Post);
;// CONCATENATED MODULE: ./src/apis/restful/routes/patch/index.ts
function patch_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/* eslint-disable no-underscore-dangle */
class Patch {
  constructor({
    RemoteServer,
    Auth
  }) {
    patch_defineProperty(this, "SERVER", void 0);

    patch_defineProperty(this, "_Auth", void 0);

    this.SERVER = RemoteServer.instance;
    this._Auth = Auth;
  }

  async patchRoute(endpoint, req) {
    this._Auth.customHeader(this.SERVER);

    return this.SERVER.patch(endpoint, req).then(res => ({
      data: res.data || res
    })).catch(err => ({
      error: err.response?.data || err.response || err
    }));
  }

}

/* harmony default export */ const patch = (Patch);
;// CONCATENATED MODULE: ./src/apis/restful/routes/delete/index.ts
function delete_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

class Delete {
  constructor({
    RemoteServer,
    Auth
  }) {
    delete_defineProperty(this, "SERVER", void 0);

    delete_defineProperty(this, "_Auth", void 0);

    this.SERVER = RemoteServer.instance;
    this._Auth = Auth;
  }

  async deleteRoute(endpoint, req) {
    this._Auth.customHeader(this.SERVER);

    return this.SERVER.delete(endpoint, req).then(res => ({
      data: res.data || res
    })).catch(err => ({
      error: err.response?.data || err.response || err
    }));
  }

}
;// CONCATENATED MODULE: ./src/apis/restful/routes/index.ts





const Router = {
  Open: openRoute,
  Get: get,
  Post: post,
  Patch: patch,
  Delete: Delete
};
/* harmony default export */ const routes = (Router);
// EXTERNAL MODULE: ./src/system/helpers/secureLs.ts
var secureLs = __webpack_require__(5173);
;// CONCATENATED MODULE: ./src/apis/restful/middlewares/auth.ts
/* eslint-disable no-param-reassign */

const customHeader = (httpInstance, token = secureLs/* default.getToken */.Z.getToken()) => {
  const {
    i18nextLng
  } = localStorage;
  httpInstance.defaults.headers.common.Authorization = `Bearer ${token}`;
  httpInstance.defaults.headers.common.ContentType = 'multipart/form-data';
  httpInstance.defaults.headers.common.lang = i18nextLng || 'en';
};
const deliveryHeader = (httpInstance, token) => {
  const {
    i18nextLng
  } = localStorage;
  httpInstance.defaults.headers.common.Authorization = `Bearer ${token}`;
  httpInstance.defaults.headers.common.ContentType = 'multipart/form-data';
  httpInstance.defaults.headers.common.lang = i18nextLng || 'en';
};
const userPayload = req => {
  const thirdUser = req.sender.id;
  const appThird = req.recipient.id;
  const {
    userType
  } = req;
  return {
    appThird,
    thirdUser,
    userType
  };
};
;// CONCATENATED MODULE: ./src/apis/utils/constants/config.ts
const HTTP_HEADERS = {
  'Content-Type': 'application/json',
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS'
};
const Config = {
  HTTP_HEADERS
};
/* harmony default export */ const config = (Config);
// EXTERNAL MODULE: ./src/apis/utils/constants/keys.ts
var keys = __webpack_require__(122);
;// CONCATENATED MODULE: ./src/apis/utils/constants/endpoints.ts
const endpoints = {
  LOGIN_ENDPOINT: '/api/v1/users/signin',
  LOGOUT_ENDPOINT: '/api/v1/auth/logout',
  CARD_PAY: '/api/v1/portfolio/card',
  MOMO_PAY: '/api/v1/portfolio/momo',
  SEND_EMAIL: '/api/v1/portfolio/email',
  BOOKS_ENDPOINT: '/api/v1/files/books',
  AUTH_WITH_GOOGLE: '/auth/google',
  BLOG_ENDPOINT: '/api/blogs'
};
/* harmony default export */ const constants_endpoints = (endpoints);
;// CONCATENATED MODULE: ./src/apis/utils/constants/index.ts



const Constants = {
  Keys: keys/* default */.Z,
  Config: config,
  Endpoints: constants_endpoints
};
/* harmony default export */ const constants = (Constants);
// EXTERNAL MODULE: ./src/core/factory/fact.http.ts
var fact_http = __webpack_require__(8058);
;// CONCATENATED MODULE: ./src/core/factory/index.ts

const Factory = {
  Http: fact_http/* default */.Z
};
/* harmony default export */ const factory = (Factory);
;// CONCATENATED MODULE: ./src/apis/restful/middlewares/remote.ts


const RemoteServer = new factory.Http(`${constants.Keys.DEFAULT_API}`, constants.Config.HTTP_HEADERS);
/* harmony default export */ const remote = (RemoteServer);
;// CONCATENATED MODULE: ./src/apis/restful/middlewares/index.ts


const Middleware = {
  RemoteServer: remote,
  Auth: auth_namespaceObject
};
/* harmony default export */ const middlewares = (Middleware);
;// CONCATENATED MODULE: ./src/apis/restful/index.ts


const {
  RemoteServer: restful_RemoteServer,
  Auth
} = middlewares;
const forwards = {
  RemoteServer: restful_RemoteServer,
  Auth
};
const OpenRoute = new routes.Open(forwards);
const GetRoute = new routes.Get(forwards);
const PostRoute = new routes.Post(forwards);
const PatchRoute = new routes.Patch(forwards);
const DeleteRoute = new routes.Delete(forwards);
const DefaultApi = {
  OpenRoute,
  GetRoute,
  PostRoute,
  PatchRoute,
  DeleteRoute
};
const DirectSupport = {
  OpenRoute,
  GetRoute
};
/* harmony default export */ const restful = (DefaultApi);

/***/ }),

/***/ 8058:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var apis_utils_constants_keys__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(122);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2167);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




class Http {
  constructor(baseURL, headers) {
    _defineProperty(this, "instance", void 0);

    this.instance = axios__WEBPACK_IMPORTED_MODULE_1___default().create({
      baseURL,
      headers
    });
  }

}

_defineProperty(Http, "axios", axios__WEBPACK_IMPORTED_MODULE_1___default().create({
  baseURL: apis_utils_constants_keys__WEBPACK_IMPORTED_MODULE_0__/* ["default"].DEFAULT_API */ .Z.DEFAULT_API
}));

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Http);

/***/ })

};
;