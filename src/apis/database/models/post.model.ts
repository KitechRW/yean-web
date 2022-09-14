import { DataTypes, Model, Sequelize } from 'sequelize';

class Post extends Model {}

const PostModel = (sequelize: Sequelize) => {
  Post.init(
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      user: DataTypes.INTEGER,
      text: DataTypes.TEXT,
      like: DataTypes.BIGINT,
      comment: DataTypes.BIGINT,
      location: DataTypes.STRING,
      email_notification: DataTypes.TEXT,
    },
    {
      tableName: 'post',
      timestamps: true,
      sequelize,
    },
  );
  return Post;
};

export default PostModel;
