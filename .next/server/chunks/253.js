"use strict";
exports.id = 253;
exports.ids = [253];
exports.modules = {

/***/ 253:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ layouts_Scaffold)
});

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);
// EXTERNAL MODULE: external "@mui/icons-material/Search"
var Search_ = __webpack_require__(8017);
var Search_default = /*#__PURE__*/__webpack_require__.n(Search_);
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: ./src/modules/layouts/Wrapper/index.tsx



const Wrapper = ({
  className = '',
  children = /*#__PURE__*/jsx_runtime_.jsx("div", {})
}) => {
  return /*#__PURE__*/jsx_runtime_.jsx("div", {
    className: `flex flex-col items-center w-full ${className}`,
    children: /*#__PURE__*/jsx_runtime_.jsx("div", {
      className: "w-full xl:max-w-screen-2xl flex flex-grow flex-col h-full relative",
      children: children
    })
  });
};

/* harmony default export */ const layouts_Wrapper = (Wrapper);
// EXTERNAL MODULE: ./src/modules/_partials/Logo/index.tsx
var Logo = __webpack_require__(6945);
// EXTERNAL MODULE: ./src/modules/_partials/NavItems/index.tsx
var NavItems = __webpack_require__(9455);
// EXTERNAL MODULE: ./src/modules/_partials/LeftDrawer/index.tsx
var LeftDrawer = __webpack_require__(9391);
// EXTERNAL MODULE: external "@mui/icons-material/ArrowDropDown"
var ArrowDropDown_ = __webpack_require__(765);
var ArrowDropDown_default = /*#__PURE__*/__webpack_require__.n(ArrowDropDown_);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(1853);
// EXTERNAL MODULE: ./src/system/static/index.ts
var system_static = __webpack_require__(192);
// EXTERNAL MODULE: external "@mui/material/Popover"
var Popover_ = __webpack_require__(5768);
var Popover_default = /*#__PURE__*/__webpack_require__.n(Popover_);
;// CONCATENATED MODULE: ./src/modules/_partials/WedoPopup/index.tsx









const WedoPopup = ({
  icon = /*#__PURE__*/jsx_runtime_.jsx((external_react_default()).Fragment, {}),
  active = false,
  label = 'What we do?'
}) => {
  const {
    push
  } = (0,router_.useRouter)();
  const [anchorEl, setAnchorEl] = external_react_default().useState(null);

  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
    children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("button", {
      "aria-describedby": id,
      type: "button",
      onClick: handleClick,
      onMouseEnter: handleClick,
      className: `whitespace-nowrap border-r border-opacity-06 px-2 md:px-4 flex items-center font-medium space-x-2 py-4 hover:opacity-75 bg-brand-green text-white cursor-pointer ${active ? 'bg-opacity-30' : ''}`,
      children: [icon, /*#__PURE__*/jsx_runtime_.jsx("span", {
        children: label
      }), /*#__PURE__*/jsx_runtime_.jsx((ArrowDropDown_default()), {})]
    }), /*#__PURE__*/jsx_runtime_.jsx((Popover_default()), {
      anchorOrigin: {
        vertical: 'bottom',
        horizontal: 'right'
      },
      transformOrigin: {
        vertical: 'top',
        horizontal: 'right'
      },
      onClose: handleClose,
      open: open,
      anchorEl: anchorEl,
      children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        onMouseLeave: handleClose,
        className: "flex flex-col py-4 px-3 text-brand-green bg-green-200 min-w-[150px]",
        children: [/*#__PURE__*/jsx_runtime_.jsx((link_default()), {
          href: "/services",
          children: /*#__PURE__*/jsx_runtime_.jsx("p", {
            className: "cursor-pointer hover:opacity-80 border-b pb-3 border-brand-green",
            children: "Services"
          })
        }), /*#__PURE__*/jsx_runtime_.jsx((link_default()), {
          href: "/projects",
          children: /*#__PURE__*/jsx_runtime_.jsx("p", {
            className: "cursor-pointer hover:opacity-80 border-b py-3 border-brand-green",
            children: "Projects"
          })
        }), /*#__PURE__*/jsx_runtime_.jsx((link_default()), {
          href: "/models",
          children: /*#__PURE__*/jsx_runtime_.jsx("p", {
            className: "cursor-pointer hover:opacity-80 border-b py-3 border-brand-green",
            children: "Models"
          })
        }), /*#__PURE__*/jsx_runtime_.jsx((link_default()), {
          href: "/models?q=impact",
          children: /*#__PURE__*/jsx_runtime_.jsx("p", {
            className: "cursor-pointer hover:opacity-80 border-b pt-3",
            children: "Impacts"
          })
        })]
      })
    })]
  });
};

