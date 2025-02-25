import { Sequelize, Model, DataTypes } from 'sequelize';

class Category extends Model {}

const CategoryModel = (sequelize: Sequelize) => {
  Category.init(
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      name: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false,
      },
      image: DataTypes.STRING,
      parent_id: DataTypes.INTEGER,
    },
    {
      tableName: 'tbl_category',
      timestamps: false,
      sequelize,
    },
  );
  return Category;
};

export default CategoryModel;
