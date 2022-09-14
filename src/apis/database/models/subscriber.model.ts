import { DataTypes, Model, Sequelize } from 'sequelize';

class Subscribe extends Model {}

const SubscribeModel = (sequelize: Sequelize) => {
  Subscribe.init(
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      tableName: 'subscribers',
      timestamps: true,
      sequelize,
    },
  );
  return Subscribe;
};

export default SubscribeModel;
