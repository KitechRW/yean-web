import { Sequelize, Model, DataTypes } from 'sequelize';
import PostModel from './post.model';

class Notification extends Model {}

const NotificationModel = (sequelize: Sequelize) => {
  Notification.init(
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      postId: {
        type: DataTypes.INTEGER,
      },
      type: DataTypes.STRING,
      username: DataTypes.STRING,
      notified: DataTypes.TEXT,
      on: DataTypes.STRING,
      seen: DataTypes.STRING,
    },
    {
      tableName: 'notification',
      modelName: 'Notification',
      timestamps: true,
      sequelize,
    },
  );

  // Notification.belongsTo(PostModel(sequelize), {
  //   targetKey: 'id',
  //   foreignKey: {
  //     name: 'postId',
  //   },
  //   as: 'post',
  // });

  return Notification;
};

export default NotificationModel;
