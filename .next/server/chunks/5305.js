"use strict";
exports.id = 5305;
exports.ids = [5305,6635];
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

/***/ 847:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _mui_icons_material_ChevronLeft__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6959);
/* harmony import */ var _mui_icons_material_ChevronLeft__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_mui_icons_material_ChevronLeft__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _mui_icons_material_ChevronRight__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2818);
/* harmony import */ var _mui_icons_material_ChevronRight__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_mui_icons_material_ChevronRight__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _CustomImage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9663);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__);







const CarouselPartners = ({
  data
}) => {
  const maxScrollWidth = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)(0);
  const {
    0: currentIndex,
    1: setCurrentIndex
  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(0);
  const carousel = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)(null);

  const isDisabled = direction => {
    if (direction === 'prev') {
      return currentIndex <= 0;
    }

    if (direction === 'next' && carousel.current !== null) {
      return carousel.current.offsetWidth * currentIndex > maxScrollWidth.current;
    }

    return false;
  };

  const movePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(prevState => prevState - 1);
    }
  };

  const moveNext = () => {
    if (carousel.current !== null && carousel.current.offsetWidth * currentIndex <= maxScrollWidth.current) {
      setCurrentIndex(prevState => prevState + 1);
    }
  };

  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(() => {
    if (carousel !== null && carousel.current !== null) {
      carousel.current.scrollLeft = carousel.current.offsetWidth * currentIndex;
    }
  }, [currentIndex]);
  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(() => {
    maxScrollWidth.current = carousel.current ? carousel.current.scrollWidth - carousel.current.offsetWidth : 0;
  }, [data]);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
    className: "relative overflow-hidden w-full py-2",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
      className: "flex items-center justify-between absolute top-0 left-0 w-full h-full",
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("button", {
        disabled: isDisabled('prev'),
        onClick: movePrev,
        type: "button",
        className: "z-10 right-0 absolute bg-brand-violet disabled:bg-brand-violet/25 px-2 py-1 text-white",
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx((_mui_icons_material_ChevronRight__WEBPACK_IMPORTED_MODULE_1___default()), {})
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("button", {
        disabled: isDisabled('next'),
        onClick: moveNext,
        type: "button",
        className: "z-10 left-0 absolute bg-brand-violet disabled:bg-brand-violet/25 px-2 py-1 text-white",
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx((_mui_icons_material_ChevronLeft__WEBPACK_IMPORTED_MODULE_0___default()), {})
      })]
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("div", {
      ref: carousel,
      className: "relative flex gap-3 overflow-x-auto md:overflow-hidden scroll-smooth snap-x snap-mandatory touch-pan-x z-0",
      children: data === null || data === void 0 ? void 0 : data.map((element, index) => {
        return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("div", {
          className: "flex shrink-0 flex-col group relative snap-start",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("a", {
            href: element.portfolio,
            target: "_blank",
            rel: "noopener noreferrer",
            className: "flex flex-col items-center shrink-0",
            children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(_CustomImage__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
              src: element.image,
              alt: "",
              layout: "fixed",
              width: "150px",
              height: "92px"
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("p", {
              className: "sr-only",
              children: element.companyName
            })]
          }, element.id)
        }, element.id);
      })
    })]
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CarouselPartners);

/***/ })

};
;