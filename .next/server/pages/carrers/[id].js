"use strict";
(() => {
var exports = {};
exports.id = 450;
exports.ids = [450];
exports.modules = {

/***/ 2756:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _id_),
  "getServerSideProps": () => (/* binding */ getServerSideProps)
});

// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(968);
var head_default = /*#__PURE__*/__webpack_require__.n(head_);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./src/modules/layouts/Scaffold/index.tsx + 10 modules
var Scaffold = __webpack_require__(2655);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: ./src/modules/activities/CarrerActivity/index.tsx






const CarrerActivity = ({
  data
}) => {
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(Scaffold/* default */.Z, {
    children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: "flex-wrap bg-white justify-center items-center w-full p-4 md:p-8 flex gap-4",
      children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: "flex flex-col",
        children: [/*#__PURE__*/jsx_runtime_.jsx("h1", {
          className: "text-2xl md:text-4xl text-dark-green tracking-wide font-black",
          children: data === null || data === void 0 ? void 0 : data.title
        }), /*#__PURE__*/jsx_runtime_.jsx("p", {
          className: "mt-2 text-[#767676] max-w-sm",
          children: "The following are the description about this job"
        })]
      }), /*#__PURE__*/jsx_runtime_.jsx((image_default()), {
        src: "/assets/images/finding_worker.svg",
        width: "397",
        height: "300",
        alt: ""
      })]
    }), /*#__PURE__*/jsx_runtime_.jsx("div", {
      className: "p-4 md:p-8 items-center flex flex-col bg-[#F5F7FA]",
      children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: "overflow-hidden bg-white shadow sm:rounded-lg",
        children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          className: "px-4 py-5 sm:px-6",
          children: [/*#__PURE__*/jsx_runtime_.jsx("h3", {
            className: "text-lg font-medium leading-6 text-gray-900",
            children: "Job Information"
          }), /*#__PURE__*/jsx_runtime_.jsx("p", {
            className: "mt-1 max-w-2xl text-sm text-gray-500",
            children: "Job details and application."
          })]
        }), /*#__PURE__*/jsx_runtime_.jsx("div", {
          className: "border-t border-gray-200",
          children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("dl", {
            children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
              className: "bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6",
              children: [/*#__PURE__*/jsx_runtime_.jsx("dt", {
                className: "text-sm font-medium text-gray-500",
                children: "Title"
              }), /*#__PURE__*/jsx_runtime_.jsx("dd", {
                className: "mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0",
                children: data === null || data === void 0 ? void 0 : data.title
              })]
            }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
              className: "bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6",
              children: [/*#__PURE__*/jsx_runtime_.jsx("dt", {
                className: "text-sm font-medium text-gray-500",
                children: "Keyword"
              }), /*#__PURE__*/jsx_runtime_.jsx("dd", {
                className: "mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0",
                children: data === null || data === void 0 ? void 0 : data.keyword
              })]
            }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
              className: "bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6",
              children: [/*#__PURE__*/jsx_runtime_.jsx("dt", {
                className: "text-sm font-medium text-gray-500",
                children: "Location"
              }), /*#__PURE__*/jsx_runtime_.jsx("dd", {
                className: "mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0",
                children: data === null || data === void 0 ? void 0 : data.location
              })]
            }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
              className: "bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6",
              children: [/*#__PURE__*/jsx_runtime_.jsx("dt", {
                className: "text-sm font-medium text-gray-500",
                children: "Category "
              }), /*#__PURE__*/jsx_runtime_.jsx("dd", {
                className: "mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0",
                children: data === null || data === void 0 ? void 0 : data.category
              })]
            }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
              className: "bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6",
              children: [/*#__PURE__*/jsx_runtime_.jsx("dt", {
                className: "text-sm font-medium text-gray-500",
                children: "Description"
              }), /*#__PURE__*/jsx_runtime_.jsx("dd", {
                className: "mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0",
                children: data === null || data === void 0 ? void 0 : data.description
              })]
            })]
          })
        })]
      })
    })]
  });
};

/* harmony default export */ const activities_CarrerActivity = (CarrerActivity);
// EXTERNAL MODULE: external "axios"
var external_axios_ = __webpack_require__(2167);
var external_axios_default = /*#__PURE__*/__webpack_require__.n(external_axios_);
// EXTERNAL MODULE: ./src/modules/_partials/MetaData/index.tsx
var MetaData = __webpack_require__(3405);
;// CONCATENATED MODULE: ./src/pages/carrers/[id]/index.tsx








async function getServerSideProps({
  query: {
    id
  }
}) {
  return external_axios_default().get(`${"http://test.yeanagro.org"}/api/jobs/${id}`).then(resp => {
    return {
      props: {
        data: resp.data.data
      }
    };
  }).catch(ex => {
    console.error(ex);
    return {
      props: {
        data: {}
      }
    };
  });
}

const JobDescriptionPage = props => {
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
    children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)((head_default()), {
      children: [/*#__PURE__*/jsx_runtime_.jsx("title", {
        children: "Yean"
      }), /*#__PURE__*/jsx_runtime_.jsx(MetaData/* default */.Z, {})]
    }), /*#__PURE__*/jsx_runtime_.jsx(activities_CarrerActivity, {
      data: props.data
    })]
  });
};

/* harmony default export */ const _id_ = (JobDescriptionPage);

/***/ }),

/***/ 3329:
/***/ ((module) => {

module.exports = require("@mui/icons-material/AccountBox");

/***/ }),

/***/ 765:
/***/ ((module) => {

module.exports = require("@mui/icons-material/ArrowDropDown");

/***/ }),

/***/ 856:
/***/ ((module) => {

module.exports = require("@mui/icons-material/Category");

/***/ }),

/***/ 7235:
/***/ ((module) => {

module.exports = require("@mui/icons-material/Dashboard");

/***/ }),

/***/ 9891:
/***/ ((module) => {

module.exports = require("@mui/icons-material/Extension");

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

/***/ 3765:
/***/ ((module) => {

module.exports = require("@mui/material/Alert");

/***/ }),

/***/ 2120:
/***/ ((module) => {

module.exports = require("@mui/material/Avatar");

/***/ }),

/***/ 19:
/***/ ((module) => {

module.exports = require("@mui/material/Box");

/***/ }),

/***/ 7898:
/***/ ((module) => {

module.exports = require("@mui/material/Drawer");

/***/ }),

/***/ 5768:
/***/ ((module) => {

module.exports = require("@mui/material/Popover");

/***/ }),

/***/ 9174:
/***/ ((module) => {

module.exports = require("@mui/material/Snackbar");

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

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [2922,3061,9682,967,8790,2077,3751,3405,9055,2655], () => (__webpack_exec__(2756)));
module.exports = __webpack_exports__;

})();