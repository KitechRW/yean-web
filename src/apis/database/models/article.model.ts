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
      Slide: DataTypes.TEXT,
      Type: DataTypes.TEXT,
      text: DataTypes.TEXT('long'),
      category_name: DataTypes.TEXT,
      subcategory_name: DataTypes.TEXT,
      views: {
        type: DataTypes.INTEGER,
        defaultValue: 0,
      },
      authorName: DataTypes.TEXT('long'),
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
