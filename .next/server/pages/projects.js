"use strict";
(() => {
var exports = {};
exports.id = 3327;
exports.ids = [3327];
exports.modules = {

/***/ 1252:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ projects),
  "getServerSideProps": () => (/* binding */ getServerSideProps)
});

// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(968);
var head_default = /*#__PURE__*/__webpack_require__.n(head_);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "@mui/icons-material/ChevronRight"
var ChevronRight_ = __webpack_require__(2818);
var ChevronRight_default = /*#__PURE__*/__webpack_require__.n(ChevronRight_);
// EXTERNAL MODULE: ./src/modules/layouts/Scaffold/index.tsx + 10 modules
var Scaffold = __webpack_require__(253);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
;// CONCATENATED MODULE: external "@mui/icons-material/ArrowRightAlt"
const ArrowRightAlt_namespaceObject = require("@mui/icons-material/ArrowRightAlt");
var ArrowRightAlt_default = /*#__PURE__*/__webpack_require__.n(ArrowRightAlt_namespaceObject);
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: ./src/modules/activities/ProjectsActivity/index.tsx









const ProjectsActivity = ({
  data
}) => {
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(Scaffold/* default */.Z, {
    children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: "flex flex-col w-full relative bg-brand-green min-h-[312px]",
      children: [/*#__PURE__*/jsx_runtime_.jsx((image_default()), {
        src: "/assets/images/services.png",
        alt: "",
        layout: "fill",
        objectFit: "cover",
        priority: true
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: "flex flex-col h-full w-full justify-end p-4 md:p-8 top-0 absolute z-10",
        children: [/*#__PURE__*/jsx_runtime_.jsx("h1", {
          className: "text-3xl md:text-6xl font-black tracking-wide text-white",
          children: "Projects"
        }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("p", {
          className: "flex items-center space-x-2 text-sm text-white",
          children: [/*#__PURE__*/jsx_runtime_.jsx((link_default()), {
            href: "/#",
            children: "What we do?"
          }), " ", /*#__PURE__*/jsx_runtime_.jsx((ChevronRight_default()), {}), " -", ' ', "Projects"]
        })]
      })]
    }), /*#__PURE__*/jsx_runtime_.jsx("div", {
      className: "flex flex-wrap justify-center w-full p-4 gap-10 md:p-8",
      children: data?.rows?.map((element, index) => /*#__PURE__*/jsx_runtime_.jsx("button", {
        className: "max-w-xl",
        children: /*#__PURE__*/jsx_runtime_.jsx((link_default()), {
          href: `/project/${element.id}`,
          children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
            className: "relative flex flex-col rounded-lg drop-shadow shadow-xl",
            children: [/*#__PURE__*/jsx_runtime_.jsx((image_default()), {
              src: element.image,
              alt: "",
              loading: "lazy",
              width: "479.65",
              height: "289.99"
            }), /*#__PURE__*/jsx_runtime_.jsx("h2", {
              className: "font-bold text-3xl ml-3 mt-6",
              children: element.name
            }), /*#__PURE__*/jsx_runtime_.jsx("p", {
              className: "mt-12 ml-3 line-clamp-3",
              children: element.description
            }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("button", {
              className: "font-bold mt-7 ml-5 mb-3 self-start",
              children: ["Read more ", /*#__PURE__*/jsx_runtime_.jsx((ArrowRightAlt_default()), {})]
            }), /*#__PURE__*/jsx_runtime_.jsx("div", {
              className: "flex flex-grow w-full h-full top-0 absolute"
            })]
          })
        })
      }, `projects_${index}`))
    })]
  });
};

/* harmony default export */ const activities_ProjectsActivity = (ProjectsActivity);
// EXTERNAL MODULE: ./src/core/factory/fact.http.ts
var fact_http = __webpack_require__(8058);
// EXTERNAL MODULE: ./src/modules/_partials/MetaData/index.tsx
var MetaData = __webpack_require__(3113);
;// CONCATENATED MODULE: ./src/pages/projects/index.tsx








async function getServerSideProps() {
  return fact_http/* default.axios.get */.Z.axios.get(`${"https://witwad.com"}/api/projects`).then(resp => {
    return {
      props: {
        data: resp.data?.data,
        status: resp.status
      }
    };
  }).catch(ex => {
    console.error(ex);
    return {
      props: {
        data: {},
        status: 404
      }
    };
  });
}

const ProjectsPage = props => {
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
    children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)((head_default()), {
      children: [/*#__PURE__*/jsx_runtime_.jsx("title", {
        children: "Projects - Yean"
      }), /*#__PURE__*/jsx_runtime_.jsx(MetaData/* default */.Z, {})]
    }), /*#__PURE__*/jsx_runtime_.jsx(activities_ProjectsActivity, {
      data: props.data
    })]
  });
};

/* harmony default export */ const projects = (ProjectsPage);

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

/***/ 2818:
/***/ ((module) => {

module.exports = require("@mui/icons-material/ChevronRight");

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

/***/ 3280:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/app-router-context.js");

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

/***/ 1751:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/add-path-prefix.js");

/***/ }),

/***/ 6220:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/compare-states.js");

/***/ }),

/***/ 299:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-next-pathname-info.js");

/***/ }),

/***/ 3938:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 9565:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 5789:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-next-pathname-info.js");

/***/ }),

/***/ 1428:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 8854:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-path.js");

/***/ }),

/***/ 1292:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 4567:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/path-has-prefix.js");

/***/ }),

/***/ 979:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 3297:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/remove-trailing-slash.js");

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
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [676,3061,6945,4653,8844,9391,637,3113,8805,253], () => (__webpack_exec__(1252)));
module.exports = __webpack_exports__;

})();