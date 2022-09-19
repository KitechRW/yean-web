"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DB = exports.sequelize = void 0;
const sequelize_1 = __importDefault(require("sequelize"));
const dotenv_1 = __importDefault(require("dotenv"));
const tags_model_1 = __importDefault(require("./models/tags.model"));
const article_model_1 = __importDefault(require("./models/article.model"));
const category_model_1 = __importDefault(require("./models/category.model"));
const comment_model_1 = __importDefault(require("./models/comment.model"));
const contact_model_1 = __importDefault(require("./models/contact.model"));
const jobs_model_1 = __importDefault(require("./models/jobs.model"));
const landing_model_1 = __importDefault(require("./models/landing.model"));
const library_model_1 = __importDefault(require("./models/library.model"));
const like_model_1 = __importDefault(require("./models/like.model"));
const notification_model_1 = __importDefault(require("./models/notification.model"));
const partner_model_1 = __importDefault(require("./models/partner.model"));
const picture_model_1 = __importDefault(require("./models/picture.model"));
const post_comment_model_1 = __importDefault(require("./models/post_comment.model"));
const post_model_1 = __importDefault(require("./models/post.model"));
const services_model_1 = __importDefault(require("./models/services.model"));
const subcategory_model_1 = __importDefault(require("./models/subcategory.model"));
const user_model_1 = __importDefault(require("./models/user.model"));
const subscriber_model_1 = __importDefault(require("./models/subscriber.model"));
const project_model_1 = __importDefault(require("./models/project.model"));
dotenv_1.default.config();
exports.sequelize = new sequelize_1.default.Sequelize(`${process.env.DATABASE_URL}`, {
    dialect: 'mysql',
    timezone: '+09:00',
    define: {
        charset: 'utf8mb4',
        collate: 'utf8mb4_general_ci',
        underscored: true,
        freezeTableName: true,
    },
    pool: {
        min: 0,
        max: 5,
    },
    logQueryParameters: process.env.NODE_ENV !== 'production',
    benchmark: true,
    // dialectOptions: {
    //   ssl: {
    //     require: true,
    //     rejectUnauthorized: false,
    //   },
    // },
});
exports.sequelize.authenticate();
exports.DB = {
    Articles: (0, article_model_1.default)(exports.sequelize),
    Categories: (0, category_model_1.default)(exports.sequelize),
    Comments: (0, comment_model_1.default)(exports.sequelize),
    Contacts: (0, contact_model_1.default)(exports.sequelize),
    Jobs: (0, jobs_model_1.default)(exports.sequelize),
    Landings: (0, landing_model_1.default)(exports.sequelize),
    Libraries: (0, library_model_1.default)(exports.sequelize),
    Likes: (0, like_model_1.default)(exports.sequelize),
    Notifications: (0, notification_model_1.default)(exports.sequelize),
    Partners: (0, partner_model_1.default)(exports.sequelize),
    Pictures: (0, picture_model_1.default)(exports.sequelize),
    PostComments: (0, post_comment_model_1.default)(exports.sequelize),
    Posts: (0, post_model_1.default)(exports.sequelize),
    Services: (0, services_model_1.default)(exports.sequelize),
    SubCategories: (0, subcategory_model_1.default)(exports.sequelize),
    Subscribes: (0, subscriber_model_1.default)(exports.sequelize),
    Tags: (0, tags_model_1.default)(exports.sequelize),
    Users: (0, user_model_1.default)(exports.sequelize),
    Projects: (0, project_model_1.default)(exports.sequelize),
    sequelize: exports.sequelize, // connection instance (RAW queries)
};
exports.default = exports.DB;
