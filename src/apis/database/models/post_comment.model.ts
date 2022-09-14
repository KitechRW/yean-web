import { Sequelize, Model, DataTypes } from 'sequelize';

class Post_comment extends Model {}

const Post_commentModel = (sequelize: Sequelize) => {
  Post_comment.init(
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      post_id: DataTypes.INTEGER,
      user: DataTypes.STRING,
      comment: DataTypes.TEXT,
    },
    {
      tableName: 'post_comment',
      timestamps: true,
      sequelize,
    },
  );
  return Post_comment;
};

export default Post_commentModel;
