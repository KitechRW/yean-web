"use strict";
exports.id = 1501;
exports.ids = [1501];
exports.modules = {

/***/ 3509:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* unused harmony exports sequelize, DB */
/* harmony import */ var sequelize__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8210);
/* harmony import */ var dotenv__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5142);
/* harmony import */ var dotenv__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(dotenv__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _models_tags_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1128);
/* harmony import */ var _models_article_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2968);
/* harmony import */ var _models_category_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(4068);
/* harmony import */ var _models_comment_model__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1202);
/* harmony import */ var _models_contact_model__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1403);
/* harmony import */ var _models_jobs_model__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(538);
/* harmony import */ var _models_landing_model__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(1522);
/* harmony import */ var _models_library_model__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(8143);
/* harmony import */ var _models_like_model__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(7324);
/* harmony import */ var _models_notification_model__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(1959);
/* harmony import */ var _models_partner_model__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(4150);
/* harmony import */ var _models_picture_model__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(1200);
/* harmony import */ var _models_post_comment_model__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(6565);
/* harmony import */ var _models_post_model__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(2656);
/* harmony import */ var _models_services_model__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(3859);
/* harmony import */ var _models_subcategory_model__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(3492);
/* harmony import */ var _models_user_model__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(7846);
/* harmony import */ var _models_subscriber_model__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(3308);
/* harmony import */ var _models_project_model__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(3988);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([sequelize__WEBPACK_IMPORTED_MODULE_0__, _models_tags_model__WEBPACK_IMPORTED_MODULE_2__, _models_article_model__WEBPACK_IMPORTED_MODULE_3__, _models_category_model__WEBPACK_IMPORTED_MODULE_4__, _models_comment_model__WEBPACK_IMPORTED_MODULE_5__, _models_contact_model__WEBPACK_IMPORTED_MODULE_6__, _models_jobs_model__WEBPACK_IMPORTED_MODULE_7__, _models_landing_model__WEBPACK_IMPORTED_MODULE_8__, _models_library_model__WEBPACK_IMPORTED_MODULE_9__, _models_like_model__WEBPACK_IMPORTED_MODULE_10__, _models_notification_model__WEBPACK_IMPORTED_MODULE_11__, _models_partner_model__WEBPACK_IMPORTED_MODULE_12__, _models_picture_model__WEBPACK_IMPORTED_MODULE_13__, _models_post_comment_model__WEBPACK_IMPORTED_MODULE_14__, _models_post_model__WEBPACK_IMPORTED_MODULE_15__, _models_services_model__WEBPACK_IMPORTED_MODULE_16__, _models_subcategory_model__WEBPACK_IMPORTED_MODULE_17__, _models_user_model__WEBPACK_IMPORTED_MODULE_18__, _models_subscriber_model__WEBPACK_IMPORTED_MODULE_19__, _models_project_model__WEBPACK_IMPORTED_MODULE_20__]);
([sequelize__WEBPACK_IMPORTED_MODULE_0__, _models_tags_model__WEBPACK_IMPORTED_MODULE_2__, _models_article_model__WEBPACK_IMPORTED_MODULE_3__, _models_category_model__WEBPACK_IMPORTED_MODULE_4__, _models_comment_model__WEBPACK_IMPORTED_MODULE_5__, _models_contact_model__WEBPACK_IMPORTED_MODULE_6__, _models_jobs_model__WEBPACK_IMPORTED_MODULE_7__, _models_landing_model__WEBPACK_IMPORTED_MODULE_8__, _models_library_model__WEBPACK_IMPORTED_MODULE_9__, _models_like_model__WEBPACK_IMPORTED_MODULE_10__, _models_notification_model__WEBPACK_IMPORTED_MODULE_11__, _models_partner_model__WEBPACK_IMPORTED_MODULE_12__, _models_picture_model__WEBPACK_IMPORTED_MODULE_13__, _models_post_comment_model__WEBPACK_IMPORTED_MODULE_14__, _models_post_model__WEBPACK_IMPORTED_MODULE_15__, _models_services_model__WEBPACK_IMPORTED_MODULE_16__, _models_subcategory_model__WEBPACK_IMPORTED_MODULE_17__, _models_user_model__WEBPACK_IMPORTED_MODULE_18__, _models_subscriber_model__WEBPACK_IMPORTED_MODULE_19__, _models_project_model__WEBPACK_IMPORTED_MODULE_20__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);





















dotenv__WEBPACK_IMPORTED_MODULE_1___default().config();
const sequelize = new sequelize__WEBPACK_IMPORTED_MODULE_0__["default"].Sequelize(`${process.env.DATABASE_URL}`, {
  dialect: 'mysql',
  timezone: '+09:00',
  define: {
    charset: 'utf8mb4',
    collate: 'utf8mb4_general_ci',
    underscored: true,
    freezeTableName: true
  },
  pool: {
    min: 0,
    max: 5
  },
  logQueryParameters: false,
  benchmark: true // dialectOptions: {
  //   ssl: {
  //     require: true,
  //     rejectUnauthorized: false,
  //   },
  // },

});
sequelize.authenticate();
const DB = {
  Articles: (0,_models_article_model__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z)(sequelize),
  Categories: (0,_models_category_model__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z)(sequelize),
  Comments: (0,_models_comment_model__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z)(sequelize),
  Contacts: (0,_models_contact_model__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z)(sequelize),
  Jobs: (0,_models_jobs_model__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z)(sequelize),
  Landings: (0,_models_landing_model__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z)(sequelize),
  Libraries: (0,_models_library_model__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z)(sequelize),
  Likes: (0,_models_like_model__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z)(sequelize),
  Notifications: (0,_models_notification_model__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z)(sequelize),
  Partners: (0,_models_partner_model__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z)(sequelize),
  Pictures: (0,_models_picture_model__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Z)(sequelize),
  PostComments: (0,_models_post_comment_model__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .Z)(sequelize),
  Posts: (0,_models_post_model__WEBPACK_IMPORTED_MODULE_15__/* ["default"] */ .Z)(sequelize),
  Services: (0,_models_services_model__WEBPACK_IMPORTED_MODULE_16__/* ["default"] */ .Z)(sequelize),
  SubCategories: (0,_models_subcategory_model__WEBPACK_IMPORTED_MODULE_17__/* ["default"] */ .Z)(sequelize),
  Subscribes: (0,_models_subscriber_model__WEBPACK_IMPORTED_MODULE_19__/* ["default"] */ .Z)(sequelize),
  Tags: (0,_models_tags_model__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)(sequelize),
  Users: (0,_models_user_model__WEBPACK_IMPORTED_MODULE_18__/* ["default"] */ .Z)(sequelize),
  Projects: (0,_models_project_model__WEBPACK_IMPORTED_MODULE_20__/* ["default"] */ .Z)(sequelize),
  sequelize // connection instance (RAW queries)

};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DB);
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 2968:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var sequelize__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8210);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([sequelize__WEBPACK_IMPORTED_MODULE_0__]);
sequelize__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


