import { Sequelize, Model, DataTypes } from 'sequelize';

class Contact extends Model {}

const ContactModel = (sequelize: Sequelize) => {
  Contact.init(
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      name: DataTypes.STRING,
      email: DataTypes.STRING,
      message: DataTypes.TEXT,
    },
    {
      tableName: 'contacts',
      timestamps: true,
      sequelize,
    },
  );
  return Contact;
};

export default ContactModel;
