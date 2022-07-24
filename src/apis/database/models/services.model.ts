import { DataTypes } from 'sequelize';
import sequelize from '../config/sequelize';

const Service = sequelize.define(
  'Service',
  {
    name: DataTypes.STRING,
    content: DataTypes.TEXT,
  },
  {
    tableName: 'service',
    timestamps: false,
  },
);

(async () => {
  await sequelize.sync({ alter: false });
})();

export default Service;
