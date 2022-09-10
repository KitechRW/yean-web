"use strict";
(() => {
var exports = {};
exports.id = 9742;
exports.ids = [9742];
exports.modules = {

/***/ 3932:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const Keys = {
  DEFAULT_API: "https://witwad.com",
  DEFAULT_JWT_SECRET: process.env.DEFAULT_JWT_SECRET,
  REDIRECT_TO: process.env.REDIRECT_TO,
  USER_INFO: "1B28429678ED6E22",
  SPEECHLY_APP_ID: process.env.SPEECHLY_APP_ID,
  REACT_APP_ACCESS_TOKEN: "F926F54FAF8B261DDEE44445EA85F",
  ISSERVER: true,
  SESSION_PASSWORD: "{!-@5MytKz!eb\"hdBX-DM+~>EBeSw9n]",
  HOST: "https://witwad.com"
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Keys);

/***/ }),

/***/ 1182:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "getServerSideProps": () => (/* binding */ getServerSideProps)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2167);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5609);
/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(yup__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5641);
/* harmony import */ var _hookform_resolvers_yup__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1908);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var system_lib_withSession__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(7154);
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(9709);
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_i18next__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var modules_partials_Logo__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(9682);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(968);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var modules_partials_MetaData__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(3405);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([react_hook_form__WEBPACK_IMPORTED_MODULE_3__, _hookform_resolvers_yup__WEBPACK_IMPORTED_MODULE_4__, system_lib_withSession__WEBPACK_IMPORTED_MODULE_6__]);
([react_hook_form__WEBPACK_IMPORTED_MODULE_3__, _hookform_resolvers_yup__WEBPACK_IMPORTED_MODULE_4__, system_lib_withSession__WEBPACK_IMPORTED_MODULE_6__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
















const schema = yup__WEBPACK_IMPORTED_MODULE_2__.object({
  email: yup__WEBPACK_IMPORTED_MODULE_2__.string().required('Email is required').email('Email is invalid')
}).required();

const ForgotPassword = () => {
  var _errors$email;

  const {
    t
  } = (0,react_i18next__WEBPACK_IMPORTED_MODULE_7__.useTranslation)();
  const {
    push
  } = (0,next_router__WEBPACK_IMPORTED_MODULE_5__.useRouter)();
  const [errorMessage, setErrorMessage] = react__WEBPACK_IMPORTED_MODULE_0___default().useState(null);
  const [message, setMessage] = react__WEBPACK_IMPORTED_MODULE_0___default().useState(null);
  const [submitting, SetSubmitting] = react__WEBPACK_IMPORTED_MODULE_0___default().useState(false);
  const {
    register,
    handleSubmit,
    formState: {
      errors
    }
  } = (0,react_hook_form__WEBPACK_IMPORTED_MODULE_3__.useForm)({
    resolver: (0,_hookform_resolvers_yup__WEBPACK_IMPORTED_MODULE_4__.yupResolver)(schema)
  });

  const onSubmit = data => {
    console.log(data);
    setErrorMessage(null);
    setMessage(null);
    SetSubmitting(true);
    axios__WEBPACK_IMPORTED_MODULE_1___default().post('/api/auth/forget-password', data).then(response => {
      SetSubmitting(false);

      if (response.status === 201 || response.status === 200) {
        var _response$data;

        setMessage((response === null || response === void 0 ? void 0 : (_response$data = response.data) === null || _response$data === void 0 ? void 0 : _response$data.message) || 'check your email please ');
      } else {
        setErrorMessage('Something went wrong, try again.');
      } // setMessage(response.data.)

    }).catch(result => {
      var _result$response;

      SetSubmitting(false);

      try {
        if (result.response.status === 401) {
          setErrorMessage('No such account found!, go to sign up to create account ');
          return;
        }
      } catch (e) {}

      console.log(result);
      const {
        error
      } = ((_result$response = result.response) === null || _result$response === void 0 ? void 0 : _result$response.data) || result.response || result;
      console.log(error === null || error === void 0 ? void 0 : error.message);
      setErrorMessage((error === null || error === void 0 ? void 0 : error.message) || 'Something went wrong, try again');
    });
  };

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxs)((next_head__WEBPACK_IMPORTED_MODULE_10___default()), {
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx("title", {
        children: "Forget password? - Yean"
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx(modules_partials_MetaData__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z, {})]
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx("div", {
      className: "bg-top bg-cover bg-no-repeat bg-[url(/assets/images/login.svg)] flex flex-col items-center min-h-screen",
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx("div", {
        className: "flex flex-col bg-black/50 flex-grow w-full items-center justify-center p-4 md:p-8",
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx("div", {
          className: "bg-white flex flex-col w-full md:max-w-md rounded shadow-xl border-t-[0.5px] border-gray-50 justify-center",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxs)("div", {
            className: "flex flex-col items-center w-full p-6 py-12 md:px-12",
            children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx(modules_partials_Logo__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {}), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx("h1", {
              className: "mt-6 text-2xl md:text-3xl font-bold tracking-wide",
              children: "Reset your Password"
            }), errorMessage ? /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx("div", {
              className: "mt-3 flex flex-col items-center rounded-lg bg-red-500 px-4 py-3",
              children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx("p", {
                className: "text-white text-sm first-letter:uppercase",
                children: errorMessage
              })
            }) : null, message ? /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx("div", {
              className: "mt-3 flex flex-col items-center rounded-lg bg-blue-500 px-4 py-3",
              children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx("p", {
                className: "text-white text-sm first-letter:uppercase",
                children: message
              })
            }) : null, /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxs)("form", {
              onSubmit: event => {
                handleSubmit(onSubmit)(event);
              },
              className: "w-full flex flex-col mt-6",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxs)("label", {
                htmlFor: "user-email",
                className: "flex flex-col",
                children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx("span", {
                  className: "text-black-200 text-sm",
                  children: "Email"
                }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx("input", _objectSpread(_objectSpread({
                  id: "user-email",
                  type: "email"
                }, register('email')), {}, {
                  className: "mt-1 focus:border-primary bg-gray-202 outline-none rounded-lg border border-gray-201 px-3 py-2"
                })), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx("p", {
                  className: "text-red-500 text-xs mt-1",
                  children: (_errors$email = errors.email) === null || _errors$email === void 0 ? void 0 : _errors$email.message
                })]
              }), submitting ? /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx("button", {
                disabled: true,
                type: "submit",
                className: "mt-6 w-full font-semibold tracking-wide bg-brand-green/60 px-4 py-3 rounded-lg text-white",
                children: "Submit"
              }) : /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx("button", {
                type: "submit",
                className: "mt-6 w-full font-semibold tracking-wide bg-brand-green px-4 py-3 rounded-lg text-white",
                children: "Submit"
              })]
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx("p", {
              className: "text-brand-green mt-6",
              children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx((next_link__WEBPACK_IMPORTED_MODULE_9___default()), {
                href: "/login",
                children: "Back to Login"
              })
            })]
          })
        })
      })
    })]
  });
};

