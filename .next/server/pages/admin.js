"use strict";
(() => {
var exports = {};
exports.id = 6964;
exports.ids = [6964,6635];
exports.modules = {

/***/ 6635:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Nv": () => (/* binding */ useProtectedFetcher),
/* harmony export */   "TB": () => (/* binding */ useOpenFetcher)
/* harmony export */ });
/* unused harmony exports openFetcher, protectedFetcher */
/* harmony import */ var apis_restful__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3751);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2167);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5941);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([swr__WEBPACK_IMPORTED_MODULE_2__]);
swr__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];




const fetcher = config => axios.request(config).then(res => res.data);

/* unused harmony default export */ var __WEBPACK_DEFAULT_EXPORT__ = ((/* unused pure expression or super */ null && (fetcher)));
const openFetcher = async path => {
  return apis_restful__WEBPACK_IMPORTED_MODULE_0__/* ["default"].OpenRoute.getRoute */ .Z.OpenRoute.getRoute(path);
};
const protectedFetcher = async path => {
  return apis_restful__WEBPACK_IMPORTED_MODULE_0__/* ["default"].GetRoute.getRoute */ .Z.GetRoute.getRoute(path);
};
const useOpenFetcher = pathname => {
  const {
    data,
    error
  } = (0,swr__WEBPACK_IMPORTED_MODULE_2__["default"])(pathname, openFetcher);
  return {
    data: (data === null || data === void 0 ? void 0 : data.data) || {},
    isLoading: !error && !data,
    isError: error
  };
};
const useProtectedFetcher = pathname => {
  const {
    data,
    error
  } = (0,swr__WEBPACK_IMPORTED_MODULE_2__["default"])(pathname, protectedFetcher);
  return {
    data: (data === null || data === void 0 ? void 0 : data.data) || {},
    isLoading: !error && !data,
    isError: error
  };
};
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 6034:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var apis_utils_fetcher__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6635);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([apis_utils_fetcher__WEBPACK_IMPORTED_MODULE_1__]);
apis_utils_fetcher__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];





