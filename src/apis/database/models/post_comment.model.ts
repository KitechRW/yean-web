import { Sequelize, Model, DataTypes } from 'sequelize';
import sequelize from '../config/sequelize';
import Post from './post.model';
// import User from './user.model';

const Post_comment = sequelize.define(
  'Post_comment',
  {
    post_id: DataTypes.BIGINT,
    user: DataTypes.STRING,
    comment: DataTypes.TEXT,
  },
  {
    tableName: 'post_comment',
    timestamps: false,
  },
);

(async () => {
  await sequelize.sync({ alter: false });
  // Post_comment.belongsTo(Post, {
  //   as: 'post',
  //   foreignKey: {
  //     name: 'post_id',
  //   },
  // });
})();

export default Post_comment;
