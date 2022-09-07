"use strict";
exports.id = 9055;
exports.ids = [9055];
exports.modules = {

/***/ 9055:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "K1": () => (/* binding */ useSearchbar),
/* harmony export */   "ZP": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* unused harmony exports defaultValue, SearchbarContext */
/* harmony import */ var apis_restful__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3751);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__);




const defaultValue = {
  recentSearches: [],
  articles: [],
  books: []
};
const SearchbarContext = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createContext(defaultValue);
const useSearchbar = () => {
  return react__WEBPACK_IMPORTED_MODULE_2___default().useContext(SearchbarContext);
};

const SearchbarProvider = ({
  children
}) => {
  const [articles, setArticles] = react__WEBPACK_IMPORTED_MODULE_2___default().useState([]);
  const [books, setBooks] = react__WEBPACK_IMPORTED_MODULE_2___default().useState([]);
  const {
    query: {
      q
    }
  } = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();
  const [recentSearches, setRecentSearches] = react__WEBPACK_IMPORTED_MODULE_2___default().useState([]);
  react__WEBPACK_IMPORTED_MODULE_2___default().useEffect(() => {
    const search = q || '';

    if (search.trim().length) {
      setRecentSearches(prev => Array.from(new Set([search, ...prev].slice(0, 6))));
    }
  }, [q]);
  react__WEBPACK_IMPORTED_MODULE_2___default().useEffect(() => {
    const search = q || '';

    if (search.trim()) {
      apis_restful__WEBPACK_IMPORTED_MODULE_0__/* ["default"].OpenRoute.postRoute */ .Z.OpenRoute.postRoute('/api/search', {
        search
      }).then(response => {
        if (response) {
          const data = response.data || {};
          setArticles(data.articles || []);
          setBooks(data.books || []);
        }
      });
    }
  }, [q]);
  const value = react__WEBPACK_IMPORTED_MODULE_2___default().useMemo(() => {
    return {
      recentSearches,
      articles,
      books
    };
  }, [articles, books, recentSearches]);
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(SearchbarContext.Provider, {
    value: value,
    children: children
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SearchbarProvider);

/***/ })

};
;