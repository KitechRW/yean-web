"use strict";
(() => {
var exports = {};
exports.id = 5175;
exports.ids = [5175];
exports.modules = {

/***/ 2198:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ library),
  "getServerSideProps": () => (/* binding */ getServerSideProps)
});

// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(968);
var head_default = /*#__PURE__*/__webpack_require__.n(head_);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);
// EXTERNAL MODULE: ./src/modules/layouts/Scaffold/index.tsx + 10 modules
var Scaffold = __webpack_require__(2655);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(1853);
// EXTERNAL MODULE: ./src/modules/activities/_Partials/Library/ReadBooks/index.tsx
var ReadBooks = __webpack_require__(8418);
;// CONCATENATED MODULE: ./src/modules/activities/LibraryActivity/data.ts
const stats = [{
  title: 'Reports',
  count: 5,
  desc: 'Published'
}, {
  title: 'Articles',
  count: 5,
  desc: 'Published'
}, {
  title: 'Books',
  count: 5,
  desc: 'Published'
}, {
  title: 'Others',
  count: 5,
  desc: 'Published'
}];
// EXTERNAL MODULE: ./src/modules/_partials/Pagination/index.tsx
var Pagination = __webpack_require__(4108);
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: ./src/modules/activities/LibraryActivity/index.tsx










const LibraryActivity = ({
  data
}) => {
  var _data$pagination, _data$pagination2, _data$pagination3;

  const router = (0,router_.useRouter)();
  const [booksPart1, setBooksPart1] = external_react_default().useState([]);
  const [booksPart2, setBooksPart2] = external_react_default().useState([]);
  external_react_default().useEffect(() => {
    var _data$data;

    if (data !== null && data !== void 0 && (_data$data = data.data) !== null && _data$data !== void 0 && _data$data.rows) {
      var _data$data2, _data$data2$rows;

      setBooksPart1([]);
      setBooksPart2([]);
      data === null || data === void 0 ? void 0 : (_data$data2 = data.data) === null || _data$data2 === void 0 ? void 0 : (_data$data2$rows = _data$data2.rows) === null || _data$data2$rows === void 0 ? void 0 : _data$data2$rows.forEach((eachBook, index) => {
        if (index < 6) {
          setBooksPart1(i => [...i, eachBook]);
        } else {
          setBooksPart2(i => [...i, eachBook]);
        }
      });
    }
  }, [data]);
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(Scaffold/* default */.Z, {
    children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: "flex flex-col w-full relative bg-brand-green min-h-[312px]",
      children: [/*#__PURE__*/jsx_runtime_.jsx((image_default()), {
        src: "/assets/images/library.png",
        alt: "",
        layout: "fill",
        objectFit: "cover",
        priority: true
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: "flex flex-col h-full w-full items-center justify-center p-4 md:p-8 top-0 absolute z-10",
        children: [/*#__PURE__*/jsx_runtime_.jsx("h1", {
          className: "text-3xl md:text-6xl font-black tracking-wide text-white",
          children: "Library"
        }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          className: "flex space-x-8 mt-3",
          children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
            className: "w-24 h-0.5 bg-white"
          }), /*#__PURE__*/jsx_runtime_.jsx("div", {
            className: "w-24 h-0.5 bg-white"
          })]
        }), /*#__PURE__*/jsx_runtime_.jsx("p", {
          className: "flex items-center space-x-2 mt-4 text-sm text-white max-w-3xl text-center",
          children: "Welcome to YEAN E-Libray, We made it easier, You can find here documents, reports, articles, books and other AGRICULTURE related files"
        })]
      })]
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: "p-4 md:p-8 justify-center flex gap-3 md:gap-x-10 flex-wrap flex-shrink-0 whitespace-nowrap",
      children: [stats.map((stat, index) => /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: `hidden flex-col p-3 px-8 justify-center min-w-[255px] min-h-[145px] drop-shadow rounded-lg ${index === 0 ? 'bg-[#216B07]/60' : 'bg-white'}`,
        children: [/*#__PURE__*/jsx_runtime_.jsx("h2", {
          className: `text-base font-semibold ${index === 0 ? 'text-white' : ''}`,
          children: "Reports"
        }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          className: "flex items-center space-x-2 mt-3",
          children: [/*#__PURE__*/jsx_runtime_.jsx("p", {
            className: `bg-[#E6F3FF] p-2 px-3 rounded text-dark-green font-bold`,
            children: stat.count
          }), /*#__PURE__*/jsx_runtime_.jsx("p", {
            className: `${index === 0 ? 'text-white' : 'text-[#AAB1B7]'}`,
            children: stat.desc
          })]
        })]
      }, stat.title)), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: `flex flex-col p-3 px-8 justify-center min-w-[255px] min-h-[145px] drop-shadow rounded-lg bg-white
            }`,
        children: [/*#__PURE__*/jsx_runtime_.jsx("h2", {
          className: `text-base font-semibold `,
          children: "Books"
        }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          className: "flex items-center space-x-2 mt-3",
          children: [/*#__PURE__*/jsx_runtime_.jsx("p", {
            className: `bg-[#E6F3FF] p-2 px-3 rounded text-dark-green font-bold`,
            children: data === null || data === void 0 ? void 0 : (_data$pagination = data.pagination) === null || _data$pagination === void 0 ? void 0 : _data$pagination.count
          }), /*#__PURE__*/jsx_runtime_.jsx("p", {
            className: `text-[#AAB1B7]`,
            children: 'PUblished'
          })]
        })]
      })]
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: "p-4 md:p-8 justify-center gap-6 flex md:gap-x-10 flex-wrap w-full",
      children: [/*#__PURE__*/jsx_runtime_.jsx(ReadBooks/* default */.Z, {
        books: booksPart1
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: "w-full justify-center flex p-4 md:p-8 gap-3 items-center",
        children: [/*#__PURE__*/jsx_runtime_.jsx((image_default()), {
          src: "/assets/images/green-book.png",
          alt: "",
          width: "190",
          height: "322"
        }), /*#__PURE__*/jsx_runtime_.jsx("h1", {
          className: "text-3xl font-black text-dark-green tracking-wide",
          children: "FEATURED Things To Know About Green Flat Design"
        })]
      }), /*#__PURE__*/jsx_runtime_.jsx(ReadBooks/* default */.Z, {
        books: booksPart2
      })]
    }), /*#__PURE__*/jsx_runtime_.jsx("div", {
      className: 'justify-center flex mt-10',
      children: /*#__PURE__*/jsx_runtime_.jsx(Pagination/* default */.Z, {
        pageCount: data === null || data === void 0 ? void 0 : (_data$pagination2 = data.pagination) === null || _data$pagination2 === void 0 ? void 0 : _data$pagination2.pageCount,
        currentPage: data === null || data === void 0 ? void 0 : (_data$pagination3 = data.pagination) === null || _data$pagination3 === void 0 ? void 0 : _data$pagination3.currentPage,
        setPageNumber: page => {
          router.push('/library?pageNumber=' + page);
        }
      })
    })]
  });
};

