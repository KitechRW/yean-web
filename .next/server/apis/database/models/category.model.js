"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
class Category extends sequelize_1.Model {
}
const CategoryModel = (sequelize) => {
    Category.init({
        id: {
            type: sequelize_1.DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        name: {
            type: sequelize_1.DataTypes.STRING,
            unique: true,
            allowNull: false,
        },
        image: sequelize_1.DataTypes.STRING,
    }, {
        tableName: 'tbl_category',
        timestamps: false,
        sequelize,
    });
    return Category;
};
exports.default = CategoryModel;
