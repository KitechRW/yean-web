import { DataTypes } from 'sequelize';
import sequelize from '../config/sequelize';

const Job = sequelize.define(
  'Job',
  {
    title: DataTypes.TEXT,
    category: DataTypes.STRING,
    keyword: DataTypes.STRING,
    location: DataTypes.STRING,
    description: DataTypes.TEXT,
  },
  {
    tableName: 'tbl_jobs',
    timestamps: false,
  },
);

(async () => {
  await sequelize.sync({ alter: true });
})();

export default Job;
