"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
class User extends sequelize_1.Model {
}
const UserModel = (sequelize) => {
    User.init({
        id: {
            type: sequelize_1.DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        type: sequelize_1.DataTypes.STRING,
        email: sequelize_1.DataTypes.STRING,
        password: sequelize_1.DataTypes.TEXT,
        level: sequelize_1.DataTypes.STRING,
        firstname: sequelize_1.DataTypes.STRING,
        lastname: sequelize_1.DataTypes.STRING,
        phone: sequelize_1.DataTypes.STRING,
        gender: sequelize_1.DataTypes.STRING,
        birthday: sequelize_1.DataTypes.DATE,
        province: sequelize_1.DataTypes.STRING,
        district: sequelize_1.DataTypes.STRING,
        sector: sequelize_1.DataTypes.STRING,
        agrilo: sequelize_1.DataTypes.STRING,
        essay: sequelize_1.DataTypes.TEXT,
        profile_image: sequelize_1.DataTypes.TEXT,
        active: {
            type: sequelize_1.DataTypes.BOOLEAN,
            defaultValue: false,
        },
        status: {
            type: sequelize_1.DataTypes.INTEGER,
            comment: '0:offline,1:online',
            defaultValue: 0,
        },
    }, {
        tableName: 'user',
        modelName: 'User',
        timestamps: true,
        sequelize,
    });
    return User;
};
exports.default = UserModel;
