import { Sequelize, Model, DataTypes } from 'sequelize';
import sequelize from '../config/sequelize';

const Landing = sequelize.define(
  'Landing',
  {
    id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
      unique: true,
    },
    slideIds: {
      type: DataTypes.JSON,
    },
  },
  {
    tableName: 'tbl_landing',
    timestamps: false,
  },
);

(async () => {
  await sequelize.sync({ alter: false });
})();

export default Landing;
