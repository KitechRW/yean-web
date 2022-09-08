"use strict";
(() => {
var exports = {};
exports.id = 7970;
exports.ids = [7970];
exports.modules = {

/***/ 1393:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _mui_icons_material_Add__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6146);
/* harmony import */ var _mui_icons_material_Add__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_mui_icons_material_Add__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _mui_icons_material_Search__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8017);
/* harmony import */ var _mui_icons_material_Search__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_mui_icons_material_Search__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var apis_utils_fetcher__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6635);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var modules_admin_Partials_ManageJobs_ViewItem__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5624);
/* harmony import */ var modules_admin_Partials_ManageJobs_AddItem__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(7379);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([apis_utils_fetcher__WEBPACK_IMPORTED_MODULE_2__, modules_admin_Partials_ManageJobs_ViewItem__WEBPACK_IMPORTED_MODULE_4__, modules_admin_Partials_ManageJobs_AddItem__WEBPACK_IMPORTED_MODULE_5__]);
([apis_utils_fetcher__WEBPACK_IMPORTED_MODULE_2__, modules_admin_Partials_ManageJobs_ViewItem__WEBPACK_IMPORTED_MODULE_4__, modules_admin_Partials_ManageJobs_AddItem__WEBPACK_IMPORTED_MODULE_5__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);



function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }








