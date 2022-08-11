import { Sequelize, Model, DataTypes } from 'sequelize';
import sequelize from '../config/sequelize';

const Contact = sequelize.define(
  'Contact',
  {
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    message: DataTypes.TEXT,
  },
  {
    tableName: 'contacts',
    timestamps: true,
  },
);

(async () => {
  await sequelize.sync({ alter: true });
})();

export default Contact;
