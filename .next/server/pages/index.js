"use strict";
(() => {
var exports = {};
exports.id = 5405;
exports.ids = [5405];
exports.modules = {

/***/ 5703:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ _partials_Slides)
});

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "@mui/icons-material/LocalLibrary"
var LocalLibrary_ = __webpack_require__(1419);
var LocalLibrary_default = /*#__PURE__*/__webpack_require__.n(LocalLibrary_);
// EXTERNAL MODULE: ./src/modules/_partials/CustomImage/index.tsx
var CustomImage = __webpack_require__(9663);
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: ./src/modules/_partials/SlideItem/index.tsx






const SlideItem = ({
  data
}) => {
  let image = (data === null || data === void 0 ? void 0 : data.image) || '';
  image = image.startsWith('/uploads') ? image : `/uploads/${image}`;
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
    className: "shrink-0 snap-start inline-grid items-center gap-x-10 gap-y-5 md:grid-cols-2 bg-brand-green px-4 md:px-0 py-4 md:py-8 w-full",
    children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: "flex flex-col items-start md:pl-8",
      children: [/*#__PURE__*/jsx_runtime_.jsx("h1", {
        className: "font-bold text-2xl md:text-4xl text-white tracking-wide",
        children: data === null || data === void 0 ? void 0 : data.title
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("button", {
        type: "button",
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

/***/ 1217:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


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

/***/ 1366:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__);




const CowIcon = () => {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("svg", {
    width: "60",
    height: "60",
    viewBox: "0 0 60 60",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("g", {
      clipPath: "url(#clip0_3_544)",
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("path", {
        d: "M59.7882 23.0581C56.5845 18.2527 52.9467 16.3236 49.6933 15.5412C53.9771 12.6082 54.451 7.01563 54.7396 3.61427C54.8079 2.77817 54.8665 2.04695 54.9764 1.49151C55.0985 0.861647 54.7249 0.241515 54.1097 0.0560145C53.4994 -0.130775 52.8403 0.179291 52.5936 0.772588C49.9805 7.05594 43.615 9.4078 39.9484 9.87337C37.5699 8.318 34.6646 7.50205 31.2492 7.50205H28.7493C25.3339 7.50205 22.4286 8.31788 20.0501 9.87337C16.3835 9.4078 10.018 7.05594 7.40494 0.772588C7.15839 0.179291 6.49923 -0.13558 5.88883 0.0560145C5.27362 0.241515 4.90004 0.861647 5.02214 1.49151C5.13206 2.04695 5.19065 2.77806 5.25897 3.61427C5.54747 7.01621 6.02148 12.6102 10.3073 15.5428C7.05105 16.3263 3.41182 18.2561 0.210378 23.0581C0.0125734 23.356 -0.0508226 23.7258 0.0418691 24.0724C0.134678 24.4191 0.371505 24.7097 0.691297 24.8695C0.894375 24.971 5.52451 27.2054 12.535 27.4535C12.5228 27.8857 12.4999 28.3061 12.4999 28.7512C12.4999 30.8361 13.4716 32.3546 14.4115 33.8218C15.3563 35.2988 16.2498 36.694 16.2498 38.7509V43.8922C15.429 45.2303 14.9998 46.8504 14.9998 48.7506C14.9998 50.714 15.8215 53.7883 20.6095 54.7174C20.9276 55.0509 21.2403 55.3888 21.54 55.7302C23.3075 57.7309 25.3094 60.0001 29.9992 60.0001C34.689 60.0001 36.6908 57.7309 38.4584 55.7302C38.7583 55.3888 39.0709 55.0509 39.389 54.7174C44.1769 53.7881 44.9986 50.714 44.9986 48.7506C44.9986 46.8504 44.5694 45.2304 43.7486 43.8922V38.7509C43.7486 36.6941 44.6422 35.2989 45.587 33.8218C46.5269 32.3546 47.4986 30.8361 47.4986 28.7512C47.4986 28.3061 47.4758 27.8856 47.4636 27.4535C54.4742 27.2054 59.1042 24.971 59.3073 24.8695C59.627 24.7095 59.8639 24.4191 59.9567 24.0724C60.0494 23.7258 59.986 23.3559 59.7882 23.0581ZM29.9993 15.0018C30.6897 15.0018 31.2493 15.5613 31.2493 16.2518C31.2493 16.9421 30.6897 17.5017 29.9993 17.5017C29.309 17.5017 28.7493 16.9421 28.7493 16.2518C28.7493 15.5613 29.309 15.0018 29.9993 15.0018ZM29.9993 20.0015C31.3787 20.0015 32.4992 21.1233 32.4992 22.5014C32.4992 23.8794 31.3786 25.0012 29.9993 25.0012C28.6201 25.0012 27.4995 23.8794 27.4995 22.5014C27.4995 21.1233 28.62 20.0015 29.9993 20.0015ZM31.2493 28.7512C31.2493 29.4415 30.6897 30.0012 29.9993 30.0012C29.309 30.0012 28.7493 29.4415 28.7493 28.7512C28.7493 28.0607 29.309 27.5012 29.9993 27.5012C30.6897 27.5012 31.2493 28.0607 31.2493 28.7512ZM19.9998 26.2513C20.2341 26.2513 21.445 26.2831 22.3727 26.9032L22.3752 26.9044C23.0612 27.367 23.4665 27.9468 23.5397 28.0591C23.7961 28.4424 23.8181 28.9355 23.6008 29.342C23.3835 29.7472 22.9612 30.0012 22.4997 30.0012H18.7499C18.059 30.0012 17.4999 29.4421 17.4999 28.7512C17.4998 27.1863 18.4348 26.2513 19.9998 26.2513ZM15.5197 14.8027C10.3974 14.0823 8.76344 10.6633 8.09585 6.43159C10.9184 9.50881 14.6024 11.1832 17.5901 11.9495C16.8124 12.7858 16.1231 13.7395 15.5197 14.8027ZM36.249 52.5003C35.3213 52.5003 34.7696 52.0938 34.0055 51.5324C33.0777 50.85 31.9255 50.0004 29.9992 50.0004C28.073 50.0004 26.9207 50.85 25.993 51.5324C25.2288 52.0939 24.6771 52.5003 23.7494 52.5003C19.6016 52.5003 17.4997 51.2381 17.4997 48.7505C17.4997 46.8219 18.0392 45.3131 19.1012 44.2646C20.898 42.4897 23.5981 42.4825 23.7495 42.5007H36.249C36.254 42.5007 36.2637 42.5007 36.2711 42.5007C36.3004 42.5007 39.0859 42.4775 40.8973 44.2646C41.9594 45.3131 42.4989 46.8219 42.4989 48.7505C42.4989 51.2381 40.3969 52.5003 36.249 52.5003ZM41.2489 30.0012H37.499C37.0376 30.0012 36.6152 29.7472 36.398 29.342C36.1807 28.9355 36.2026 28.4424 36.459 28.0591C36.5323 27.9468 36.9375 27.367 37.6236 26.9044L37.6261 26.9032C38.5538 26.2831 39.7647 26.2513 39.999 26.2513C41.5639 26.2513 42.4989 27.1863 42.4989 28.7512C42.4989 29.4421 41.9398 30.0012 41.2489 30.0012ZM44.4789 14.8027C43.8757 13.7395 43.1863 12.7858 42.4085 11.9495C45.3962 11.1832 49.0802 9.50881 51.9028 6.43159C51.2352 10.6632 49.6012 14.0822 44.4789 14.8027Z",
        fill: "#46866C"
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("path", {
        d: "M21.25 45.0006C20.5591 45.0006 20 45.5597 20 46.2506C20 46.9415 20.5591 47.5006 21.25 47.5006C21.7383 47.5006 22.3364 48.4722 22.5634 49.14C22.7342 49.6673 23.225 50.0005 23.7499 50.0005C23.8792 50.0005 24.0111 49.981 24.1404 49.9383C24.7947 49.7235 25.1536 49.0167 24.9363 48.3613C24.8241 48.0168 23.7622 45.0006 21.25 45.0006Z",
        fill: "#46866C"
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("path", {
        d: "M38.7498 45.0006C36.2377 45.0006 35.1757 48.0169 35.0635 48.361C34.8462 49.0166 35.205 49.7233 35.8594 49.9381C35.9888 49.9809 36.1206 50.0003 36.25 50.0003C36.7748 50.0003 37.2656 49.667 37.4364 49.1397C37.6318 48.5513 38.2348 47.5003 38.7498 47.5003C39.4407 47.5003 39.9998 46.9413 39.9998 46.2503C39.9998 45.5594 39.4406 45.0006 38.7498 45.0006Z",
        fill: "#46866C"
      })]
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("defs", {
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("clipPath", {
        id: "clip0_3_544",
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("rect", {
          width: "60",
          height: "60",
          fill: "white"
        })
      })
    })]
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CowIcon);

/***/ }),

/***/ 4462:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__);




const HandIcon = () => {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("svg", {
    width: "60",
    height: "60",
    viewBox: "0 0 60 60",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("path", {
      d: "M21.7711 28.6661C22.9845 28.6661 24.1765 28.8785 25.3157 29.2976L34.2996 32.5982C37.4098 33.7412 39.011 37.2029 37.8678 40.321C37.0005 42.6685 34.7363 44.2461 32.2309 44.2461C31.3364 44.2461 30.9288 44.0911 29.7117 43.8156C31.927 45.2881 32.0586 45.4936 32.5185 45.304L50.9541 37.5796C50.5178 36.0891 49.1554 34.993 47.5229 34.993H46.3154C46.3271 34.8637 46.3622 34.7396 46.3622 34.6064C46.3622 31.8007 43.7083 29.5242 40.3398 29.2924C40.0612 27.1 38.1888 25.3067 35.7636 25.3965C38.9105 19.3841 44.2101 20.794 47.1219 12.7469C47.1507 12.6674 47.2345 12.6222 47.317 12.6415C47.3993 12.6613 47.4538 12.7394 47.4437 12.8232C46.703 18.9608 42.8594 22.2116 42.7942 22.2726C46.9594 22.9076 50.8524 20.4726 52.1148 15.6637C53.0055 12.2821 51.0604 6.58902 49.5864 3.01139C49.416 2.59807 49.0127 2.32848 48.5654 2.32906C48.1183 2.32982 47.7158 2.60076 47.5467 3.01484C46.7053 5.07642 44.7143 7.69061 40.0558 9.52346C36.0298 11.4279 35.6714 16.3729 37.901 19.4861C37.0316 20.0516 34.63 22.2074 33.7299 24.6717C32.7122 23.2344 31.0368 22.2536 29.0992 22.1028C29.0992 13.2164 22.691 9.21914 20.8679 4.02567C20.8128 3.86891 20.6513 3.77565 20.488 3.80693C20.3245 3.83801 20.2086 3.98423 20.2151 4.1504C20.4924 11.1982 26.674 11.7389 26.674 22.3504C24.9594 22.8702 23.5715 24.066 22.875 25.6054C22.3444 25.4715 21.7985 25.3804 21.2267 25.3804C18.0365 25.3804 15.3803 27.586 14.6484 30.5485C18.5906 29.1685 19.6191 28.6661 21.7711 28.6661Z",
      fill: "#46866C"
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("path", {
      d: "M59.6874 41.5268C59.0437 39.9902 57.5522 39.0665 55.9862 39.0665C55.4716 39.0665 54.947 39.1672 54.442 39.3785L33.679 48.0767C32.5109 48.5665 31.2057 48.4178 30.1952 47.7459L22.0391 42.3281C21.4264 41.9221 21.1486 41.1647 21.3543 40.459C21.6032 39.6055 22.4724 39.0928 23.3389 39.2895L31.3168 41.097C31.6203 41.1939 31.9277 41.2399 32.2311 41.2399C33.4522 41.2399 34.5993 40.4941 35.0475 39.2795C35.6192 37.7204 34.8202 35.9933 33.2625 35.4207L24.2786 32.119C22.7107 31.5417 20.9726 31.5192 19.3678 32.0818L1.20367 38.4458C0.483541 38.6983 0 39.3795 0 40.1439V53.1815C0 54.1758 0.806286 54.9811 1.79889 54.9811H9.39893L28.7602 57.5961C29.1282 57.646 29.4983 57.6705 29.8662 57.6705C30.9603 57.6705 32.0467 57.4533 33.0602 57.0274L57.5382 46.7734C59.5817 45.9176 60.5428 43.5692 59.6874 41.5268Z",
      fill: "#46866C"
    })]
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (HandIcon);

/***/ }),

/***/ 6343:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__);




const SorgohIcon = () => {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("svg", {
    width: "60",
    height: "60",
    viewBox: "0 0 60 60",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("g", {
      clipPath: "url(#clip0_3_540)",
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("path", {
        d: "M49.0771 19.438C56.8977 17.7693 61.7835 9.72596 59.3881 1.89582C59.2002 1.28183 58.7196 0.801176 58.1057 0.61326C50.2599 -1.78665 42.2283 3.11969 40.5627 10.9229C39.675 7.59017 37.5536 4.65731 34.5234 2.76789C33.9784 2.42805 33.3005 2.38107 32.7139 2.64277C28.2467 4.63521 25.1979 8.80039 24.6265 13.6178C23.9709 13.1627 23.2592 12.6603 22.2437 13.1129C17.7765 15.1052 14.7276 19.2704 14.1563 24.088C13.5006 23.6328 12.7888 23.1305 11.7736 23.5832C1.8746 27.9978 0.710272 41.5629 9.65184 47.6168L0.568128 56.7005C-0.652719 57.9213 0.228528 59.9992 1.93438 59.9992C2.42893 59.9992 2.92335 59.8105 3.30075 59.4331L12.3847 50.3492C18.4517 59.3103 32.0111 58.1091 36.4182 48.2278C36.874 47.2059 36.3495 46.4732 35.9134 45.845C40.7308 45.2736 44.8959 42.2248 46.8883 37.7575C47.3441 36.7357 46.8196 36.003 46.3835 35.3747C51.2011 34.8034 55.3662 31.7546 57.3585 27.2872C57.6201 26.7008 57.5732 26.0228 57.2335 25.4779C55.3438 22.4475 52.4103 20.3254 49.0771 19.438ZM55.9484 4.05298C57.2847 10.9469 51.2172 17.0339 44.3068 15.6946C42.9706 8.80087 49.038 2.71294 55.9484 4.05298ZM33.3456 6.65337C38.8795 10.9747 38.3026 19.5496 32.2102 23.0779C31.1914 22.2822 30.352 21.3075 29.7216 20.2159C29.4925 19.5883 29.2182 18.9787 28.9011 18.3919C27.4303 13.9768 29.2158 9.04507 33.3456 6.65337ZM22.8754 17.1236C23.8943 17.9192 24.7338 18.8942 25.3642 19.986C25.5933 20.6135 25.8674 21.2227 26.1844 21.8094C27.6555 26.2252 25.869 31.1568 21.7399 33.5481C20.721 32.7525 19.8815 31.7775 19.2511 30.6859C19.022 30.0584 18.7479 29.4491 18.4307 28.8624C16.9598 24.4465 18.7463 19.5148 22.8754 17.1236ZM12.4052 27.5938C13.4242 28.3894 14.2635 29.3642 14.8939 30.4558C15.123 31.0835 15.3972 31.6928 15.7144 32.2796C17.1854 36.6955 15.399 41.6269 11.2698 44.0181C5.73508 39.6962 6.31392 31.1213 12.4052 27.5938ZM15.9831 48.7316C18.3642 44.6199 23.2851 42.81 27.7196 44.2861C28.3102 44.6054 28.9231 44.8827 29.5551 45.1128C30.6428 45.7427 31.6144 46.5802 32.4077 47.5961C28.8888 53.6721 20.3162 54.2803 15.9831 48.7316ZM31.1352 41.5687C30.5509 41.2531 29.9442 40.9802 29.3194 40.752C28.2261 40.1214 27.2498 39.2814 26.4533 38.2613C28.8381 34.1433 33.7623 32.3415 38.1908 33.8165C38.7807 34.1353 39.3929 34.4122 40.0239 34.6422C41.1121 35.2721 42.0841 36.1099 42.8776 37.126C40.4865 41.2551 35.5546 43.0432 31.1352 41.5687ZM41.6086 31.0998C41.0221 30.7829 40.4131 30.5089 39.786 30.2799C38.6942 29.6495 37.7192 28.8101 36.9235 27.7912C40.4426 21.7146 49.0156 21.1078 53.348 26.6559C50.9582 30.7822 46.0285 32.5724 41.6086 31.0998Z",
        fill: "#46866C"
      })
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("defs", {
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("clipPath", {
        id: "clip0_3_540",
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("rect", {
          width: "60",
          height: "60",
          fill: "white"
        })
      })
    })]
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SorgohIcon);

/***/ }),

/***/ 1437:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__);




const TruckIcon = () => {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("svg", {
    width: "60",
    height: "60",
    viewBox: "0 0 60 60",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("g", {
      clipPath: "url(#clip0_3_521)",
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("path", {
        d: "M29.6789 42.8571H33.2146V33.2143C33.2146 30.8473 35.1334 28.9286 37.5003 28.9286H47.1432V21.4286C47.1432 19.6534 48.5822 18.2143 50.3574 18.2143H54.6432C54.6432 16.4391 53.2041 15 51.4289 15H41.786V17.1429C41.786 20.6933 38.9078 23.5714 35.3574 23.5714H22.5003C18.9499 23.5714 16.0717 20.6933 16.0717 17.1429V15H8.57171C6.91099 15 5.35742 17.4107 5.35742 19.2857V32.4964C9.81945 29.6802 15.3796 29.2336 20.234 31.3015C25.0883 33.3694 28.6184 37.6884 29.6789 42.8571Z",
        fill: "#46866C"
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("path", {
        d: "M13.9286 60C21.6211 60 27.8571 53.764 27.8571 46.0714C27.8571 38.3789 21.6211 32.1429 13.9286 32.1429C6.23603 32.1429 0 38.3789 0 46.0714C0 53.764 6.23603 60 13.9286 60ZM12.8571 35.3571C13.2399 35.3189 13.6141 35.4877 13.8386 35.8001C14.0631 36.1124 14.104 36.5209 13.9457 36.8715C13.7875 37.2221 13.4542 37.4617 13.0714 37.5C9.07473 37.8955 5.88853 41.013 5.4061 45.0001C4.92366 48.9873 7.27436 52.7748 11.0614 54.1121C14.8484 55.4494 19.0562 53.9778 21.1845 50.5719C23.3127 47.1659 22.7907 42.7389 19.9286 39.9214C19.7257 39.7202 19.6116 39.4464 19.6116 39.1607C19.6116 38.875 19.7257 38.6012 19.9286 38.4C20.3465 37.9846 21.0214 37.9846 21.4393 38.4C25.0193 41.9197 25.6754 47.4533 23.0175 51.7125C20.3597 55.9717 15.1008 57.8142 10.3659 56.1452C5.63098 54.4761 2.68995 49.7431 3.29048 44.7587C3.89101 39.7743 7.87203 35.8753 12.8679 35.3786L12.8571 35.3571Z",
        fill: "#46866C"
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("path", {
        d: "M10.7148 1.07143V12.8571H12.8577V1.07143C12.8577 0.479695 12.378 0 11.7863 0C11.1945 0 10.7148 0.479695 10.7148 1.07143Z",
        fill: "#46866C"
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("path", {
        d: "M50.358 40.7143C46.4578 40.7143 42.9417 43.0637 41.4491 46.667C39.9566 50.2703 40.7816 54.4178 43.5395 57.1756C46.2973 59.9335 50.4449 60.7585 54.0481 59.266C57.6514 57.7734 60.0008 54.2573 60.0008 50.3571C60.0008 45.0315 55.6836 40.7143 50.358 40.7143ZM50.358 56.7857C46.8076 56.7857 43.9294 53.9075 43.9294 50.3571C43.9294 46.8067 46.8076 43.9286 50.358 43.9286C50.9497 43.9286 51.4294 44.4083 51.4294 45C51.4294 45.5917 50.9497 46.0714 50.358 46.0714C47.991 46.0714 46.0723 47.9902 46.0723 50.3571C46.0723 52.7241 47.991 54.6428 50.358 54.6428C52.7249 54.6428 54.6437 52.7241 54.6437 50.3571C54.6437 49.7654 55.1234 49.2857 55.7151 49.2857C56.3069 49.2857 56.7866 49.7654 56.7866 50.3571C56.7866 53.9075 53.9084 56.7857 50.358 56.7857Z",
        fill: "#46866C"
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("path", {
        d: "M53.1102 32.3357L54.6423 33.4071V20.3571H50.3566C49.7649 20.3571 49.2852 20.8368 49.2852 21.4286V25.05L52.0387 26.9786C52.422 27.2461 52.5876 27.7313 52.4479 28.1774C52.3082 28.6234 51.8955 28.9275 51.428 28.9286C50.9887 28.9286 50.9137 28.8 49.2852 27.6643V38.625C51.1057 38.4597 52.9397 38.7201 54.6423 39.3857V36.0214L51.8887 34.0928C51.5522 33.884 51.3583 33.5065 51.3847 33.1113C51.411 32.7161 51.6532 32.3676 52.0145 32.2053C52.3757 32.0429 52.7971 32.093 53.1102 32.3357Z",
        fill: "#46866C"
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("path", {
        d: "M22.5006 21.4286H35.3577C37.7246 21.4286 39.6434 19.5098 39.6434 17.1429V15H18.2148V17.1429C18.2148 19.5098 20.1336 21.4286 22.5006 21.4286ZM23.572 17.1429H34.2863C34.878 17.1429 35.3577 17.6225 35.3577 18.2143C35.3577 18.806 34.878 19.2857 34.2863 19.2857H23.572C22.9803 19.2857 22.5006 18.806 22.5006 18.2143C22.5006 17.6225 22.9803 17.1429 23.572 17.1429Z",
        fill: "#46866C"
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("path", {
        d: "M49.2852 12.8571V8.57143H53.5709C54.1626 8.57143 54.6423 8.09173 54.6423 7.5C54.6423 6.90827 54.1626 6.42857 53.5709 6.42857H49.2852V5.35714C49.2852 4.76541 48.8055 4.28571 48.2137 4.28571C47.622 4.28571 47.1423 4.76541 47.1423 5.35714V6.42857H42.8566C42.2649 6.42857 41.7852 6.90827 41.7852 7.5C41.7852 8.09173 42.2649 8.57143 42.8566 8.57143H47.1423V12.8571H49.2852Z",
        fill: "#46866C"
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("path", {
        d: "M39.6431 34.2857H47.1431V31.0714H37.5003C36.3168 31.0714 35.3574 32.0308 35.3574 33.2143V42.8571H41.2717C42.793 41.0133 44.8417 39.6786 47.1431 39.0321V36.4286H39.6431C39.0514 36.4286 38.5717 35.9489 38.5717 35.3571C38.5717 34.7654 39.0514 34.2857 39.6431 34.2857Z",
        fill: "#46866C"
      })]
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("defs", {
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("clipPath", {
        id: "clip0_3_521",
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("rect", {
          width: "60",
          height: "60",
          fill: "white"
        })
      })
    })]
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TruckIcon);

/***/ }),

/***/ 9416:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _mui_icons_material_Add__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6146);
/* harmony import */ var _mui_icons_material_Add__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_mui_icons_material_Add__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var modules_layouts_Scaffold__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2655);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5675);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _Partials_MinPost__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(3951);
/* harmony import */ var _Partials_LatestBlog__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(3326);
/* harmony import */ var modules_partials_drawable_icons_cowIcon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(1366);
/* harmony import */ var modules_partials_drawable_icons_sorgohIcon__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(6343);
/* harmony import */ var modules_partials_drawable_icons_handIcon__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(4462);
/* harmony import */ var modules_partials_drawable_icons_truckIcon__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(1437);
/* harmony import */ var modules_partials_Testimonial__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(1217);
/* harmony import */ var modules_partials_Slides__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(5703);
/* harmony import */ var modules_partials_CarouselPartners__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(847);
/* harmony import */ var apis_utils_fetcher__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(6635);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([apis_utils_fetcher__WEBPACK_IMPORTED_MODULE_14__]);
apis_utils_fetcher__WEBPACK_IMPORTED_MODULE_14__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



















const LandingAcitivity = ({
  data,
  articles
}) => {
  var _articleList$slice, _articles$slice;

  const {
    push
  } = (0,next_router__WEBPACK_IMPORTED_MODULE_15__.useRouter)();
  const {
    data: {
      data: subCategories
    }
  } = (0,apis_utils_fetcher__WEBPACK_IMPORTED_MODULE_14__/* .useProtectedFetcher */ .Nv)('/api/sub-categories');
  const slides = (data === null || data === void 0 ? void 0 : data.slides) || [];
  const {
    data: {
      data: partners
    },
    isLoading
  } = (0,apis_utils_fetcher__WEBPACK_IMPORTED_MODULE_14__/* .useOpenFetcher */ .TB)(`/api/partners`);
  const confirmedPartners = partners === null || partners === void 0 ? void 0 : partners.rows;
  const articleList = (articles === null || articles === void 0 ? void 0 : articles.map(item => {
    var _subCategories$rows;

    const sub = subCategories === null || subCategories === void 0 ? void 0 : (_subCategories$rows = subCategories.rows) === null || _subCategories$rows === void 0 ? void 0 : _subCategories$rows.filter(element => element.id == item.category);

    if (sub !== null && sub !== void 0 && sub.length) {
      return _objectSpread(_objectSpread({}, item), {}, {
        category: sub[0]
      });
    }

    return item;
  })) || [];
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsxs)(modules_layouts_Scaffold__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx(modules_partials_Slides__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z, {
      data: slides
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsxs)("div", {
      className: "px-4 md:px-8 py-2 bg-white inline-grid md:grid-cols-3 gap-x-10 gap-y-3",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsxs)("div", {
        role: "button",
        onClick: () => {
          push('/services');
        },
        className: "flex space-y-6 justify-between flex-col items-center py-4 px-6 rounded-[15px] drop-shadow border border-gray-400",
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx((next_image__WEBPACK_IMPORTED_MODULE_3___default()), {
          src: "/assets/images/Business Network.png",
          alt: "",
          loading: "lazy",
          width: "138px",
          height: "131px",
          objectFit: "cover"
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx("p", {
          className: "text-brand-green font-bold text-base",
          children: "Services"
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx("button", {
          type: "button",
          className: "text-xl font-bold w-8 h-8 rounded-full bg-brand-green text-white",
          children: "+"
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsxs)("div", {
        role: "button",
        onClick: () => {
          push('/extension-material');
        },
        className: "flex flex-col relative rounded-[15px]",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsxs)("div", {
          className: "z-10 flex-grow flex bg-[#660A0A] bg-opacity-80 space-y-6 justify-between flex-col items-center py-4 px-6 rounded-[15px] drop-shadow border border-gray-400",
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx((next_image__WEBPACK_IMPORTED_MODULE_3___default()), {
            src: "/assets/images/extension 1.png",
            alt: "",
            loading: "lazy",
            width: "149.27px",
            height: "101.75px"
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx("p", {
            className: "text-brand-green font-bold text-base text-center",
            children: "Extension material"
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx("p", {
            className: "text-brand-green font-bold text-base text-center",
            children: "Imfashanyigisho"
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx("p", {
            className: "text-sm text-white text-center",
            children: "Extension materials for Crop and Livestock Commodities for extension agents and farmers"
          })]
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx((next_image__WEBPACK_IMPORTED_MODULE_3___default()), {
          src: "/assets/images/blog post 1.png",
          alt: "",
          layout: "fill",
          className: "rounded-[15px]"
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsxs)("div", {
        role: "button",
        onClick: () => {
          push('/farmer-platform');
        },
        className: "flex space-y-6 justify-between flex-col items-center py-4 px-6 rounded-[15px] drop-shadow border border-gray-400",
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx((next_image__WEBPACK_IMPORTED_MODULE_3___default()), {
          src: "/assets/images/farmer 1.png",
          alt: "",
          loading: "lazy",
          width: "118px",
          height: "131px",
          objectFit: "cover"
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx("p", {
          className: "text-brand-green text-center font-bold text-base",
          children: "Urubuga rw'Abahinzi-Borozi"
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx("p", {
          className: "text-brand-green text-center font-bold text-base",
          children: "Farmer Platform"
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx("p", {
          className: "text-sm text-center",
          children: "A virtual community of farmers and agriprenuers. Exchange with them on our Farmer Platform"
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx("button", {
          type: "button",
          className: "text-xl font-bold w-8 h-8 rounded-full bg-brand-green text-white",
          children: "+"
        })]
      })]
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx("div", {
      className: "px-4 md:px-8 py-2 bg-white",
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx("div", {
        className: "flex flex-col relative min-h-[64px] md:min-h-[195px]",
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx((next_link__WEBPACK_IMPORTED_MODULE_4___default()), {
          href: "/innovation-center",
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx((next_image__WEBPACK_IMPORTED_MODULE_3___default()), {
            src: "/assets/images/yean.png",
            alt: "",
            layout: "fill",
            loading: "lazy",
            objectPosition: "center",
            className: "cursor-pointer"
          })
        })
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsxs)("div", {
      className: "flex flex-col px-4 md:px-8 py-2 bg-white",
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx("h1", {
        className: "text-2xl md:text-4xl text-white font-bold bg-brand-green p-2 text-center",
        children: "Extension Materials"
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx("div", {
        className: "pt-2 inline-grid sm:grid-cols-2 md:grid-cols-4 gap-3",
        children: (_articleList$slice = articleList.slice(0, 8)) === null || _articleList$slice === void 0 ? void 0 : _articleList$slice.map(element => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx(_Partials_MinPost__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
          data: element
        }, element.id))
      })]
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx("div", {
      className: "px-4 md:px-8 py-2 bg-white",
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx("div", {
        className: "flex flex-col relative min-h-[64px] md:min-h-[195px]",
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx((next_link__WEBPACK_IMPORTED_MODULE_4___default()), {
          href: "/farmer-platform",
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx((next_image__WEBPACK_IMPORTED_MODULE_3___default()), {
            src: "/assets/images/greenhouse.png",
            alt: "",
            layout: "fill",
            loading: "lazy",
            objectPosition: "center",
            className: "cursor-pointer"
          })
        })
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsxs)("div", {
      className: "flex flex-col px-4 md:px-8 py-2 bg-white",
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx("h1", {
        className: "text-2xl md:text-4xl text-white font-bold bg-brand-green p-2 text-center",
        children: "Latest Blog"
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx("div", {
        className: "pt-2 inline-grid sm:grid-cols-2 md:grid-cols-4 gap-3",
        children: articles === null || articles === void 0 ? void 0 : (_articles$slice = articles.slice(8)) === null || _articles$slice === void 0 ? void 0 : _articles$slice.map(element => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx(_Partials_LatestBlog__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
          data: element
        }, element.id))
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsxs)("button", {
        type: "button",
        onClick: () => {
          push('/blog');
        },
        className: "mt-4 flex items-center space-x-2 mx-auto px-12 py-2 text-white bg-brand-green rounded-sm",
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx("span", {
          className: "p-1 rounded-full bg-white text-brand-green",
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx((_mui_icons_material_Add__WEBPACK_IMPORTED_MODULE_0___default()), {})
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx("span", {
          children: "View More"
        })]
      })]
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx("div", {
      className: "px-4 md:px-8 py-2 bg-white",
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx("div", {
        className: "flex flex-col relative min-h-[64px] md:min-h-[195px]",
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx((next_link__WEBPACK_IMPORTED_MODULE_4___default()), {
          href: "/farmer-platform",
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx((next_image__WEBPACK_IMPORTED_MODULE_3___default()), {
            src: "/assets/images/Inputs.png",
            alt: "",
            layout: "fill",
            loading: "lazy",
            objectPosition: "center",
            className: "cursor-pointer"
          })
        })
      })
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx("div", {
      className: "px-4  md:px-8 py-2 bg-white",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsxs)("div", {
        className: "flex flex-col items-center justify-center relative min-h-[200px] md:min-h-[461px]",
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx((next_image__WEBPACK_IMPORTED_MODULE_3___default()), {
          src: "/assets/images/bg-stat.png",
          alt: "",
          layout: "fill",
          loading: "lazy",
          objectPosition: "center",
          objectFit: "cover",
          className: "z-0"
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx("div", {
          className: "top-0 absolute flex-grow h-full flex flex-col items-center justify-center",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsxs)("div", {
            className: "px-2 inline-grid grid-cols-2 md:grid-cols-4 justify-center gap-x-10 gap-y-3",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsxs)("div", {
              className: "flex items-center space-x-2 bg-brand-yellow text-white px-8 py-4 rounded-sm",
              children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx(modules_partials_drawable_icons_cowIcon__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsxs)("div", {
                className: "flex flex-col",
                children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx("p", {
                  className: "font-bold text-base",
                  children: "240,000+"
                }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx("p", {
                  className: "text-xs mt-1",
                  children: "Farmer served"
                })]
              })]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsxs)("div", {
              className: "flex items-center space-x-2 bg-brand-yellow text-white px-8 py-4 rounded-sm",
              children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx(modules_partials_drawable_icons_sorgohIcon__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsxs)("div", {
                className: "flex flex-col",
                children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx("p", {
                  className: "font-bold text-base",
                  children: "150,000"
                }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx("p", {
                  className: "text-xs mt-1",
                  children: "Target farmers by 2025"
                })]
              })]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsxs)("div", {
              className: "flex items-center space-x-2 bg-brand-yellow text-white px-8 py-4 rounded-sm",
              children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx(modules_partials_drawable_icons_handIcon__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsxs)("div", {
                className: "flex flex-col",
                children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx("p", {
                  className: "font-bold text-base",
                  children: "30"
                }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx("p", {
                  className: "text-xs mt-1",
                  children: "Districts"
                })]
              })]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsxs)("div", {
              className: "flex items-center space-x-2 bg-brand-yellow text-white px-8 py-4 rounded-sm",
              children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx(modules_partials_drawable_icons_truckIcon__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsxs)("div", {
                className: "flex flex-col",
                children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx("p", {
                  className: "font-bold text-base",
                  children: "27"
                }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx("p", {
                  className: "text-xs mt-1",
                  children: "Commodity specific platforms"
                })]
              })]
            })]
          })
        })]
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsxs)("div", {
      className: "flex flex-col px-4 md:px-8 py-2 bg-white",
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx("h1", {
        className: "text-2xl md:text-4xl text-white font-bold bg-brand-green p-2 text-center",
        children: "Our Partners"
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx(modules_partials_CarouselPartners__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Z, {
        data: confirmedPartners
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsxs)("div", {
      className: "flex flex-col px-4 md:px-8 py-2 bg-white",
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx("h1", {
        className: "text-2xl md:text-4xl text-white font-bold bg-brand-green p-2 text-center",
        children: "Our Testmonials"
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx("div", {
        className: "pt-2 flex items-center space-x-3 md:space-x-12 justify-between",
        children: new Array(3).fill(0).map(element => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx(modules_partials_Testimonial__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z, {}, element))
      })]
    })]
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (LandingAcitivity);
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 3326:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


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
var CustomImage = __webpack_require__(9663);
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
  var _data$author;

  const {
    push
  } = (0,router_.useRouter)();

  const handleClick = () => {
    push(`/blog/${data === null || data === void 0 ? void 0 : data.id}`);
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
          children: data === null || data === void 0 ? void 0 : (_data$author = data.author) === null || _data$author === void 0 ? void 0 : _data$author.firstname
        })]
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("button", {
        className: "flex items-center space-x-1",
        children: [/*#__PURE__*/jsx_runtime_.jsx((RemoveRedEye_default()), {}), " ", /*#__PURE__*/jsx_runtime_.jsx("span", {
          children: data === null || data === void 0 ? void 0 : data.views
        })]
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("button", {
        className: "flex items-center space-x-1",
        children: [/*#__PURE__*/jsx_runtime_.jsx((Comment_default()), {}), " ", /*#__PURE__*/jsx_runtime_.jsx("span", {
          children: data === null || data === void 0 ? void 0 : data.comment
        })]
      })]
    }), /*#__PURE__*/jsx_runtime_.jsx("p", {
      className: "px-2 text-gray-600 line-clamp-2",
      children: data === null || data === void 0 ? void 0 : data.title
    })]
  });
};

/* harmony default export */ const _Partials_LatestBlog = (LatestBlog);

/***/ }),

/***/ 3951:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var modules_partials_CustomImage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9663);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__);






const MinPost = ({
  data
}) => {
  const {
    push
  } = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();

  const handleClick = () => {
    var _data$category;

    if (data !== null && data !== void 0 && (_data$category = data.category) !== null && _data$category !== void 0 && _data$category.id) {
      var _data$category2, _data$category3;

      push(`/extension-material/${data === null || data === void 0 ? void 0 : (_data$category2 = data.category) === null || _data$category2 === void 0 ? void 0 : _data$category2.id}?sub=${data === null || data === void 0 ? void 0 : (_data$category3 = data.category) === null || _data$category3 === void 0 ? void 0 : _data$category3.name}`);
    } else {
      push(`/extension-material`);
    }
  };

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
    role: "button",
    onClick: handleClick,
    className: "flex flex-col rounded-[15px] drop-shadow border border-gray-400",
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("div", {
      className: "min-h-[192.97px] flex relative",
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(modules_partials_CustomImage__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z, {
        src: data.image,
        alt: "",
        layout: "fill",
        className: "rounded-[15px]",
        objectFit: "cover",
        loading: "lazy"
      })
    }), (data === null || data === void 0 ? void 0 : data.category) && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("button", {
      className: "mr-auto rounded-sm bg-dark-green -translate-y-4 text-white py-2 px-3",
      children: data.category.name
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("p", {
      className: "px-2 text-dark-green line-clamp-2",
      children: data === null || data === void 0 ? void 0 : data.title
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("div", {
      className: "pt-2 p-2 mt-auto",
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("button", {
        className: "font-semibold px-4 py-2 mr-auto text-white rounded-lg bg-dark-green",
        children: "Learn More"
      })
    })]
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MinPost);

/***/ }),

/***/ 2779:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

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
/* harmony import */ var modules_activities_LandingActivity__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9416);
/* harmony import */ var core_factory_fact_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8894);
/* harmony import */ var next_script__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(4780);
/* harmony import */ var next_script__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_script__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var modules_partials_MetaData__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(3405);
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
    results = data === null || data === void 0 ? void 0 : data.data;
  } catch (error) {
    console.log(error);
  }

  try {
    const {
      data: articles
    } = await core_factory_fact_http__WEBPACK_IMPORTED_MODULE_3__/* ["default"].axios.get */ .Z.axios.get('/api/landing/1?attributes=id,title,author_id,comment,views,category');
    resultArticles = articles === null || articles === void 0 ? void 0 : articles.data;
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

/***/ 3329:
/***/ ((module) => {

module.exports = require("@mui/icons-material/AccountBox");

/***/ }),

/***/ 6146:
/***/ ((module) => {

module.exports = require("@mui/icons-material/Add");

/***/ }),

/***/ 765:
/***/ ((module) => {

module.exports = require("@mui/icons-material/ArrowDropDown");

/***/ }),

/***/ 856:
/***/ ((module) => {

module.exports = require("@mui/icons-material/Category");

/***/ }),

/***/ 6959:
/***/ ((module) => {

module.exports = require("@mui/icons-material/ChevronLeft");

/***/ }),

/***/ 2818:
/***/ ((module) => {

module.exports = require("@mui/icons-material/ChevronRight");

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

/***/ 4780:
/***/ ((module) => {

module.exports = require("next/script");

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

/***/ }),

/***/ 5941:
/***/ ((module) => {

module.exports = import("swr");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [2922,3061,9682,967,8790,2077,3751,3405,9055,2655,9663,5305], () => (__webpack_exec__(2779)));
module.exports = __webpack_exports__;

})();