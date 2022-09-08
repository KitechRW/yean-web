"use strict";
(() => {
var exports = {};
exports.id = 2673;
exports.ids = [2673];
exports.modules = {

/***/ 2391:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _slugName_),
  "getServerSideProps": () => (/* binding */ getServerSideProps)
});

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);
// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(968);
var head_default = /*#__PURE__*/__webpack_require__.n(head_);
// EXTERNAL MODULE: external "@mui/material/Avatar"
var Avatar_ = __webpack_require__(2120);
var Avatar_default = /*#__PURE__*/__webpack_require__.n(Avatar_);
;// CONCATENATED MODULE: external "date-fns"
const external_date_fns_namespaceObject = require("date-fns");
// EXTERNAL MODULE: ./src/modules/layouts/Scaffold/index.tsx + 11 modules
var Scaffold = __webpack_require__(3781);
// EXTERNAL MODULE: ./src/modules/_partials/CustomImage/index.tsx
var CustomImage = __webpack_require__(9663);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(1853);
// EXTERNAL MODULE: ./src/modules/activities/_Partials/Blogs/index.tsx
var Blogs = __webpack_require__(277);
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: ./src/modules/activities/SingleBlogActivity/index.tsx











const SingleBlogActivity = ({
  data
}) => {
  var _data$article2, _data$article3, _data$article3$author, _data$author, _data$author2, _data$article4, _data$article5, _data$article6;

  const contentRef = external_react_default().useRef(null);
  const {
    push
  } = (0,router_.useRouter)();

  const handleClick = () => {
    push('/blog/cow-farmers');
  };

  external_react_default().useEffect(() => {
    var _data$article;

    if (data !== null && data !== void 0 && (_data$article = data.article) !== null && _data$article !== void 0 && _data$article.text && contentRef.current) {
      // @ts-ignore
      contentRef.current.innerHTML = data.article.text;
    }
  }, [data]);
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(Scaffold/* default */.Z, {
    children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
      className: "w-full px-4 bg-white md:px-8 pt-12 border-b border-[#E6E6E6]",
      children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: "px-4 md:px-8 w-full max-w-6xl mx-auto flex items-center space-x-4",
        children: [/*#__PURE__*/jsx_runtime_.jsx((link_default()), {
          href: "/blog",
          children: /*#__PURE__*/jsx_runtime_.jsx("span", {
            className: "cursor-pointer text-sm font-medium pb-3",
            children: "All"
          })
        }), /*#__PURE__*/jsx_runtime_.jsx("span", {
          className: "cursor-pointer text-sm font-medium pb-3 border-b-2 border-b-[#FCB316]",
          children: "Blogs"
        })]
      })
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: "w-full px-4 bg-white md:px-8 py-6 max-w-6xl mx-auto flex flex-col",
      children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: "group-hover:opacity-80 flex flex-col relative w-full max-w-[912px] min-h-[490px]",
        children: [/*#__PURE__*/jsx_runtime_.jsx(CustomImage/* default */.Z, {
          src: data === null || data === void 0 ? void 0 : (_data$article2 = data.article) === null || _data$article2 === void 0 ? void 0 : _data$article2.image,
          alt: "",
          layout: "fill",
          loading: "lazy"
        }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          className: "bottom-0 left-0 right-0 absolute flex flex-col items-start w-ful",
          children: [/*#__PURE__*/jsx_runtime_.jsx("p", {
            className: "text-dark-green bg-[#FCB316] px-4 py-3",
            children: "Blog"
          }), /*#__PURE__*/jsx_runtime_.jsx("p", {
            className: "w-full bg-[#FCB316] h-1"
          })]
        })]
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: "px-3 py-3 space-x-3 flex items-center",
        children: [/*#__PURE__*/jsx_runtime_.jsx((Avatar_default()), {
          src: "/assets/images/avatar.png",
          alt: (data === null || data === void 0 ? void 0 : (_data$article3 = data.article) === null || _data$article3 === void 0 ? void 0 : (_data$article3$author = _data$article3.author) === null || _data$article3$author === void 0 ? void 0 : _data$article3$author.firstname) || ''
        }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          className: "flex flex-col text-[#767676]",
          children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("h1", {
            className: "text-sm font-bold",
            children: [data === null || data === void 0 ? void 0 : (_data$author = data.author) === null || _data$author === void 0 ? void 0 : _data$author.firstname, " ", data === null || data === void 0 ? void 0 : (_data$author2 = data.author) === null || _data$author2 === void 0 ? void 0 : _data$author2.lastname]
          }), (data === null || data === void 0 ? void 0 : (_data$article4 = data.article) === null || _data$article4 === void 0 ? void 0 : _data$article4.createdAt) && /*#__PURE__*/jsx_runtime_.jsx("p", {
            className: "text-xs",
            children: (0,external_date_fns_namespaceObject.format)(new Date(data === null || data === void 0 ? void 0 : (_data$article5 = data.article) === null || _data$article5 === void 0 ? void 0 : _data$article5.createdAt), 'dd MMMM yyyy')
          })]
        })]
      }), /*#__PURE__*/jsx_runtime_.jsx("h1", {
        className: "mt-6 text-[#6F7D1D] text-lg md:text-xl font-semibold",
        children: data === null || data === void 0 ? void 0 : (_data$article6 = data.article) === null || _data$article6 === void 0 ? void 0 : _data$article6.title
      }), /*#__PURE__*/jsx_runtime_.jsx("div", {
        ref: contentRef,
        className: "mt-4 text-justify leading-relaxed flex flex-col space-y-3 hideContentNotInTagUL"
      }), /*#__PURE__*/jsx_runtime_.jsx("h1", {
        className: "mt-12 mb-6 text-xl md:text-2xl text-dark-green font-bold bg-brand-green/10 p-2 text-center",
        children: "View Related Blogs"
      }), /*#__PURE__*/jsx_runtime_.jsx(Blogs/* default */.Z, {
        size: 3,
        onClick: handleClick
      })]
    })]
  });
};