/* harmony default export */ const _partials_WedoPopup = (WedoPopup);
;// CONCATENATED MODULE: ./src/modules/_partials/HeaderNavItems/index.tsx









const HeaderNavItems = ({
  className = 'flex items-center'
}) => {
  const {
    pathname
  } = (0,router_.useRouter)();
  return /*#__PURE__*/jsx_runtime_.jsx("div", {
    className: className,
    children: system_static/* headerNavs.map */.QC.map((element, index) => {
      if (index === 1) {
        return /*#__PURE__*/jsx_runtime_.jsx(_partials_WedoPopup, {
          icon: /*#__PURE__*/jsx_runtime_.jsx(element.icon, {}),
          active: pathname === element.path,
          label: element.label
        });
      }

      return /*#__PURE__*/jsx_runtime_.jsx((link_default()), {
        href: element.path,
        className: "group",
        children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("h2", {
          className: `whitespace-nowrap border-r border-opacity-06 px-2 md:px-4 flex items-center font-medium space-x-2 py-4 hover:opacity-75 bg-brand-green text-white cursor-pointer ${pathname === element.path ? 'bg-opacity-30' : ''}`,
          children: [/*#__PURE__*/jsx_runtime_.jsx(element.icon, {}), /*#__PURE__*/jsx_runtime_.jsx("span", {
            children: element.label
          }), element.hasSub ? /*#__PURE__*/jsx_runtime_.jsx((ArrowDropDown_default()), {}) : null]
        })
      }, element.label);
    })
  });
};

/* harmony default export */ const _partials_HeaderNavItems = (HeaderNavItems);
// EXTERNAL MODULE: ./src/modules/contexts/NavbarContext/index.tsx
var NavbarContext = __webpack_require__(4653);
;// CONCATENATED MODULE: ./src/modules/_partials/RecentPages/index.tsx




function RecentPages({
  onClickPage
}) {
  const {
    push
  } = (0,router_.useRouter)();
  const {
    recentPages
  } = (0,NavbarContext/* useNavbar */.RD)();

  if (recentPages.length <= 1) {
    return null;
  }

  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
    className: "mb-3 last:mb-0",
    children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
      className: "text-xs font-semibold text-slate-400 uppercase px-2 mb-2",
      children: "Recent pages"
    }), /*#__PURE__*/jsx_runtime_.jsx("ul", {
      className: "text-sm",
      children: recentPages.map(element => {
        const arr = element.split('/');
        const lastIndex = arr.length - 1;

        if (element.startsWith('/searches')) {
          return null;
        }

        return /*#__PURE__*/jsx_runtime_.jsx("li", {
          children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("button", {
            className: "flex items-center p-2 text-slate-800 hover:text-white hover:bg-brand-green rounded group",
            onClick: () => {
              push(element);
              onClickPage();
            },
            children: [/*#__PURE__*/jsx_runtime_.jsx("svg", {
              className: "w-4 h-4 fill-current text-slate-400 group-hover:text-white group-hover:text-opacity-50 shrink-0 mr-3",
              viewBox: "0 0 16 16",
              children: /*#__PURE__*/jsx_runtime_.jsx("path", {
                d: "M14 0H2c-.6 0-1 .4-1 1v14c0 .6.4 1 1 1h8l5-5V1c0-.6-.4-1-1-1zM3 2h10v8H9v4H3V2z"
              })
            }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("span", {
              children: [/*#__PURE__*/jsx_runtime_.jsx("span", {
                className: "font-medium text-slate-800 group-hover:text-white capitalize",
                children: arr[1] || 'Home'
              }), ' ', "- Page", ' ', lastIndex > 2 ? `/ … / ${arr[lastIndex].replace(/-/g, ' ')}` : arr[lastIndex].replace(/-/g, ' ')]
            })]
          })
        }, element);
      })
    })]
  });
}
// EXTERNAL MODULE: ./src/modules/contexts/SearchbarContext/index.tsx
var SearchbarContext = __webpack_require__(8805);
;// CONCATENATED MODULE: ./src/modules/_partials/RecentSearches/index.tsx




