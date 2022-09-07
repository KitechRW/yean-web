"use strict";
(() => {
var exports = {};
exports.id = 8732;
exports.ids = [8732];
exports.modules = {

/***/ 3772:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ admin_AboutUsActivity)
});

// EXTERNAL MODULE: ./src/modules/_partials/UploadImage/index.tsx + 1 modules
var UploadImage = __webpack_require__(4427);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: ./src/modules/admin/_Partials/BannerForm/index.tsx





const CreateBanner = ({
  withSaveBtn = false
}) => {
  return /*#__PURE__*/jsx_runtime_.jsx("div", {
    children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: "flex flex-col",
      children: [withSaveBtn ? /*#__PURE__*/jsx_runtime_.jsx("div", {
        className: "mt-2 mx-10 mb-10 ",
        children: /*#__PURE__*/jsx_runtime_.jsx("h2", {
          className: "text-brand-green text-xl font-bold",
          children: "Create banner"
        })
      }) : null, /*#__PURE__*/jsx_runtime_.jsx("div", {
        children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          className: "flex justify-center ",
          children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
            className: "mx-5 flex-1 flex-wrap",
            children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
              className: "flex flex-col",
              children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                className: "mb-4",
                children: [/*#__PURE__*/jsx_runtime_.jsx("label", {
                  className: "block text-gray-700 text-sm font-bold mb-2",
                  htmlFor: "title_input",
                  children: "Title"
                }), /*#__PURE__*/jsx_runtime_.jsx("input", {
                  className: "shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline",
                  id: "title_input",
                  type: "text",
                  placeholder: "title..."
                })]
              }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                className: "mb-4",
                children: [/*#__PURE__*/jsx_runtime_.jsx("label", {
                  className: "block text-gray-700 text-sm font-bold mb-2",
                  htmlFor: "description_input",
                  children: "Description"
                }), /*#__PURE__*/jsx_runtime_.jsx("textarea", {
                  id: "description_area",
                  rows: 5,
                  className: "shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline",
                  placeholder: "Write a description...",
                  required: true
                })]
              })]
            })
          }), /*#__PURE__*/jsx_runtime_.jsx("div", {
            className: "mx-5 flex-1 self-center",
            children: /*#__PURE__*/jsx_runtime_.jsx(UploadImage/* default */.Z, {
              updateFilesCb: () => {},
              multiple: false
            })
          })]
        })
      }), withSaveBtn ? /*#__PURE__*/jsx_runtime_.jsx("div", {
        className: "mt-2 mx-10",
        children: /*#__PURE__*/jsx_runtime_.jsx("button", {
          type: "button",
          className: "bg-brand-green px-3 text-white rounded py-2",
          children: "Save"
        })
      }) : null]
    })
  });
};

/* harmony default export */ const BannerForm = (CreateBanner);
;// CONCATENATED MODULE: ./src/modules/admin/_Partials/ManageAboutUs/Edit/index.tsx






