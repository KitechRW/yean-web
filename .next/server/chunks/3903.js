"use strict";
exports.id = 3903;
exports.ids = [3903];
exports.modules = {

/***/ 3903:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _mui_material_Drawer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7898);
/* harmony import */ var _mui_material_Drawer__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Drawer__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _mui_icons_material_Close__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4173);
/* harmony import */ var _mui_icons_material_Close__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_mui_icons_material_Close__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__);







const DrawerLayout = ({
  children,
  toggle = false,
  setToggle,
  title = 'New item'
}) => {
  const toggleDrawer = open => event => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setToggle(open);
  };

  const handleKeyDown = event => {
    if (event.key === 'Escape') {
      setToggle(false);
    }
  };

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.Fragment, {
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("div", {
      role: "button",
      onClick: () => setToggle(!toggle),
      tabIndex: 0,
      children: children[0]
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx((_mui_material_Drawer__WEBPACK_IMPORTED_MODULE_0___default()), {
      anchor: "top",
      open: toggle,
      onClose: toggleDrawer(false),
      sx: {
        '& .MuiPaper-elevation': {
          maxWidth: '100%',
          minHeight: '100vh',
          marginX: 'auto',
          padding: '8px',
          backgroundColor: 'transparent',
          boxShadow: 'none',
          overflowY: 'auto',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          // pointerEvents: 'none',
          height: 'fit-content'
        }
      },
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
        className: "max-w-4xl pointer-events-auto bg-white flex py-3 px-4 md:p-8 flex-col items-center w-full",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
          className: "flex gap-x-2 justify-between w-full",
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("h1", {
            className: "font-black text-xl tracking-wide text-brand-green",
            children: title
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("button", {
            type: "button",
            onKeyDown: handleKeyDown,
            onClick: toggleDrawer(false),
            className: "text-brand-green flex flex-col items-center ml-auto",
            children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx((_mui_icons_material_Close__WEBPACK_IMPORTED_MODULE_1___default()), {
              fontSize: "large"
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("span", {
              className: "text-sm text-brand-green",
              children: "ESC"
            })]
          })]
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("div", {
          className: "flex flex-col w-full",
          children: children[1]
        })]
      })
    })]
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DrawerLayout);

/***/ })

};
;