"use strict";
(() => {
var exports = {};
exports.id = 9385;
exports.ids = [9385];
exports.modules = {

/***/ 1954:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _mui_icons_material_Delete__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3188);
/* harmony import */ var _mui_icons_material_Delete__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_mui_icons_material_Delete__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _mui_icons_material_CloudUpload__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4486);
/* harmony import */ var _mui_icons_material_CloudUpload__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_mui_icons_material_CloudUpload__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _PDFPreview__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7139);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__);



function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





const KILO_BYTES_PER_BYTE = 1000;
const DEFAULT_MAX_FILE_SIZE_IN_BYTES = 5000000;

const convertNestedObjectToArray = nestedObj => {
  return Object.keys(nestedObj).map(key => nestedObj[key]);
};

const convertBytesToKB = bytes => Math.round(bytes / KILO_BYTES_PER_BYTE);

const UploadPDF = ({
  updateFilesCb,
  maxFileSizeInBytes = DEFAULT_MAX_FILE_SIZE_IN_BYTES,
  multiple = false
}) => {
  const [dragActive, setDragActive] = react__WEBPACK_IMPORTED_MODULE_2___default().useState(false);
  const [files, setFiles] = react__WEBPACK_IMPORTED_MODULE_2___default().useState({});
  const fileInputField = react__WEBPACK_IMPORTED_MODULE_2___default().useRef(null);

  const addNewFiles = newFiles => {
    const size = newFiles.length;

    for (const file of newFiles) {
      if (file.size < maxFileSizeInBytes) {
        files[file.name] = file;
      }
    }

    return _objectSpread({}, files);
  };

  const callUpdateFilesCb = theFiles => {
    const filesAsArray = convertNestedObjectToArray(theFiles);
    updateFilesCb(filesAsArray);
  };

  const handleNewUploadPDF = event => {
    const {
      files: newFiles
    } = event.target;

    if (newFiles.length) {
      const updatedFiles = addNewFiles(newFiles);
      setFiles(updatedFiles);
      callUpdateFilesCb(updatedFiles);
    }
  };

  const handleDrag = event => {
    event.preventDefault();
    event.stopPropagation();

    if (event.type === 'dragenter' || event.type === 'dragover') {
      setDragActive(true);
    } else if (event.type === 'dragleave') {
      setDragActive(false);
    }
  };

  const dropHandler = event => {
    event.preventDefault();
    event.stopPropagation();
    const {
      files
    } = event.dataTransfer;
    console.log(event);

    if (files && files.length) {
      const updatedFiles = addNewFiles(files);
      setFiles(updatedFiles);
      callUpdateFilesCb(updatedFiles);
    }
  };

  const removeFile = fileName => {
    delete files[fileName];
    setFiles(_objectSpread({}, files));
    callUpdateFilesCb(_objectSpread({}, files));
  };

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
    onDragOver: handleDrag,
    onDrop: dropHandler,
    onDragEnter: handleDrag,
    onDragLeave: handleDrag,
    className: "flex flex-col w-full",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("label", {
      className: `cursor-pointer flex items-center space-x-3 w-full border-2 border-dashed border-gray-600 rounded-lg px-4 py-6 md:py-10 ${dragActive ? 'border-brand-green' : 'peer-active:border-brand-green'}`,
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx((_mui_icons_material_CloudUpload__WEBPACK_IMPORTED_MODULE_1___default()), {
        className: "text-brand-green",
        fontSize: "large"
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("p", {
        className: "flex flex-col",
        children: "Drag & Drop PDFs here or click to select file(s)"
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("input", {
        ref: fileInputField,
        type: "file",
        multiple: multiple,
        accept: "application/pdf",
        onChange: handleNewUploadPDF,
        className: "hidden"
      })]
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("div", {
      className: "mt-1 inline-grid md:grid-cols-2 gap-3 w-full",
      children: Object.keys(files).map((fileName, index) => {
        const file = files[fileName];
        const isImageFile = file.type.split('/')[0] === 'application';
        return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("div", {
          className: "flex flex-col",
          children: isImageFile && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(_PDFPreview__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
            src: URL.createObjectURL(file),
            title: fileName,
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
              className: "py-1 bg-cyan-200/50 px-3 rounded-lg flex items-center w-full space-x-2 justify-between",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("p", {
                className: "text-xs text-cyan-500",
                children: [fileName, ' ', /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("span", {
                  className: "text-red-500 pl-3",
                  children: [convertBytesToKB(file.size), " kb"]
                })]
              }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx((_mui_icons_material_Delete__WEBPACK_IMPORTED_MODULE_0___default()), {
                className: "text-brand-red cursor-pointer text-red-500",
                onClick: () => removeFile(fileName)
              })]
            })
          })
        }, fileName);
      })
    })]
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (UploadPDF);

/***/ }),

