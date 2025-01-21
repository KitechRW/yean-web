import { Sequelize, Model, DataTypes } from 'sequelize';

class Banners extends Model {}

const BannerModel = (sequelize: Sequelize) => {
    Banners.init(
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      title: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false,
      },
      url: DataTypes.STRING,
      section: DataTypes.TEXT,
      path: DataTypes.STRING,
      image_data: DataTypes.STRING,
      image_type: DataTypes.STRING,
      created_at: DataTypes.STRING,
    },
    {
      tableName: 'banners',
      timestamps: false,
      sequelize,
    },
  );
  return Banners;
};

export default BannerModel;