/* harmony default export */ const activities_LibraryActivity = (LibraryActivity);
// EXTERNAL MODULE: external "axios"
var external_axios_ = __webpack_require__(2167);
var external_axios_default = /*#__PURE__*/__webpack_require__.n(external_axios_);
// EXTERNAL MODULE: ./src/modules/_partials/MetaData/index.tsx
var MetaData = __webpack_require__(3405);
;// CONCATENATED MODULE: ./src/pages/library/index.tsx








async function getServerSideProps({
  query: {
    pageNumber
  }
}) {
  return external_axios_default().get(`${"https://witwad.com"}/api/libraries?page=${pageNumber || 1}&limit=20`).then(resp => {
    return {
      props: {
        data: resp.data
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

const LibraryPage = ({
  data
}) => {
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
    children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)((head_default()), {
      children: [/*#__PURE__*/jsx_runtime_.jsx("title", {
        children: "Library - Yean"
      }), /*#__PURE__*/jsx_runtime_.jsx(MetaData/* default */.Z, {})]
    }), /*#__PURE__*/jsx_runtime_.jsx(activities_LibraryActivity, {
      data: data
    })]
  });
};

/* harmony default export */ const library = (LibraryPage);

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

/***/ 9184:
/***/ ((module) => {

module.exports = require("@mui/icons-material/PictureAsPdf");

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

/***/ 5876:
/***/ ((module) => {

module.exports = require("react-pdf");

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
var __webpack_exports__ = __webpack_require__.X(0, [2922,3061,9682,967,8790,2077,3751,3405,9055,2655,3903,4108,7139,8418], () => (__webpack_exec__(2198)));
module.exports = __webpack_exports__;

})();