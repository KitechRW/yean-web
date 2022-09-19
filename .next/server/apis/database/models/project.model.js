"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
class Project extends sequelize_1.Model {
}
const ProjectModel = (sequelize) => {
    Project.init({
        id: {
            type: sequelize_1.DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        name: sequelize_1.DataTypes.STRING,
        image: sequelize_1.DataTypes.STRING,
        description: sequelize_1.DataTypes.TEXT,
    }, {
        tableName: 'tbl_projects',
        timestamps: false,
        sequelize,
    });
    return Project;
};
exports.default = ProjectModel;