class Article extends sequelize__WEBPACK_IMPORTED_MODULE_0__.Model {}

const ArticleModel = sequelize => {
  Article.init({
    id: {
      type: sequelize__WEBPACK_IMPORTED_MODULE_0__.DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    title: sequelize__WEBPACK_IMPORTED_MODULE_0__.DataTypes.TEXT,
    image: sequelize__WEBPACK_IMPORTED_MODULE_0__.DataTypes.STRING,
    text: sequelize__WEBPACK_IMPORTED_MODULE_0__.DataTypes.TEXT,
    category: sequelize__WEBPACK_IMPORTED_MODULE_0__.DataTypes.STRING,
    views: {
      type: sequelize__WEBPACK_IMPORTED_MODULE_0__.DataTypes.INTEGER,
      defaultValue: 0
    },
    author_id: sequelize__WEBPACK_IMPORTED_MODULE_0__.DataTypes.INTEGER,
    tags: sequelize__WEBPACK_IMPORTED_MODULE_0__.DataTypes.STRING,
    comment: {
      type: sequelize__WEBPACK_IMPORTED_MODULE_0__.DataTypes.INTEGER,
      defaultValue: 0
    },
    status: {
      type: sequelize__WEBPACK_IMPORTED_MODULE_0__.DataTypes.STRING,
      defaultValue: 'online'
    },
    success: sequelize__WEBPACK_IMPORTED_MODULE_0__.DataTypes.STRING,
    success_photo: sequelize__WEBPACK_IMPORTED_MODULE_0__.DataTypes.STRING
  }, {
    tableName: 'article',
    modelName: 'Article',
    timestamps: true,
    sequelize
  });
  return Article;
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ArticleModel);
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 4068:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var sequelize__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8210);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([sequelize__WEBPACK_IMPORTED_MODULE_0__]);
sequelize__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


