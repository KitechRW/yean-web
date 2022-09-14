"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
class Comment extends sequelize_1.Model {
}
const CommentModel = (sequelize) => {
    Comment.init({
        id: {
            type: sequelize_1.DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        article_id: sequelize_1.DataTypes.INTEGER,
        username: sequelize_1.DataTypes.STRING,
        comment: sequelize_1.DataTypes.TEXT,
        status: {
            type: sequelize_1.DataTypes.STRING,
            defaultValue: 'off',
        },
    }, {
        tableName: 'comment',
        timestamps: true,
        sequelize,
    });
    return Comment;
};
exports.default = CommentModel;
