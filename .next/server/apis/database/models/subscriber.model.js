"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
class Subscribe extends sequelize_1.Model {
}
const SubscribeModel = (sequelize) => {
    Subscribe.init({
        id: {
            type: sequelize_1.DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        email: {
            type: sequelize_1.DataTypes.STRING,
            allowNull: false,
        },
    }, {
        tableName: 'subscribers',
        timestamps: true,
        sequelize,
    });
    return Subscribe;
};
exports.default = SubscribeModel;
