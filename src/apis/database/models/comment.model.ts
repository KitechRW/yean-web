import { Sequelize, Model, DataTypes } from 'sequelize';

class Comment extends Model {}

const CommentModel = (sequelize: Sequelize) => {
  Comment.init(
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      article_id: DataTypes.INTEGER,
      username: DataTypes.STRING,
      comment: DataTypes.TEXT,
      status: {
        type: DataTypes.STRING,
        defaultValue: 'off',
      },
    },
    {
      tableName: 'comment',
      timestamps: true,
      sequelize,
    },
  );
  return Comment;
};

export default CommentModel;
