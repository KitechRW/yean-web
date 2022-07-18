import { Sequelize, Model, DataTypes } from 'sequelize';
import User from './user.model';
import Comment from './comment.model';
import sequelize from '../config/db.config';

const Article = sequelize.define(
  'Article',
  {
    title: DataTypes.STRING,
    image: DataTypes.STRING,
    text: DataTypes.TEXT,
    category: DataTypes.STRING,
    views: DataTypes.BIGINT,
    author_id: DataTypes.BIGINT,
    tags: DataTypes.STRING,
    comment: DataTypes.BIGINT,
    status: DataTypes.STRING,
    success: DataTypes.STRING,
    success_photo: DataTypes.STRING,
  },
  {
    tableName: 'article',
    timestamps: false,
  },
);

(async () => {
  await sequelize.sync({ alter: false });
  Article.belongsTo(User, {
    as: 'user',
    foreignKey: {
      name: 'author_id',
    },
  });
  Article.hasMany(Comment, {
    foreignKey: {
      name: 'article_id',
    },
  });
})();

export default Article;
