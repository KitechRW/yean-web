import { Sequelize, Model, DataTypes } from 'sequelize';
import sequelize from '../config/sequelize';

const Product = sequelize.define(
  'Product',
  {
    descriptions: DataTypes.TEXT,
    image: DataTypes.TEXT,
    quantity: DataTypes.DOUBLE,
    unit_price: DataTypes.DOUBLE,
    seller: DataTypes.STRING,
    phone: DataTypes.STRING,
    status: DataTypes.STRING,
  },
  {
    tableName: 'product',
    timestamps: false,
  },
);

(async () => {
  await sequelize.sync({ alter: false });
  //   Tutor.belongsTo(User, {
  //     as: 'user',
  //     foreignKey: {
  //       name: 'userId',
  //     },
  //   });
})();

export default Product;
