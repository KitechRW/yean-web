"use strict";
(() => {
var exports = {};
exports.id = 870;
exports.ids = [870];
exports.modules = {

/***/ 9156:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _mui_icons_material_Add__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6146);
/* harmony import */ var _mui_icons_material_Add__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_mui_icons_material_Add__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _mui_icons_material_Search__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8017);
/* harmony import */ var _mui_icons_material_Search__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_mui_icons_material_Search__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var apis_utils_fetcher__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5377);
/* harmony import */ var modules_partials_Pagination__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2862);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _Partials_ManageArticle_AddItem__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6784);
/* harmony import */ var _Partials_ManageArticle_ViewItem__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(7855);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([apis_utils_fetcher__WEBPACK_IMPORTED_MODULE_2__, _Partials_ManageArticle_AddItem__WEBPACK_IMPORTED_MODULE_5__, _Partials_ManageArticle_ViewItem__WEBPACK_IMPORTED_MODULE_6__]);
([apis_utils_fetcher__WEBPACK_IMPORTED_MODULE_2__, _Partials_ManageArticle_AddItem__WEBPACK_IMPORTED_MODULE_5__, _Partials_ManageArticle_ViewItem__WEBPACK_IMPORTED_MODULE_6__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);



function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }









const ArticleActivity = () => {
  const topRef = react__WEBPACK_IMPORTED_MODULE_4___default().useRef(null);
  const [pageNumber, setPageNumber] = react__WEBPACK_IMPORTED_MODULE_4___default().useState(1);
  const [articles, setArticles] = react__WEBPACK_IMPORTED_MODULE_4___default().useState({
    count: 0,
    rows: []
  });
  const {
    data: {
      data,
      pagination
    },
    isLoading
  } = (0,apis_utils_fetcher__WEBPACK_IMPORTED_MODULE_2__/* .useOpenFetcher */ .TB)(`/api/articles?page=${pageNumber}&limit=20`);
  const [filterValue, setFilterValue] = react__WEBPACK_IMPORTED_MODULE_4___default().useState('');
  react__WEBPACK_IMPORTED_MODULE_4___default().useEffect(() => {
    const rows = data || [];

    if (rows.length) {
      const matcharticles = rows.filter(element => element.title?.toLowerCase()?.includes(filterValue.toLowerCase()));
      setArticles(prev => _objectSpread(_objectSpread({}, prev), {}, {
        rows: matcharticles
      }));
    }
  }, [data, filterValue]);
  react__WEBPACK_IMPORTED_MODULE_4___default().useEffect(() => {
    const rows = data?.rows || [];

    if (rows.length) {
      setArticles(prev => _objectSpread(_objectSpread({}, prev), {}, {
        rows
      }));
    }
  }, [data]);

  const handleAdd = item => {
    setArticles(prev => _objectSpread(_objectSpread({}, articles), {}, {
      rows: [item, ...prev.rows]
    }));
  };

  const handleEdit = item => {
    const rows = articles.rows.map(row => {
      if (Number(row.id) === Number(item.id)) {
        return item;
      }

      return row;
    });
    setArticles(prev => _objectSpread(_objectSpread({}, prev), {}, {
      rows: rows
    }));
  };

  const handleDelete = id => {
    setArticles(prev => _objectSpread(_objectSpread({}, prev), {}, {
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
          placeholder: "Filter articles..."
        })]
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx(_Partials_ManageArticle_AddItem__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
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
      children: [articles.rows.map((item, index) => {
        return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx(_Partials_ManageArticle_ViewItem__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
          data: item,
          handleEdit: handleEdit,
          handleDelete: handleDelete
        }, item?.id);
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx(_Partials_ManageArticle_AddItem__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
        handleAdd: item => {
          handleAdd(item);
        },
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx("li", {
          className: "flex",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("button", {
            className: "hover:border-blue-500 hover:border-solid hover:bg-white hover:text-blue-500 group w-full flex flex-col items-center justify-center rounded-md border-2 border-dashed border-slate-300 text-sm leading-6 text-slate-900 font-medium p-3",
            children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx((_mui_icons_material_Add__WEBPACK_IMPORTED_MODULE_0___default()), {
              className: "group-hover:text-blue-500 mb-1 text-slate-400"
            }), "New Article"]
          })
        })
      })]
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx(modules_partials_Pagination__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
      pageCount: pagination?.pageCount,
      currentPage: pagination?.currentPage,
      setPageNumber: page => {
        setPageNumber(page); // @ts-ignore

        topRef.current.scrollIntoView();
      }
    })]
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ArticleActivity);
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 6784:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var apis_restful__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(637);
/* harmony import */ var sweetalert__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4701);
/* harmony import */ var sweetalert__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(sweetalert__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var joi__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8506);
/* harmony import */ var joi__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(joi__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var modules_layouts_DrawerLayout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2158);
/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(5641);
/* harmony import */ var _hookform_resolvers_joi__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(173);
/* harmony import */ var modules_partials_UploadImage__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(8354);
/* harmony import */ var system_format__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(7035);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(5152);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var system_config_richtext__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(6973);
/* harmony import */ var react_select__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(1929);
/* harmony import */ var react_select__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react_select__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var apis_utils_fetcher__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(5377);
/* harmony import */ var core_factory_fact_http__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(8058);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([react_hook_form__WEBPACK_IMPORTED_MODULE_5__, _hookform_resolvers_joi__WEBPACK_IMPORTED_MODULE_6__, apis_utils_fetcher__WEBPACK_IMPORTED_MODULE_11__]);
([react_hook_form__WEBPACK_IMPORTED_MODULE_5__, _hookform_resolvers_joi__WEBPACK_IMPORTED_MODULE_6__, apis_utils_fetcher__WEBPACK_IMPORTED_MODULE_11__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


















const ReactQuill = next_dynamic__WEBPACK_IMPORTED_MODULE_8___default()(() => Promise.resolve(/* import() */).then(__webpack_require__.t.bind(__webpack_require__, 2586, 23)), {
  ssr: false,
  loadableGenerated: {
    modules: ["..\\modules\\admin\\_Partials\\ManageArticle\\AddItem\\index.tsx -> " + 'react-quill']
  }
});
const fields = {
  title: joi__WEBPACK_IMPORTED_MODULE_3___default().string().required(),
  image: joi__WEBPACK_IMPORTED_MODULE_3___default().object().required().optional(),
  text: joi__WEBPACK_IMPORTED_MODULE_3___default().string().required(),
  parentCat: joi__WEBPACK_IMPORTED_MODULE_3___default().number().required().label('Category'),
  category: joi__WEBPACK_IMPORTED_MODULE_3___default().number().required().label('Sub category'),
  author_id: joi__WEBPACK_IMPORTED_MODULE_3___default().number().required().label('Author')
};
const schema = joi__WEBPACK_IMPORTED_MODULE_3___default().object(fields);

const AddItem = ({
  handleAdd,
  children,
  handleEdit,
  dataValues,
  handleDelete
}) => {
  const [data, setData] = react__WEBPACK_IMPORTED_MODULE_0___default().useState(null);
  const [loading, setLoading] = react__WEBPACK_IMPORTED_MODULE_0___default().useState(false);
  const [toggle, setToggle] = react__WEBPACK_IMPORTED_MODULE_0___default().useState(false);
  const {
    data: {
      data: categories
    }
  } = (0,apis_utils_fetcher__WEBPACK_IMPORTED_MODULE_11__/* .useProtectedFetcher */ .Nv)('/api/categories');
  const {
    data: {
      data: subCategories
    }
  } = (0,apis_utils_fetcher__WEBPACK_IMPORTED_MODULE_11__/* .useProtectedFetcher */ .Nv)('/api/sub-categories');
  const {
    data: {
      data: authors
    }
  } = (0,apis_utils_fetcher__WEBPACK_IMPORTED_MODULE_11__/* .useProtectedFetcher */ .Nv)('/api/users');
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
      if (key !== 'parentCat') {
        formData.append(key === 'image' ? 'media' : key, query[key]);
      }
    });
    const {
      data: res,
      error
    } = await (!dataValues ? apis_restful__WEBPACK_IMPORTED_MODULE_1__/* ["default"].PostRoute.postRoute */ .Z.PostRoute.postRoute('/api/articles', formData) : apis_restful__WEBPACK_IMPORTED_MODULE_1__/* ["default"].PatchRoute.patchRoute */ .Z.PatchRoute.patchRoute(`/api/articles/${dataValues.id}`, formData));
    setLoading(false);

    if (res) {
      const message = dataValues ? 'Edited' : 'Added';
      sweetalert__WEBPACK_IMPORTED_MODULE_2___default()(message, res.message || `${message} successfully`, 'success').then(() => {
        reset();
        setToggle(false);

        if (dataValues) {
          // @ts-ignore
          handleEdit(res.data);
        } else {
          // @ts-ignore
          handleAdd(res.data);
        }
      });
    }

    if (error) {
      sweetalert__WEBPACK_IMPORTED_MODULE_2___default()('Ooops!', error.message || 'Something went wrong');
    }
  };

  const onDelete = async () => {
    const willDelete = await sweetalert__WEBPACK_IMPORTED_MODULE_2___default()({
      title: 'Are you sure?',
      text: 'Are you sure that you want to delete this article?',
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
    } = await apis_restful__WEBPACK_IMPORTED_MODULE_1__/* ["default"].DeleteRoute.deleteRoute */ .Z.DeleteRoute.deleteRoute(`/api/articles/${dataValues.id}`);
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

  react__WEBPACK_IMPORTED_MODULE_0___default().useEffect(() => {
    if (dataValues?.id) {
      core_factory_fact_http__WEBPACK_IMPORTED_MODULE_12__/* ["default"].axios.get */ .Z.axios.get(`/api/articles/${dataValues.id}`).then(response => {
        setData(response.data.data.article);
      });
    }
  }, [dataValues]);
  const resetForm = react__WEBPACK_IMPORTED_MODULE_0___default().useRef(() => {});

  resetForm.current = () => {
    if (data) {
      const defaultValues = {};
      Object.keys(fields).map(key => {
        if (!['image', 'parentCat'].includes(key)) {
          defaultValues[key] = data[key];
        }
      });
      reset(defaultValues);
    }
  };

  react__WEBPACK_IMPORTED_MODULE_0___default().useEffect(() => {
    resetForm.current();
  }, [data]);
  const categoryOptions = categories?.rows?.map(element => ({
    value: element.id,
    label: element.name
  }));
  const subCategoryOptions = subCategories?.rows?.filter(item => item.categoryId == getValues('parentCat'))?.map(element => ({
    value: element.id,
    label: element.name
  }));
  const defaultSubCategoryOptions = subCategories?.rows?.filter(item => item.id == data?.category)?.map(item => ({
    value: item.id,
    label: item.name,
    categoryId: item.categoryId
  }));
  const defaultCategoryOptions = categoryOptions?.filter(item => {
    if (defaultSubCategoryOptions?.length) {
      return defaultSubCategoryOptions[0].categoryId == item.value;
    }

    return false;
  });
  console.log(defaultCategoryOptions);
  const authorOptions = authors?.map(element => ({
    value: element.id,
    label: `${element.firstname} ${element.lastname}`
  }));
  const defaultAuthorOptions = authorOptions?.filter(item => item.value == data?.author_id);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxs)(modules_layouts_DrawerLayout__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
    title: `New Article`,
    toggle: toggle,
    setToggle: setToggle,
    children: [children, /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx("div", {
      className: "flex flex-col",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxs)("form", {
        onSubmit: event => {
          handleSubmit(onSubmit)(event);
        },
        className: "gap-y-3 flex flex-col",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxs)("label", {
          className: "flex flex-col",
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx("span", {
            className: "text-sm font-medium text-gray-900 dark:text-gray-300",
            children: "Title"
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx("input", _objectSpread(_objectSpread({
            type: "text",
            placeholder: 'Title'
          }, register('title')), {}, {
            className: "mt-2 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          })), errors.title?.message && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx("p", {
            className: "mt-1 text-red-500",
            children: (0,system_format__WEBPACK_IMPORTED_MODULE_14__/* .formatJoiErorr */ .a)(`${errors.title.message}`)
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxs)("label", {
          className: "flex flex-col",
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx("span", {
            className: "text-sm font-medium text-gray-900 dark:text-gray-300",
            children: "Category"
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx((react_select__WEBPACK_IMPORTED_MODULE_10___default()), _objectSpread(_objectSpread({
            isMulti: false
          }, register('parentCat')), {}, {
            options: categoryOptions,
            defaultValue: defaultCategoryOptions,
            onChange: newValue => {
              setValue('parentCat', newValue.value, {
                shouldDirty: true,
                shouldValidate: true
              });
            },
            className: "mt-2"
          })), errors.parentCat?.message && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx("p", {
            className: "mt-1 text-red-500",
            children: (0,system_format__WEBPACK_IMPORTED_MODULE_14__/* .formatJoiErorr */ .a)(`${errors.parentCat.message}`)
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxs)("label", {
          className: "flex flex-col",
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx("span", {
            className: "text-sm font-medium text-gray-900 dark:text-gray-300",
            children: "Sub Category"
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx((react_select__WEBPACK_IMPORTED_MODULE_10___default()), _objectSpread(_objectSpread({
            isMulti: false
          }, register('category')), {}, {
            options: subCategoryOptions,
            defaultValue: defaultSubCategoryOptions,
            onChange: newValue => {
              setValue('category', newValue.value, {
                shouldDirty: true,
                shouldValidate: true
              });
            },
            className: "mt-2"
          })), errors.category?.message && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx("p", {
            className: "mt-1 text-red-500",
            children: (0,system_format__WEBPACK_IMPORTED_MODULE_14__/* .formatJoiErorr */ .a)(`${errors.category.message}`)
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxs)("label", {
          className: "flex flex-col",
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx("span", {
            className: "text-sm font-medium text-gray-900 dark:text-gray-300",
            children: "Author"
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx((react_select__WEBPACK_IMPORTED_MODULE_10___default()), _objectSpread(_objectSpread({
            isMulti: false
          }, register('author_id')), {}, {
            options: authorOptions,
            defaultValue: defaultAuthorOptions,
            onChange: newValue => {
              setValue('author_id', newValue.value, {
                shouldDirty: true,
                shouldValidate: true
              });
            },
            className: "mt-2"
          })), errors.author_id?.message && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx("p", {
            className: "mt-1 text-red-500",
            children: (0,system_format__WEBPACK_IMPORTED_MODULE_14__/* .formatJoiErorr */ .a)(`${errors.author_id.message}`)
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxs)("div", {
          className: "flex flex-col",
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx("span", {
            className: "text-sm mb-2 font-medium text-gray-900 dark:text-gray-300",
            children: "Image"
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx(modules_partials_UploadImage__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
            updateFilesCb: files => {
              setValue('image', files[0], {
                shouldDirty: true,
                shouldValidate: true
              });
            },
            multiple: false
          }), errors.image?.message && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx("p", {
            className: "mt-1 text-red-500",
            children: (0,system_format__WEBPACK_IMPORTED_MODULE_14__/* .formatJoiErorr */ .a)(`${errors.image?.message}`)
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxs)("div", {
          className: "flex flex-col",
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx("p", {
            className: "mt-3 w-full font-medium",
            children: "Text"
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx(ReactQuill, {
            theme: "snow",
            defaultValue: data?.text,
            modules: system_config_richtext__WEBPACK_IMPORTED_MODULE_9__/* ["default"].modules */ .Z.modules,
            formats: system_config_richtext__WEBPACK_IMPORTED_MODULE_9__/* ["default"].formats */ .Z.formats,
            onChange: newValue => {
              setValue('text', newValue, {
                shouldDirty: true,
                shouldValidate: true
              });
            }
          }), errors.text?.message && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx("p", {
            className: "mt-1 text-red-500",
            children: (0,system_format__WEBPACK_IMPORTED_MODULE_14__/* .formatJoiErorr */ .a)(`${errors.text?.message}`)
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxs)("div", {
          className: "flex items-center space-x-3 justify-between md:col-span-2",
          children: [dataValues ? /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx("button", {
            type: "button",
            disabled: loading,
            onClick: onDelete,
            className: "font-semibold disabled:cursor-not-allowed disabled:bg-slate-400 mt-12 text-white bg-red-500/80 hover:bg-red-500 focus:ring-4 focus:outline-none focus:ring-red-300 rounded-lg text-sm w-full sm:w-auto px-8 py-2.5 text-center dark:bg-red-600 dark:hover:bg-red-700 dark:red:ring-blue-800",
            children: "Delete"
          }) : null, /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx("button", {
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

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AddItem);
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 7855:
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
/* harmony import */ var modules_partials_CustomImage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1663);
/* harmony import */ var _AddItem__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6784);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_AddItem__WEBPACK_IMPORTED_MODULE_4__]);
_AddItem__WEBPACK_IMPORTED_MODULE_4__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];









const ViewItem = ({
  data,
  handleEdit,
  handleDelete
}) => {
  const {
    title,
    image
  } = data || {};
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.Fragment, {
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
      className: "flex flex-col bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700",
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx(modules_partials_CustomImage__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
        src: image,
        width: "150",
        height: "150"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
        className: "p-3 flex-grow flex flex-col items-center justify-between gap-y-2",
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("p", {
          className: "font-semibold pl-2",
          children: title
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx(_AddItem__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
          dataValues: data,
          handleEdit: handleEdit,
          handleDelete: handleDelete,
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx((_mui_material_IconButton__WEBPACK_IMPORTED_MODULE_0___default()), {
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx((_mui_icons_material_Edit__WEBPACK_IMPORTED_MODULE_1___default()), {})
          })
        })]
      })]
    })
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ViewItem);
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 1759:
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
/* harmony import */ var modules_layouts_AdminScaffold__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3389);
/* harmony import */ var modules_admin_ArticleActivity__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9156);
/* harmony import */ var system_lib_withSession__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(3064);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([modules_admin_ArticleActivity__WEBPACK_IMPORTED_MODULE_3__, system_lib_withSession__WEBPACK_IMPORTED_MODULE_4__]);
([modules_admin_ArticleActivity__WEBPACK_IMPORTED_MODULE_3__, system_lib_withSession__WEBPACK_IMPORTED_MODULE_4__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);









const Article = () => {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.Fragment, {
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("title", {
        children: "Yean"
      })
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx(modules_layouts_AdminScaffold__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx(modules_admin_ArticleActivity__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {})
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

  if (!['admin'].includes(`${user?.type}`)) {
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Article);
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 6973:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ RichText)
/* harmony export */ });
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

class RichText {}

_defineProperty(RichText, "modules", {
  toolbar: [[{
    header: [1, 2, false]
  }], ['bold', 'italic', 'underline', 'strike', 'blockquote'], [{
    list: 'ordered'
  }, {
    list: 'bullet'
  }, {
    indent: '-1'
  }, {
    indent: '+1'
  }], ['link', 'image'], ['clean']]
});

_defineProperty(RichText, "formats", ['header', 'bold', 'italic', 'underline', 'strike', 'blockquote', 'list', 'bullet', 'indent', 'link', 'image']);

/***/ }),

/***/ 3329:
/***/ ((module) => {

module.exports = require("@mui/icons-material/AccountBox");

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

/***/ 9891:
/***/ ((module) => {

module.exports = require("@mui/icons-material/Extension");

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

/***/ 3280:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/app-router-context.js");

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

/***/ 5832:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/loadable.js");

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

/***/ 1751:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/add-path-prefix.js");

/***/ }),

/***/ 6220:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/compare-states.js");

/***/ }),

/***/ 299:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-next-pathname-info.js");

/***/ }),

/***/ 3938:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 9565:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 5789:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-next-pathname-info.js");

/***/ }),

/***/ 1428:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 8854:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-path.js");

/***/ }),

/***/ 1292:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 4567:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/path-has-prefix.js");

/***/ }),

/***/ 979:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 3297:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/remove-trailing-slash.js");

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

/***/ 2586:
/***/ ((module) => {

module.exports = require("react-quill");

/***/ }),

/***/ 1929:
/***/ ((module) => {

module.exports = require("react-select");

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
var __webpack_exports__ = __webpack_require__.X(0, [676,3061,9531,5152,6945,4653,8844,9391,637,1663,3389,6673,1494,5377,2862,8354], () => (__webpack_exec__(1759)));
module.exports = __webpack_exports__;

})();