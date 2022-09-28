"use strict";
exports.id = 1663;
exports.ids = [1663];
exports.modules = {

/***/ 1663:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5675);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





const CustomImage = props => {
  const {
    alt
  } = props;
  const errorImage = '/assets/images/placeholder.png';
  const [src, setSrc] = react__WEBPACK_IMPORTED_MODULE_1___default().useState(props.src);
  react__WEBPACK_IMPORTED_MODULE_1___default().useEffect(() => {
    setSrc(props.src);
  }, [props.src]);

  if (!src) {
    return null;
  }

  let image = src || '';
  image = image.startsWith('/uploads') ? image : `/uploads/${image}`;
  let imageUrl = image;

  if (imageUrl.slice(0, 1) !== '/' && imageUrl.slice(0, 3) !== 'http') {
    imageUrl = `/${src}`;
  }

  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx((next_image__WEBPACK_IMPORTED_MODULE_0___default()), _objectSpread(_objectSpread({}, props), {}, {
    objectFit: props.objectFit || 'cover',
    alt: alt,
    src: imageUrl,
    onError: () => {
      setSrc(errorImage);
    },
    onLoadingComplete: result => {
      if (result.naturalWidth === 0) {
        setSrc(errorImage);
      }
    }
  }));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CustomImage);

/***/ })

};
;