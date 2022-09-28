(() => {
var exports = {};
exports.id = 5405;
exports.ids = [5405,5377];
exports.modules = {

/***/ 5377:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Nv": () => (/* binding */ useProtectedFetcher),
/* harmony export */   "TB": () => (/* binding */ useOpenFetcher)
/* harmony export */ });
/* unused harmony exports openFetcher, protectedFetcher */
/* harmony import */ var apis_restful__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(637);
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
    data: data?.data || {},
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
    data: data?.data || {},
    isLoading: !error && !data,
    isError: error
  };
};
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 7760:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ _partials_CarouselPartners)
});

;// CONCATENATED MODULE: external "@mui/icons-material/ChevronLeft"
const ChevronLeft_namespaceObject = require("@mui/icons-material/ChevronLeft");
var ChevronLeft_default = /*#__PURE__*/__webpack_require__.n(ChevronLeft_namespaceObject);
// EXTERNAL MODULE: external "@mui/icons-material/ChevronRight"
var ChevronRight_ = __webpack_require__(2818);
var ChevronRight_default = /*#__PURE__*/__webpack_require__.n(ChevronRight_);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./src/modules/_partials/CustomImage/index.tsx
var CustomImage = __webpack_require__(1663);
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: ./src/modules/_partials/CarouselPartners/index.tsx







const CarouselPartners = ({
  data
}) => {
  const maxScrollWidth = (0,external_react_.useRef)(0);
  const {
    0: currentIndex,
    1: setCurrentIndex
  } = (0,external_react_.useState)(0);
  const carousel = (0,external_react_.useRef)(null);

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

  (0,external_react_.useEffect)(() => {
    if (carousel !== null && carousel.current !== null) {
      carousel.current.scrollLeft = carousel.current.offsetWidth * currentIndex;
    }
  }, [currentIndex]);
  (0,external_react_.useEffect)(() => {
    maxScrollWidth.current = carousel.current ? carousel.current.scrollWidth - carousel.current.offsetWidth : 0;
  }, [data]);
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
    className: "relative overflow-hidden w-full py-2",
    children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: "flex items-center justify-between absolute top-0 left-0 w-full h-full",
      children: [/*#__PURE__*/jsx_runtime_.jsx("button", {
        disabled: isDisabled('prev'),
        onClick: movePrev,
        type: "button",
        className: "z-10 right-0 absolute bg-brand-violet disabled:bg-brand-violet/25 px-2 py-1 text-white",
        children: /*#__PURE__*/jsx_runtime_.jsx((ChevronRight_default()), {})
      }), /*#__PURE__*/jsx_runtime_.jsx("button", {
        disabled: isDisabled('next'),
        onClick: moveNext,
        type: "button",
        className: "z-10 left-0 absolute bg-brand-violet disabled:bg-brand-violet/25 px-2 py-1 text-white",
        children: /*#__PURE__*/jsx_runtime_.jsx((ChevronLeft_default()), {})
      })]
    }), /*#__PURE__*/jsx_runtime_.jsx("div", {
      ref: carousel,
      className: "relative flex gap-3 overflow-x-auto md:overflow-hidden scroll-smooth snap-x snap-mandatory touch-pan-x z-0",
      children: data?.map((element, index) => {
        return /*#__PURE__*/jsx_runtime_.jsx("div", {
          className: "flex shrink-0 flex-col group relative snap-start",
          children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("a", {
            href: element.portfolio,
            target: "_blank",
            rel: "noopener noreferrer",
            className: "flex flex-col items-center shrink-0",
            children: [/*#__PURE__*/jsx_runtime_.jsx(CustomImage/* default */.Z, {
              src: element.image,
              alt: "",
              layout: "fixed",
              width: "150px",
              height: "92px"
            }), /*#__PURE__*/jsx_runtime_.jsx("p", {
              className: "sr-only",
              children: element.companyName
            })]
          }, element.id)
        }, element.id);
      })
    })]
  });
};

/* harmony default export */ const _partials_CarouselPartners = (CarouselPartners);

/***/ }),

/***/ 1315:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ _partials_Slides)
});

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "@mui/icons-material/LocalLibrary"
var LocalLibrary_ = __webpack_require__(1419);
var LocalLibrary_default = /*#__PURE__*/__webpack_require__.n(LocalLibrary_);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(1853);
// EXTERNAL MODULE: ./src/modules/_partials/CustomImage/index.tsx
var CustomImage = __webpack_require__(1663);
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: ./src/modules/_partials/SlideItem/index.tsx