class Category extends sequelize__WEBPACK_IMPORTED_MODULE_0__.Model {}

const CategoryModel = sequelize => {
  Category.init({
    id: {
      type: sequelize__WEBPACK_IMPORTED_MODULE_0__.DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    name: {
      type: sequelize__WEBPACK_IMPORTED_MODULE_0__.DataTypes.STRING,
      unique: true,
      allowNull: false
    },
    image: sequelize__WEBPACK_IMPORTED_MODULE_0__.DataTypes.STRING
  }, {
    tableName: 'tbl_category',
    timestamps: false,
    sequelize
  });
  return Category;
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CategoryModel);
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 1202:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var sequelize__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8210);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([sequelize__WEBPACK_IMPORTED_MODULE_0__]);
sequelize__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


class Comment extends sequelize__WEBPACK_IMPORTED_MODULE_0__.Model {}

const CommentModel = sequelize => {
  Comment.init({
    id: {
      type: sequelize__WEBPACK_IMPORTED_MODULE_0__.DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    article_id: sequelize__WEBPACK_IMPORTED_MODULE_0__.DataTypes.INTEGER,
    username: sequelize__WEBPACK_IMPORTED_MODULE_0__.DataTypes.STRING,
    comment: sequelize__WEBPACK_IMPORTED_MODULE_0__.DataTypes.TEXT,
    status: {
      type: sequelize__WEBPACK_IMPORTED_MODULE_0__.DataTypes.STRING,
      defaultValue: 'off'
    }
  }, {
    tableName: 'comment',
    timestamps: true,
    sequelize
  });
  return Comment;
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CommentModel);
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 1403:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var sequelize__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8210);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([sequelize__WEBPACK_IMPORTED_MODULE_0__]);
sequelize__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


class Contact extends sequelize__WEBPACK_IMPORTED_MODULE_0__.Model {}

const ContactModel = sequelize => {
  Contact.init({
    id: {
      type: sequelize__WEBPACK_IMPORTED_MODULE_0__.DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    name: sequelize__WEBPACK_IMPORTED_MODULE_0__.DataTypes.STRING,
    email: sequelize__WEBPACK_IMPORTED_MODULE_0__.DataTypes.STRING,
    message: sequelize__WEBPACK_IMPORTED_MODULE_0__.DataTypes.TEXT
  }, {
    tableName: 'contacts',
    timestamps: true,
    sequelize
  });
  return Contact;
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ContactModel);
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 538:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var sequelize__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8210);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([sequelize__WEBPACK_IMPORTED_MODULE_0__]);
sequelize__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


class Job extends sequelize__WEBPACK_IMPORTED_MODULE_0__.Model {}

