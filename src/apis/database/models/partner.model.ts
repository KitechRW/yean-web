import { DataTypes } from 'sequelize';
import sequelize from '../config/sequelize';

const Partner = sequelize.define(
  'Partner',
  {
    companyName: DataTypes.STRING,
    email: DataTypes.STRING,
    phone: DataTypes.STRING,
    address: DataTypes.STRING,
    message:DataTypes.TEXT,
    image: DataTypes.STRING,
    confirmed:{
      type:DataTypes.BOOLEAN,
      defaultValue:false
    }
    
  },
  {
    tableName: 'tbl_partner',
    timestamps: false,
  },
);

(async () => {
  await sequelize.sync({ alter:true });
})();

export default Partner;