const DashboardActivity = () => {
  const {
    data: {
      data
    },
    isLoading
  } = (0,apis_utils_fetcher__WEBPACK_IMPORTED_MODULE_1__/* .useOpenFetcher */ .TB)(`/api/dashboard`);
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("div", {
    children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("div", {
      className: "flex flex-col",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
        className: "flex place-content-evenly gap-3 flex-wrap mt-5",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
          className: `flex flex-col p-3 px-8 justify-center min-w-[255px] min-h-[145px] drop-shadow rounded-lg bg-white`,
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("h2", {
            className: `text-base font-semibold`,
            children: "Articles"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
            className: "flex items-center space-x-2 mt-3",
            children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("p", {
              className: `bg-[#E6F3FF] p-2 px-3 rounded text-dark-green font-bold`,
              children: data === null || data === void 0 ? void 0 : data.articles
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("p", {
              className: `text-[#AAB1B7]`,
              children: "Registered"
            })]
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
          className: `flex flex-col p-3 px-8 justify-center min-w-[255px] min-h-[145px] drop-shadow rounded-lg bg-white`,
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("h2", {
            className: `text-base font-semibold`,
            children: "Users"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
            className: "flex items-center space-x-2 mt-3",
            children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("p", {
              className: `bg-[#E6F3FF] p-2 px-3 rounded text-dark-green font-bold`,
              children: data === null || data === void 0 ? void 0 : data.users
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("p", {
              className: `text-[#AAB1B7]`,
              children: "Registered"
            })]
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
          className: `flex flex-col p-3 px-8 justify-center min-w-[255px] min-h-[145px] drop-shadow rounded-lg bg-white`,
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("h2", {
            className: `text-base font-semibold`,
            children: "Books"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
            className: "flex items-center space-x-2 mt-3",
            children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("p", {
              className: `bg-[#E6F3FF] p-2 px-3 rounded text-dark-green font-bold`,
              children: data === null || data === void 0 ? void 0 : data.books
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("p", {
              className: `text-[#AAB1B7]`,
              children: "Registered"
            })]
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
          className: `flex flex-col p-3 px-8 justify-center min-w-[255px] min-h-[145px] drop-shadow rounded-lg bg-white`,
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("h2", {
            className: `text-base font-semibold`,
            children: "Partners"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
            className: "flex items-center space-x-2 mt-3",
            children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("p", {
              className: `bg-[#E6F3FF] p-2 px-3 rounded text-dark-green font-bold`,
              children: data === null || data === void 0 ? void 0 : data.partners
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("p", {
              className: `text-[#AAB1B7]`,
              children: "Registered"
            })]
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
          className: `flex flex-col p-3 px-8 justify-center min-w-[255px] min-h-[145px] drop-shadow rounded-lg bg-white`,
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("h2", {
            className: `text-base font-semibold`,
            children: "Jobs"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
            className: "flex items-center space-x-2 mt-3",
            children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("p", {
              className: `bg-[#E6F3FF] p-2 px-3 rounded text-dark-green font-bold`,
              children: data === null || data === void 0 ? void 0 : data.jobs
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("p", {
              className: `text-[#AAB1B7]`,
              children: "Registered"
            })]
          })]
        })]
      })
    })
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DashboardActivity);
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 5473:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "getServerSideProps": () => (/* binding */ getServerSideProps)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(968);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var modules_layouts_AdminScaffold__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6133);
/* harmony import */ var modules_activities_DashboardActivity__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6034);
/* harmony import */ var system_lib_withSession__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(7154);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([modules_activities_DashboardActivity__WEBPACK_IMPORTED_MODULE_3__, system_lib_withSession__WEBPACK_IMPORTED_MODULE_4__]);
([modules_activities_DashboardActivity__WEBPACK_IMPORTED_MODULE_3__, system_lib_withSession__WEBPACK_IMPORTED_MODULE_4__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);









const Dashboard = () => {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.Fragment, {
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("title", {
        children: "Yean"
      })
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx(modules_layouts_AdminScaffold__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx(modules_activities_DashboardActivity__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {})
    })]
  });
};

const getServerSideProps = (0,system_lib_withSession__WEBPACK_IMPORTED_MODULE_4__/* .withSessionSsr */ .f)(async ({
  req,
  res
}) => {
  const {
    user,
    token
  } = req.session;

  if (!token) {
    return {
      redirect: {
        permanent: false,
        destination: '/logout'
      }
    };
  }

  if (!['admin'].includes(`${user === null || user === void 0 ? void 0 : user.type}`)) {
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Dashboard);
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

/***/ 3329:
/***/ ((module) => {

module.exports = require("@mui/icons-material/AccountBox");

/***/ }),

/***/ 856:
/***/ ((module) => {

module.exports = require("@mui/icons-material/Category");

/***/ }),

/***/ 4173:
/***/ ((module) => {

module.exports = require("@mui/icons-material/Close");

/***/ }),

/***/ 7235:
/***/ ((module) => {

module.exports = require("@mui/icons-material/Dashboard");

/***/ }),

/***/ 4569:
/***/ ((module) => {

module.exports = require("@mui/icons-material/Feed");

/***/ }),

/***/ 5196:
/***/ ((module) => {

module.exports = require("@mui/icons-material/Grass");

/***/ }),

/***/ 7549:
/***/ ((module) => {

module.exports = require("@mui/icons-material/Group");

/***/ }),

/***/ 3147:
/***/ ((module) => {

module.exports = require("@mui/icons-material/Handshake");

/***/ }),

/***/ 3467:
/***/ ((module) => {

module.exports = require("@mui/icons-material/Home");

/***/ }),

/***/ 1419:
/***/ ((module) => {

module.exports = require("@mui/icons-material/LocalLibrary");

/***/ }),

/***/ 9801:
/***/ ((module) => {

module.exports = require("@mui/icons-material/Logout");

/***/ }),

/***/ 3365:
/***/ ((module) => {

module.exports = require("@mui/icons-material/Menu");

/***/ }),

/***/ 1567:
/***/ ((module) => {

module.exports = require("@mui/icons-material/Notifications");

/***/ }),

/***/ 4446:
/***/ ((module) => {

module.exports = require("@mui/icons-material/Pageview");

/***/ }),

/***/ 1939:
/***/ ((module) => {

module.exports = require("@mui/icons-material/Person");

/***/ }),

/***/ 8017:
/***/ ((module) => {

module.exports = require("@mui/icons-material/Search");

/***/ }),

/***/ 9153:
/***/ ((module) => {

module.exports = require("@mui/icons-material/ShoppingBasket");

/***/ }),

/***/ 9497:
/***/ ((module) => {

module.exports = require("@mui/icons-material/Work");

/***/ }),

/***/ 2120:
/***/ ((module) => {

module.exports = require("@mui/material/Avatar");

/***/ }),

/***/ 19:
/***/ ((module) => {

module.exports = require("@mui/material/Box");

/***/ }),

/***/ 3646:
/***/ ((module) => {

module.exports = require("@mui/material/Divider");

/***/ }),

/***/ 7898:
/***/ ((module) => {

module.exports = require("@mui/material/Drawer");

/***/ }),

/***/ 5768:
/***/ ((module) => {

module.exports = require("@mui/material/Popover");

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

/***/ 6927:
/***/ ((module) => {

module.exports = require("react-in-viewport");

/***/ }),

/***/ 4466:
/***/ ((module) => {

module.exports = require("react-transition-group");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 8238:
/***/ ((module) => {

module.exports = require("secure-ls");

/***/ }),

/***/ 1454:
/***/ ((module) => {

module.exports = import("iron-session");;

/***/ }),

/***/ 5941:
/***/ ((module) => {

module.exports = import("swr");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [2922,3061,9531,9682,967,8790,2077,3751,6133], () => (__webpack_exec__(5473)));
module.exports = __webpack_exports__;

})();