/***/ 3263:
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
/* harmony import */ var modules_partials_Pagination__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4108);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _Partials_ManageLibrary_AddItem__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(619);
/* harmony import */ var _Partials_ManageLibrary_ViewItem__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(3333);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([apis_utils_fetcher__WEBPACK_IMPORTED_MODULE_2__, _Partials_ManageLibrary_AddItem__WEBPACK_IMPORTED_MODULE_5__, _Partials_ManageLibrary_ViewItem__WEBPACK_IMPORTED_MODULE_6__]);
([apis_utils_fetcher__WEBPACK_IMPORTED_MODULE_2__, _Partials_ManageLibrary_AddItem__WEBPACK_IMPORTED_MODULE_5__, _Partials_ManageLibrary_ViewItem__WEBPACK_IMPORTED_MODULE_6__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);



function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }









const LibraryActivity = () => {
  const topRef = react__WEBPACK_IMPORTED_MODULE_4___default().useRef(null);
  const [pageNumber, setPageNumber] = react__WEBPACK_IMPORTED_MODULE_4___default().useState(1);
  const [libraries, setLibraries] = react__WEBPACK_IMPORTED_MODULE_4___default().useState({
    count: 0,
    rows: []
  });
  const {
    data: {
      data,
      pagination
    },
    isLoading
  } = (0,apis_utils_fetcher__WEBPACK_IMPORTED_MODULE_2__/* .useOpenFetcher */ .TB)(`/api/libraries?page=${pageNumber || 1}&limit=20`);
  const [filterValue, setFilterValue] = react__WEBPACK_IMPORTED_MODULE_4___default().useState('');
  react__WEBPACK_IMPORTED_MODULE_4___default().useEffect(() => {
    const rows = (data === null || data === void 0 ? void 0 : data.rows) || [];

    if (rows.length) {
      const matchlibraries = rows.filter(element => element.name.toLowerCase().includes(filterValue.toLowerCase()));
      setLibraries(prev => _objectSpread(_objectSpread({}, prev), {}, {
        rows: matchlibraries
      }));
    }
  }, [data, filterValue]);
  react__WEBPACK_IMPORTED_MODULE_4___default().useEffect(() => {
    const rows = (data === null || data === void 0 ? void 0 : data.rows) || [];

    if (rows.length) {
      setLibraries(prev => _objectSpread(_objectSpread({}, prev), {}, {
        rows
      }));
    }
  }, [data]);

  const handleAdd = item => {
    setLibraries(prev => _objectSpread(_objectSpread({}, libraries), {}, {
      rows: [...prev.rows, item]
    }));
  };

  const handleEdit = item => {
    const rows = libraries.rows.map(row => {
      if (Number(row.id) === Number(item.id)) {
        return item;
      }

      return row;
    });
    setLibraries(prev => _objectSpread(_objectSpread({}, prev), {}, {
      rows: rows
    }));
  };

  const handleDelete = id => {
    setLibraries(prev => _objectSpread(_objectSpread({}, prev), {}, {
      rows: prev.rows.filter(element => element.id !== id)
    }));
  };

  if (isLoading) {
    return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx("p", {
      children: "Loading..."
    });
  }

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div", {
    ref: topRef,
    className: "px-4 md:pl-6 bg-white py-4 flex flex-col flex-grow items-center md:px-8 w-full",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div", {
      className: "space-x-6 md:space-x-12 bg-white flex justify-between w-full",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div", {
        className: "group flex-grow flex items-center relative",
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx((_mui_icons_material_Search__WEBPACK_IMPORTED_MODULE_1___default()), {
          className: "left-2 absolute text-slate-400"
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx("input", {
          value: filterValue,
          onChange: event => setFilterValue(event.target.value),
          className: "peer focus:ring-2 focus:ring-blue-500 focus:outline-none appearance-none w-full text-sm leading-6 text-slate-900 placeholder-slate-400 rounded-md py-2 pl-10 ring-1 ring-slate-200 shadow-sm",
          type: "text",
          placeholder: "Filter libraries..."
        })]
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx(_Partials_ManageLibrary_AddItem__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
        handleAdd: item => {
          handleAdd(item);
        },
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("button", {
          className: "hover:bg-brand-green group flex items-center rounded-md bg-brand-green/80 text-white text-sm font-medium px-8 py-2 shadow-sm",
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx((_mui_icons_material_Add__WEBPACK_IMPORTED_MODULE_0___default()), {}), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx("span", {
            children: "New"
          })]
        })
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("ul", {
      className: "w-full py-4 md:py-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 text-sm leading-6",
      children: [libraries.rows.map((item, index) => {
        return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx(_Partials_ManageLibrary_ViewItem__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
          data: item,
          handleEdit: handleEdit,
          handleDelete: handleDelete
        }, item === null || item === void 0 ? void 0 : item.id);
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx(_Partials_ManageLibrary_AddItem__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
        handleAdd: item => {
          handleAdd(item);
        },
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx("li", {
          className: "flex",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("button", {
            className: "hover:border-blue-500 hover:border-solid hover:bg-white hover:text-blue-500 group w-full flex flex-col items-center justify-center rounded-md border-2 border-dashed border-slate-300 text-sm leading-6 text-slate-900 font-medium p-3",
            children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx((_mui_icons_material_Add__WEBPACK_IMPORTED_MODULE_0___default()), {
              className: "group-hover:text-blue-500 mb-1 text-slate-400"
            }), "New Book"]
          })
        })
      })]
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx(modules_partials_Pagination__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
      pageCount: pagination === null || pagination === void 0 ? void 0 : pagination.pageCount,
      currentPage: pagination === null || pagination === void 0 ? void 0 : pagination.currentPage,
      setPageNumber: page => {
        setPageNumber(page); // @ts-ignore

        topRef.current.scrollIntoView();
      }
    })]
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (LibraryActivity);
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 619:
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
/* harmony import */ var modules_partials_UploadPDF__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(1954);
/* harmony import */ var system_format__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(7535);
/* harmony import */ var react_select__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(1929);
/* harmony import */ var react_select__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_select__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var apis_utils_fetcher__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(6635);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([react_hook_form__WEBPACK_IMPORTED_MODULE_5__, _hookform_resolvers_joi__WEBPACK_IMPORTED_MODULE_6__, apis_utils_fetcher__WEBPACK_IMPORTED_MODULE_9__]);
([react_hook_form__WEBPACK_IMPORTED_MODULE_5__, _hookform_resolvers_joi__WEBPACK_IMPORTED_MODULE_6__, apis_utils_fetcher__WEBPACK_IMPORTED_MODULE_9__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }














const schema = joi__WEBPACK_IMPORTED_MODULE_3___default().object({
  name: joi__WEBPACK_IMPORTED_MODULE_3___default().string().required(),
  link: joi__WEBPACK_IMPORTED_MODULE_3___default().object().required(),
  size: joi__WEBPACK_IMPORTED_MODULE_3___default().number().required(),
  cat: joi__WEBPACK_IMPORTED_MODULE_3___default().number().required()
});

const AddItem = ({
  handleAdd,
  children
}) => {
  var _categories$rows, _errors$name, _errors$cat, _errors$link, _errors$link2;

  const [loading, setLoading] = react__WEBPACK_IMPORTED_MODULE_0___default().useState(false);
  const [toggle, setToggle] = react__WEBPACK_IMPORTED_MODULE_0___default().useState(false);
  const {
    data: {
      data: categories
    }
  } = (0,apis_utils_fetcher__WEBPACK_IMPORTED_MODULE_9__/* .useProtectedFetcher */ .Nv)('/api/categories');
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
    const formData = new FormData();
    Object.keys(query).forEach(key => {
      formData.append(key === 'link' ? 'media' : key, query[key]);
    });
    const {
      data,
      error
    } = await apis_restful__WEBPACK_IMPORTED_MODULE_1__/* ["default"].PostRoute.postRoute */ .Z.PostRoute.postRoute('/api/libraries', formData);
    setLoading(false);

    if (data) {
      sweetalert__WEBPACK_IMPORTED_MODULE_2___default()('Added!', data.message || 'Added successfully', 'success').then(() => {
        reset();
        setToggle(false);
        handleAdd(data.data);
      });
    }

    if (error) {
      sweetalert__WEBPACK_IMPORTED_MODULE_2___default()('Ooops!', error.message || 'Something went wrong');
    }
  };

  console.log(errors);
  const categoryOptions = categories === null || categories === void 0 ? void 0 : (_categories$rows = categories.rows) === null || _categories$rows === void 0 ? void 0 : _categories$rows.map(element => ({
    value: element.id,
    label: element.name
  }));
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)(modules_layouts_DrawerLayout__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
    title: `New Book`,
    toggle: toggle,
    setToggle: setToggle,
    children: [children, /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx("div", {
      className: "flex flex-col",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)("form", {
        onSubmit: event => {
          handleSubmit(onSubmit)(event);
        },
        className: "gap-y-3 flex flex-col",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)("label", {
          className: "flex flex-col",
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx("span", {
            className: "text-sm font-medium text-gray-900 dark:text-gray-300",
            children: "Name"
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx("input", _objectSpread(_objectSpread({
            type: "text",
            placeholder: 'Name'
          }, register('name')), {}, {
            className: "mt-2 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          })), ((_errors$name = errors.name) === null || _errors$name === void 0 ? void 0 : _errors$name.message) && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx("p", {
            className: "mt-1 text-red-500",
            children: (0,system_format__WEBPACK_IMPORTED_MODULE_11__/* .formatJoiErorr */ .a)(`${errors.name.message}`)
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)("label", {
          className: "flex flex-col",
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx("span", {
            className: "text-sm font-medium text-gray-900 dark:text-gray-300",
            children: "Category"
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx((react_select__WEBPACK_IMPORTED_MODULE_8___default()), _objectSpread(_objectSpread({
            isMulti: false
          }, register('cat')), {}, {
            options: categoryOptions,
            onChange: newValue => {
              setValue('cat', newValue.value, {
                shouldDirty: true,
                shouldValidate: true
              });
            },
            className: "mt-2"
          })), ((_errors$cat = errors.cat) === null || _errors$cat === void 0 ? void 0 : _errors$cat.message) && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx("p", {
            className: "mt-1 text-red-500",
            children: (0,system_format__WEBPACK_IMPORTED_MODULE_11__/* .formatJoiErorr */ .a)(`${errors.cat.message}`)
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)("div", {
          className: "flex flex-col",
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx("span", {
            className: "text-sm mb-2 font-medium text-gray-900 dark:text-gray-300",
            children: "PDF"
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx(modules_partials_UploadPDF__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
            updateFilesCb: files => {
              var _files$;

              setValue('link', files[0], {
                shouldDirty: true,
                shouldValidate: true
              });
              setValue('size', (_files$ = files[0]) === null || _files$ === void 0 ? void 0 : _files$.size, {
                shouldDirty: true,
                shouldValidate: true
              });
            },
            multiple: false
          }), ((_errors$link = errors.link) === null || _errors$link === void 0 ? void 0 : _errors$link.message) && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx("p", {
            className: "mt-1 text-red-500",
            children: (0,system_format__WEBPACK_IMPORTED_MODULE_11__/* .formatJoiErorr */ .a)(`${(_errors$link2 = errors.link) === null || _errors$link2 === void 0 ? void 0 : _errors$link2.message}`)
          })]
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx("button", {
          type: "submit",
          disabled: loading,
          className: "md:col-span-2 disabled:cursor-not-allowed disabled:bg-slate-400 mt-12 text-white bg-brand-green/80 hover:bg-brand-green focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-8 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800",
          children: "Submit"
        })]
      })
    })]
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AddItem);
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 7523:
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
/* harmony import */ var system_format__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(7535);
/* harmony import */ var react_select__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(1929);
/* harmony import */ var react_select__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_select__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var apis_utils_fetcher__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(6635);
/* harmony import */ var modules_partials_UploadPDF__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(1954);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([react_hook_form__WEBPACK_IMPORTED_MODULE_5__, _hookform_resolvers_joi__WEBPACK_IMPORTED_MODULE_6__, apis_utils_fetcher__WEBPACK_IMPORTED_MODULE_8__]);
([react_hook_form__WEBPACK_IMPORTED_MODULE_5__, _hookform_resolvers_joi__WEBPACK_IMPORTED_MODULE_6__, apis_utils_fetcher__WEBPACK_IMPORTED_MODULE_8__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }














const schema = joi__WEBPACK_IMPORTED_MODULE_3___default().object({
  name: joi__WEBPACK_IMPORTED_MODULE_3___default().string().required(),
  link: joi__WEBPACK_IMPORTED_MODULE_3___default().object().required(),
  size: joi__WEBPACK_IMPORTED_MODULE_3___default().number().required(),
  cat: joi__WEBPACK_IMPORTED_MODULE_3___default().number().required()
});

const EditItem = ({
  handleEdit,
  dataValues,
  handleDelete,
  children
}) => {
  var _categories$rows, _errors$name, _errors$cat, _errors$link, _errors$link2;

  const [loading, setLoading] = react__WEBPACK_IMPORTED_MODULE_0___default().useState(false);
  const [toggle, setToggle] = react__WEBPACK_IMPORTED_MODULE_0___default().useState(false);
  const {
    register,
    handleSubmit,
    setValue,
    reset,
    formState: {
      errors
    }
  } = (0,react_hook_form__WEBPACK_IMPORTED_MODULE_5__.useForm)({
    resolver: (0,_hookform_resolvers_joi__WEBPACK_IMPORTED_MODULE_6__.joiResolver)(schema)
  });

  const onSubmit = async query => {
    const formData = new FormData();
    Object.keys(query).forEach(key => {
      formData.append(key === 'link' ? 'media' : key, query[key]);
    });
    setLoading(true);
    const {
      data,
      error
    } = await apis_restful__WEBPACK_IMPORTED_MODULE_1__/* ["default"].PatchRoute.patchRoute */ .Z.PatchRoute.patchRoute(`/api/libraries/${dataValues.id}`, formData);
    setLoading(false);

    if (data) {
      sweetalert__WEBPACK_IMPORTED_MODULE_2___default()('Edited!', data.message || 'Edited successfully', 'success').then(() => {
        reset();
        setToggle(false);
        handleEdit(data.data);
      });
    }

    if (error) {
      sweetalert__WEBPACK_IMPORTED_MODULE_2___default()('Ooops!', error.message || 'Something went wrong');
    }
  };

  const onDelete = async () => {
    const willDelete = await sweetalert__WEBPACK_IMPORTED_MODULE_2___default()({
      title: 'Are you sure?',
      text: 'Are you sure that you want to delete this book?',
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
    } = await apis_restful__WEBPACK_IMPORTED_MODULE_1__/* ["default"].DeleteRoute.deleteRoute */ .Z.DeleteRoute.deleteRoute(`/api/libraries/${dataValues.id}`);
    setLoading(false);

    if (data) {
      sweetalert__WEBPACK_IMPORTED_MODULE_2___default()('Deleted!', data.message || 'Deleted successfully', 'success').then(() => {
        reset();
        setToggle(false);
        handleDelete(dataValues.id);
      });
    }

    if (error) {
      sweetalert__WEBPACK_IMPORTED_MODULE_2___default()('Ooops!', error.message || 'Something went wrong');
    }
  };

  react__WEBPACK_IMPORTED_MODULE_0___default().useEffect(() => {
    if (dataValues) {
      reset({
        name: dataValues.name,
        link: dataValues.link,
        cat: dataValues.cat
      });
    }
  }, [dataValues]);
  const {
    data: {
      data: categories
    }
  } = (0,apis_utils_fetcher__WEBPACK_IMPORTED_MODULE_8__/* .useProtectedFetcher */ .Nv)('/api/categories');
  const categoryOptions = categories === null || categories === void 0 ? void 0 : (_categories$rows = categories.rows) === null || _categories$rows === void 0 ? void 0 : _categories$rows.map(element => ({
    value: element.id,
    label: element.name
  }));
  const selectedOption = categoryOptions === null || categoryOptions === void 0 ? void 0 : categoryOptions.filter(element => element.value == dataValues.cat);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)(modules_layouts_DrawerLayout__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
    title: `Edit Category`,
    toggle: toggle,
    setToggle: setToggle,
    children: [children, /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx("div", {
      className: "flex flex-col",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)("form", {
        onSubmit: event => {
          handleSubmit(onSubmit)(event);
        },
        className: "gap-y-3 flex flex-col",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)("label", {
          className: "flex flex-col",
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx("span", {
            className: "text-sm font-medium text-gray-900 dark:text-gray-300",
            children: "Name"
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx("input", _objectSpread(_objectSpread({
            type: "text",
            placeholder: 'Name'
          }, register('name')), {}, {
            className: "mt-2 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          })), ((_errors$name = errors.name) === null || _errors$name === void 0 ? void 0 : _errors$name.message) && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx("p", {
            className: "mt-1 text-red-500",
            children: (0,system_format__WEBPACK_IMPORTED_MODULE_11__/* .formatJoiErorr */ .a)(`${errors.name.message}`)
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)("label", {
          className: "flex flex-col",
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx("span", {
            className: "text-sm font-medium text-gray-900 dark:text-gray-300",
            children: "Category"
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx((react_select__WEBPACK_IMPORTED_MODULE_7___default()), _objectSpread(_objectSpread({
            isMulti: false
          }, register('cat')), {}, {
            defaultValue: selectedOption,
            options: categoryOptions,
            onChange: newValue => {
              setValue('cat', newValue.value, {
                shouldDirty: true,
                shouldValidate: true
              });
            },
            className: "mt-2"
          })), ((_errors$cat = errors.cat) === null || _errors$cat === void 0 ? void 0 : _errors$cat.message) && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx("p", {
            className: "mt-1 text-red-500",
            children: (0,system_format__WEBPACK_IMPORTED_MODULE_11__/* .formatJoiErorr */ .a)(`${errors.cat.message}`)
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)("div", {
          className: "flex flex-col",
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx("span", {
            className: "text-sm mb-2 font-medium text-gray-900 dark:text-gray-300",
            children: "PDF"
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx(modules_partials_UploadPDF__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
            updateFilesCb: files => {
              var _files$;

              setValue('link', files[0], {
                shouldDirty: true,
                shouldValidate: true
              });
              setValue('size', (_files$ = files[0]) === null || _files$ === void 0 ? void 0 : _files$.size, {
                shouldDirty: true,
                shouldValidate: true
              });
            },
            multiple: false
          }), ((_errors$link = errors.link) === null || _errors$link === void 0 ? void 0 : _errors$link.message) && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx("p", {
            className: "mt-1 text-red-500",
            children: (0,system_format__WEBPACK_IMPORTED_MODULE_11__/* .formatJoiErorr */ .a)(`${(_errors$link2 = errors.link) === null || _errors$link2 === void 0 ? void 0 : _errors$link2.message}`)
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)("div", {
          className: "flex items-center space-x-3 justify-between md:col-span-2",
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx("button", {
            type: "button",
            disabled: loading,
            onClick: onDelete,
            className: "font-semibold disabled:cursor-not-allowed disabled:bg-slate-400 mt-12 text-white bg-red-500/80 hover:bg-red-500 focus:ring-4 focus:outline-none focus:ring-red-300 rounded-lg text-sm w-full sm:w-auto px-8 py-2.5 text-center dark:bg-red-600 dark:hover:bg-red-700 dark:red:ring-blue-800",
            children: "Delete"
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx("button", {
            type: "submit",
            disabled: loading,
            className: "font-semibold disabled:cursor-not-allowed disabled:bg-slate-400 mt-12 text-white bg-brand-green/80 hover:bg-brand-green focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg text-sm w-full sm:w-auto px-12 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800",
            children: "Save"
          })]
        })]
      })
    })]
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (EditItem);
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 3333:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _mui_material_IconButton__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7934);
/* harmony import */ var _mui_material_IconButton__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_mui_material_IconButton__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _mui_icons_material_Edit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6902);
/* harmony import */ var _mui_icons_material_Edit__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_mui_icons_material_Edit__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _mui_icons_material_PictureAsPdf__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9184);
/* harmony import */ var _mui_icons_material_PictureAsPdf__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_mui_icons_material_PictureAsPdf__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _EditItem__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(7523);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_EditItem__WEBPACK_IMPORTED_MODULE_4__]);
_EditItem__WEBPACK_IMPORTED_MODULE_4__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];









const ViewItem = ({
  data,
  handleEdit,
  handleDelete
}) => {
  const {
    name
  } = data || {};
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.Fragment, {
    children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("div", {
      className: "flex flex-col bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
        className: "p-3 flex-grow flex flex-col items-center justify-between gap-y-2",
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx((_mui_icons_material_PictureAsPdf__WEBPACK_IMPORTED_MODULE_2___default()), {
          className: "text-red-500",
          fontSize: "large"
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("p", {
          className: "font-semibold pl-2",
          children: name
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx(_EditItem__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
          dataValues: data,
          handleEdit: handleEdit,
          handleDelete: handleDelete,
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx((_mui_material_IconButton__WEBPACK_IMPORTED_MODULE_0___default()), {
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx((_mui_icons_material_Edit__WEBPACK_IMPORTED_MODULE_1___default()), {})
          })
        })]
      })
    })
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ViewItem);
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 135:
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
/* harmony import */ var modules_layouts_AdminScaffold__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2185);
/* harmony import */ var modules_admin_LibraryActivity__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3263);
/* harmony import */ var system_lib_withSession__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(7154);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([modules_admin_LibraryActivity__WEBPACK_IMPORTED_MODULE_3__, system_lib_withSession__WEBPACK_IMPORTED_MODULE_4__]);
([modules_admin_LibraryActivity__WEBPACK_IMPORTED_MODULE_3__, system_lib_withSession__WEBPACK_IMPORTED_MODULE_4__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);









const Library = () => {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.Fragment, {
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("title", {
        children: "Yean"
      })
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx(modules_layouts_AdminScaffold__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx(modules_admin_LibraryActivity__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {})
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Library);
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

/***/ 4486:
/***/ ((module) => {

module.exports = require("@mui/icons-material/CloudUpload");

/***/ }),

/***/ 7235:
/***/ ((module) => {

module.exports = require("@mui/icons-material/Dashboard");

/***/ }),

/***/ 3188:
/***/ ((module) => {

module.exports = require("@mui/icons-material/Delete");

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

/***/ 7460:
/***/ ((module) => {

module.exports = require("@mui/icons-material/NavigateBefore");

/***/ }),

/***/ 6179:
/***/ ((module) => {

module.exports = require("@mui/icons-material/NavigateNext");

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

/***/ 9184:
/***/ ((module) => {

module.exports = require("@mui/icons-material/PictureAsPdf");

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

/***/ 5876:
/***/ ((module) => {

module.exports = require("react-pdf");

/***/ }),

/***/ 1929:
/***/ ((module) => {

module.exports = require("react-select");

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
var __webpack_exports__ = __webpack_require__.X(0, [2922,3061,9531,9682,967,2077,3751,2185,3903,3800,6635,4108,7139], () => (__webpack_exec__(135)));
module.exports = __webpack_exports__;

})();