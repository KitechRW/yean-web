import { Sequelize, Model, DataTypes } from 'sequelize';

class SubCategory extends Model {}

const SubCategoryModel = (sequelize: Sequelize) => {
  SubCategory.init(
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
      category_name: DataTypes.TEXT,
      image: DataTypes.STRING,
    },
    {
      tableName: 'tbl_sub_category',
      timestamps: false,
      sequelize,
    },
  );
  return SubCategory;
};

export default SubCategoryModel;
