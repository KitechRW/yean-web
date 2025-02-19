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
      slug: DataTypes.TEXT('long'),
      // Slide: DataTypes.TEXT,
      // Type: DataTypes.TEXT,
      text: DataTypes.TEXT('long'),
      // category_name: DataTypes.TEXT,
      // subcategory_name: DataTypes.TEXT,
      views: {
        type: DataTypes.INTEGER,
        defaultValue: 0,
      },
      isSlide: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
      },
      type: {
        type: DataTypes.ENUM('ARTICLE', 'EXTENSION_MATERIAL'),
        defaultValue: 'ARTICLE',
      },
      category_id: DataTypes.INTEGER,
      subcategory_id: DataTypes.INTEGER,
      // authorName: DataTypes.TEXT('long'),
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
        defaultValue: DataTypes.NOW,
      },
      updatedAt: {
        field: 'updated_at',
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW,
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