const SlideItem = ({
  data
}) => {
  const router = (0,router_.useRouter)();

  const handleClick = () => {
    router.push(`/blog/${data?.id}`);
  };

  let image = data?.image || '';
  image = image.startsWith('/uploads') ? image : `/uploads/${image}`;
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
    className: "shrink-0 snap-start inline-grid items-center gap-x-10 gap-y-5 md:grid-cols-2 bg-brand-green px-4 md:px-0 py-4 md:py-8 w-full",
    children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: "flex flex-col items-start md:pl-8",
      children: [/*#__PURE__*/jsx_runtime_.jsx("h1", {
        className: "font-bold text-2xl md:text-4xl text-white tracking-wide",
        children: data?.title
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("button", {
        type: "button",
        onClick: handleClick,
        className: "uppercase rounded-sm mt-3 md:mt-6 px-4 py-2 bg-brand-yellow flex items-center space-x-2 text-white",
        children: [/*#__PURE__*/jsx_runtime_.jsx((LocalLibrary_default()), {}), /*#__PURE__*/jsx_runtime_.jsx("span", {
          children: "Learn more"
        })]
      })]
    }), /*#__PURE__*/jsx_runtime_.jsx("div", {
      className: "flex flex-col relative min-h-[418px]",
      children: /*#__PURE__*/jsx_runtime_.jsx(CustomImage/* default */.Z, {
        src: image,
        alt: "",
        layout: "fill",
        priority: true,
        objectFit: "cover"
      })
    })]
  });
};

/* harmony default export */ const _partials_SlideItem = (SlideItem);
;// CONCATENATED MODULE: ./src/modules/_partials/Slides/index.tsx





const Slides = ({
  data = []
}) => {
  const lastIndex = data.length - 1;
  const {
    0: hovered,
    1: setHovered
  } = (0,external_react_.useState)(false);
  const maxScrollWidth = (0,external_react_.useRef)(0);
  const {
    0: currentIndex,
    1: setCurrentIndex
  } = (0,external_react_.useState)(0);
  const carousel = (0,external_react_.useRef)(null);

  const movePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(prevState => prevState - 1);
    } else {
      setCurrentIndex(prevState => prevState + lastIndex);
    }
  };

  const moveNext = (0,external_react_.useCallback)(() => {
    if (carousel.current !== null && carousel.current.offsetWidth * currentIndex <= maxScrollWidth.current && currentIndex < lastIndex) {
      setCurrentIndex(prevState => prevState + 1);
    } else {
      setCurrentIndex(0);
    }
  }, [currentIndex, lastIndex]);
  (0,external_react_.useEffect)(() => {
    if (carousel !== null && carousel.current !== null) {
      carousel.current.scrollLeft = carousel.current.offsetWidth * currentIndex;
    }
  }, [currentIndex]);
  (0,external_react_.useEffect)(() => {
    maxScrollWidth.current = carousel.current ? carousel.current.scrollWidth - carousel.current.offsetWidth : 0;
  }, []);
  (0,external_react_.useEffect)(() => {
    const timer = setTimeout(() => {
      // if (!hovered) {
      //   moveNext();
      // }
      if (currentIndex < data.length - 1) {
        setCurrentIndex(currentIndex + 1);
      } else {
        setCurrentIndex(0);
      }
    }, 3000);
    return () => {
      clearTimeout(timer);
    };
  }, [hovered, data, currentIndex]);

  if (!data.length) {
    return null;
  }

  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
    // onMouseEnter={() => setHovered(true)}
    // onMouseLeave={() => setHovered(false)}
    className: `w-full relative overflow-hidden flex flex-col bg-brand-green`,
    children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
      className: "bottom-2 z-10 justify-center absolute flex items-center space-x-2 w-full",
      children: data.map((resource, index) => /*#__PURE__*/jsx_runtime_.jsx("div", {
        role: "button",
        tabIndex: index,
        onClick: () => setCurrentIndex(index),
        className: `w-[22px] h-[3px] z-20 rounded ${currentIndex === index ? 'bg-brand-yellow' : 'bg-[#E2E5F1]'}`
      }, resource.id))
    }), /*#__PURE__*/jsx_runtime_.jsx("div", {
      ref: carousel,
      className: "flex gap-1 overflow-hidden scroll-smooth snap-x snap-mandatory md:touch-pan-x z-0",
      children: data.map((resource, index) => {
        return /*#__PURE__*/jsx_runtime_.jsx(_partials_SlideItem, {
          data: resource
        }, `slide_${data.indexOf(resource)}`);
      })
    })]
  });
};

/* harmony default export */ const _partials_Slides = (Slides);

/***/ }),

/***/ 6862:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ _partials_Testimonial)
});

