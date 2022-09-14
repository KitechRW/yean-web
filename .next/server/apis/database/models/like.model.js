"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
class Like extends sequelize_1.Model {
}
const LikeModel = (sequelize) => {
    Like.init({
        id: {
            type: sequelize_1.DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        user: sequelize_1.DataTypes.BIGINT,
        post: sequelize_1.DataTypes.BIGINT,
        likes: sequelize_1.DataTypes.BOOLEAN,
    }, {
        tableName: 'like',
        timestamps: true,
        sequelize,
    });
    return Like;
};
exports.default = LikeModel;
