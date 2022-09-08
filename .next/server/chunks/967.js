"use strict";
exports.id = 967;
exports.ids = [967];
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

/***/ 967:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RD": () => (/* binding */ useNavbar),
/* harmony export */   "ZP": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* unused harmony exports defaultValue, NavbarContext */
/* harmony import */ var apis_utils_constants_keys__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3932);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var system_helpers_secureLs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1930);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__);





const defaultValue = {
  currentTab: 0,
  recentPages: [],
  profile: null,

  setProfile() {},

  setViewHeader() {}

};
const NavbarContext = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createContext(defaultValue);
const useNavbar = () => {
  return react__WEBPACK_IMPORTED_MODULE_2___default().useContext(NavbarContext);
};

const NavbarProvider = ({
  children
}) => {
  const {
    pathname
  } = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();
  const [currentTab, setCurrentTab] = react__WEBPACK_IMPORTED_MODULE_2___default().useState(0);
  const [viewHeader, setViewHeader] = react__WEBPACK_IMPORTED_MODULE_2___default().useState(true);
  const [recentPages, setRecentPages] = react__WEBPACK_IMPORTED_MODULE_2___default().useState([]);
  const [profile, setProfile] = react__WEBPACK_IMPORTED_MODULE_2___default().useState(null);
  react__WEBPACK_IMPORTED_MODULE_2___default().useEffect(() => {
    setRecentPages(prev => Array.from(new Set([pathname, ...prev].slice(0, 5))));
  }, [pathname]);
  react__WEBPACK_IMPORTED_MODULE_2___default().useEffect(() => {
    const user = system_helpers_secureLs__WEBPACK_IMPORTED_MODULE_3__/* ["default"].get */ .Z.get(apis_utils_constants_keys__WEBPACK_IMPORTED_MODULE_0__/* ["default"].USER_INFO */ .Z.USER_INFO);

    if (user) {
      setProfile(prev => {
        if (!prev) {
          return user;
        }

        return prev;
      });
    }
  }, []);
  const value = react__WEBPACK_IMPORTED_MODULE_2___default().useMemo(() => {
    return {
      currentTab,
      viewHeader,
      recentPages,
      profile,
      setProfile,
      setViewHeader,
      setCurrentTab
    };
  }, [currentTab, profile, recentPages, viewHeader]);
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(NavbarContext.Provider, {
    value: value,
    children: children
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (NavbarProvider);

/***/ }),

/***/ 1930:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var secure_ls__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8238);
/* harmony import */ var secure_ls__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(secure_ls__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var apis_utils_constants_keys__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3932);



const set = (key, value) => {
  const ls = new (secure_ls__WEBPACK_IMPORTED_MODULE_0___default())({
    encodingType: 'aes'
  });
  ls.set(key, value);
};

const get = key => {
  const ls = new (secure_ls__WEBPACK_IMPORTED_MODULE_0___default())({
    encodingType: 'aes'
  });
  return ls.get(key);
};

const remove = key => {
  const ls = new (secure_ls__WEBPACK_IMPORTED_MODULE_0___default())({
    encodingType: 'aes'
  });
  return ls.remove(key);
};

const removeToken = () => {
  const ls = new (secure_ls__WEBPACK_IMPORTED_MODULE_0___default())({
    encodingType: 'aes'
  });
  return ls.remove(`${apis_utils_constants_keys__WEBPACK_IMPORTED_MODULE_1__/* ["default"].REACT_APP_ACCESS_TOKEN */ .Z.REACT_APP_ACCESS_TOKEN}`);
};

const setToken = value => {
  const ls = new (secure_ls__WEBPACK_IMPORTED_MODULE_0___default())({
    encodingType: 'aes'
  });
  ls.set(`${apis_utils_constants_keys__WEBPACK_IMPORTED_MODULE_1__/* ["default"].REACT_APP_ACCESS_TOKEN */ .Z.REACT_APP_ACCESS_TOKEN}`, value);
};

const getToken = () => {
  const ls = new (secure_ls__WEBPACK_IMPORTED_MODULE_0___default())({
    encodingType: 'aes'
  });

  try {
    return ls.get(`${apis_utils_constants_keys__WEBPACK_IMPORTED_MODULE_1__/* ["default"].REACT_APP_ACCESS_TOKEN */ .Z.REACT_APP_ACCESS_TOKEN}`) || null;
  } catch (error) {
    return null;
  }
};

const Secure = {
  set,
  setToken,
  get,
  getToken,
  remove,
  removeToken
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Secure);

/***/ })

};
;