/* harmony default export */ const activities_SingleBlogActivity = (SingleBlogActivity);
// EXTERNAL MODULE: ./src/core/factory/fact.http.ts
var fact_http = __webpack_require__(8894);
// EXTERNAL MODULE: ./src/modules/_partials/MetaData/index.tsx
var MetaData = __webpack_require__(3405);
;// CONCATENATED MODULE: ./src/pages/blog/[slugName]/index.tsx








async function getServerSideProps({
  query
}) {
  return fact_http/* default.axios.get */.Z.axios.get(`${"http://test.yeanagro.org"}/api/articles/${query.slugName}`).then(resp => {
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

const SingleBlogPage = ({
  data
}) => {
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
    children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)((head_default()), {
      children: [/*#__PURE__*/jsx_runtime_.jsx("title", {
        children: "Yean"
      }), /*#__PURE__*/jsx_runtime_.jsx(MetaData/* default */.Z, {})]
    }), /*#__PURE__*/jsx_runtime_.jsx(activities_SingleBlogActivity, {
      data: data
    })]
  });
};

/* harmony default export */ const _slugName_ = (SingleBlogPage);

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

/***/ 3365:
/***/ ((module) => {

module.exports = require("@mui/icons-material/Menu");

/***/ }),

/***/ 7460:
/***/ ((module) => {

module.exports = require("@mui/icons-material/NavigateBefore");

/***/ }),

/***/ 6179:
/***/ ((module) => {

module.exports = require("@mui/icons-material/NavigateNext");

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
var __webpack_exports__ = __webpack_require__.X(0, [2922,3061,9682,967,2077,3751,3405,9055,3781,9663,4108,277], () => (__webpack_exec__(2391)));
module.exports = __webpack_exports__;

})();