function RecentSearches({
  onClickSearch
}) {
  const {
    recentSearches
  } = (0,SearchbarContext/* useSearchbar */.K1)();
  const {
    push
  } = (0,router_.useRouter)();

  if (!recentSearches.length) {
    return null;
  }

  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
    className: "mb-3 last:mb-0",
    children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
      className: "text-xs font-semibold text-slate-400 uppercase px-2 mb-2",
      children: "Recent searches"
    }), /*#__PURE__*/jsx_runtime_.jsx("ul", {
      className: "text-sm",
      children: recentSearches.map(element => {
        return /*#__PURE__*/jsx_runtime_.jsx("li", {
          children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("button", {
            className: "flex items-center p-2 text-slate-800 hover:text-white hover:bg-brand-green rounded group",
            onClick: () => {
              push(`/searches?q=${element}`);
              onClickSearch();
            },
            children: [/*#__PURE__*/jsx_runtime_.jsx("svg", {
              className: "w-4 h-4 fill-current text-slate-400 group-hover:text-white group-hover:text-opacity-50 shrink-0 mr-3",
              viewBox: "0 0 16 16",
              children: /*#__PURE__*/jsx_runtime_.jsx("path", {
                d: "M15.707 14.293v.001a1 1 0 01-1.414 1.414L11.185 12.6A6.935 6.935 0 017 14a7.016 7.016 0 01-5.173-2.308l-1.537 1.3L0 8l4.873 1.12-1.521 1.285a4.971 4.971 0 008.59-2.835l1.979.454a6.971 6.971 0 01-1.321 3.157l3.107 3.112zM14 6L9.127 4.88l1.521-1.28a4.971 4.971 0 00-8.59 2.83L.084 5.976a6.977 6.977 0 0112.089-3.668l1.537-1.3L14 6z"
              })
            }), /*#__PURE__*/jsx_runtime_.jsx("span", {
              children: element
            })]
          })
        }, element);
      })
    })]
  });
}
// EXTERNAL MODULE: ./src/modules/_partials/Transition/index.tsx
var Transition = __webpack_require__(1327);
;// CONCATENATED MODULE: ./src/modules/_partials/SearchModal/index.tsx









function SearchModal({
  id,
  searchId,
  modalOpen,
  setModalOpen
}) {
  const {
    push
  } = (0,router_.useRouter)();
  const modalContent = (0,external_react_.useRef)(null);
  const searchInput = (0,external_react_.useRef)(null);

  const onSearch = event => {
    event.preventDefault();
    const value = searchInput.current.value;

    if (!value.trim()) {
      return;
    }

    push(`/searches?q=${value.trim()}`);
    setModalOpen(!modalOpen);
  }; // close on click outside


  (0,external_react_.useEffect)(() => {
    const clickHandler = ({
      target
    }) => {
      if (!modalOpen || modalContent.current.contains(target)) return;
      setModalOpen(false);
    };

    document.addEventListener('click', clickHandler);
    return () => document.removeEventListener('click', clickHandler);
  }); // close if the esc key is pressed

  (0,external_react_.useEffect)(() => {
    const keyHandler = ({
      keyCode
    }) => {
      if (!modalOpen || keyCode !== 27) return;
      setModalOpen(false);
    };

    document.addEventListener('keydown', keyHandler);
    return () => document.removeEventListener('keydown', keyHandler);
  });
  (0,external_react_.useEffect)(() => {
    modalOpen && searchInput.current.focus();
  }, [modalOpen]);
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
    children: [/*#__PURE__*/jsx_runtime_.jsx(Transition/* default */.Z, {
      className: "fixed inset-0 bg-slate-900 bg-opacity-30 z-50 transition-opacity",
      show: modalOpen,
      enter: "transition ease-out duration-200",
      enterStart: "opacity-0",
      enterEnd: "opacity-100",
      leave: "transition ease-out duration-100",
      leaveStart: "opacity-100",
      leaveEnd: "opacity-0",
      "aria-hidden": "true"
    }), /*#__PURE__*/jsx_runtime_.jsx(Transition/* default */.Z, {
      id: id,
      className: "fixed inset-0 z-50 overflow-hidden flex items-start top-4 mb-4 justify-center transform px-4 sm:px-6",
      role: "dialog",
      "aria-modal": "true",
      show: modalOpen,
      enter: "transition ease-in-out duration-200",
      enterStart: "opacity-0 translate-y-4",
      enterEnd: "opacity-100 translate-y-0",
      leave: "transition ease-in-out duration-200",
      leaveStart: "opacity-100 translate-y-0",
      leaveEnd: "opacity-0 translate-y-4",
      children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        ref: modalContent,
        className: "bg-white overflow-auto max-w-2xl w-full max-h-full rounded shadow-lg",
        children: [/*#__PURE__*/jsx_runtime_.jsx("form", {
          onSubmit: onSearch,
          className: "border-b border-slate-200",
          children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
            className: "relative",
            children: [/*#__PURE__*/jsx_runtime_.jsx("label", {
              htmlFor: searchId,
              className: "sr-only",
              children: "Search"
            }), /*#__PURE__*/jsx_runtime_.jsx("input", {
              id: searchId,
              className: "w-full border-0 focus:ring-transparent placeholder-slate-400 appearance-none py-3 pl-10 pr-4",
              type: "search",
              placeholder: "Search Anything\u2026",
              ref: searchInput
            }), /*#__PURE__*/jsx_runtime_.jsx("button", {
              className: "absolute inset-0 right-auto group",
              type: "submit",
              "aria-label": "Search",
              children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("svg", {
                className: "w-4 h-4 shrink-0 fill-current text-slate-400 group-hover:text-slate-500 ml-4 mr-2",
                viewBox: "0 0 16 16",
                xmlns: "http://www.w3.org/2000/svg",
                children: [/*#__PURE__*/jsx_runtime_.jsx("path", {
                  d: "M7 14c-3.86 0-7-3.14-7-7s3.14-7 7-7 7 3.14 7 7-3.14 7-7 7zM7 2C4.243 2 2 4.243 2 7s2.243 5 5 5 5-2.243 5-5-2.243-5-5-5z"
                }), /*#__PURE__*/jsx_runtime_.jsx("path", {
                  d: "M15.707 14.293L13.314 11.9a8.019 8.019 0 01-1.414 1.414l2.393 2.393a.997.997 0 001.414 0 .999.999 0 000-1.414z"
                })]
              })
            })]
          })
        }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          className: "py-4 px-2",
          children: [/*#__PURE__*/jsx_runtime_.jsx(RecentSearches, {
            onClickSearch: () => setModalOpen(!modalOpen)
          }), /*#__PURE__*/jsx_runtime_.jsx(RecentPages, {
            onClickPage: () => setModalOpen(!modalOpen)
          })]
        })]
      })
    })]
  });
}

