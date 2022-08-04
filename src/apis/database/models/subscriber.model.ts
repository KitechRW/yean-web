import { DataTypes } from 'sequelize';
import sequelize from '../config/sequelize';


const Subscribe = sequelize.define(
  'Subscribe',
  {
    email: {
        type:DataTypes.STRING,
        allowNull:false
    }
    
  },
  {
    tableName: 'subscribers',
    timestamps: true,
  },
);

(async () => {
  await sequelize.sync({ alter: false });
  
})();

export default Subscribe;
