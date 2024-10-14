import { DataTypes, Model, Sequelize } from 'sequelize';

class User extends Model {}

const UserModel = (sequelize: Sequelize) => {
  User.init(
    {
      id: {
        type: DataTypes.BIGINT,
        primaryKey: true,
        autoIncrement: true,
      },
      type: DataTypes.STRING,
      email: DataTypes.STRING,
      password: DataTypes.STRING,
      level: DataTypes.STRING,
      firstname: DataTypes.STRING,
      lastname: DataTypes.STRING,
      phone: DataTypes.STRING,
      gender: DataTypes.STRING,
      birthday: DataTypes.DATE,
      province: DataTypes.STRING,
      district: DataTypes.STRING,
      sector: DataTypes.STRING,
      agrilo: DataTypes.STRING,
      essay: DataTypes.TEXT,
      profile_image: DataTypes.TEXT,
      active: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
      },
      status: {
        type: DataTypes.INTEGER,
        comment: '0:offline,1:online',
        defaultValue: 0,
      },
    },
    {
      tableName: 'user',
      modelName: 'User',
      timestamps: true,
      sequelize,
    },
  );

  return User;
};

export default UserModel;
