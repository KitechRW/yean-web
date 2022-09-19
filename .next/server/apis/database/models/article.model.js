"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
class Article extends sequelize_1.Model {
}
const ArticleModel = (sequelize) => {
    Article.init({
        id: {
            type: sequelize_1.DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        title: sequelize_1.DataTypes.TEXT,
        image: sequelize_1.DataTypes.STRING,
        text: sequelize_1.DataTypes.TEXT,
        category: sequelize_1.DataTypes.STRING,
        views: {
            type: sequelize_1.DataTypes.INTEGER,
            defaultValue: 0,
        },
        author_id: sequelize_1.DataTypes.INTEGER,
        tags: sequelize_1.DataTypes.STRING,
        comment: {
            type: sequelize_1.DataTypes.INTEGER,
            defaultValue: 0,
        },
        status: {
            type: sequelize_1.DataTypes.STRING,
            defaultValue: 'online',
        },
        success: sequelize_1.DataTypes.STRING,
        success_photo: sequelize_1.DataTypes.STRING,
    }, {
        tableName: 'article',
        modelName: 'Article',
        timestamps: true,
        sequelize,
    });
    return Article;
};
exports.default = ArticleModel;
