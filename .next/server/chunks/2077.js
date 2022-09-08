"use strict";
exports.id = 2077;
exports.ids = [2077];
exports.modules = {

/***/ 2077:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _mui_icons_material_Menu__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3365);
/* harmony import */ var _mui_icons_material_Menu__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_mui_icons_material_Menu__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _mui_icons_material_Search__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8017);
/* harmony import */ var _mui_icons_material_Search__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_mui_icons_material_Search__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _mui_material_Box__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(19);
/* harmony import */ var _mui_material_Box__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Box__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _mui_material_Drawer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(7898);
/* harmony import */ var _mui_material_Drawer__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Drawer__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _Logo__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(9682);
/* harmony import */ var _NavItems__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(4949);
/* harmony import */ var system_static__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(3256);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__);













const LeftDrawer = ({
  items = system_static__WEBPACK_IMPORTED_MODULE_8__/* .navs */ .M1,
  onSearch
}) => {
  const {
    pathname
  } = (0,next_router__WEBPACK_IMPORTED_MODULE_5__.useRouter)();
  const [toggle, setToggle] = react__WEBPACK_IMPORTED_MODULE_2___default().useState(false);

  const toggleDrawer = open => event => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setToggle(open);
  };

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)("div", {
      className: "flex items-center space-x-3",
      children: [onSearch && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)("label", {
        htmlFor: "search",
        className: "flex text-white items-center relative md:hidden",
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx((_mui_icons_material_Search__WEBPACK_IMPORTED_MODULE_1___default()), {
          className: "left-3 absolute"
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx("input", {
          type: "search",
          name: "",
          id: "search",
          onClick: onSearch,
          readOnly: true,
          placeholder: "Search",
          className: "w-full placeholder:text-center rounded-full px-12 placeholder:font-bold placeholder:text-white outline-none bg-brand-green/70 bg-opacity-20 py-2"
        })]
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx("button", {
        type: "button",
        onClick: () => setToggle(!toggle),
        className: "md:hidden",
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx((_mui_icons_material_Menu__WEBPACK_IMPORTED_MODULE_0___default()), {
          fontSize: "large"
        })
      })]
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx((_mui_material_Drawer__WEBPACK_IMPORTED_MODULE_4___default()), {
      anchor: "left",
      open: toggle,
      onClose: toggleDrawer(false),
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx((_mui_material_Box__WEBPACK_IMPORTED_MODULE_3___default()), {
        sx: {
          width: 250,
          backgroundColor: '#F7FAFF'
        },
        role: "presentation",
        onClick: toggleDrawer(false),
        onKeyDown: toggleDrawer(false),
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)("div", {
          className: "flex py-3 px-4 flex-col flex-grow min-h-screen overflow-y-auto w-full",
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx(_Logo__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {}), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx("div", {
            className: "flex w-full mt-6"
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx(_NavItems__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
            items: items,
            className: "flex flex-col"
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx("div", {
            className: "flex flex-col mt-auto",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)("p", {
              className: "mt-12 text-xs py-2 px-4",
              children: ["\xA9 ", new Date().getFullYear(), " yean"]
            })
          })]
        })
      })
    })]
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (LeftDrawer);

/***/ }),

/***/ 4949:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _mui_icons_material_Person__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1939);
/* harmony import */ var _mui_icons_material_Person__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_mui_icons_material_Person__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var modules_contexts_NavbarContext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(967);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var system_static__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(3256);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__);









const NavItems = ({
  items = system_static__WEBPACK_IMPORTED_MODULE_5__/* .navs */ .M1,
  className = 'hidden md:flex items-center space-x-8'
}) => {
  const {
    pathname
  } = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();
  const {
    profile
  } = (0,modules_contexts_NavbarContext__WEBPACK_IMPORTED_MODULE_1__/* .useNavbar */ .RD)();
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx("div", {
    className: className,
    children: items.map((element, index) => {
      const isLogin = '/login' === element.path;
      return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
        href: profile !== null && profile !== void 0 && profile.user && isLogin ? '/logout' : element.path,
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("h2", {
          className: `hover:opacity-75 cursor-pointer ${pathname === element.path ? 'border-b-4 border-brand-yellow' : 'border-none'} ${isLogin ? 'bg-brand-yellow rounded-full drop-shadow px-12 py-3 font-semibold text-white flex items-center space-x-2' : 'text-dark-green font-medium py-4'}`,
          children: [isLogin ? /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx((_mui_icons_material_Person__WEBPACK_IMPORTED_MODULE_0___default()), {}) : null, /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx("span", {
            children: profile !== null && profile !== void 0 && profile.user && isLogin ? 'Logout' : element.label
          })]
        })
      }, element.label);
    })
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (NavItems);

/***/ }),

