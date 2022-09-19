"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
class Contact extends sequelize_1.Model {
}
const ContactModel = (sequelize) => {
    Contact.init({
        id: {
            type: sequelize_1.DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        name: sequelize_1.DataTypes.STRING,
        email: sequelize_1.DataTypes.STRING,
        message: sequelize_1.DataTypes.TEXT,
    }, {
        tableName: 'contacts',
        timestamps: true,
        sequelize,
    });
    return Contact;
};
exports.default = ContactModel;
