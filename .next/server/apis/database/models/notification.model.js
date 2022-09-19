"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
class Notification extends sequelize_1.Model {
}
const NotificationModel = (sequelize) => {
    Notification.init({
        id: {
            type: sequelize_1.DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        postId: {
            type: sequelize_1.DataTypes.INTEGER,
        },
        type: sequelize_1.DataTypes.STRING,
        username: sequelize_1.DataTypes.STRING,
        notified: sequelize_1.DataTypes.TEXT,
        on: sequelize_1.DataTypes.STRING,
        seen: sequelize_1.DataTypes.STRING,
    }, {
        tableName: 'notification',
        modelName: 'Notification',
        timestamps: true,
        sequelize,
    });
    // Notification.belongsTo(PostModel(sequelize), {
    //   targetKey: 'id',
    //   foreignKey: {
    //     name: 'postId',
    //   },
    //   as: 'post',
    // });
    return Notification;
};
exports.default = NotificationModel;
