"use strict";
exports.id = 2185;
exports.ids = [2185];
exports.modules = {

/***/ 2185:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ layouts_AdminScaffold)
});

// EXTERNAL MODULE: external "@mui/icons-material/Search"
var Search_ = __webpack_require__(8017);
var Search_default = /*#__PURE__*/__webpack_require__.n(Search_);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);
// EXTERNAL MODULE: ./src/system/static/index.ts
var system_static = __webpack_require__(3256);
// EXTERNAL MODULE: ./src/modules/contexts/NavbarContext/index.tsx
var NavbarContext = __webpack_require__(967);
// EXTERNAL MODULE: ./src/modules/_partials/LeftDrawer/index.tsx
var LeftDrawer = __webpack_require__(2077);
// EXTERNAL MODULE: external "react-in-viewport"
var external_react_in_viewport_ = __webpack_require__(6927);
var external_react_in_viewport_default = /*#__PURE__*/__webpack_require__.n(external_react_in_viewport_);
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: ./src/modules/_partials/InViewport/index.tsx




const Block = props => {
  const {
    forwardedRef
  } = props;
  return /*#__PURE__*/jsx_runtime_.jsx("div", {
    ref: forwardedRef,
    className: "invisible"
  });
};

const InViewport = external_react_in_viewport_default()(Block
/** options: {}, config: {} **/
);
/* harmony default export */ const _partials_InViewport = (InViewport);
// EXTERNAL MODULE: external "@mui/material/Divider"
var Divider_ = __webpack_require__(3646);
var Divider_default = /*#__PURE__*/__webpack_require__.n(Divider_);
// EXTERNAL MODULE: external "@mui/icons-material/Close"
var Close_ = __webpack_require__(4173);
var Close_default = /*#__PURE__*/__webpack_require__.n(Close_);
// EXTERNAL MODULE: external "@mui/material/Avatar"
var Avatar_ = __webpack_require__(2120);
var Avatar_default = /*#__PURE__*/__webpack_require__.n(Avatar_);
// EXTERNAL MODULE: external "@mui/icons-material/Notifications"
var Notifications_ = __webpack_require__(1567);
var Notifications_default = /*#__PURE__*/__webpack_require__.n(Notifications_);
// EXTERNAL MODULE: external "@mui/material/Popover"
var Popover_ = __webpack_require__(5768);
var Popover_default = /*#__PURE__*/__webpack_require__.n(Popover_);
// EXTERNAL MODULE: external "react-i18next"
var external_react_i18next_ = __webpack_require__(9709);
;// CONCATENATED MODULE: ./src/modules/_partials/NotificationList/index.tsx











