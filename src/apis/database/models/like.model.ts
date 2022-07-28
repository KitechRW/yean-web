import { Sequelize, Model, DataTypes } from 'sequelize';
import sequelize from '../config/sequelize';
import Post from './post.model';
import User from './user.model';

const Like = sequelize.define(
  'Like',
  {
    user: DataTypes.BIGINT,
    post: DataTypes.BIGINT,
    likes: DataTypes.BOOLEAN,
  },
  {
    tableName: 'like',
    timestamps: false,
  },
);

(async () => {
  await sequelize.sync({ alter: true });
  Like.belongsTo(User, {
    as: 'likedBy',
    foreignKey: {
      name: 'user',
    },
  });
  Like.belongsTo(Post, {
    as: 'post_id',
    foreignKey: {
      name: 'post',
    },
  });
})();

export default Like;
