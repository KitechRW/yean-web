"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const notification_model_1 = __importDefault(require("./notification.model"));
class Tag extends sequelize_1.Model {
}
const TagModel = (sequelize) => {
    Tag.init({
        id: {
            type: sequelize_1.DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        name: sequelize_1.DataTypes.STRING,
        count: sequelize_1.DataTypes.INTEGER,
    }, {
        tableName: 'tag',
        modelName: 'Tag',
        timestamps: true,
        sequelize,
    });
    Tag.hasMany((0, notification_model_1.default)(sequelize));
    return Tag;
};
exports.default = TagModel;
