"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
class Post_comment extends sequelize_1.Model {
}
const Post_commentModel = (sequelize) => {
    Post_comment.init({
        id: {
            type: sequelize_1.DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        post_id: sequelize_1.DataTypes.INTEGER,
        user: sequelize_1.DataTypes.STRING,
        comment: sequelize_1.DataTypes.TEXT,
    }, {
        tableName: 'post_comment',
        timestamps: true,
        sequelize,
    });
    return Post_comment;
};
exports.default = Post_commentModel;
