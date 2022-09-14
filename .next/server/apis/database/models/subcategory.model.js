"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
class SubCategory extends sequelize_1.Model {
}
const SubCategoryModel = (sequelize) => {
    SubCategory.init({
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
        categoryId: sequelize_1.DataTypes.INTEGER,
        image: sequelize_1.DataTypes.STRING,
    }, {
        tableName: 'tbl_sub_category',
        timestamps: false,
        sequelize,
    });
    return SubCategory;
};
exports.default = SubCategoryModel;
