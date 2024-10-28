import { Sequelize, Model, DataTypes } from 'sequelize';

class MemberArticles extends Model {}

const MemberArticlesModel = (sequelize: Sequelize) => {
    MemberArticles.init(
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      title: DataTypes.TEXT,
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
      tableName: 'member_Articles',
      modelName: 'MemberArticles',
      timestamps: true,
      sequelize,
    },
  );
  return MemberArticles;
};

export default MemberArticlesModel;
