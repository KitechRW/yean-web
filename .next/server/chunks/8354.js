"use strict";
exports.id = 8354;
exports.ids = [8354];
exports.modules = {

/***/ 8354:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ _partials_UploadImage)
});

// EXTERNAL MODULE: external "@mui/icons-material/Delete"
var Delete_ = __webpack_require__(3188);
var Delete_default = /*#__PURE__*/__webpack_require__.n(Delete_);
// EXTERNAL MODULE: external "@mui/icons-material/CloudUpload"
var CloudUpload_ = __webpack_require__(4486);
var CloudUpload_default = /*#__PURE__*/__webpack_require__.n(CloudUpload_);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);
// EXTERNAL MODULE: ./src/modules/layouts/DrawerLayout/index.tsx
var DrawerLayout = __webpack_require__(2158);
// EXTERNAL MODULE: ./src/modules/_partials/CustomImage/index.tsx
var CustomImage = __webpack_require__(1663);
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: ./src/modules/_partials/ImagePreview/index.tsx






const ImagePreview = ({
  children,
  src,
  title
}) => {
  const [toggle, setToggle] = external_react_default().useState(false);

  if (!src) {
    return null;
  }

  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(DrawerLayout/* default */.Z, {
    toggle: toggle,
    setToggle: setToggle,
    title: title,
    children: [children, /*#__PURE__*/jsx_runtime_.jsx("div", {
      className: "flex flex-col w-full",
      children: /*#__PURE__*/jsx_runtime_.jsx(CustomImage/* default */.Z, {
        src: src,
        width: "600",
        height: "500",
        objectFit: "contain"
      })
    })]
  });
};

/* harmony default export */ const _partials_ImagePreview = (ImagePreview);
;// CONCATENATED MODULE: ./src/modules/_partials/UploadImage/index.tsx



function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





const KILO_BYTES_PER_BYTE = 1000;
const DEFAULT_MAX_FILE_SIZE_IN_BYTES = 5000000;

const convertNestedObjectToArray = nestedObj => {
  return Object.keys(nestedObj).map(key => nestedObj[key]);
};

const convertBytesToKB = bytes => Math.round(bytes / KILO_BYTES_PER_BYTE);

const UploadImage = ({
  updateFilesCb,
  maxFileSizeInBytes = DEFAULT_MAX_FILE_SIZE_IN_BYTES,
  multiple = false
}) => {
  const [dragActive, setDragActive] = external_react_default().useState(false);
  const [files, setFiles] = external_react_default().useState({});
  const fileInputField = external_react_default().useRef(null);

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

  const handleNewUploadImage = event => {
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

  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
    onDragOver: handleDrag,
    onDrop: dropHandler,
    onDragEnter: handleDrag,
    onDragLeave: handleDrag,
    className: "flex flex-col w-full",
    children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("label", {
      className: `cursor-pointer flex items-center space-x-3 w-full border-2 border-dashed border-gray-600 rounded-lg px-4 py-6 md:py-10 ${dragActive ? 'border-brand-green' : 'peer-active:border-brand-green'}`,
      children: [/*#__PURE__*/jsx_runtime_.jsx((CloudUpload_default()), {
        className: "text-brand-green",
        fontSize: "large"
      }), /*#__PURE__*/jsx_runtime_.jsx("p", {
        className: "flex flex-col",
        children: "Drag & Drop images here or click to select file(s)"
      }), /*#__PURE__*/jsx_runtime_.jsx("input", {
        ref: fileInputField,
        type: "file",
        multiple: multiple,
        accept: ".jpg,.png,.jpeg",
        onChange: handleNewUploadImage,
        className: "hidden"
      })]
    }), /*#__PURE__*/jsx_runtime_.jsx("div", {
      className: "mt-1 inline-grid md:grid-cols-2 gap-3 w-full",
      children: Object.keys(files).map((fileName, index) => {
        const file = files[fileName];
        const isImageFile = file.type.split('/')[0] === 'image';
        return /*#__PURE__*/jsx_runtime_.jsx("div", {
          className: "flex flex-col",
          children: isImageFile && /*#__PURE__*/jsx_runtime_.jsx(_partials_ImagePreview, {
            src: URL.createObjectURL(file),
            title: fileName,
            children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
              className: "py-1 bg-cyan-200/50 px-3 rounded-lg flex items-center w-full space-x-2 justify-between",
              children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("p", {
                className: "text-xs text-cyan-500",
                children: [fileName, ' ', /*#__PURE__*/(0,jsx_runtime_.jsxs)("span", {
                  className: "text-red-500 pl-3",
                  children: [convertBytesToKB(file.size), " kb"]
                })]
              }), /*#__PURE__*/jsx_runtime_.jsx((Delete_default()), {
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

/* harmony default export */ const _partials_UploadImage = (UploadImage);

/***/ })

};
;