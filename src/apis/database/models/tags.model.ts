import { DataTypes, Model, Sequelize } from 'sequelize';
import NotificationModel from './notification.model';

class Tag extends Model {}

const TagModel = (sequelize: Sequelize) => {
  Tag.init(
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      name: DataTypes.STRING,
      count: DataTypes.INTEGER,
    },
    {
      tableName: 'tag',
      modelName: 'Tag',
      timestamps: true,
      sequelize,
    },
  );

  Tag.hasMany(NotificationModel(sequelize));

  return Tag;
};

export default TagModel;
