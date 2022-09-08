import { Sequelize, Model, DataTypes } from 'sequelize';
import sequelize from '../config/sequelize';

const Category = sequelize.define(
  'Category',
  {
    name: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false,
    },
    image: DataTypes.STRING,
  },
  {
    tableName: 'tbl_category',
    timestamps: false,
  },
);

(async () => {
  await sequelize.sync({ alter: true });
})();

export default Category;
