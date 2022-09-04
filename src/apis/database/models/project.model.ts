import { DataTypes } from 'sequelize';
import sequelize from '../config/sequelize';

const Project = sequelize.define(
  'Project',
  {
    name: DataTypes.STRING,
    image: DataTypes.STRING,
    description: DataTypes.TEXT,
  },
  {
    tableName: 'tbl_projects',
    timestamps: false,
  },
);

(async () => {
  await sequelize.sync({ alter: false });
})();

export default Project;