const NotificationList = () => {
  const [anchorEl, setAnchorEl] = external_react_default().useState(null);
  const {
    i18n
  } = (0,external_react_i18next_.useTranslation)();
  const {
    t
  } = (0,external_react_i18next_.useTranslation)();

  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
    children: [/*#__PURE__*/jsx_runtime_.jsx("button", {
      "aria-describedby": id,
      type: "button",
      onClick: handleClick,
      className: "relative bg-cyan-201 px-4 py-3 flex items-center rounded rounded-tl-3xl rounded-br-3xl",
      children: /*#__PURE__*/jsx_runtime_.jsx((Notifications_default()), {})
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
      anchorEl: anchorEl // className="rounded-3xl bg-white shadow"
      ,
      children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: "flex flex-col items-center py-4 px-3",
        children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          className: "flex space-x-3 w-full py-2 items-start",
          children: [/*#__PURE__*/jsx_runtime_.jsx((Avatar_default()), {
            src: "/assets/images/user.png",
            alt: "Jackson"
          }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
            className: "flex flex-col",
            children: [/*#__PURE__*/jsx_runtime_.jsx("h2", {
              children: "Yellow Sweet Corn Stock out, please check!"
            }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
              className: "flex items-center space-x-1",
              children: [/*#__PURE__*/jsx_runtime_.jsx("p", {
                className: "text-sm text-brand-red px-2 bg-[#FDE8E8] p-0.5 rounded-full",
                children: "Stock Out"
              }), /*#__PURE__*/jsx_runtime_.jsx("p", {
                className: "text-[#9E9E9E] text-xs",
                children: "Dec 12 2021 - 12:40PM"
              })]
            })]
          }), /*#__PURE__*/jsx_runtime_.jsx("button", {
            type: "button",
            className: "text-black-200",
            children: /*#__PURE__*/jsx_runtime_.jsx((Close_default()), {})
          })]
        }), /*#__PURE__*/jsx_runtime_.jsx((Divider_default()), {
          className: "w-full"
        }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          className: "flex space-x-3 w-full py-2 items-start",
          children: [/*#__PURE__*/jsx_runtime_.jsx((Avatar_default()), {
            src: "/assets/images/user.png",
            alt: "Jackson"
          }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
            className: "flex flex-col",
            children: [/*#__PURE__*/jsx_runtime_.jsx("h2", {
              children: "Yellow Sweet Corn Stock out, please check!"
            }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
              className: "flex items-center space-x-1",
              children: [/*#__PURE__*/jsx_runtime_.jsx("p", {
                className: "text-sm text-brand-red px-2 bg-[#FDE8E8] p-0.5 rounded-full",
                children: "Stock Out"
              }), /*#__PURE__*/jsx_runtime_.jsx("p", {
                className: "text-[#9E9E9E] text-xs",
                children: "Dec 12 2021 - 12:40PM"
              })]
            })]
          }), /*#__PURE__*/jsx_runtime_.jsx("button", {
            type: "button",
            className: "text-black-200",
            children: /*#__PURE__*/jsx_runtime_.jsx((Close_default()), {})
          })]
        }), /*#__PURE__*/jsx_runtime_.jsx("button", {
          type: "button",
          className: "mt-3 px-3 rounded-full p-1 text-brand-green bg-[#24262D26] bg-opacity-[0.15] text-sm",
          children: "View more"
        })]
      })
    })]
  });
};

/* harmony default export */ const _partials_NotificationList = (NotificationList);
// EXTERNAL MODULE: external "@mui/icons-material/Logout"
var Logout_ = __webpack_require__(9801);
var Logout_default = /*#__PURE__*/__webpack_require__.n(Logout_);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(1853);
;// CONCATENATED MODULE: ./src/modules/_partials/ProfilePopup/index.tsx









const ProfilePopup = () => {
  const {
    push
  } = (0,router_.useRouter)();
  const [anchorEl, setAnchorEl] = external_react_default().useState(null);

  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };

  const onLogout = () => {
    push('/logout');
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
    children: [/*#__PURE__*/jsx_runtime_.jsx("button", {
      "aria-describedby": id,
      type: "button",
      onClick: handleClick,
      children: /*#__PURE__*/jsx_runtime_.jsx((Avatar_default()), {
        src: "/assets/images/user.png",
        alt: "Jackson"
      })
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
      anchorEl: anchorEl // className="rounded-3xl bg-white shadow"
      ,
      children: /*#__PURE__*/jsx_runtime_.jsx("div", {
        className: "flex flex-col py-4 px-3",
        children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("button", {
          type: "button",
          onClick: onLogout,
          className: "flex text-sm items-center space-x-3 rounded-3xl py-2 px-12 bg-red-400 text-white",
          children: [/*#__PURE__*/jsx_runtime_.jsx((Logout_default()), {
            fontSize: "small"
          }), /*#__PURE__*/jsx_runtime_.jsx("span", {
            children: "Logout"
          })]
        })
      })
    })]
  });
};

/* harmony default export */ const _partials_ProfilePopup = (ProfilePopup);
// EXTERNAL MODULE: ./src/modules/_partials/Logo/index.tsx
var Logo = __webpack_require__(9682);
;// CONCATENATED MODULE: ./src/modules/_partials/TopNav/index.tsx