;// CONCATENATED MODULE: external "@mui/icons-material/Star"
const Star_namespaceObject = require("@mui/icons-material/Star");
var Star_default = /*#__PURE__*/__webpack_require__.n(Star_namespaceObject);
;// CONCATENATED MODULE: external "@mui/icons-material/ThumbDown"
const ThumbDown_namespaceObject = require("@mui/icons-material/ThumbDown");
var ThumbDown_default = /*#__PURE__*/__webpack_require__.n(ThumbDown_namespaceObject);
;// CONCATENATED MODULE: external "@mui/icons-material/ThumbUp"
const ThumbUp_namespaceObject = require("@mui/icons-material/ThumbUp");
var ThumbUp_default = /*#__PURE__*/__webpack_require__.n(ThumbUp_namespaceObject);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: ./src/modules/_partials/Testimonial/index.tsx








const Testimonial = () => {
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
    className: "flex flex-col rounded bg-white drop-shadow p-3",
    children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: "flex items-center justify-between",
      children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: "flex items-center space-x-3",
        children: [/*#__PURE__*/jsx_runtime_.jsx((image_default()), {
          src: "/assets/images/Avatar.png",
          alt: "",
          width: "40px",
          height: "40px",
          className: "rounded-full"
        }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          className: "flex flex-col",
          children: [/*#__PURE__*/jsx_runtime_.jsx("h1", {
            className: "text-base font-semibold text-gray-600",
            children: "Kagabo Frank"
          }), /*#__PURE__*/jsx_runtime_.jsx("p", {
            className: "text-sm text-gray-600",
            children: "133 reviews"
          })]
        })]
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: "flex items-center space-x-4 pl-8",
        children: [/*#__PURE__*/jsx_runtime_.jsx("button", {
          className: "text-[#0E4DA4]",
          children: /*#__PURE__*/jsx_runtime_.jsx((ThumbUp_default()), {})
        }), /*#__PURE__*/jsx_runtime_.jsx("button", {
          className: "text-gray-600",
          children: /*#__PURE__*/jsx_runtime_.jsx((ThumbDown_default()), {})
        })]
      })]
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: "flex space-x-1 py-3 items-center",
      children: [/*#__PURE__*/jsx_runtime_.jsx((Star_default()), {
        fontSize: "small",
        className: "text-[#1BB55C]"
      }), /*#__PURE__*/jsx_runtime_.jsx((Star_default()), {
        fontSize: "small",
        className: "text-[#1BB55C]"
      }), /*#__PURE__*/jsx_runtime_.jsx((Star_default()), {
        fontSize: "small",
        className: "text-[#1BB55C]"
      }), /*#__PURE__*/jsx_runtime_.jsx((Star_default()), {
        fontSize: "small",
        className: "text-gray-600"
      }), /*#__PURE__*/jsx_runtime_.jsx((Star_default()), {
        fontSize: "small",
        className: "text-gray-600"
      }), /*#__PURE__*/jsx_runtime_.jsx("p", {
        className: "text-xs text-gray-600 pl-3",
        children: "3 days ago"
      })]
    }), /*#__PURE__*/jsx_runtime_.jsx("p", {
      className: "text-sm text-gray-600",
      children: "This is a sample text for yean community testmonials from your Team, visitors, farmers or anyhwere, Thanks"
    })]
  });
};

/* harmony default export */ const _partials_Testimonial = (Testimonial);

/***/ }),

/***/ 8421:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5675);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__);






const SlideUpItem = ({
  path = '/extension-material',
  title = 'Extension material',
  subTitle = 'Imfashanyigisho',
  image = '/assets/images/extension 1.png',
  desc = `Extension materials for Crop and Livestock Commodities for extension agents and farmers`
}) => {
  const router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
    role: "button",
    onClick: () => {
      router.push(path);
    },
    className: "group flex flex-col relative rounded-[15px] min-h-[380px]",
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("div", {
      className: "group-hover:flex slideInUp flex-col h-full top-0 absolute w-full hidden",
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx((next_image__WEBPACK_IMPORTED_MODULE_0___default()), {
        src: "/assets/images/blog post 1.png",
        alt: "",
        layout: "fill",
        className: "rounded-[15px]"
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
      className: "flex-grow flex group-hover:bg-[#660A0A]/80 space-y-6 justify-center flex-col items-center py-4 px-6 rounded-[15px] drop-shadow border border-gray-400",
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx((next_image__WEBPACK_IMPORTED_MODULE_0___default()), {
        src: image,
        alt: "",
        loading: "lazy",
        width: "149.27px",
        height: "101.75px"
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("p", {
        className: "text-brand-green font-bold text-xl text-center",
        children: title
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("p", {
        className: "text-brand-green font-bold text-base text-center",
        children: subTitle
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("p", {
        className: "hidden group-hover:block text-sm text-white text-center",
        children: desc
      })]
    })]
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SlideUpItem);

/***/ }),

/***/ 9611:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "R": () => (/* binding */ slideUpItems)
/* harmony export */ });
const slideUpItems = [{
  path: '/services',
  title: 'Services',
  subTitle: 'Serivisi',
  image: '/assets/images/Business Network.png',
  desc: `"Learn more on services we provide to farmers and agripreneurs.`
}, {
  path: '/extension-material',
  title: 'Extension material',
  subTitle: 'Imfashanyigisho',
  image: '/assets/images/extension 1.png',
  desc: `Extension materials for Crop and Livestock Commodities for extension agents and farmers.`
}, {
  path: '/farmer-platform',
  title: "Urubuga rw'Abahinzi-Borozi",
  subTitle: 'Farmer Platform',
  image: '/assets/images/farmer 1.png',
  desc: `A virtual community of farmers and agriprenuers. Exchange with them on our Farmer Platform.`
}];

/***/ }),

