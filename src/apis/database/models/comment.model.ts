import { Sequelize, Model, DataTypes } from 'sequelize';
import sequelize from '../config/sequelize';
import Article from './article.model';

const Comment = sequelize.define(
  'Comment',
  {
    article_id: DataTypes.BIGINT,
    username: DataTypes.STRING,
    comment: DataTypes.TEXT,
    status: {
      type:DataTypes.STRING,
      defaultValue:'off'
    },
  },
  {
    tableName: 'comment',
    timestamps: false,
  },
);

(async () => {
  await sequelize.sync({ alter: false });
})();

export default Comment;
