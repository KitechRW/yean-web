import { DataTypes } from 'sequelize';
import sequelize from '../config/sequelize';
import Like from './like.model';
import Notification from './notification.model';
import Post_comment from './post_comment.model';
import User from './user.model';

const Post = sequelize.define(
  'Post',
  {
    user: DataTypes.BIGINT,
    text: DataTypes.TEXT,
    like: DataTypes.BIGINT,
    comment: DataTypes.BIGINT,
    location: DataTypes.STRING,
    email_notification: DataTypes.TEXT,
  },
  {
    tableName: 'post',
    timestamps: false,
  },
);

(async () => {
  await sequelize.sync({ alter: false });
  Post.hasMany(Like, {
    foreignKey: {
      name: 'post',
    },
  });
  // Post.hasMany(Notification, {
  //   foreignKey: {
  //     name: 'Post_id',
  //   },
  // });
  Post.hasMany(Post_comment, {
    foreignKey: {
      name: 'post_id',
    },
  });
  Post.belongsTo(User, {
    as: 'user_id',
    foreignKey: {
      name: 'user',
    },
  });
})();

export default Post;
