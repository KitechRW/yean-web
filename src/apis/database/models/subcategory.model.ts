import { Sequelize, Model, DataTypes } from 'sequelize';
import sequelize from '../config/sequelize';

const SubCategory = sequelize.define(
  'SubCategory',
  {
    id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
      unique: true,
    },
    name: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false,
    },
    categoryId: DataTypes.BIGINT,
    image: DataTypes.STRING,
  },
  {
    tableName: 'tbl_sub_category',
    timestamps: false,
  },
);

(async () => {
  await sequelize.sync({ alter: false });
})();

export default SubCategory;
