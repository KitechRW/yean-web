"use strict";
exports.id = 9391;
exports.ids = [9391];
exports.modules = {

/***/ 9391:
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
/* harmony import */ var _Logo__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(6945);
/* harmony import */ var _NavItems__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(9455);
/* harmony import */ var system_static__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(192);
/* harmony import */ var _ProfilePopup__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(1270);
/* harmony import */ var modules_contexts_NavbarContext__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(4653);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__);















const LeftDrawer = ({
  items = system_static__WEBPACK_IMPORTED_MODULE_8__/* .navs */ .M1,
  onSearch
}) => {
  const {
    profile
  } = (0,modules_contexts_NavbarContext__WEBPACK_IMPORTED_MODULE_10__/* .useNavbar */ .RD)();
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

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxs)("div", {
      className: "flex items-center space-x-3",
      children: [onSearch && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxs)("label", {
        htmlFor: "search",
        className: "flex text-white items-center relative md:hidden",
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx((_mui_icons_material_Search__WEBPACK_IMPORTED_MODULE_1___default()), {
          className: "left-3 absolute"
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx("input", {
          type: "search",
          name: "",
          id: "search",
          onClick: onSearch,
          readOnly: true,
          placeholder: "Search",
          className: "w-full placeholder:text-center rounded-full px-12 placeholder:font-bold placeholder:text-white outline-none bg-brand-green/70 bg-opacity-20 py-2"
        })]
      }), profile?.user && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx("div", {
        className: "md:hidden relative flex flex-col",
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx(_ProfilePopup__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {})
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx("button", {
        type: "button",
        onClick: () => setToggle(!toggle),
        className: "md:hidden",
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx((_mui_icons_material_Menu__WEBPACK_IMPORTED_MODULE_0___default()), {
          fontSize: "large"
        })
      })]
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx((_mui_material_Drawer__WEBPACK_IMPORTED_MODULE_4___default()), {
      anchor: "left",
      open: toggle,
      onClose: toggleDrawer(false),
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx((_mui_material_Box__WEBPACK_IMPORTED_MODULE_3___default()), {
        sx: {
          width: 250,
          backgroundColor: '#F7FAFF'
        },
        role: "presentation",
        onClick: toggleDrawer(false),
        onKeyDown: toggleDrawer(false),
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxs)("div", {
          className: "flex py-3 px-4 flex-col flex-grow min-h-screen overflow-y-auto w-full",
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx(_Logo__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {}), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx("div", {
            className: "flex w-full mt-6"
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx(_NavItems__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
            items: items,
            className: "flex flex-col"
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx("div", {
            className: "flex flex-col mt-auto",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxs)("p", {
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

/***/ 9455:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _mui_icons_material_Person__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1939);
/* harmony import */ var _mui_icons_material_Person__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_mui_icons_material_Person__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var modules_contexts_NavbarContext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4653);
/* harmony import */ var modules_contexts_WindowContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8844);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var system_static__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(192);
/* harmony import */ var _ProfilePopup__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(1270);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__);











const NavItems = ({
  items = system_static__WEBPACK_IMPORTED_MODULE_6__/* .navs */ .M1,
  className = 'hidden md:flex items-center space-x-8'
}) => {
  const {
    isSmallDevice
  } = (0,modules_contexts_WindowContext__WEBPACK_IMPORTED_MODULE_2__/* .useWindow */ .zY)();
  const {
    pathname
  } = (0,next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter)();
  const {
    profile
  } = (0,modules_contexts_NavbarContext__WEBPACK_IMPORTED_MODULE_1__/* .useNavbar */ .RD)();
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx("div", {
    className: className,
    children: items.map((element, index) => {
      const isLogin = '/login' === element.path;

      if (profile?.user && isLogin && !isSmallDevice) {
        return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx(_ProfilePopup__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {});
      }

      return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {
        href: profile?.user && isLogin ? '/logout' : element.path,
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("h2", {
          className: `hover:opacity-75 cursor-pointer ${pathname === element.path ? 'border-b-4 border-brand-yellow' : 'border-none'} ${isLogin ? 'bg-brand-yellow rounded-full drop-shadow px-12 py-3 font-semibold text-white flex items-center space-x-2' : 'text-dark-green font-medium py-4'}`,
          children: [isLogin ? /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx((_mui_icons_material_Person__WEBPACK_IMPORTED_MODULE_0___default()), {}) : null, /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx("span", {
            children: profile?.user && isLogin ? 'Logout' : element.label
          })]
        })
      }, element.label);
    })
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (NavItems);

/***/ }),

/***/ 1270:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _mui_icons_material_AccountBox__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3329);
/* harmony import */ var _mui_icons_material_AccountBox__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_mui_icons_material_AccountBox__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _mui_material_Avatar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2120);
/* harmony import */ var _mui_material_Avatar__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Avatar__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _mui_icons_material_Logout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9801);
/* harmony import */ var _mui_icons_material_Logout__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_mui_icons_material_Logout__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _Transition__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1327);
/* harmony import */ var modules_contexts_NavbarContext__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(4653);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__);











const ProfilePopup = () => {
  const {
    profile
  } = (0,modules_contexts_NavbarContext__WEBPACK_IMPORTED_MODULE_6__/* .useNavbar */ .RD)();
  const {
    push
  } = (0,next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter)();
  const [dropdownOpen, setDropdownOpen] = react__WEBPACK_IMPORTED_MODULE_2___default().useState(false);
  const trigger = react__WEBPACK_IMPORTED_MODULE_2___default().useRef(null);
  const dropdown = react__WEBPACK_IMPORTED_MODULE_2___default().useRef(null); // close on click outside

  react__WEBPACK_IMPORTED_MODULE_2___default().useEffect(() => {
    const clickHandler = ({
      target
    }) => {
      if (!dropdownOpen || dropdown.current.contains(target) || trigger.current.contains(target)) return;
      setDropdownOpen(false);
    };

    document.addEventListener('click', clickHandler);
    return () => document.removeEventListener('click', clickHandler);
  }); // close if the esc key is pressed

  react__WEBPACK_IMPORTED_MODULE_2___default().useEffect(() => {
    const keyHandler = ({
      keyCode
    }) => {
      if (!dropdownOpen || keyCode !== 27) return;
      setDropdownOpen(false);
    };

    document.addEventListener('keydown', keyHandler);
    return () => document.removeEventListener('keydown', keyHandler);
  });

  const onLogout = () => {
    push('/logout');
  };

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.Fragment, {
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx("button", {
      ref: trigger,
      "aria-haspopup": "true",
      onClick: () => setDropdownOpen(!dropdownOpen),
      "aria-expanded": dropdownOpen,
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx((_mui_material_Avatar__WEBPACK_IMPORTED_MODULE_1___default()), {
        src: "/assets/images/user.png",
        alt: ""
      })
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx(_Transition__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
      className: "origin-top-right z-10 absolute top-full right-0 sm:mr-0 min-w-80 bg-white border border-slate-200 py-1.5 rounded shadow-lg overflow-hidden mt-1",
      show: dropdownOpen,
      enter: "transition ease-out duration-200 transform",
      enterStart: "opacity-0 -translate-y-2",
      enterEnd: "opacity-100 translate-y-0",
      leave: "transition ease-out duration-200",
      leaveStart: "opacity-100",
      leaveEnd: "opacity-0",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div", {
        ref: dropdown,
        onFocus: () => setDropdownOpen(true),
        onBlur: () => setDropdownOpen(false),
        className: "px-4 py-2 space-y-1.5 flex flex-col",
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx("p", {
          children: profile?.user.email
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("button", {
          type: "button",
          onClick: () => {
            push('/profile');
          },
          className: "flex text-sm items-center space-x-3 rounded-lg py-2 px-12 bg-green-400 text-white",
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx((_mui_icons_material_AccountBox__WEBPACK_IMPORTED_MODULE_0___default()), {
            fontSize: "small"
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx("span", {
            children: "Profile"
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("button", {
          type: "button",
          onClick: onLogout,
          className: "flex text-sm items-center space-x-3 rounded-lg py-2 px-12 bg-red-400 text-white",
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx((_mui_icons_material_Logout__WEBPACK_IMPORTED_MODULE_3___default()), {
            fontSize: "small"
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx("span", {
            children: "Logout"
          })]
        })]
      })
    })]
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ProfilePopup);

/***/ }),

/***/ 1327:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_transition_group__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4466);
/* harmony import */ var react_transition_group__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_transition_group__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__);
const _excluded = ["show", "enter", "enterStart", "enterEnd", "leave", "leaveStart", "leaveEnd", "appear", "unmountOnExit", "tag", "children"],
      _excluded2 = ["show", "appear"];

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }




const TransitionContext = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createContext({
  parent: {}
});

function useIsInitialRender() {
  const isInitialRender = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(true);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    isInitialRender.current = false;
  }, []);
  return isInitialRender.current;
}

function CSSTransition(_ref) {
  let {
    show,
    enter = '',
    enterStart = '',
    enterEnd = '',
    leave = '',
    leaveStart = '',
    leaveEnd = '',
    appear,
    unmountOnExit,
    tag = 'div',
    children
  } = _ref,
      rest = _objectWithoutProperties(_ref, _excluded);

  const enterClasses = enter.split(' ').filter(s => s.length);
  const enterStartClasses = enterStart.split(' ').filter(s => s.length);
  const enterEndClasses = enterEnd.split(' ').filter(s => s.length);
  const leaveClasses = leave.split(' ').filter(s => s.length);
  const leaveStartClasses = leaveStart.split(' ').filter(s => s.length);
  const leaveEndClasses = leaveEnd.split(' ').filter(s => s.length);
  const removeFromDom = unmountOnExit;

  function addClasses(node, classes) {
    classes.length && node.classList.add(...classes);
  }

  function removeClasses(node, classes) {
    classes.length && node.classList.remove(...classes);
  }

  const nodeRef = react__WEBPACK_IMPORTED_MODULE_0___default().useRef(null);
  const Component = tag;
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx(react_transition_group__WEBPACK_IMPORTED_MODULE_1__.CSSTransition, {
    appear: appear,
    nodeRef: nodeRef,
    unmountOnExit: removeFromDom,
    in: show,
    addEndListener: done => {
      nodeRef.current.addEventListener('transitionend', done, false);
    },
    onEnter: () => {
      if (!removeFromDom) nodeRef.current.style.display = null;
      addClasses(nodeRef.current, [...enterClasses, ...enterStartClasses]);
    },
    onEntering: () => {
      removeClasses(nodeRef.current, enterStartClasses);
      addClasses(nodeRef.current, enterEndClasses);
    },
    onEntered: () => {
      removeClasses(nodeRef.current, [...enterEndClasses, ...enterClasses]);
    },
    onExit: () => {
      addClasses(nodeRef.current, [...leaveClasses, ...leaveStartClasses]);
    },
    onExiting: () => {
      removeClasses(nodeRef.current, leaveStartClasses);
      addClasses(nodeRef.current, leaveEndClasses);
    },
    onExited: () => {
      removeClasses(nodeRef.current, [...leaveEndClasses, ...leaveClasses]);
      if (!removeFromDom) nodeRef.current.style.display = 'none';
    },
    children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx(Component, _objectSpread(_objectSpread({
      ref: nodeRef
    }, rest), {}, {
      style: {
        display: !removeFromDom ? 'none' : null
      },
      children: children
    }))
  });
}

function Transition(_ref2) {
  let {
    show,
    appear
  } = _ref2,
      rest = _objectWithoutProperties(_ref2, _excluded2);

  const {
    parent
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(TransitionContext);
  const isInitialRender = useIsInitialRender();
  const isChild = show === undefined;

  if (isChild) {
    return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx(CSSTransition, _objectSpread({
      appear: parent.appear || !parent.isInitialRender,
      show: parent.show
    }, rest));
  }

  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx(TransitionContext.Provider, {
    value: {
      parent: {
        show,
        isInitialRender,
        appear
      }
    },
    children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx(CSSTransition, _objectSpread({
      appear: appear,
      show: show
    }, rest))
  });
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Transition);

/***/ }),

/***/ 192:
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
/* harmony import */ var _mui_icons_material_Extension__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9891);
/* harmony import */ var _mui_icons_material_Extension__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_mui_icons_material_Extension__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _mui_icons_material_Feed__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(4569);
/* harmony import */ var _mui_icons_material_Feed__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_mui_icons_material_Feed__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _mui_icons_material_Category__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(856);
/* harmony import */ var _mui_icons_material_Category__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_mui_icons_material_Category__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _mui_icons_material_Dashboard__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(7235);
/* harmony import */ var _mui_icons_material_Dashboard__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_mui_icons_material_Dashboard__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _mui_icons_material_Handshake__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(3147);
/* harmony import */ var _mui_icons_material_Handshake__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_mui_icons_material_Handshake__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _mui_icons_material_LocalLibrary__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(1419);
/* harmony import */ var _mui_icons_material_LocalLibrary__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_mui_icons_material_LocalLibrary__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _mui_icons_material_ShoppingBasket__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(9153);
/* harmony import */ var _mui_icons_material_ShoppingBasket__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_mui_icons_material_ShoppingBasket__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _mui_icons_material_Grass__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(5196);
/* harmony import */ var _mui_icons_material_Grass__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_mui_icons_material_Grass__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _mui_icons_material_Home__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(3467);
/* harmony import */ var _mui_icons_material_Home__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_mui_icons_material_Home__WEBPACK_IMPORTED_MODULE_11__);












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
  icon: (_mui_icons_material_Home__WEBPACK_IMPORTED_MODULE_11___default()),
  path: '/',
  label: 'Home',
  hasSub: false
}, {
  icon: (_mui_icons_material_Grass__WEBPACK_IMPORTED_MODULE_10___default()),
  path: '/doings',
  label: 'What we do?',
  hasSub: true
}, {
  icon: (_mui_icons_material_ShoppingBasket__WEBPACK_IMPORTED_MODULE_9___default()),
  path: '/farmer-platform',
  label: 'Farmer Platform',
  hasSub: false
}, {
  icon: (_mui_icons_material_LocalLibrary__WEBPACK_IMPORTED_MODULE_8___default()),
  path: '/library',
  label: 'Library',
  hasSub: false
}, {
  icon: (_mui_icons_material_Handshake__WEBPACK_IMPORTED_MODULE_7___default()),
  path: '/partner',
  label: 'Partner with Us',
  hasSub: false
}];
const adminNavs = [{
  icon: (_mui_icons_material_Dashboard__WEBPACK_IMPORTED_MODULE_6___default()),
  label: 'Dashboard',
  path: '/admin'
}, {
  icon: (_mui_icons_material_Category__WEBPACK_IMPORTED_MODULE_5___default()),
  label: 'Categories',
  path: '/admin/categories'
}, {
  icon: (_mui_icons_material_Feed__WEBPACK_IMPORTED_MODULE_4___default()),
  label: 'Articles',
  path: '/admin/articles'
}, {
  icon: (_mui_icons_material_LocalLibrary__WEBPACK_IMPORTED_MODULE_8___default()),
  label: 'Library',
  path: '/admin/libraries'
}, {
  icon: (_mui_icons_material_Extension__WEBPACK_IMPORTED_MODULE_3___default()),
  label: 'Services',
  path: '/admin/services'
}, {
  icon: (_mui_icons_material_Handshake__WEBPACK_IMPORTED_MODULE_7___default()),
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