/* harmony default export */ const _partials_SearchModal = (SearchModal);
;// CONCATENATED MODULE: ./src/modules/_partials/Header/index.tsx












const Header = () => {
  const [searchModalOpen, setSearchModalOpen] = external_react_default().useState(false);

  const onSearch = event => {
    event.stopPropagation();
    setSearchModalOpen(true);
  };

  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
    children: [/*#__PURE__*/jsx_runtime_.jsx(layouts_Wrapper, {
      className: "bg-white px-4 md:px-8",
      children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("nav", {
        className: "w-full flex items-center justify-between space-x-12",
        children: [/*#__PURE__*/jsx_runtime_.jsx(Logo/* default */.Z, {}), /*#__PURE__*/jsx_runtime_.jsx(LeftDrawer/* default */.Z, {
          onSearch: onSearch
        }), /*#__PURE__*/jsx_runtime_.jsx(NavItems/* default */.Z, {})]
      })
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(layouts_Wrapper, {
      className: "overflow-x-auto bg-brand-green px-4 md:px-8 border-b border-opacity-06",
      children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: "flex items-center md:space-x-6 justify-between",
        children: [/*#__PURE__*/jsx_runtime_.jsx(_partials_HeaderNavItems, {}), /*#__PURE__*/(0,jsx_runtime_.jsxs)("label", {
          htmlFor: "search",
          className: "hidden z-20 md:flex text-white items-center relative",
          children: [/*#__PURE__*/jsx_runtime_.jsx((Search_default()), {
            className: "left-3 absolute"
          }), /*#__PURE__*/jsx_runtime_.jsx("input", {
            type: "search",
            name: "",
            id: "search",
            onClick: onSearch,
            readOnly: true,
            placeholder: "Search",
            className: "placeholder:text-center rounded-full px-12 placeholder:font-bold placeholder:text-white outline-none bg-white bg-opacity-20 py-2"
          })]
        })]
      }), /*#__PURE__*/jsx_runtime_.jsx(_partials_SearchModal, {
        id: "search-modal",
        searchId: "search",
        modalOpen: searchModalOpen,
        setModalOpen: setSearchModalOpen
      })]
    })]
  });
};

