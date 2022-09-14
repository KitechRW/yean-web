"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
class Library extends sequelize_1.Model {
}
const LibraryModel = (sequelize) => {
    Library.init({
        id: {
            type: sequelize_1.DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        link: sequelize_1.DataTypes.STRING,
        size: sequelize_1.DataTypes.BIGINT,
        name: sequelize_1.DataTypes.TEXT,
        cat: sequelize_1.DataTypes.BIGINT,
        desc: sequelize_1.DataTypes.TEXT,
        cover: sequelize_1.DataTypes.STRING,
    }, {
        tableName: 'library',
        timestamps: true,
        sequelize,
    });
    return Library;
};
exports.default = LibraryModel;