const JobModel = sequelize => {
  Job.init({
    id: {
      type: sequelize__WEBPACK_IMPORTED_MODULE_0__.DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    title: sequelize__WEBPACK_IMPORTED_MODULE_0__.DataTypes.TEXT,
    category: sequelize__WEBPACK_IMPORTED_MODULE_0__.DataTypes.STRING,
    keyword: sequelize__WEBPACK_IMPORTED_MODULE_0__.DataTypes.STRING,
    location: sequelize__WEBPACK_IMPORTED_MODULE_0__.DataTypes.STRING,
    description: sequelize__WEBPACK_IMPORTED_MODULE_0__.DataTypes.TEXT
  }, {
    tableName: 'tbl_jobs',
    timestamps: false,
    sequelize
  });
  return Job;
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (JobModel);
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 1522:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var sequelize__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8210);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([sequelize__WEBPACK_IMPORTED_MODULE_0__]);
sequelize__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


class Landing extends sequelize__WEBPACK_IMPORTED_MODULE_0__.Model {}

const LandingModel = sequelize => {
  Landing.init({
    id: {
      type: sequelize__WEBPACK_IMPORTED_MODULE_0__.DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    slideIds: {
      type: sequelize__WEBPACK_IMPORTED_MODULE_0__.DataTypes.STRING
    }
  }, {
    tableName: 'tbl_landing',
    timestamps: false,
    sequelize
  });
  return Landing;
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (LandingModel);
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 8143:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var sequelize__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8210);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([sequelize__WEBPACK_IMPORTED_MODULE_0__]);
sequelize__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


class Library extends sequelize__WEBPACK_IMPORTED_MODULE_0__.Model {}

const LibraryModel = sequelize => {
  Library.init({
    id: {
      type: sequelize__WEBPACK_IMPORTED_MODULE_0__.DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    link: sequelize__WEBPACK_IMPORTED_MODULE_0__.DataTypes.STRING,
    size: sequelize__WEBPACK_IMPORTED_MODULE_0__.DataTypes.BIGINT,
    name: sequelize__WEBPACK_IMPORTED_MODULE_0__.DataTypes.TEXT,
    cat: sequelize__WEBPACK_IMPORTED_MODULE_0__.DataTypes.BIGINT,
    desc: sequelize__WEBPACK_IMPORTED_MODULE_0__.DataTypes.TEXT,
    cover: sequelize__WEBPACK_IMPORTED_MODULE_0__.DataTypes.STRING
  }, {
    tableName: 'library',
    timestamps: true,
    sequelize
  });
  return Library;
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (LibraryModel);
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 7324:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var sequelize__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8210);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([sequelize__WEBPACK_IMPORTED_MODULE_0__]);
sequelize__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


class Like extends sequelize__WEBPACK_IMPORTED_MODULE_0__.Model {}

const LikeModel = sequelize => {
  Like.init({
    id: {
      type: sequelize__WEBPACK_IMPORTED_MODULE_0__.DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    user: sequelize__WEBPACK_IMPORTED_MODULE_0__.DataTypes.BIGINT,
    post: sequelize__WEBPACK_IMPORTED_MODULE_0__.DataTypes.BIGINT,
    likes: sequelize__WEBPACK_IMPORTED_MODULE_0__.DataTypes.BOOLEAN
  }, {
    tableName: 'like',
    timestamps: true,
    sequelize
  });
  return Like;
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (LikeModel);
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 1959:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var sequelize__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8210);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([sequelize__WEBPACK_IMPORTED_MODULE_0__]);
sequelize__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


class Notification extends sequelize__WEBPACK_IMPORTED_MODULE_0__.Model {}

const NotificationModel = sequelize => {
  Notification.init({
    id: {
      type: sequelize__WEBPACK_IMPORTED_MODULE_0__.DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    postId: {
      type: sequelize__WEBPACK_IMPORTED_MODULE_0__.DataTypes.INTEGER
    },
    type: sequelize__WEBPACK_IMPORTED_MODULE_0__.DataTypes.STRING,
    username: sequelize__WEBPACK_IMPORTED_MODULE_0__.DataTypes.STRING,
    notified: sequelize__WEBPACK_IMPORTED_MODULE_0__.DataTypes.TEXT,
    on: sequelize__WEBPACK_IMPORTED_MODULE_0__.DataTypes.STRING,
    seen: sequelize__WEBPACK_IMPORTED_MODULE_0__.DataTypes.STRING
  }, {
    tableName: 'notification',
    modelName: 'Notification',
    timestamps: true,
    sequelize
  }); // Notification.belongsTo(PostModel(sequelize), {
  //   targetKey: 'id',
  //   foreignKey: {
  //     name: 'postId',
  //   },
  //   as: 'post',
  // });

  return Notification;
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (NotificationModel);
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 4150:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var sequelize__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8210);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([sequelize__WEBPACK_IMPORTED_MODULE_0__]);
sequelize__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


class Partner extends sequelize__WEBPACK_IMPORTED_MODULE_0__.Model {}

const PartnerModel = sequelize => {
  Partner.init({
    id: {
      type: sequelize__WEBPACK_IMPORTED_MODULE_0__.DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    companyName: sequelize__WEBPACK_IMPORTED_MODULE_0__.DataTypes.STRING,
    portfolio: sequelize__WEBPACK_IMPORTED_MODULE_0__.DataTypes.STRING,
    email: sequelize__WEBPACK_IMPORTED_MODULE_0__.DataTypes.STRING,
    phone: sequelize__WEBPACK_IMPORTED_MODULE_0__.DataTypes.STRING,
    address: sequelize__WEBPACK_IMPORTED_MODULE_0__.DataTypes.STRING,
    message: sequelize__WEBPACK_IMPORTED_MODULE_0__.DataTypes.TEXT,
    image: sequelize__WEBPACK_IMPORTED_MODULE_0__.DataTypes.STRING,
    confirmed: {
      type: sequelize__WEBPACK_IMPORTED_MODULE_0__.DataTypes.BOOLEAN,
      defaultValue: false
    }
  }, {
    tableName: 'tbl_partner',
    timestamps: false,
    sequelize
  });
  return Partner;
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PartnerModel);
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 1200:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var sequelize__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8210);
/* harmony import */ var _user_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7846);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([sequelize__WEBPACK_IMPORTED_MODULE_0__, _user_model__WEBPACK_IMPORTED_MODULE_1__]);
([sequelize__WEBPACK_IMPORTED_MODULE_0__, _user_model__WEBPACK_IMPORTED_MODULE_1__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);



class Picture extends sequelize__WEBPACK_IMPORTED_MODULE_0__.Model {}

const PictureModel = sequelize => {
  Picture.init({
    id: {
      type: sequelize__WEBPACK_IMPORTED_MODULE_0__.DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    user: sequelize__WEBPACK_IMPORTED_MODULE_0__.DataTypes.BIGINT,
    location: sequelize__WEBPACK_IMPORTED_MODULE_0__.DataTypes.STRING
  }, {
    tableName: 'picture',
    timestamps: false,
    sequelize
  });
  Picture.belongsTo((0,_user_model__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z)(sequelize), {
    as: 'owner',
    foreignKey: {
      name: 'user'
    }
  });
  return Picture;
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PictureModel);
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 2656:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var sequelize__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8210);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([sequelize__WEBPACK_IMPORTED_MODULE_0__]);
sequelize__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


class Post extends sequelize__WEBPACK_IMPORTED_MODULE_0__.Model {}

const PostModel = sequelize => {
  Post.init({
    id: {
      type: sequelize__WEBPACK_IMPORTED_MODULE_0__.DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    user: sequelize__WEBPACK_IMPORTED_MODULE_0__.DataTypes.INTEGER,
    text: sequelize__WEBPACK_IMPORTED_MODULE_0__.DataTypes.TEXT,
    like: sequelize__WEBPACK_IMPORTED_MODULE_0__.DataTypes.BIGINT,
    comment: sequelize__WEBPACK_IMPORTED_MODULE_0__.DataTypes.BIGINT,
    location: sequelize__WEBPACK_IMPORTED_MODULE_0__.DataTypes.STRING,
    email_notification: sequelize__WEBPACK_IMPORTED_MODULE_0__.DataTypes.TEXT
  }, {
    tableName: 'post',
    timestamps: true,
    sequelize
  });
  return Post;
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PostModel);
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 6565:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var sequelize__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8210);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([sequelize__WEBPACK_IMPORTED_MODULE_0__]);
sequelize__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


class Post_comment extends sequelize__WEBPACK_IMPORTED_MODULE_0__.Model {}

const Post_commentModel = sequelize => {
  Post_comment.init({
    id: {
      type: sequelize__WEBPACK_IMPORTED_MODULE_0__.DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    post_id: sequelize__WEBPACK_IMPORTED_MODULE_0__.DataTypes.INTEGER,
    user: sequelize__WEBPACK_IMPORTED_MODULE_0__.DataTypes.STRING,
    comment: sequelize__WEBPACK_IMPORTED_MODULE_0__.DataTypes.TEXT
  }, {
    tableName: 'post_comment',
    timestamps: true,
    sequelize
  });
  return Post_comment;
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Post_commentModel);
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 3988:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var sequelize__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8210);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([sequelize__WEBPACK_IMPORTED_MODULE_0__]);
sequelize__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


class Project extends sequelize__WEBPACK_IMPORTED_MODULE_0__.Model {}

const ProjectModel = sequelize => {
  Project.init({
    id: {
      type: sequelize__WEBPACK_IMPORTED_MODULE_0__.DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    name: sequelize__WEBPACK_IMPORTED_MODULE_0__.DataTypes.STRING,
    image: sequelize__WEBPACK_IMPORTED_MODULE_0__.DataTypes.STRING,
    description: sequelize__WEBPACK_IMPORTED_MODULE_0__.DataTypes.TEXT
  }, {
    tableName: 'tbl_projects',
    timestamps: false,
    sequelize
  });
  return Project;
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ProjectModel);
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 3859:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var sequelize__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8210);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([sequelize__WEBPACK_IMPORTED_MODULE_0__]);
sequelize__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


class Service extends sequelize__WEBPACK_IMPORTED_MODULE_0__.Model {}

const ServiceModel = sequelize => {
  Service.init({
    id: {
      type: sequelize__WEBPACK_IMPORTED_MODULE_0__.DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    image: sequelize__WEBPACK_IMPORTED_MODULE_0__.DataTypes.STRING,
    name: sequelize__WEBPACK_IMPORTED_MODULE_0__.DataTypes.STRING,
    content: sequelize__WEBPACK_IMPORTED_MODULE_0__.DataTypes.TEXT
  }, {
    tableName: 'service',
    timestamps: false,
    sequelize
  });
  return Service;
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ServiceModel);
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 3492:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var sequelize__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8210);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([sequelize__WEBPACK_IMPORTED_MODULE_0__]);
sequelize__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


class SubCategory extends sequelize__WEBPACK_IMPORTED_MODULE_0__.Model {}

const SubCategoryModel = sequelize => {
  SubCategory.init({
    id: {
      type: sequelize__WEBPACK_IMPORTED_MODULE_0__.DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    name: {
      type: sequelize__WEBPACK_IMPORTED_MODULE_0__.DataTypes.STRING,
      unique: true,
      allowNull: false
    },
    categoryId: sequelize__WEBPACK_IMPORTED_MODULE_0__.DataTypes.INTEGER,
    image: sequelize__WEBPACK_IMPORTED_MODULE_0__.DataTypes.STRING
  }, {
    tableName: 'tbl_sub_category',
    timestamps: false,
    sequelize
  });
  return SubCategory;
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SubCategoryModel);
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 3308:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var sequelize__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8210);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([sequelize__WEBPACK_IMPORTED_MODULE_0__]);
sequelize__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


class Subscribe extends sequelize__WEBPACK_IMPORTED_MODULE_0__.Model {}

const SubscribeModel = sequelize => {
  Subscribe.init({
    id: {
      type: sequelize__WEBPACK_IMPORTED_MODULE_0__.DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    email: {
      type: sequelize__WEBPACK_IMPORTED_MODULE_0__.DataTypes.STRING,
      allowNull: false
    }
  }, {
    tableName: 'subscribers',
    timestamps: true,
    sequelize
  });
  return Subscribe;
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SubscribeModel);
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 1128:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var sequelize__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8210);
/* harmony import */ var _notification_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1959);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([sequelize__WEBPACK_IMPORTED_MODULE_0__, _notification_model__WEBPACK_IMPORTED_MODULE_1__]);
([sequelize__WEBPACK_IMPORTED_MODULE_0__, _notification_model__WEBPACK_IMPORTED_MODULE_1__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);



class Tag extends sequelize__WEBPACK_IMPORTED_MODULE_0__.Model {}

const TagModel = sequelize => {
  Tag.init({
    id: {
      type: sequelize__WEBPACK_IMPORTED_MODULE_0__.DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    name: sequelize__WEBPACK_IMPORTED_MODULE_0__.DataTypes.STRING,
    count: sequelize__WEBPACK_IMPORTED_MODULE_0__.DataTypes.INTEGER
  }, {
    tableName: 'tag',
    modelName: 'Tag',
    timestamps: true,
    sequelize
  });
  Tag.hasMany((0,_notification_model__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z)(sequelize));
  return Tag;
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TagModel);
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 7846:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var sequelize__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8210);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([sequelize__WEBPACK_IMPORTED_MODULE_0__]);
sequelize__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


class User extends sequelize__WEBPACK_IMPORTED_MODULE_0__.Model {}

const UserModel = sequelize => {
  User.init({
    id: {
      type: sequelize__WEBPACK_IMPORTED_MODULE_0__.DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    type: sequelize__WEBPACK_IMPORTED_MODULE_0__.DataTypes.STRING,
    email: sequelize__WEBPACK_IMPORTED_MODULE_0__.DataTypes.STRING,
    password: sequelize__WEBPACK_IMPORTED_MODULE_0__.DataTypes.TEXT,
    level: sequelize__WEBPACK_IMPORTED_MODULE_0__.DataTypes.STRING,
    firstname: sequelize__WEBPACK_IMPORTED_MODULE_0__.DataTypes.STRING,
    lastname: sequelize__WEBPACK_IMPORTED_MODULE_0__.DataTypes.STRING,
    phone: sequelize__WEBPACK_IMPORTED_MODULE_0__.DataTypes.STRING,
    gender: sequelize__WEBPACK_IMPORTED_MODULE_0__.DataTypes.STRING,
    birthday: sequelize__WEBPACK_IMPORTED_MODULE_0__.DataTypes.DATE,
    province: sequelize__WEBPACK_IMPORTED_MODULE_0__.DataTypes.STRING,
    district: sequelize__WEBPACK_IMPORTED_MODULE_0__.DataTypes.STRING,
    sector: sequelize__WEBPACK_IMPORTED_MODULE_0__.DataTypes.STRING,
    agrilo: sequelize__WEBPACK_IMPORTED_MODULE_0__.DataTypes.STRING,
    essay: sequelize__WEBPACK_IMPORTED_MODULE_0__.DataTypes.TEXT,
    profile_image: sequelize__WEBPACK_IMPORTED_MODULE_0__.DataTypes.TEXT,
    active: {
      type: sequelize__WEBPACK_IMPORTED_MODULE_0__.DataTypes.BOOLEAN,
      defaultValue: false
    },
    status: {
      type: sequelize__WEBPACK_IMPORTED_MODULE_0__.DataTypes.INTEGER,
      comment: '0:offline,1:online',
      defaultValue: 0
    }
  }, {
    tableName: 'user',
    modelName: 'User',
    timestamps: true,
    sequelize
  });
  return User;
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (UserModel);
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 6828:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ Response)
/* harmony export */ });
class Response {
  static error(res, status, error) {
    return res.status(status).json(error);
  }

  static success(res, status, data) {
    return res.status(status).json(data);
  }

}

/***/ })

};
;