/* harmony default export */ const _partials_Header = (Header);
// EXTERNAL MODULE: external "@mui/material/Snackbar"
var Snackbar_ = __webpack_require__(9174);
var Snackbar_default = /*#__PURE__*/__webpack_require__.n(Snackbar_);
// EXTERNAL MODULE: external "@mui/material/Alert"
var Alert_ = __webpack_require__(3765);
var Alert_default = /*#__PURE__*/__webpack_require__.n(Alert_);
// EXTERNAL MODULE: external "axios"
var external_axios_ = __webpack_require__(2167);
var external_axios_default = /*#__PURE__*/__webpack_require__.n(external_axios_);
;// CONCATENATED MODULE: ./src/modules/_partials/_drawable/icons/facebookIcon.tsx




const FacebookIcon = () => {
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("svg", {
    width: "35",
    height: "31",
    viewBox: "0 0 35 31",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    children: [/*#__PURE__*/jsx_runtime_.jsx("g", {
      filter: "url(#filter0_d_3_410)",
      children: /*#__PURE__*/jsx_runtime_.jsx("ellipse", {
        cx: "17.9213",
        cy: "14.0282",
        rx: "15.9603",
        ry: "14.0282",
        fill: "#1B7BFD"
      })
    }), /*#__PURE__*/jsx_runtime_.jsx("g", {
      clipPath: "url(#clip0_3_410)",
      children: /*#__PURE__*/jsx_runtime_.jsx("path", {
        d: "M19.5178 15.0804H21.5128L22.3108 12.2747H19.5178V10.8719C19.5178 10.1495 19.5178 9.46909 21.1138 9.46909H22.3108V7.11236C22.0507 7.0822 21.0683 7.01416 20.0309 7.01416C17.8643 7.01416 16.3257 8.1764 16.3257 10.3108V12.2747H13.9316V15.0804H16.3257V21.0424H19.5178V15.0804Z",
        fill: "white"
      })
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("defs", {
      children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("filter", {
        id: "filter0_d_3_410",
        x: "0.960938",
        y: "0",
        width: "33.9199",
        height: "30.0564",
        filterUnits: "userSpaceOnUse",
        colorInterpolationFilters: "sRGB",
        children: [/*#__PURE__*/jsx_runtime_.jsx("feFlood", {
          floodOpacity: "0",
          result: "BackgroundImageFix"
        }), /*#__PURE__*/jsx_runtime_.jsx("feColorMatrix", {
          in: "SourceAlpha",
          type: "matrix",
          values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0",
          result: "hardAlpha"
        }), /*#__PURE__*/jsx_runtime_.jsx("feOffset", {
          dy: "1"
        }), /*#__PURE__*/jsx_runtime_.jsx("feGaussianBlur", {
          stdDeviation: "0.5"
        }), /*#__PURE__*/jsx_runtime_.jsx("feColorMatrix", {
          type: "matrix",
          values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"
        }), /*#__PURE__*/jsx_runtime_.jsx("feBlend", {
          mode: "normal",
          in2: "BackgroundImageFix",
          result: "effect1_dropShadow_3_410"
        }), /*#__PURE__*/jsx_runtime_.jsx("feBlend", {
          mode: "normal",
          in: "SourceGraphic",
          in2: "effect1_dropShadow_3_410",
          result: "shape"
        })]
      }), /*#__PURE__*/jsx_runtime_.jsx("clipPath", {
        id: "clip0_3_410",
        children: /*#__PURE__*/jsx_runtime_.jsx("rect", {
          width: "19.1524",
          height: "16.8338",
          fill: "white",
          transform: "translate(8.3457 5.61133)"
        })
      })]
    })]
  });
};

/* harmony default export */ const facebookIcon = (FacebookIcon);
;// CONCATENATED MODULE: ./src/modules/_partials/_drawable/icons/twitterIcon.tsx




const TwitterIcon = () => {
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("svg", {
    width: "34",
    height: "32",
    viewBox: "0 0 34 32",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    children: [/*#__PURE__*/jsx_runtime_.jsx("g", {
      filter: "url(#filter0_d_3_415)",
      children: /*#__PURE__*/jsx_runtime_.jsx("ellipse", {
        cx: "17.4675",
        cy: "15.4718",
        rx: "15.532",
        ry: "14.5282",
        fill: "#42C0F5"
      })
    }), /*#__PURE__*/jsx_runtime_.jsx("path", {
      d: "M26.1361 11.4082C25.5432 11.6535 24.9144 11.8146 24.2707 11.8862C24.9492 11.5066 25.4571 10.9091 25.6996 10.2052C25.0628 10.5597 24.3646 10.8082 23.637 10.9426C23.1482 10.4534 22.5003 10.1289 21.7941 10.0197C21.0878 9.91047 20.3628 10.0225 19.7317 10.3385C19.1005 10.6545 18.5987 11.1566 18.3041 11.7669C18.0096 12.3771 17.9389 13.0613 18.1029 13.7131C16.8115 13.6525 15.5482 13.3386 14.3949 12.7917C13.2416 12.2449 12.2242 11.4772 11.4086 10.5387C11.12 11.0024 10.9683 11.5297 10.9691 12.0663C10.9691 13.1196 11.5422 14.0501 12.4136 14.5949C11.8979 14.5798 11.3936 14.4495 10.9427 14.215V14.2528C10.9428 14.9543 11.2023 15.6342 11.6772 16.1771C12.1521 16.7201 12.8131 17.0927 13.5482 17.2318C13.0695 17.3531 12.5676 17.371 12.0804 17.2841C12.2876 17.8879 12.6916 18.416 13.2357 18.7944C13.7797 19.1728 14.4367 19.3826 15.1146 19.3943C14.4409 19.8893 13.6695 20.2551 12.8445 20.471C12.0195 20.6869 11.1571 20.7485 10.3066 20.6525C11.7913 21.5455 13.5195 22.0197 15.2846 22.0181C21.259 22.0181 24.5262 17.3887 24.5262 13.3738C24.5262 13.2431 24.5223 13.1109 24.5161 12.9816C25.152 12.5517 25.7009 12.0191 26.1368 11.4089L26.1361 11.4082Z",
      fill: "white"
    }), /*#__PURE__*/jsx_runtime_.jsx("defs", {
      children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("filter", {
        id: "filter0_d_3_415",
        x: "0.935547",
        y: "0.943604",
        width: "33.0645",
        height: "31.0564",
        filterUnits: "userSpaceOnUse",
        colorInterpolationFilters: "sRGB",
        children: [/*#__PURE__*/jsx_runtime_.jsx("feFlood", {
          floodOpacity: "0",
          result: "BackgroundImageFix"
        }), /*#__PURE__*/jsx_runtime_.jsx("feColorMatrix", {
          in: "SourceAlpha",
          type: "matrix",
          values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0",
          result: "hardAlpha"
        }), /*#__PURE__*/jsx_runtime_.jsx("feOffset", {
          dy: "1"
        }), /*#__PURE__*/jsx_runtime_.jsx("feGaussianBlur", {
          stdDeviation: "0.5"
        }), /*#__PURE__*/jsx_runtime_.jsx("feColorMatrix", {
          type: "matrix",
          values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"
        }), /*#__PURE__*/jsx_runtime_.jsx("feBlend", {
          mode: "normal",
          in2: "BackgroundImageFix",
          result: "effect1_dropShadow_3_415"
        }), /*#__PURE__*/jsx_runtime_.jsx("feBlend", {
          mode: "normal",
          in: "SourceGraphic",
          in2: "effect1_dropShadow_3_415",
          result: "shape"
        })]
      })
    })]
  });
};

/* harmony default export */ const twitterIcon = (TwitterIcon);
;// CONCATENATED MODULE: ./src/modules/_partials/Footer/index.tsx



function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/* eslint-disable @next/next/no-img-element */











const Footer = () => {
  const [open, setOpen] = external_react_default().useState({
    open: false,
    type: 'error',
    message: ''
  });
  const [errors, setErrors] = external_react_default().useState({
    email: ''
  });
  const [email, setEmail] = external_react_default().useState('');

  const onSubmit = async event => {
    event.preventDefault();

    if (!email.trim()) {
      setErrors(prev => _objectSpread(_objectSpread({}, prev), {}, {
        email: 'Email is required'
      }));
      return;
    } else {
      await external_axios_default().post('/api/subscribers', {
        email
      }).then(response => {
        if (response.data) {
          setEmail('');
          setOpen({
            open: true,
            type: 'success',
            message: 'You are subscribed now.'
          });
        }
      }).catch(error => {
        setOpen({
          open: true,
          type: 'error',
          message: 'Something went wrong, try again'
        });
      });
    }
  };

  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
    children: [/*#__PURE__*/jsx_runtime_.jsx((Snackbar_default()), {
      open: open.open,
      anchorOrigin: {
        vertical: 'bottom',
        horizontal: 'right'
      },
      autoHideDuration: 5000,
      onClose: () => setOpen(prev => _objectSpread(_objectSpread({}, prev), {}, {
        open: false
      })),
      children: /*#__PURE__*/jsx_runtime_.jsx((Alert_default()), {
        variant: "filled",
        severity: open.type,
        children: open.message
      })
    }), /*#__PURE__*/jsx_runtime_.jsx("div", {
      className: "w-full bg-center bg-cover bg-no-repeat min-h-[34px] bg-[url(/assets/images/bottom-pattern.png)]"
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(layouts_Wrapper, {
      className: "bg-dark-green px-4 md:px-8 text-white py-3 bg-no-repeat bg-center bg-cover bg-[url(/assets/images/bg-footer.svg)]",
      children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: "flex flex-wrap md:flex-nowrap gap-x-10 gap-y-3",
        children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          className: "flex flex-col space-y-3",
          children: [/*#__PURE__*/jsx_runtime_.jsx(Logo/* default */.Z, {
            logo: "/assets/images/white_logo.png"
          }), /*#__PURE__*/jsx_runtime_.jsx("p", {
            className: "text-xs",
            children: "Youth Engagement in Agriculture Network (YEAN ) is a Youth Led Private Agriculture Extension Social enterprise created in 2014. We serve farmers, farmers organizations and Development Organizations for better livelihoods, job and wealth creation."
          })]
        }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          className: "flex flex-col",
          children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
            className: "flex space-y-2 flex-col",
            children: [/*#__PURE__*/jsx_runtime_.jsx("h3", {
              className: "text-xl font-bold",
              children: "What we Do"
            }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
              className: "flex items-center",
              children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
                className: "w-12 h-[1px] bg-brand-violet"
              }), /*#__PURE__*/jsx_runtime_.jsx("div", {
                className: "w-32 h-[1px] bg-white"
              })]
            })]
          }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
            className: "mt-3 flex flex-col space-y-2",
            children: [/*#__PURE__*/jsx_runtime_.jsx((link_default()), {
              href: "/services",
              children: "Services"
            }), /*#__PURE__*/jsx_runtime_.jsx((link_default()), {
              href: "/models",
              children: "Models"
            }), /*#__PURE__*/jsx_runtime_.jsx((link_default()), {
              href: "/projects",
              children: "Projects"
            }), /*#__PURE__*/jsx_runtime_.jsx((link_default()), {
              href: "/models?q=impact",
              children: "Impacts"
            })]
          })]
        }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          className: "flex flex-col",
          children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
            className: "flex space-y-2 flex-col",
            children: [/*#__PURE__*/jsx_runtime_.jsx("h3", {
              className: "text-xl font-bold",
              children: "Careers"
            }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
              className: "flex items-center",
              children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
                className: "w-12 h-[1px] bg-brand-violet"
              }), /*#__PURE__*/jsx_runtime_.jsx("div", {
                className: "w-32 h-[1px] bg-white"
              })]
            })]
          }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
            className: "mt-3 flex flex-col space-y-2",
            children: [/*#__PURE__*/jsx_runtime_.jsx((link_default()), {
              href: "/farmer-platform",
              children: "Farmer Platform"
            }), /*#__PURE__*/jsx_runtime_.jsx((link_default()), {
              href: "/carrers",
              children: "Job Openings"
            })]
          })]
        }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          className: "flex flex-col",
          children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
            className: "flex space-y-2 flex-col",
            children: [/*#__PURE__*/jsx_runtime_.jsx("h3", {
              className: "text-xl font-bold",
              children: "Stay In"
            }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
              className: "flex items-center",
              children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
                className: "w-12 h-[1px] bg-brand-violet"
              }), /*#__PURE__*/jsx_runtime_.jsx("div", {
                className: "w-32 h-[1px] bg-white"
              })]
            })]
          }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
            className: "mt-3 flex flex-col space-y-2",
            children: [/*#__PURE__*/jsx_runtime_.jsx("p", {
              className: "text-xs",
              children: "To be updated with all the latest news, offers and special annoucements."
            }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("form", {
              onSubmit: onSubmit,
              className: "flex flex-col space-y-3",
              children: [/*#__PURE__*/jsx_runtime_.jsx("input", {
                type: "email",
                value: email,
                onChange: event => {
                  setEmail(event.target.value);
                  setErrors(prev => _objectSpread(_objectSpread({}, prev), {}, {
                    email: ''
                  }));
                },
                placeholder: "Your email address",
                className: "px-4 py-3 text-center text-gray-800 outline-none rounded-full bg-white placeholder:text-center placeholder:text-gray-400"
              }), errors.email && /*#__PURE__*/jsx_runtime_.jsx("p", {
                className: "text-xs text-red-500 mt-0.5",
                children: errors.email
              }), /*#__PURE__*/jsx_runtime_.jsx("button", {
                type: "submit",
                onClick: onSubmit,
                className: "bg-brand-violet text-white font-semibold rounded-full py-3 px-4",
                children: "Subscribe"
              })]
            })]
          })]
        })]
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: "flex items-center space-x-3 mt-6",
        children: [/*#__PURE__*/jsx_runtime_.jsx("a", {
          href: "https://web.facebook.com/YEANAGRO",
          target: "_blank",
          rel: "noopener noreferrer",
          children: /*#__PURE__*/jsx_runtime_.jsx(facebookIcon, {})
        }), /*#__PURE__*/jsx_runtime_.jsx("a", {
          href: "https://twitter.com/YEAN_Agro",
          target: "_blank",
          rel: "noopener noreferrer",
          children: /*#__PURE__*/jsx_runtime_.jsx(twitterIcon, {})
        }), /*#__PURE__*/jsx_runtime_.jsx("a", {
          href: "https://www.instagram.com/yean_agro/",
          target: "_blank",
          rel: "noopener noreferrer",
          children: /*#__PURE__*/jsx_runtime_.jsx("img", {
            src: "/assets/icons/ig.png",
            className: "w-8 h-8 rounded-full",
            alt: ""
          })
        }), /*#__PURE__*/jsx_runtime_.jsx("a", {
          href: "https://www.flickr.com/photos/142605897@N06/",
          target: "_blank",
          rel: "noopener noreferrer",
          children: /*#__PURE__*/jsx_runtime_.jsx("img", {
            src: "/assets/icons/flickr.png",
            className: "w-8 h-8 rounded-full",
            alt: ""
          })
        })]
      })]
    }), /*#__PURE__*/jsx_runtime_.jsx(layouts_Wrapper, {
      className: "bg-brand-violet px-4 md:px-8 py-3",
      children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("p", {
        className: "text-center font-black text-white text-base",
        children: ["YEAN \xA9 ", new Date().getFullYear(), " - All rights Reserved"]
      })
    }), /*#__PURE__*/jsx_runtime_.jsx("a", {
      href: "javascript:void(0)",
      className: "hidden items-center p-3 bg-gray-200/70 rounded-full flex-col justify-center bg-primary text-white w-10 h-10 fixed bottom-8 right-8 left-auto z-[999] hover:bg-dark back-to-top shadow-md transition duration-300 ease-in-out",
      children: /*#__PURE__*/jsx_runtime_.jsx("svg", {
        width: "23",
        height: "23",
        viewBox: "0 0 23 23",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        children: /*#__PURE__*/jsx_runtime_.jsx("path", {
          d: "M12.838 0.439341C12.2522 -0.146446 11.3025 -0.146446 10.7167 0.439341L1.17074 9.98528C0.584955 10.5711 0.584955 11.5208 1.17074 12.1066C1.75653 12.6924 2.70628 12.6924 3.29206 12.1066L11.7773 3.62132L20.2626 12.1066C20.8484 12.6924 21.7982 12.6924 22.3839 12.1066C22.9697 11.5208 22.9697 10.5711 22.3839 9.98528L12.838 0.439341ZM13.2773 23L13.2773 1.5H10.2773L10.2773 23H13.2773Z",
          fill: "#7C063F"
        })
      })
    })]
  });
};

/* harmony default export */ const _partials_Footer = (Footer);
;// CONCATENATED MODULE: ./src/modules/layouts/Scaffold/index.tsx







const Scaffold = ({
  className = '',
  children = /*#__PURE__*/jsx_runtime_.jsx("div", {})
}) => {
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
    className: `relative min-h-screen flex flex-col w-full overflow-y-auto overflow-x-hidden ${className}`,
    children: [/*#__PURE__*/jsx_runtime_.jsx(_partials_Header, {}), /*#__PURE__*/jsx_runtime_.jsx(layouts_Wrapper, {
      className: "flex-grow",
      children: children
    }), /*#__PURE__*/jsx_runtime_.jsx(_partials_Footer, {})]
  });
};

/* harmony default export */ const layouts_Scaffold = (Scaffold);

/***/ })

};
;