const JobActivity = () => {
  const [jobs, setJobs] = react__WEBPACK_IMPORTED_MODULE_3___default().useState({
    count: 0,
    rows: []
  });
  const {
    data: {
      data
    },
    isLoading
  } = (0,apis_utils_fetcher__WEBPACK_IMPORTED_MODULE_2__/* .useOpenFetcher */ .TB)(`/api/jobs`);
  const [filterValue, setFilterValue] = react__WEBPACK_IMPORTED_MODULE_3___default().useState('');
  react__WEBPACK_IMPORTED_MODULE_3___default().useEffect(() => {
    const rows = (data === null || data === void 0 ? void 0 : data.rows) || [];

    if (rows.length) {
      const matchJobs = rows.filter(element => {
        var _element$title;

        return element !== null && element !== void 0 && element.title ? element === null || element === void 0 ? void 0 : (_element$title = element.title) === null || _element$title === void 0 ? void 0 : _element$title.toLowerCase().includes(filterValue.toLowerCase()) : false;
      });
      setJobs(prev => _objectSpread(_objectSpread({}, prev), {}, {
        rows: matchJobs
      }));
    }
  }, [data, filterValue]);
  react__WEBPACK_IMPORTED_MODULE_3___default().useEffect(() => {
    const rows = (data === null || data === void 0 ? void 0 : data.rows) || [];

    if (rows.length) {
      setJobs(prev => _objectSpread(_objectSpread({}, prev), {}, {
        rows
      }));
    }
  }, [data]);

  const handleAdd = item => {
    setJobs(prev => _objectSpread(_objectSpread({}, jobs), {}, {
      rows: [...prev.rows, item]
    }));
  };

  const handleEdit = item => {
    const rows = jobs.rows.map(row => {
      if (Number(row.id) === Number(item.id)) {
        return item;
      }

      return row;
    });
    setJobs(prev => _objectSpread(_objectSpread({}, prev), {}, {
      rows: rows
    }));
  };

  const handleDelete = id => {
    setJobs(prev => _objectSpread(_objectSpread({}, prev), {}, {
      rows: prev.rows.filter(element => element.id !== id)
    }));
  };

  if (isLoading) {
    return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx("p", {
      children: "Loading..."
    });
  }

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
    className: "px-4 md:pl-6 bg-white py-4 flex flex-col flex-grow items-center md:px-8 w-full",
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx("h2", {
      className: "font-semibold text-slate-900 self-start mr-2 mb-5",
      children: "Jobs"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
      className: "space-x-6 md:space-x-12 bg-white flex justify-between w-full",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
        className: "group flex-grow flex items-center relative",
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx((_mui_icons_material_Search__WEBPACK_IMPORTED_MODULE_1___default()), {
          className: "left-2 absolute text-slate-400"
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx("input", {
          value: filterValue,
          onChange: event => setFilterValue(event.target.value),
          className: "peer focus:ring-2 focus:ring-blue-500 focus:outline-none appearance-none w-full text-sm leading-6 text-slate-900 placeholder-slate-400 rounded-md py-2 pl-10 ring-1 ring-slate-200 shadow-sm",
          type: "text",
          placeholder: "Filter Jobs..."
        })]
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(modules_admin_Partials_ManageJobs_AddItem__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
        handleAdd: item => {
          handleAdd(item);
        },
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("button", {
          className: "hover:bg-brand-green group flex items-center rounded-md bg-brand-green/80 text-white text-sm font-medium px-8 py-2 shadow-sm",
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx((_mui_icons_material_Add__WEBPACK_IMPORTED_MODULE_0___default()), {}), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx("span", {
            children: "New"
          })]
        })
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("ul", {
      className: "w-full py-4 md:py-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 text-sm leading-6",
      children: [jobs.rows.map((item, index) => {
        return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(modules_admin_Partials_ManageJobs_ViewItem__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
          data: item,
          handleEdit: handleEdit,
          handleDelete: handleDelete
        }, (item === null || item === void 0 ? void 0 : item.id) + "keyForJob");
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(modules_admin_Partials_ManageJobs_AddItem__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
        handleAdd: item => {
          handleAdd(item);
        },
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx("li", {
          className: "flex",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("button", {
            className: "hover:border-blue-500 hover:border-solid hover:bg-white hover:text-blue-500 group w-full flex flex-col items-center justify-center rounded-md border-2 border-dashed border-slate-300 text-sm leading-6 text-slate-900 font-medium p-3",
            children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx((_mui_icons_material_Add__WEBPACK_IMPORTED_MODULE_0___default()), {
              className: "group-hover:text-blue-500 mb-1 text-slate-400"
            }), "New Job"]
          })
        })
      })]
    })]
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (JobActivity);
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 7379:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var apis_restful__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3751);
/* harmony import */ var sweetalert__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4701);
/* harmony import */ var sweetalert__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(sweetalert__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var joi__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8506);
/* harmony import */ var joi__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(joi__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var modules_layouts_DrawerLayout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(3903);
/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(5641);
/* harmony import */ var _hookform_resolvers_joi__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(173);
/* harmony import */ var system_format__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(7535);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([react_hook_form__WEBPACK_IMPORTED_MODULE_5__, _hookform_resolvers_joi__WEBPACK_IMPORTED_MODULE_6__]);
([react_hook_form__WEBPACK_IMPORTED_MODULE_5__, _hookform_resolvers_joi__WEBPACK_IMPORTED_MODULE_6__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }











const schema = joi__WEBPACK_IMPORTED_MODULE_3___default().object({
  title: joi__WEBPACK_IMPORTED_MODULE_3___default().string().required(),
  keyword: joi__WEBPACK_IMPORTED_MODULE_3___default().string().required(),
  location: joi__WEBPACK_IMPORTED_MODULE_3___default().string().required(),
  category: joi__WEBPACK_IMPORTED_MODULE_3___default().string().required(),
  description: joi__WEBPACK_IMPORTED_MODULE_3___default().string().required()
});

const AddJob = ({
  handleAdd,
  children,
  handleEdit,
  dataValues,
  handleDelete
}) => {
  var _errors$title, _errors$keyword, _errors$location, _errors$category, _errors$description;

  const [loading, setLoading] = react__WEBPACK_IMPORTED_MODULE_0___default().useState(false);
  const [toggle, setToggle] = react__WEBPACK_IMPORTED_MODULE_0___default().useState(false);
  const {
    register,
    handleSubmit,
    setValue,
    getValues,
    reset,
    formState: {
      errors
    }
  } = (0,react_hook_form__WEBPACK_IMPORTED_MODULE_5__.useForm)({
    resolver: (0,_hookform_resolvers_joi__WEBPACK_IMPORTED_MODULE_6__.joiResolver)(schema)
  });

  const onSubmit = async query => {
    setLoading(true);
    const {
      data,
      error
    } = await (!dataValues ? apis_restful__WEBPACK_IMPORTED_MODULE_1__/* ["default"].PostRoute.postRoute */ .Z.PostRoute.postRoute('/api/jobs', _objectSpread({}, query)) : apis_restful__WEBPACK_IMPORTED_MODULE_1__/* ["default"].PatchRoute.patchRoute */ .Z.PatchRoute.patchRoute(`/api/jobs/${dataValues.id}`, _objectSpread({}, query)));
    setLoading(false);

    if (data) {
      const message = !!dataValues ? 'Edited' : 'Added';
      sweetalert__WEBPACK_IMPORTED_MODULE_2___default()(message, data.message || `${message} successfully`, 'success').then(() => {
        reset();
        setToggle(false);

        if (!dataValues) {
          // @ts-ignore
          handleAdd(data.data);
        } else {
          // @ts-ignore
          handleEdit(data.data);
        }
      });
    }

    if (error) {
      sweetalert__WEBPACK_IMPORTED_MODULE_2___default()('Ooops!', error.message || 'Something went wrong');
    }
  };

  react__WEBPACK_IMPORTED_MODULE_0___default().useEffect(() => {
    if (dataValues) {
      reset({
        title: dataValues.title,
        keyword: dataValues.keyword,
        location: dataValues.location,
        category: dataValues.category,
        description: dataValues.description
      });
    }
  }, [dataValues, reset]);

  const onDelete = async () => {
    const willDelete = await sweetalert__WEBPACK_IMPORTED_MODULE_2___default()({
      title: 'Are you sure?',
      text: 'Are you sure that you want to delete this job?',
      icon: 'warning',
      dangerMode: true
    });

    if (!willDelete) {
      return;
    }

    setLoading(true);
    const {
      data,
      error
    } = await apis_restful__WEBPACK_IMPORTED_MODULE_1__/* ["default"].DeleteRoute.deleteRoute */ .Z.DeleteRoute.deleteRoute(`/api/jobs/${dataValues.id}`);
    setLoading(false);

    if (data) {
      sweetalert__WEBPACK_IMPORTED_MODULE_2___default()('Deleted!', data.message || 'Deleted successfully', 'success').then(() => {
        reset();
        setToggle(false); // @ts-ignore

        handleDelete(dataValues.id);
      });
    }

    if (error) {
      sweetalert__WEBPACK_IMPORTED_MODULE_2___default()('Ooops!', error.message || 'Something went wrong');
    }
  };

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(modules_layouts_DrawerLayout__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
    title: `${dataValues ? 'Edit' : 'New'} Job`,
    toggle: toggle,
    setToggle: setToggle,
    children: [children, /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx("div", {
      className: "flex flex-col",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("form", {
        onSubmit: event => {
          handleSubmit(onSubmit)(event);
        },
        className: "gap-y-3 flex flex-col",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("label", {
          className: "flex flex-col",
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx("span", {
            className: "text-sm font-medium text-gray-900 dark:text-gray-300",
            children: "Title"
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx("input", _objectSpread(_objectSpread({
            type: "text",
            placeholder: 'Title'
          }, register('title')), {}, {
            onChange: event => {
              setValue('title', event.target.value, {
                shouldDirty: true,
                shouldValidate: true
              });
            },
            className: "mt-2 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          })), ((_errors$title = errors.title) === null || _errors$title === void 0 ? void 0 : _errors$title.message) && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx("p", {
            className: "mt-1 text-red-500",
            children: (0,system_format__WEBPACK_IMPORTED_MODULE_8__/* .formatJoiErorr */ .a)(`${errors.title.message}`)
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("label", {
          className: "flex flex-col",
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx("span", {
            className: "text-sm font-medium text-gray-900 dark:text-gray-300",
            children: "Keywords"
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx("input", _objectSpread(_objectSpread({
            type: "text",
            placeholder: 'Keyword'
          }, register('keyword')), {}, {
            onChange: event => {
              setValue('keyword', event.target.value, {
                shouldDirty: true,
                shouldValidate: true
              });
            },
            className: "mt-2 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          })), ((_errors$keyword = errors.keyword) === null || _errors$keyword === void 0 ? void 0 : _errors$keyword.message) && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx("p", {
            className: "mt-1 text-red-500",
            children: (0,system_format__WEBPACK_IMPORTED_MODULE_8__/* .formatJoiErorr */ .a)(`${errors.keyword.message}`)
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("label", {
          className: "flex flex-col",
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx("span", {
            className: "text-sm font-medium text-gray-900 dark:text-gray-300",
            children: "Location"
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx("input", _objectSpread(_objectSpread({
            type: "text",
            placeholder: 'Location'
          }, register('location')), {}, {
            onChange: event => {
              setValue('location', event.target.value, {
                shouldDirty: true,
                shouldValidate: true
              });
            },
            className: "mt-2 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          })), ((_errors$location = errors.location) === null || _errors$location === void 0 ? void 0 : _errors$location.location) && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx("p", {
            className: "mt-1 text-red-500",
            children: (0,system_format__WEBPACK_IMPORTED_MODULE_8__/* .formatJoiErorr */ .a)(`${errors.location.message}`)
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("label", {
          className: "flex flex-col",
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx("span", {
            className: "text-sm font-medium text-gray-900 dark:text-gray-300",
            children: "Category"
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx("input", _objectSpread(_objectSpread({
            type: "text",
            placeholder: 'Category'
          }, register('category')), {}, {
            onChange: event => {
              setValue('category', event.target.value, {
                shouldDirty: true,
                shouldValidate: true
              });
            },
            className: "mt-2 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          })), ((_errors$category = errors.category) === null || _errors$category === void 0 ? void 0 : _errors$category.message) && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx("p", {
            className: "mt-1 text-red-500",
            children: (0,system_format__WEBPACK_IMPORTED_MODULE_8__/* .formatJoiErorr */ .a)(`${errors.category.message}`)
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("label", {
          className: "flex flex-col",
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx("span", {
            className: "text-sm font-medium text-gray-900 dark:text-gray-300",
            children: "Description"
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx("textarea", _objectSpread(_objectSpread({
            rows: 10,
            placeholder: 'Description'
          }, register('description')), {}, {
            onChange: event => {
              setValue('description', event.target.value, {
                shouldDirty: true,
                shouldValidate: true
              });
            },
            className: "mt-2 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          })), ((_errors$description = errors.description) === null || _errors$description === void 0 ? void 0 : _errors$description.message) && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx("p", {
            className: "mt-1 text-red-500",
            children: (0,system_format__WEBPACK_IMPORTED_MODULE_8__/* .formatJoiErorr */ .a)(`${errors.description.message}`)
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div", {
          className: "flex items-center space-x-3 justify-between md:col-span-2",
          children: [dataValues ? /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx("button", {
            type: "button",
            disabled: loading,
            onClick: onDelete,
            className: "font-semibold disabled:cursor-not-allowed disabled:bg-slate-400 mt-12 text-white bg-red-500/80 hover:bg-red-500 focus:ring-4 focus:outline-none focus:ring-red-300 rounded-lg text-sm w-full sm:w-auto px-8 py-2.5 text-center dark:bg-red-600 dark:hover:bg-red-700 dark:red:ring-blue-800",
            children: "Delete"
          }) : null, /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx("button", {
            type: "submit",
            disabled: loading,
            className: "md:col-span-2 disabled:cursor-not-allowed disabled:bg-slate-400 mt-12 text-white bg-brand-green/80 hover:bg-brand-green focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-8 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800",
            children: "Submit"
          })]
        })]
      })
    })]
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AddJob);
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 5624:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _mui_material_IconButton__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7934);
/* harmony import */ var _mui_material_IconButton__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_mui_material_IconButton__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _mui_icons_material_Edit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6902);
/* harmony import */ var _mui_icons_material_Edit__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_mui_icons_material_Edit__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _AddItem__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7379);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_AddItem__WEBPACK_IMPORTED_MODULE_3__]);
_AddItem__WEBPACK_IMPORTED_MODULE_3__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];








const ViewJob = ({
  data,
  handleEdit,
  handleDelete
}) => {
  const {
    title,
    keyword,
    category
  } = data || {};
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.Fragment, {
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
      className: "flex flex-col bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("h2", {
        className: "self-center",
        children: [" ", title]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
        className: "p-3 flex-grow flex flex-col items-center justify-between gap-y-2",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("p", {
          className: "font-semibold pl-2",
          children: [keyword, " , ", category]
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(_AddItem__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
          dataValues: data,
          handleEdit: handleEdit,
          handleDelete: handleDelete,
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx((_mui_material_IconButton__WEBPACK_IMPORTED_MODULE_0___default()), {
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx((_mui_icons_material_Edit__WEBPACK_IMPORTED_MODULE_1___default()), {})
          })
        })]
      })]
    })
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ViewJob);
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 3845:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "getServerSideProps": () => (/* binding */ getServerSideProps)
/* harmony export */ });
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(968);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var modules_layouts_AdminScaffold__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2185);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var modules_admin_JobActivity__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1393);
/* harmony import */ var system_lib_withSession__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(7154);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([modules_admin_JobActivity__WEBPACK_IMPORTED_MODULE_3__, system_lib_withSession__WEBPACK_IMPORTED_MODULE_4__]);
([modules_admin_JobActivity__WEBPACK_IMPORTED_MODULE_3__, system_lib_withSession__WEBPACK_IMPORTED_MODULE_4__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);









const Job = () => {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.Fragment, {
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx((next_head__WEBPACK_IMPORTED_MODULE_0___default()), {
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("title", {
        children: "Yean"
      })
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx(modules_layouts_AdminScaffold__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx(modules_admin_JobActivity__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {})
    })]
  });
};

const getServerSideProps = (0,system_lib_withSession__WEBPACK_IMPORTED_MODULE_4__/* .withSessionSsr */ .f)(async ({
  req,
  res
}) => {
  const {
    user,
    token
  } = req.session;

  if (!token) {
    return {
      redirect: {
        permanent: false,
        destination: '/logout'
      }
    };
  }

  if (!['admin'].includes(`${user === null || user === void 0 ? void 0 : user.type}`)) {
    return {
      redirect: {
        permanent: false,
        destination: '/'
      }
    };
  }

  return {
    props: {
      user: user || null,
      token: token || null
    }
  };
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Job);
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 6146:
/***/ ((module) => {

module.exports = require("@mui/icons-material/Add");

/***/ }),

/***/ 856:
/***/ ((module) => {

module.exports = require("@mui/icons-material/Category");

/***/ }),

/***/ 4173:
/***/ ((module) => {

module.exports = require("@mui/icons-material/Close");

/***/ }),

/***/ 7235:
/***/ ((module) => {

module.exports = require("@mui/icons-material/Dashboard");

/***/ }),

/***/ 6902:
/***/ ((module) => {

module.exports = require("@mui/icons-material/Edit");

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

/***/ 1567:
/***/ ((module) => {

module.exports = require("@mui/icons-material/Notifications");

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

/***/ 2120:
/***/ ((module) => {

module.exports = require("@mui/material/Avatar");

/***/ }),

/***/ 19:
/***/ ((module) => {

module.exports = require("@mui/material/Box");

/***/ }),

/***/ 3646:
/***/ ((module) => {

module.exports = require("@mui/material/Divider");

/***/ }),

/***/ 7898:
/***/ ((module) => {

module.exports = require("@mui/material/Drawer");

/***/ }),

/***/ 7934:
/***/ ((module) => {

module.exports = require("@mui/material/IconButton");

/***/ }),

/***/ 5768:
/***/ ((module) => {

module.exports = require("@mui/material/Popover");

/***/ }),

/***/ 2167:
/***/ ((module) => {

module.exports = require("axios");

/***/ }),

/***/ 8506:
/***/ ((module) => {

module.exports = require("joi");

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

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 9709:
/***/ ((module) => {

module.exports = require("react-i18next");

/***/ }),

/***/ 6927:
/***/ ((module) => {

module.exports = require("react-in-viewport");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 8238:
/***/ ((module) => {

module.exports = require("secure-ls");

/***/ }),

/***/ 4701:
/***/ ((module) => {

module.exports = require("sweetalert");

/***/ }),

/***/ 173:
/***/ ((module) => {

module.exports = import("@hookform/resolvers/joi");;

/***/ }),

/***/ 1454:
/***/ ((module) => {

module.exports = import("iron-session");;

/***/ }),

/***/ 5641:
/***/ ((module) => {

module.exports = import("react-hook-form");;

/***/ }),

/***/ 5941:
/***/ ((module) => {

module.exports = import("swr");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [2922,3061,9531,9682,967,2077,3751,2185,3903,3800,6635], () => (__webpack_exec__(3845)));
module.exports = __webpack_exports__;

})();