/***/ 6476:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _mui_icons_material_Add__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6146);
/* harmony import */ var _mui_icons_material_Add__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_mui_icons_material_Add__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _mui_icons_material_Shop__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1496);
/* harmony import */ var _mui_icons_material_Shop__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_mui_icons_material_Shop__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _mui_icons_material_LocationCity__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6069);
/* harmony import */ var _mui_icons_material_LocationCity__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_mui_icons_material_LocationCity__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _mui_icons_material_SupervisedUserCircle__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9912);
/* harmony import */ var _mui_icons_material_SupervisedUserCircle__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_mui_icons_material_SupervisedUserCircle__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var modules_layouts_Scaffold__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(253);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(5675);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _Partials_MinPost__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(2015);
/* harmony import */ var _Partials_LatestBlog__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(1550);
/* harmony import */ var modules_partials_Testimonial__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(6862);
/* harmony import */ var modules_partials_Slides__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(1315);
/* harmony import */ var modules_partials_CarouselPartners__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(7760);
/* harmony import */ var apis_utils_fetcher__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(5377);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(9611);
/* harmony import */ var _SlideUpItem__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(8421);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([apis_utils_fetcher__WEBPACK_IMPORTED_MODULE_13__]);
apis_utils_fetcher__WEBPACK_IMPORTED_MODULE_13__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];





function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

















