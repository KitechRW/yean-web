import { DataTypes, Model, Sequelize } from 'sequelize';

class Partner extends Model {}

const PartnerModel = (sequelize: Sequelize) => {
  Partner.init(
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      companyName: DataTypes.STRING,
      portfolio: DataTypes.STRING,
      email: DataTypes.STRING,
      phone: DataTypes.STRING,
      address: DataTypes.STRING,
      message: DataTypes.TEXT,
      image: DataTypes.STRING,
      confirmed: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
      },
    },
    {
      tableName: 'tbl_partner',
      timestamps: false,
      sequelize,
    },
  );
  return Partner;
};

export default PartnerModel;