const getServerSideProps = (0,system_lib_withSession__WEBPACK_IMPORTED_MODULE_6__/* .withSessionSsr */ .f)(async ({
  req,
  res
}) => {
  const {
    user,
    token
  } = req.session;

  if (token) {
    return {
      redirect: {
        permanent: false,
        destination: '/'
      }
    };
  }

  return {
    props: {
      user: user || null,
      token: token || null
    }
  };
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ForgotPassword);
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 3772:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "q": () => (/* binding */ ironOptions)
/* harmony export */ });
/* harmony import */ var apis_utils_constants_keys__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3932);

const ironOptions = {
  cookieName: 'myapp_cookiename',
  password: `${apis_utils_constants_keys__WEBPACK_IMPORTED_MODULE_0__/* ["default"].SESSION_PASSWORD */ .Z.SESSION_PASSWORD}`,
  cookieOptions: {
    secure: true
  }
};

/***/ }),

/***/ 7154:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "f": () => (/* binding */ withSessionSsr)
/* harmony export */ });
/* unused harmony export withSessionRoute */
/* harmony import */ var iron_session_next__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9531);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3772);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([iron_session_next__WEBPACK_IMPORTED_MODULE_0__]);
iron_session_next__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


function withSessionRoute(handler) {
  return withIronSessionApiRoute(handler, ironOptions);
} // Theses types are compatible with InferGetStaticPropsType https://nextjs.org/docs/basic-features/data-fetching#typescript-use-getstaticprops

function withSessionSsr(handler) {
  return (0,iron_session_next__WEBPACK_IMPORTED_MODULE_0__/* .withIronSessionSsr */ .c)(handler, _config__WEBPACK_IMPORTED_MODULE_1__/* .ironOptions */ .q);
}
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 2167:
/***/ ((module) => {

module.exports = require("axios");

/***/ }),

/***/ 2796:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head-manager-context.js");

/***/ }),

/***/ 4957:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head.js");

/***/ }),

/***/ 4014:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 744:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-config-context.js");

/***/ }),

/***/ 5843:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-config.js");

/***/ }),

/***/ 8524:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 8020:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 4406:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/page-path/denormalize-page-path.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 3938:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 9565:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 4365:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-middleware-regex.js");

/***/ }),

/***/ 1428:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 1292:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 979:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 6052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 4226:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 5052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 968:
/***/ ((module) => {

module.exports = require("next/head");

/***/ }),

/***/ 1853:
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 9709:
/***/ ((module) => {

module.exports = require("react-i18next");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 5609:
/***/ ((module) => {

module.exports = require("yup");

/***/ }),

/***/ 1908:
/***/ ((module) => {

module.exports = import("@hookform/resolvers/yup");;

/***/ }),

/***/ 1454:
/***/ ((module) => {

module.exports = import("iron-session");;

/***/ }),

/***/ 5641:
/***/ ((module) => {

module.exports = import("react-hook-form");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [2922,3061,9531,9682,3405], () => (__webpack_exec__(1182)));
module.exports = __webpack_exports__;

})();