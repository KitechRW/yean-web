"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
class Partner extends sequelize_1.Model {
}
const PartnerModel = (sequelize) => {
    Partner.init({
        id: {
            type: sequelize_1.DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        companyName: sequelize_1.DataTypes.STRING,
        portfolio: sequelize_1.DataTypes.STRING,
        email: sequelize_1.DataTypes.STRING,
        phone: sequelize_1.DataTypes.STRING,
        address: sequelize_1.DataTypes.STRING,
        message: sequelize_1.DataTypes.TEXT,
        image: sequelize_1.DataTypes.STRING,
        confirmed: {
            type: sequelize_1.DataTypes.BOOLEAN,
            defaultValue: false,
        },
    }, {
        tableName: 'tbl_partner',
        timestamps: false,
        sequelize,
    });
    return Partner;
};
exports.default = PartnerModel;
