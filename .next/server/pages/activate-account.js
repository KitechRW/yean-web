"use strict";
(() => {
var exports = {};
exports.id = 8501;
exports.ids = [8501];
exports.modules = {

/***/ 3932:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const Keys = {
  DEFAULT_API: "http://test.yeanagro.org",
  DEFAULT_JWT_SECRET: process.env.DEFAULT_JWT_SECRET,
  REDIRECT_TO: process.env.REDIRECT_TO,
  USER_INFO: "1B28429678ED6E22",
  SPEECHLY_APP_ID: process.env.SPEECHLY_APP_ID,
  REACT_APP_ACCESS_TOKEN: "F926F54FAF8B261DDEE44445EA85F",
  ISSERVER: true,
  SESSION_PASSWORD: "{!-@5MytKz!eb\"hdBX-DM+~>EBeSw9n]",
  HOST: "http://test.yeanagro.org"
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Keys);

/***/ }),

/***/ 8894:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var apis_utils_constants_keys__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3932);
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

/***/ }),

/***/ 4471:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "getServerSideProps": () => (/* binding */ getServerSideProps)
/* harmony export */ });
/* harmony import */ var core_factory_fact_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8894);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var sweetalert__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4701);
/* harmony import */ var sweetalert__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(sweetalert__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__);






const getServerSideProps = ({
  query: {
    activation
  }
}) => {
  if (!activation) {
    return {
      redirect: {
        permanent: false,
        destination: '/'
      }
    };
  }

  return {
    props: {
      token: activation
    }
  };
};

const ActivateAccount = ({
  token
}) => {
  const {
    push
  } = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();
  const [error, setError] = react__WEBPACK_IMPORTED_MODULE_2___default().useState(null);
  react__WEBPACK_IMPORTED_MODULE_2___default().useEffect(() => {
    core_factory_fact_http__WEBPACK_IMPORTED_MODULE_0__/* ["default"].axios.post */ .Z.axios.post('/api/auth/confirm', {
      token
    }).then(response => {
      var _response$data$user;

      if ((_response$data$user = response.data.user) !== null && _response$data$user !== void 0 && _response$data$user.active) {
        sweetalert__WEBPACK_IMPORTED_MODULE_3___default()('Activated', response.data.message || 'Account has been activate successfully, now you can login', 'success').then(() => {
          push('/login');
        });
      } else {
        setError('something went wrong');
      }
    }).catch(error => {
      setError(error.message || 'Something went wrong');
    });
  }, [token]);
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("div", {
    className: "flex flex-col items-center justify-center min-h-screen",
    children: error ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
      className: "flex flex-col items-center max-w-sm",
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("p", {
        className: "px-6 py-3 rounded-lg bg-red-500 text-white",
        children: "Something went wrong while activating your account. Please check your email and try again or contact admin for more support."
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("button", {
        type: "button",
        onClick: () => {
          push('/');
        },
        className: "px-6 py-2.5 bg-dark-green text-white rounded-full mt-6",
        children: "Back Home"
      })]
    }) : /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("h1", {
      className: "text-2xl md:text-4xl font-black tracking-wide text-brand-green",
      children: "Please wait...."
    })
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ActivateAccount);

/***/ }),

/***/ 2167:
/***/ ((module) => {

module.exports = require("axios");

/***/ }),

/***/ 1853:
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 4701:
/***/ ((module) => {

module.exports = require("sweetalert");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(4471));
module.exports = __webpack_exports__;

})();