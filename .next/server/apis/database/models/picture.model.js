"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const user_model_1 = __importDefault(require("./user.model"));
class Picture extends sequelize_1.Model {
}
const PictureModel = (sequelize) => {
    Picture.init({
        id: {
            type: sequelize_1.DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        user: sequelize_1.DataTypes.BIGINT,
        location: sequelize_1.DataTypes.STRING,
    }, {
        tableName: 'picture',
        timestamps: false,
        sequelize,
    });
    Picture.belongsTo((0, user_model_1.default)(sequelize), {
        as: 'owner',
        foreignKey: {
            name: 'user',
        },
    });
    return Picture;
};
exports.default = PictureModel;
