import { Sequelize, Model, DataTypes } from 'sequelize';
import UserModel from './user.model';

class Picture extends Model {}

const PictureModel = (sequelize: Sequelize) => {
  Picture.init(
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      user: DataTypes.BIGINT,
      location: DataTypes.STRING,
    },
    {
      tableName: 'picture',
      timestamps: false,
      sequelize,
    },
  );

  Picture.belongsTo(UserModel(sequelize), {
    as: 'owner',
    foreignKey: {
      name: 'user',
    },
  });

  return Picture;
};

export default PictureModel;