/***/ 3256:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EW": () => (/* binding */ adminNavs),
/* harmony export */   "M1": () => (/* binding */ navs),
/* harmony export */   "QC": () => (/* binding */ headerNavs)
/* harmony export */ });
/* harmony import */ var _mui_icons_material_Group__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7549);
/* harmony import */ var _mui_icons_material_Group__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_mui_icons_material_Group__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _mui_icons_material_Work__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9497);
/* harmony import */ var _mui_icons_material_Work__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_mui_icons_material_Work__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _mui_icons_material_Pageview__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4446);
/* harmony import */ var _mui_icons_material_Pageview__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_mui_icons_material_Pageview__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _mui_icons_material_Feed__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4569);
/* harmony import */ var _mui_icons_material_Feed__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_mui_icons_material_Feed__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _mui_icons_material_Category__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(856);
/* harmony import */ var _mui_icons_material_Category__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_mui_icons_material_Category__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _mui_icons_material_Dashboard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(7235);
/* harmony import */ var _mui_icons_material_Dashboard__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_mui_icons_material_Dashboard__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _mui_icons_material_Handshake__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(3147);
/* harmony import */ var _mui_icons_material_Handshake__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_mui_icons_material_Handshake__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _mui_icons_material_LocalLibrary__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(1419);
/* harmony import */ var _mui_icons_material_LocalLibrary__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_mui_icons_material_LocalLibrary__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _mui_icons_material_ShoppingBasket__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(9153);
/* harmony import */ var _mui_icons_material_ShoppingBasket__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_mui_icons_material_ShoppingBasket__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _mui_icons_material_Grass__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(5196);
/* harmony import */ var _mui_icons_material_Grass__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_mui_icons_material_Grass__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _mui_icons_material_Home__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(3467);
/* harmony import */ var _mui_icons_material_Home__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_mui_icons_material_Home__WEBPACK_IMPORTED_MODULE_10__);











const navs = [{
  path: '/about',
  label: 'About us'
}, {
  path: '/blog',
  label: 'Blog'
}, {
  path: '/contact',
  label: 'Contact us'
}, {
  path: '/login',
  label: 'Login'
}];
const headerNavs = [{
  icon: (_mui_icons_material_Home__WEBPACK_IMPORTED_MODULE_10___default()),
  path: '/',
  label: 'Home',
  hasSub: false
}, {
  icon: (_mui_icons_material_Grass__WEBPACK_IMPORTED_MODULE_9___default()),
  path: '/doings',
  label: 'What we do?',
  hasSub: true
}, {
  icon: (_mui_icons_material_ShoppingBasket__WEBPACK_IMPORTED_MODULE_8___default()),
  path: '/farmer-platform',
  label: 'Farmer Platform',
  hasSub: false
}, {
  icon: (_mui_icons_material_LocalLibrary__WEBPACK_IMPORTED_MODULE_7___default()),
  path: '/library',
  label: 'Library',
  hasSub: false
}, {
  icon: (_mui_icons_material_Handshake__WEBPACK_IMPORTED_MODULE_6___default()),
  path: '/partner',
  label: 'Partner with Us',
  hasSub: false
}];
const adminNavs = [{
  icon: (_mui_icons_material_Dashboard__WEBPACK_IMPORTED_MODULE_5___default()),
  label: 'Dashboard',
  path: '/admin'
}, {
  icon: (_mui_icons_material_Category__WEBPACK_IMPORTED_MODULE_4___default()),
  label: 'Categories',
  path: '/admin/categories'
}, {
  icon: (_mui_icons_material_Feed__WEBPACK_IMPORTED_MODULE_3___default()),
  label: 'Articles',
  path: '/admin/articles'
}, {
  icon: (_mui_icons_material_LocalLibrary__WEBPACK_IMPORTED_MODULE_7___default()),
  label: 'Library',
  path: '/admin/libraries'
}, // {
//   icon: Extension,
//   label: 'Extension Materials',
//   path: '/admin/extension-materials',
// },
{
  icon: (_mui_icons_material_Handshake__WEBPACK_IMPORTED_MODULE_6___default()),
  label: 'Partners',
  path: '/admin/partners'
}, {
  icon: (_mui_icons_material_Pageview__WEBPACK_IMPORTED_MODULE_2___default()),
  label: 'Home Page',
  path: '/admin/home'
}, // {
//   icon: Pageview,
//   label: 'About us',
//   path: '/admin/about-us',
// },
// {
//   icon: Pageview,
//   label: 'Impact',
//   path: '/admin/impact',
// },
// {
//   icon: Pageview,
//   label: 'Models',
//   path: '/admin/models',
// },
// {
//   icon: Pageview,
//   label: 'Partner with us',
//   path: '/admin/partner-with-us',
// },
{
  icon: (_mui_icons_material_Work__WEBPACK_IMPORTED_MODULE_1___default()),
  label: 'Jobs',
  path: '/admin/job'
}, {
  icon: (_mui_icons_material_Work__WEBPACK_IMPORTED_MODULE_1___default()),
  label: 'Projects',
  path: '/admin/projects'
}, {
  icon: (_mui_icons_material_Group__WEBPACK_IMPORTED_MODULE_0___default()),
  label: 'Users',
  path: '/admin/users',
  onlyAdmin: true
}];

/***/ })

};
;