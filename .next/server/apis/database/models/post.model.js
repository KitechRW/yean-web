"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
class Post extends sequelize_1.Model {
}
const PostModel = (sequelize) => {
    Post.init({
        id: {
            type: sequelize_1.DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        user: sequelize_1.DataTypes.INTEGER,
        text: sequelize_1.DataTypes.TEXT,
        like: sequelize_1.DataTypes.BIGINT,
        comment: sequelize_1.DataTypes.BIGINT,
        location: sequelize_1.DataTypes.STRING,
        email_notification: sequelize_1.DataTypes.TEXT,
    }, {
        tableName: 'post',
        timestamps: true,
        sequelize,
    });
    return Post;
};
exports.default = PostModel;
