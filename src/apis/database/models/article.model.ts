import { Sequelize, Model, DataTypes } from 'sequelize';
import User from './user.model';
import Comment from './comment.model';

class Article extends Model {}

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
      text: DataTypes.TEXT,
      category: DataTypes.STRING,
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
      status: {
        type: DataTypes.STRING,
        defaultValue: 'online',
      },
      success: DataTypes.STRING,
      success_photo: DataTypes.STRING,
    },
    {
      tableName: 'article',
      modelName: 'Article',
      timestamps: true,
      sequelize,
    },
  );
  return Article;
};

export default ArticleModel;
