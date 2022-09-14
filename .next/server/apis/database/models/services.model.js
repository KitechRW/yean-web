"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
class Service extends sequelize_1.Model {
}
const ServiceModel = (sequelize) => {
    Service.init({
        id: {
            type: sequelize_1.DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        image: sequelize_1.DataTypes.STRING,
        name: sequelize_1.DataTypes.STRING,
        content: sequelize_1.DataTypes.TEXT,
    }, {
        tableName: 'service',
        timestamps: false,
        sequelize,
    });
    return Service;
};
exports.default = ServiceModel;
