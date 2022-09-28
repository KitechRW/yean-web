"use strict";
exports.id = 8844;
exports.ids = [8844];
exports.modules = {

/***/ 8844:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ZP": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "zY": () => (/* binding */ useWindow)
/* harmony export */ });
/* unused harmony exports defaultValue, WindowContext */
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__);


const defaultValue = {
  isSmallDevice: false,
  isMediumDevice: false,
  isLargeDevice: false
};
const WindowContext = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createContext(defaultValue);
const useWindow = () => {
  return react__WEBPACK_IMPORTED_MODULE_0___default().useContext(WindowContext);
};

const WindowProvider = ({
  children
}) => {
  const [isSmallDevice, setIsSmallDevice] = react__WEBPACK_IMPORTED_MODULE_0___default().useState(false);
  const [isMediumDevice, setIsMediumDevice] = react__WEBPACK_IMPORTED_MODULE_0___default().useState(false);
  const [isLargeDevice, setIsLargeDevice] = react__WEBPACK_IMPORTED_MODULE_0___default().useState(false);
  const isMounted = react__WEBPACK_IMPORTED_MODULE_0___default().useRef(true);

  const updateWindow = () => {
    if (isMounted.current) {
      if (window.innerWidth < 768) {
        setIsSmallDevice(true);
        setIsMediumDevice(false);
        setIsLargeDevice(false);
      } else if (window.innerWidth >= 768 && window.innerWidth < 991) {
        setIsMediumDevice(true);
        setIsSmallDevice(false);
        setIsLargeDevice(false);
      } else {
        setIsSmallDevice(false);
        setIsMediumDevice(false);
        setIsLargeDevice(true);
      }
    }
  };

  react__WEBPACK_IMPORTED_MODULE_0___default().useEffect(() => {
    return () => {
      isMounted.current = false;
    };
  }, []);
  react__WEBPACK_IMPORTED_MODULE_0___default().useEffect(() => {
    updateWindow();
    window.addEventListener('resize', updateWindow);
    return () => {
      window.addEventListener('resize', updateWindow);
    };
  }, []);
  const value = react__WEBPACK_IMPORTED_MODULE_0___default().useMemo(() => {
    return {
      isSmallDevice,
      isMediumDevice,
      isLargeDevice,
      setIsLargeDevice,
      setIsMediumDevice,
      setIsSmallDevice
    };
  }, [isSmallDevice, isMediumDevice, isLargeDevice]);
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx(WindowContext.Provider, {
    value: value,
    children: children
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (WindowProvider);

/***/ })

};
;