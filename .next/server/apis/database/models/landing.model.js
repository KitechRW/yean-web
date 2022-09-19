"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
class Landing extends sequelize_1.Model {
}
const LandingModel = (sequelize) => {
    Landing.init({
        id: {
            type: sequelize_1.DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        slideIds: {
            type: sequelize_1.DataTypes.STRING,
        },
    }, {
        tableName: 'tbl_landing',
        timestamps: false,
        sequelize,
    });
    return Landing;
};
exports.default = LandingModel;
