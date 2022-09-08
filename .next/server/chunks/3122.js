"use strict";
exports.id = 3122;
exports.ids = [3122];
exports.modules = {

/***/ 3122:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ZP": () => (/* binding */ removeFile),
/* harmony export */   "cG": () => (/* binding */ parseForm)
/* harmony export */ });
/* unused harmony exports FormidableError, mime */
/* harmony import */ var mime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9011);
/* harmony import */ var mime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1017);
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var formidable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2616);
/* harmony import */ var formidable__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(formidable__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var fs_promises__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3292);
/* harmony import */ var fs_promises__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(fs_promises__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(7147);
/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_4__);





const FormidableError = (formidable__WEBPACK_IMPORTED_MODULE_2___default().errors.FormidableError);
const mime = (mime__WEBPACK_IMPORTED_MODULE_0___default());
const parseForm = async req => {
  return await new Promise(async (resolve, reject) => {
    const uploadDir = (0,path__WEBPACK_IMPORTED_MODULE_1__.join)(process.env.ROOT_DIR || process.cwd(), `/public/uploads`);

    try {
      await (0,fs_promises__WEBPACK_IMPORTED_MODULE_3__.stat)(uploadDir);
    } catch (e) {
      if (e.code === 'ENOENT') {
        await (0,fs_promises__WEBPACK_IMPORTED_MODULE_3__.mkdir)(uploadDir, {
          recursive: true
        });
      } else {
        console.error(e);
        reject(e);
        return;
      }
    }

    const form = formidable__WEBPACK_IMPORTED_MODULE_2___default()({
      multiples: true,
      maxFiles: 10,
      maxFileSize: 50 * 1024 * 1024,
      uploadDir,
      filename: (_name, _ext, part) => {
        const uniqueSuffix = `${Date.now()}-${Math.round(Math.random() * 1e9)}`;
        const filename = `${part.name || 'unknown'}-${uniqueSuffix}.${mime.getExtension(part.mimetype || '') || 'unknown'}`;
        return filename;
      },
      filter: part => {
        return part.name === 'media' //  && (part.mimetype?.includes('image') || false)
        ;
      }
    });
    form.parse(req, function (err, fields, files) {
      if (err) reject(err);else resolve({
        fields,
        files
      });
    });
  });
};
function removeFile(filePath) {
  try {
    if (Array.isArray(filePath)) {
      for (let i = 0; i < filePath.length; i += 1) {
        fs__WEBPACK_IMPORTED_MODULE_4___default().unlinkSync(`public/${filePath[0]}`);
      }
    } else {
      fs__WEBPACK_IMPORTED_MODULE_4___default().unlinkSync(`public/${filePath}`);
    }
  } catch (error) {
    console.error(error === null || error === void 0 ? void 0 : error.message);
  }
}

/***/ })

};
;