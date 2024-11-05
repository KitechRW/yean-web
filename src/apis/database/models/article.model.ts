import { Sequelize, Model, DataTypes } from 'sequelize';

export class Article extends Model {}

const ArticleModel = (sequelize: Sequelize) => {
  Article.init(
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      title: DataTypes.TEXT,
      image: DataTypes.STRING,
      slug: DataTypes.TEXT,
      text: DataTypes.TEXT('long'),
      category_id: DataTypes.INTEGER,
      subcategory_id: DataTypes.INTEGER,
      views: {
        type: DataTypes.INTEGER,
        defaultValue: 0,
      },
      authorName: DataTypes.STRING,
      tags: DataTypes.STRING,
      comment: {
        type: DataTypes.INTEGER,
        defaultValue: 0,
      },
      status: {
        type: DataTypes.STRING,
      },
      createdAt: {
        type: DataTypes.DATE,
        field: 'time',
      },
      updatedAt: {
        field: 'time',
        type: DataTypes.DATE,
      },


    },
    {
      tableName: 'article',
      modelName: 'Article',
      timestamps: true,
      updatedAt: false,
      sequelize,
    },
  );
  return Article;
};

export default ArticleModel;