const TopNav = ({
  className,
  title,
  name
}) => {
  const headerRef = external_react_default().useRef(null);
  const {
    viewHeader,
    setViewHeader
  } = (0,NavbarContext/* useNavbar */.RD)();
  const handleViewHeader = external_react_default().useCallback(view => {
    setViewHeader(view);
  }, []);
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
    children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
      className: "invisible",
      ref: headerRef,
      children: /*#__PURE__*/jsx_runtime_.jsx(_partials_InViewport, {
        onEnterViewport: () => handleViewHeader(true),
        onLeaveViewport: () => handleViewHeader(false)
      })
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: `py-0.5 top-0 sticky px-4 lg:pl-6 flex items-center justify-between md:px-8 w-full ${className} ${viewHeader ? 'rounded-t-3xl' : 'border-b border-b-gray-201 drop-shadow-sm'} bg-[#FBFBFB] border-b border-gray-200 z-50`,
      children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
        className: "flex items-center lg:hidden",
        children: /*#__PURE__*/jsx_runtime_.jsx(LeftDrawer/* default */.Z, {
          items: system_static/* adminNavs */.EW
        })
      }), /*#__PURE__*/jsx_runtime_.jsx("div", {
        className: "hidden md:block",
        children: /*#__PURE__*/jsx_runtime_.jsx(Logo/* default */.Z, {})
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: "ml-auto pl-6 md:pl-12 flex items-center space-x-6",
        children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("button", {
          type: "button",
          className: "text-[#7979B2] space-x-12 bg-cyan-201 px-4 py-3 flex items-center rounded rounded-tl-3xl rounded-br-3xl",
          children: [/*#__PURE__*/jsx_runtime_.jsx("span", {
            children: "Search"
          }), /*#__PURE__*/jsx_runtime_.jsx((Search_default()), {})]
        }), /*#__PURE__*/jsx_runtime_.jsx(_partials_NotificationList, {}), /*#__PURE__*/jsx_runtime_.jsx(_partials_ProfilePopup, {})]
      })]
    })]
  });
};

TopNav.defaultProps = {
  title: 'Welcome',
  name: 'Jackson',
  className: 'bg-white'
};
/* harmony default export */ const _partials_TopNav = (TopNav);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
;// CONCATENATED MODULE: ./src/modules/layouts/AdminScaffold/index.tsx









const AdminScaffold = ({
  children
}) => {
  const {
    pathname
  } = (0,router_.useRouter)();
  const {
    profile
  } = (0,NavbarContext/* useNavbar */.RD)();
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
    className: "flex flex-col w-full h-screen overflow-y-auto",
    children: [/*#__PURE__*/jsx_runtime_.jsx(_partials_TopNav, {}), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: "relative flex-grow h-full flex w-full bg-cyan-201 overflow-y-auto overflow-x-hidden",
      children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: "top-0 sticky hidden md:flex flex-col w-1/6 px-2 bg-[#FBFBFB] border-r border-gray-200 overflow-y-auto",
        children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
          className: "flex w-full mt-2"
        }), system_static/* adminNavs.map */.EW.map(element => {
          const active = pathname === element.path;

          if (element.onlyAdmin) {
            var _profile$user;

            if ((profile === null || profile === void 0 ? void 0 : (_profile$user = profile.user) === null || _profile$user === void 0 ? void 0 : _profile$user.type) !== "admin") {
              return;
            }
          }

          return /*#__PURE__*/jsx_runtime_.jsx((link_default()), {
            href: element.path,
            children: /*#__PURE__*/jsx_runtime_.jsx("div", {
              className: active ? 'cursor-pointer relative w-full py-1' : 'cursor-pointer w-full py-1',
              children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("h2", {
                className: `flex items-center space-x-3 py-2 font-medium px-4 w-full truncate ${active ? 'bg-brand-green/70 text-white rounded-lg' : 'text-[#A0AAC8]'}`,
                children: [/*#__PURE__*/jsx_runtime_.jsx(element.icon, {}), /*#__PURE__*/jsx_runtime_.jsx("span", {
                  className: "truncate",
                  children: element.label
                })]
              })
            })
          }, element.label);
        }), /*#__PURE__*/jsx_runtime_.jsx("div", {
          className: "flex flex-col mt-auto",
          children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("p", {
            className: "mt-12 text-xs py-2 px-4",
            children: ["\xA9 ", new Date().getFullYear(), " Yean"]
          })
        })]
      }), /*#__PURE__*/jsx_runtime_.jsx("div", {
        className: "w-full flex flex-col lg:w-5/6 h-full bg-white rounded-3xl z-30",
        children: children
      })]
    })]
  });
};

/* harmony default export */ const layouts_AdminScaffold = (AdminScaffold);

/***/ })

};
;