const LandingAcitivity = ({
  data,
  articles
}) => {
  const {
    push
  } = (0,next_router__WEBPACK_IMPORTED_MODULE_14__.useRouter)();
  const {
    data: {
      data: subCategories
    }
  } = (0,apis_utils_fetcher__WEBPACK_IMPORTED_MODULE_13__/* .useProtectedFetcher */ .Nv)('/api/sub-categories');
  const slides = data?.slides || [];
  const {
    data: {
      data: partners
    },
    isLoading
  } = (0,apis_utils_fetcher__WEBPACK_IMPORTED_MODULE_13__/* .useOpenFetcher */ .TB)(`/api/partners`);
  const confirmedPartners = partners?.rows;
  const articleList = articles?.map(item => {
    const sub = subCategories?.rows?.filter(element => element.id == item.category);

    if (sub?.length) {
      return _objectSpread(_objectSpread({}, item), {}, {
        category: sub[0]
      });
    }

    return item;
  }) || [];
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxs)(modules_layouts_Scaffold__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx(modules_partials_Slides__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z, {
      data: slides
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx("div", {
      className: "px-4 md:px-8 py-2 bg-white",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxs)("div", {
        className: "flex flex-col items-center justify-center relative min-h-[200px]",
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx((next_image__WEBPACK_IMPORTED_MODULE_6___default()), {
          src: "/assets/images/bg-stat.png",
          alt: "",
          layout: "fill",
          loading: "lazy",
          objectPosition: "center",
          objectFit: "cover",
          className: "z-0"
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx("div", {
          className: "top-0 absolute flex-grow h-full flex flex-col items-center justify-center",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxs)("div", {
            className: "px-2 inline-grid grid-cols-2 md:grid-cols-4 justify-center gap-x-10 gap-y-3",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxs)("div", {
              className: "flex items-center space-x-2 bg-brand-yellow text-white px-8 py-4 rounded-sm",
              children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx((_mui_icons_material_SupervisedUserCircle__WEBPACK_IMPORTED_MODULE_3___default()), {
                style: {
                  fontSize: 60
                }
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxs)("div", {
                className: "flex flex-col",
                children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx("p", {
                  className: "font-bold text-xl",
                  children: "40,000+"
                }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx("p", {
                  className: "mt-1",
                  children: "Farmer served"
                })]
              })]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxs)("div", {
              className: "flex items-center space-x-2 bg-brand-yellow text-white px-8 py-4 rounded-sm",
              children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx((_mui_icons_material_SupervisedUserCircle__WEBPACK_IMPORTED_MODULE_3___default()), {
                style: {
                  fontSize: 60
                }
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxs)("div", {
                className: "flex flex-col",
                children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx("p", {
                  className: "font-bold text-xl",
                  children: "150,000"
                }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx("p", {
                  className: "mt-1",
                  children: "Target farmers by 2025"
                })]
              })]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxs)("div", {
              className: "flex items-center space-x-2 bg-brand-yellow text-white px-8 py-4 rounded-sm",
              children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx((_mui_icons_material_LocationCity__WEBPACK_IMPORTED_MODULE_2___default()), {
                style: {
                  fontSize: 60
                }
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxs)("div", {
                className: "flex flex-col",
                children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx("p", {
                  className: "font-bold text-xl",
                  children: "30"
                }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx("p", {
                  className: "mt-1",
                  children: "Districts"
                })]
              })]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxs)("div", {
              className: "flex items-center space-x-2 bg-brand-yellow text-white px-8 py-4 rounded-sm",
              children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx((_mui_icons_material_Shop__WEBPACK_IMPORTED_MODULE_1___default()), {
                style: {
                  fontSize: 60
                }
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxs)("div", {
                className: "flex flex-col",
                children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx("p", {
                  className: "font-bold text-xl",
                  children: "27"
                }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx("p", {
                  className: "mt-1",
                  children: "Commodity specific platforms"
                })]
              })]
            })]
          })
        })]
      })
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx("div", {
      className: "px-4 md:px-8 py-2 bg-white inline-grid md:grid-cols-3 gap-x-10 gap-y-3",
      children: _data__WEBPACK_IMPORTED_MODULE_15__/* .slideUpItems.map */ .R.map(item => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx(_SlideUpItem__WEBPACK_IMPORTED_MODULE_16__/* ["default"] */ .Z, {
        title: item.title,
        desc: item.desc,
        path: item.path,
        image: item.image,
        subTitle: item.subTitle
      }, item.path))
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx("div", {
      className: "px-4 md:px-8 py-2 bg-white",
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx("div", {
        className: "flex flex-col relative min-h-[64px] md:min-h-[195px]",
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx((next_link__WEBPACK_IMPORTED_MODULE_7___default()), {
          href: "/innovation-center",
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx((next_image__WEBPACK_IMPORTED_MODULE_6___default()), {
            src: "/assets/images/yean.png",
            alt: "",
            layout: "fill",
            loading: "lazy",
            objectPosition: "center",
            className: "cursor-pointer"
          })
        })
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxs)("div", {
      className: "flex flex-col px-4 md:px-8 py-2 bg-white",
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx("h1", {
        className: "text-2xl md:text-4xl text-white font-bold bg-brand-green p-2 text-center",
        children: "Extension Materials"
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx("div", {
        className: "pt-2 inline-grid sm:grid-cols-2 md:grid-cols-4 gap-3",
        children: articleList.slice(0, 8)?.map(element => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx(_Partials_MinPost__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
          data: element
        }, element.id))
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxs)("button", {
        type: "button",
        onClick: () => {
          push('/extension-material');
        },
        className: "mt-4 flex items-center space-x-2 mx-auto px-12 py-2 text-white bg-brand-green rounded-sm",
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx("span", {
          className: "p-1 rounded-full bg-white text-brand-green",
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx((_mui_icons_material_Add__WEBPACK_IMPORTED_MODULE_0___default()), {})
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx("span", {
          children: "View More"
        })]
      })]
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx("div", {
      className: "px-4 md:px-8 py-2 bg-white",
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx("div", {
        className: "flex flex-col relative min-h-[64px] md:min-h-[195px]",
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx((next_link__WEBPACK_IMPORTED_MODULE_7___default()), {
          href: "/services",
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx((next_image__WEBPACK_IMPORTED_MODULE_6___default()), {
            src: "/assets/images/greenhouse.png",
            alt: "",
            layout: "fill",
            loading: "lazy",
            objectPosition: "center",
            className: "cursor-pointer"
          })
        })
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxs)("div", {
      className: "flex flex-col px-4 md:px-8 py-2 bg-white",
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx("h1", {
        className: "text-2xl md:text-4xl text-white font-bold bg-brand-green p-2 text-center",
        children: "Latest Blog"
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx("div", {
        className: "pt-2 inline-grid sm:grid-cols-2 md:grid-cols-4 gap-3",
        children: articles?.slice(8)?.map(element => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx(_Partials_LatestBlog__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
          data: element
        }, element.id))
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxs)("button", {
        type: "button",
        onClick: () => {
          push('/blog');
        },
        className: "mt-4 flex items-center space-x-2 mx-auto px-12 py-2 text-white bg-brand-green rounded-sm",
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx("span", {
          className: "p-1 rounded-full bg-white text-brand-green",
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx((_mui_icons_material_Add__WEBPACK_IMPORTED_MODULE_0___default()), {})
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx("span", {
          children: "View More"
        })]
      })]
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx("div", {
      className: "px-4 md:px-8 py-2 bg-white",
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx("div", {
        className: "flex flex-col relative min-h-[64px] md:min-h-[195px]",
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx((next_link__WEBPACK_IMPORTED_MODULE_7___default()), {
          href: "/services",
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx((next_image__WEBPACK_IMPORTED_MODULE_6___default()), {
            src: "/assets/images/Inputs.png",
            alt: "",
            layout: "fill",
            loading: "lazy",
            objectPosition: "center",
            className: "cursor-pointer"
          })
        })
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxs)("div", {
      className: "flex flex-col px-4 md:px-8 py-2 bg-white",
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx("h1", {
        className: "text-2xl md:text-4xl text-white font-bold bg-brand-green p-2 text-center",
        children: "Our Partners"
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx(modules_partials_CarouselPartners__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z, {
        data: confirmedPartners
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxs)("div", {
      className: "hidden flex-col px-4 md:px-8 py-2 bg-white",
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx("h1", {
        className: "text-2xl md:text-4xl text-white font-bold bg-brand-green p-2 text-center",
        children: "Our Testmonials"
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx("div", {
        className: "pt-2 flex items-center space-x-3 md:space-x-12 justify-between",
        children: new Array(3).fill(0).map(element => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx(modules_partials_Testimonial__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {}, element))
      })]
    })]
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (LandingAcitivity);
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 1550:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ _Partials_LatestBlog)
});

;// CONCATENATED MODULE: external "@mui/icons-material/Comment"
const Comment_namespaceObject = require("@mui/icons-material/Comment");
var Comment_default = /*#__PURE__*/__webpack_require__.n(Comment_namespaceObject);
;// CONCATENATED MODULE: external "@mui/icons-material/RemoveRedEye"
const RemoveRedEye_namespaceObject = require("@mui/icons-material/RemoveRedEye");
var RemoveRedEye_default = /*#__PURE__*/__webpack_require__.n(RemoveRedEye_namespaceObject);
// EXTERNAL MODULE: external "@mui/icons-material/Person"
var Person_ = __webpack_require__(1939);
var Person_default = /*#__PURE__*/__webpack_require__.n(Person_);
// EXTERNAL MODULE: ./src/modules/_partials/CustomImage/index.tsx
var CustomImage = __webpack_require__(1663);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(1853);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: ./src/modules/activities/_Partials/LatestBlog/index.tsx









const LatestBlog = ({
  data
}) => {
  const {
    push
  } = (0,router_.useRouter)();

  const handleClick = () => {
    push(`/blog/${data?.id}`);
  };

  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
    role: "button",
    onClick: handleClick,
    className: "flex flex-col pb-2 rounded-[15px] drop-shadow border border-gray-400",
    children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
      className: "min-h-[192.97px] flex relative",
      children: /*#__PURE__*/jsx_runtime_.jsx(CustomImage/* default */.Z, {
        src: data.image,
        alt: "",
        layout: "fill",
        className: "rounded-[15px]",
        objectFit: "cover",
        loading: "lazy"
      })
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: "p-2 flex items-center space-x-3 text-brand-violet",
      children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("button", {
        className: "flex items-center space-x-1",
        children: [/*#__PURE__*/jsx_runtime_.jsx((Person_default()), {}), " ", /*#__PURE__*/jsx_runtime_.jsx("span", {
          children: data?.author?.firstname
        })]
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("button", {
        className: "flex items-center space-x-1",
        children: [/*#__PURE__*/jsx_runtime_.jsx((RemoveRedEye_default()), {}), " ", /*#__PURE__*/jsx_runtime_.jsx("span", {
          children: data?.views
        })]
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("button", {
        className: "flex items-center space-x-1",
        children: [/*#__PURE__*/jsx_runtime_.jsx((Comment_default()), {}), " ", /*#__PURE__*/jsx_runtime_.jsx("span", {
          children: data?.comment
        })]
      })]
    }), /*#__PURE__*/jsx_runtime_.jsx("p", {
      className: "px-2 text-gray-600 line-clamp-3",
      children: data?.title
    })]
  });
};

/* harmony default export */ const _Partials_LatestBlog = (LatestBlog);

/***/ }),

/***/ 2015:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _mui_icons_material_ArrowRightAlt__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3060);
/* harmony import */ var _mui_icons_material_ArrowRightAlt__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_mui_icons_material_ArrowRightAlt__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var modules_partials_CustomImage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1663);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__);







const MinPost = ({
  data
}) => {
  const {
    push
  } = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();

  const handleClick = () => {
    if (data?.category?.id) {
      push(`/extension-material/${data?.category?.id}?sub=${data?.category?.name}`);
    } else {
      push(`/blog/${data?.id}`);
    }
  };

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
    role: "button",
    onClick: handleClick,
    className: "flex flex-col rounded-[15px] drop-shadow border border-gray-400",
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("div", {
      className: "min-h-[192.97px] flex relative",
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(modules_partials_CustomImage__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
        src: data.image,
        alt: "",
        layout: "fill",
        className: "rounded-[15px]",
        objectFit: "cover",
        loading: "lazy"
      })
    }), data?.category && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("button", {
      className: "mr-auto rounded-sm bg-dark-green -translate-y-4 text-white py-2 px-3",
      children: data.category.name
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("p", {
      className: "px-2 text-dark-green line-clamp-3",
      children: data?.title
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("div", {
      className: "pt-2 p-2 mt-auto",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("button", {
        className: 'font-bold self-start',
        children: ["Learn More ", /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx((_mui_icons_material_ArrowRightAlt__WEBPACK_IMPORTED_MODULE_0___default()), {})]
      })
    })]
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MinPost);

/***/ }),

/***/ 3639:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "getServerSideProps": () => (/* binding */ getServerSideProps)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(968);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var modules_activities_LandingActivity__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6476);
/* harmony import */ var core_factory_fact_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8058);
/* harmony import */ var next_script__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(4298);
/* harmony import */ var next_script__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_script__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var modules_partials_MetaData__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(3113);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([modules_activities_LandingActivity__WEBPACK_IMPORTED_MODULE_2__]);
modules_activities_LandingActivity__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];










const LandingPage = ({
  data,
  articles,
  partners
}) => {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx("title", {
        children: "YEAN - My farming story"
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(modules_partials_MetaData__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {})]
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(modules_activities_LandingActivity__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
      data: data,
      articles: articles
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx((next_script__WEBPACK_IMPORTED_MODULE_4___default()), {
      src: "/assets/js/main.js"
    })]
  });
};

async function getServerSideProps() {
  let results = null;
  let resultArticles = null;
  let partners = null;

  try {
    const {
      data
    } = await core_factory_fact_http__WEBPACK_IMPORTED_MODULE_3__/* ["default"].axios.get */ .Z.axios.get('/api/landing/1');
    results = data?.data;
  } catch (error) {
    console.log(error);
  }

  try {
    const {
      data: articles
    } = await core_factory_fact_http__WEBPACK_IMPORTED_MODULE_3__/* ["default"].axios.get */ .Z.axios.get('/api/landing/1?attributes=id,title,author_id,comment,views,category,image');
    resultArticles = articles?.data;
  } catch (error) {
    console.log(error.message);
  }

  return {
    props: {
      data: results,
      articles: resultArticles,
      partners
    }
  };
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (LandingPage);
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 4298:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__(2189)


/***/ }),

/***/ 3329:
/***/ ((module) => {

"use strict";
module.exports = require("@mui/icons-material/AccountBox");

/***/ }),

/***/ 6146:
/***/ ((module) => {

"use strict";
module.exports = require("@mui/icons-material/Add");

/***/ }),

/***/ 765:
/***/ ((module) => {

"use strict";
module.exports = require("@mui/icons-material/ArrowDropDown");

/***/ }),

/***/ 3060:
/***/ ((module) => {

"use strict";
module.exports = require("@mui/icons-material/ArrowRightAlt");

/***/ }),

/***/ 856:
/***/ ((module) => {

"use strict";
module.exports = require("@mui/icons-material/Category");

/***/ }),

/***/ 2818:
/***/ ((module) => {

"use strict";
module.exports = require("@mui/icons-material/ChevronRight");

/***/ }),

/***/ 7235:
/***/ ((module) => {

"use strict";
module.exports = require("@mui/icons-material/Dashboard");

/***/ }),

/***/ 9891:
/***/ ((module) => {

"use strict";
module.exports = require("@mui/icons-material/Extension");

/***/ }),

/***/ 4569:
/***/ ((module) => {

"use strict";
module.exports = require("@mui/icons-material/Feed");

/***/ }),

/***/ 5196:
/***/ ((module) => {

"use strict";
module.exports = require("@mui/icons-material/Grass");

/***/ }),

/***/ 7549:
/***/ ((module) => {

"use strict";
module.exports = require("@mui/icons-material/Group");

/***/ }),

/***/ 3147:
/***/ ((module) => {

"use strict";
module.exports = require("@mui/icons-material/Handshake");

/***/ }),

/***/ 3467:
/***/ ((module) => {

"use strict";
module.exports = require("@mui/icons-material/Home");

/***/ }),

/***/ 1419:
/***/ ((module) => {

"use strict";
module.exports = require("@mui/icons-material/LocalLibrary");

/***/ }),

/***/ 6069:
/***/ ((module) => {

"use strict";
module.exports = require("@mui/icons-material/LocationCity");

/***/ }),

/***/ 9801:
/***/ ((module) => {

"use strict";
module.exports = require("@mui/icons-material/Logout");

/***/ }),

/***/ 3365:
/***/ ((module) => {

"use strict";
module.exports = require("@mui/icons-material/Menu");

/***/ }),

/***/ 4446:
/***/ ((module) => {

"use strict";
module.exports = require("@mui/icons-material/Pageview");

/***/ }),

/***/ 1939:
/***/ ((module) => {

"use strict";
module.exports = require("@mui/icons-material/Person");

/***/ }),

/***/ 8017:
/***/ ((module) => {

"use strict";
module.exports = require("@mui/icons-material/Search");

/***/ }),

/***/ 1496:
/***/ ((module) => {

"use strict";
module.exports = require("@mui/icons-material/Shop");

/***/ }),

/***/ 9153:
/***/ ((module) => {

"use strict";
module.exports = require("@mui/icons-material/ShoppingBasket");

/***/ }),

/***/ 9912:
/***/ ((module) => {

"use strict";
module.exports = require("@mui/icons-material/SupervisedUserCircle");

/***/ }),

/***/ 9497:
/***/ ((module) => {

"use strict";
module.exports = require("@mui/icons-material/Work");

/***/ }),

/***/ 3765:
/***/ ((module) => {

"use strict";
module.exports = require("@mui/material/Alert");

/***/ }),

/***/ 2120:
/***/ ((module) => {

"use strict";
module.exports = require("@mui/material/Avatar");

/***/ }),

/***/ 19:
/***/ ((module) => {

"use strict";
module.exports = require("@mui/material/Box");

/***/ }),

/***/ 7898:
/***/ ((module) => {

"use strict";
module.exports = require("@mui/material/Drawer");

/***/ }),

/***/ 5768:
/***/ ((module) => {

"use strict";
module.exports = require("@mui/material/Popover");

/***/ }),

/***/ 9174:
/***/ ((module) => {

"use strict";
module.exports = require("@mui/material/Snackbar");

/***/ }),

/***/ 2167:
/***/ ((module) => {

"use strict";
module.exports = require("axios");

/***/ }),

/***/ 3280:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/app-router-context.js");

/***/ }),

/***/ 2796:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/head-manager-context.js");

/***/ }),

/***/ 4957:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/head.js");

/***/ }),

/***/ 4014:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 744:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/image-config-context.js");

/***/ }),

/***/ 5843:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/image-config.js");

/***/ }),

/***/ 8524:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 8020:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 4406:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/page-path/denormalize-page-path.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 1751:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/add-path-prefix.js");

/***/ }),

/***/ 6220:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/compare-states.js");

/***/ }),

/***/ 299:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/format-next-pathname-info.js");

/***/ }),

/***/ 3938:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 9565:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 5789:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/get-next-pathname-info.js");

/***/ }),

/***/ 1428:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 8854:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/parse-path.js");

/***/ }),

/***/ 1292:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 4567:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/path-has-prefix.js");

/***/ }),

/***/ 979:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 3297:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/remove-trailing-slash.js");

/***/ }),

/***/ 6052:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 4226:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 5052:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 968:
/***/ ((module) => {

"use strict";
module.exports = require("next/head");

/***/ }),

/***/ 1853:
/***/ ((module) => {

"use strict";
module.exports = require("next/router");

/***/ }),

/***/ 6689:
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ 4466:
/***/ ((module) => {

"use strict";
module.exports = require("react-transition-group");

/***/ }),

/***/ 997:
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 8238:
/***/ ((module) => {

"use strict";
module.exports = require("secure-ls");

/***/ }),

/***/ 5941:
/***/ ((module) => {

"use strict";
module.exports = import("swr");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [676,3061,6945,4653,8844,9391,637,3113,8805,253,1663], () => (__webpack_exec__(3639)));
module.exports = __webpack_exports__;

})();