import { DataTypes } from 'sequelize';
import sequelize from '../config/sequelize';

const Partner = sequelize.define(
  'Partner',
  {
    email: DataTypes.STRING,
    image: DataTypes.STRING,
    phone: DataTypes.STRING,
    companyName: DataTypes.STRING,
  },
  {
    tableName: 'tbl_partner',
    timestamps: false,
  },
);

(async () => {
  await sequelize.sync({ alter: false });
})();

export default Partner;