const EditAboutUs = () => {
  const handleSubmit = async () => {
    const formData = new FormData();
  };

  return /*#__PURE__*/jsx_runtime_.jsx("div", {
    children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("form", {
      onSubmit: event => {
        event.preventDefault();
        handleSubmit();
      },
      className: "pt-4",
      children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: "flex flex-col",
        children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          className: "mt-4",
          children: [/*#__PURE__*/jsx_runtime_.jsx("label", {
            className: "block text-gray-700 text-sm font-bold mb-2",
            children: "Top Image"
          }), /*#__PURE__*/jsx_runtime_.jsx("div", {
            className: "mx-5",
            children: /*#__PURE__*/jsx_runtime_.jsx(UploadImage/* default */.Z, {
              updateFilesCb: () => {},
              multiple: false
            })
          })]
        }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          className: "mt-4",
          children: [/*#__PURE__*/jsx_runtime_.jsx("label", {
            className: "block text-gray-700 text-sm font-bold mb-2",
            htmlFor: "about_us_area",
            children: "About us"
          }), /*#__PURE__*/jsx_runtime_.jsx("textarea", {
            id: "about_us_area",
            rows: 5,
            className: "shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline",
            placeholder: "Write a about us...",
            required: true
          })]
        }), /*#__PURE__*/jsx_runtime_.jsx("div", {
          className: "mt-4",
          children: /*#__PURE__*/jsx_runtime_.jsx("h2", {
            children: "Our Mission"
          })
        }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          className: "mt-4",
          children: [/*#__PURE__*/jsx_runtime_.jsx("label", {
            className: "block text-gray-700 text-sm font-bold mb-2",
            htmlFor: "first_banner_area",
            children: "First banner"
          }), /*#__PURE__*/jsx_runtime_.jsx(BannerForm, {})]
        }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          className: "mt-4",
          children: [/*#__PURE__*/jsx_runtime_.jsx("label", {
            className: "block text-gray-700 text-sm font-bold mb-2",
            htmlFor: "second_banner_area",
            children: "Second banner"
          }), /*#__PURE__*/jsx_runtime_.jsx(BannerForm, {})]
        }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          className: "mt-4",
          children: [/*#__PURE__*/jsx_runtime_.jsx("label", {
            className: "block text-gray-700 text-sm font-bold mb-2",
            htmlFor: "second_banner_area",
            children: "Third banner"
          }), /*#__PURE__*/jsx_runtime_.jsx(BannerForm, {})]
        }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          className: "mt-4",
          children: [/*#__PURE__*/jsx_runtime_.jsx("label", {
            className: "block text-gray-700 text-sm font-bold mb-2",
            htmlFor: "our_History_area",
            children: "Our History"
          }), /*#__PURE__*/jsx_runtime_.jsx("textarea", {
            id: "about_us_area",
            rows: 5,
            className: "shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline",
            placeholder: "Write our history...",
            required: true
          })]
        })]
      }), /*#__PURE__*/jsx_runtime_.jsx("div", {
        className: ""
      }), /*#__PURE__*/jsx_runtime_.jsx("button", {
        type: "submit",
        className: "text-white mt-12 bg-brand-green/80 hover:bg-brand-green focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800",
        children: "Save"
      })]
    })
  });
};

/* harmony default export */ const Edit = (EditAboutUs);
;// CONCATENATED MODULE: ./src/modules/admin/AboutUsActivity/index.tsx




const AboutUsActivity = () => {
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
    className: "flex flex-col",
    children: [/*#__PURE__*/jsx_runtime_.jsx("h2", {
      className: "mx-10 mt-10 text-xl md:text-2xl font-black text-dark-green tracking-wide",
      children: "Manage About us pane"
    }), /*#__PURE__*/jsx_runtime_.jsx("div", {
      className: "my-12 mx-5",
      children: /*#__PURE__*/jsx_runtime_.jsx(Edit, {})
    })]
  });
};

/* harmony default export */ const admin_AboutUsActivity = (AboutUsActivity);

/***/ }),

/***/ 1355:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "getServerSideProps": () => (/* binding */ getServerSideProps)
/* harmony export */ });
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(968);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var modules_layouts_AdminScaffold__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2185);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var modules_admin_AboutUsActivity__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3772);
/* harmony import */ var system_lib_withSession__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(7154);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([system_lib_withSession__WEBPACK_IMPORTED_MODULE_4__]);
system_lib_withSession__WEBPACK_IMPORTED_MODULE_4__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];









const AboutUs = () => {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.Fragment, {
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx((next_head__WEBPACK_IMPORTED_MODULE_0___default()), {
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("title", {
        children: "Yean"
      })
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx(modules_layouts_AdminScaffold__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx(modules_admin_AboutUsActivity__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {})
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AboutUs);
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 2332:
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
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2332);
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

/***/ 856:
/***/ ((module) => {

module.exports = require("@mui/icons-material/Category");

/***/ }),

/***/ 4173:
/***/ ((module) => {

module.exports = require("@mui/icons-material/Close");

/***/ }),

/***/ 4486:
/***/ ((module) => {

module.exports = require("@mui/icons-material/CloudUpload");

/***/ }),

/***/ 7235:
/***/ ((module) => {

module.exports = require("@mui/icons-material/Dashboard");

/***/ }),

/***/ 3188:
/***/ ((module) => {

module.exports = require("@mui/icons-material/Delete");

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

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [2922,3061,9531,9682,967,2077,2185,9663,3903,4427], () => (__webpack_exec__(1355)));
module.exports = __webpack_exports__;

})();