"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
class Job extends sequelize_1.Model {
}
const JobModel = (sequelize) => {
    Job.init({
        id: {
            type: sequelize_1.DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        title: sequelize_1.DataTypes.TEXT,
        category: sequelize_1.DataTypes.STRING,
        keyword: sequelize_1.DataTypes.STRING,
        location: sequelize_1.DataTypes.STRING,
        description: sequelize_1.DataTypes.TEXT,
    }, {
        tableName: 'tbl_jobs',
        timestamps: false,
        sequelize,
    });
    return Job;
};
exports.default = JobModel;
