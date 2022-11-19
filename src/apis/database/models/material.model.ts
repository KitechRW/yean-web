import { Sequelize, Model, DataTypes } from 'sequelize';

class Material extends Model {}

const MaterialModel = (sequelize: Sequelize) => {
  Material.init(
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      title: DataTypes.TEXT,
      slug: DataTypes.TEXT,
      image: DataTypes.STRING,
      text: DataTypes.TEXT('long'),
      category_id: DataTypes.INTEGER,
      subcategory_id: DataTypes.INTEGER,
      material: {
        type: DataTypes.BOOLEAN,
        defaultValue: true,
      },
      views: {
        type: DataTypes.INTEGER,
        defaultValue: 0,
      },
      author_id: DataTypes.INTEGER,
      tags: DataTypes.STRING,
      comment: {
        type: DataTypes.INTEGER,
        defaultValue: 0,
      },
    },
    {
      tableName: 'extension_materials',
      modelName: 'Material',
      timestamps: true,
      sequelize,
    },
  );
  return Material;
};

export default MaterialModel;
