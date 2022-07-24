import { Sequelize, Model, DataTypes } from 'sequelize';
import sequelize from '../config/sequelize';
import Post from './post.model';
// import User from './user.model';

const Notification = sequelize.define(
  'Notification',
  {
    type: DataTypes.STRING,
    username: DataTypes.STRING,
    notified: DataTypes.TEXT,
    post: DataTypes.BIGINT,
    on: DataTypes.STRING,
    seen: DataTypes.STRING,
  },
  {
    tableName: 'notification',
    timestamps: false,
  },
);

(async () => {
  await sequelize.sync({ alter: false });
  // Notification.belongsTo(Post, {
  //   foreignKey: 'post',
  //   as: 'Post_id',
  //   onDelete: 'CASCADE',
  // });
})();

export default Notification;
