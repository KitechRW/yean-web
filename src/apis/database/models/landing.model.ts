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
      type: DataTypes.STRING,
    },
  },
  {
    tableName: 'tbl_landing',
    timestamps: false,
  },
);

(async () => {
  await sequelize.sync({ alter: true });
})();

export default Landing;
