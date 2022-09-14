import { DataTypes, Model, Sequelize } from 'sequelize';

class Service extends Model {}

const ServiceModel = (sequelize: Sequelize) => {
  Service.init(
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      image: DataTypes.STRING,
      name: DataTypes.STRING,
      content: DataTypes.TEXT,
    },
    {
      tableName: 'service',
      timestamps: false,
      sequelize,
    },
  );
  return Service;
};

export default ServiceModel;
