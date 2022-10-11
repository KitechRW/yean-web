import { Sequelize, Model, DataTypes } from 'sequelize';

class About extends Model {}

const AboutModel = (sequelize: Sequelize) => {
  About.init(
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      text: {
        type: DataTypes.TEXT,
      },
      history: {
        type: DataTypes.TEXT,
      },
      vision: {
        type: DataTypes.TEXT,
      },
      mission: {
        type: DataTypes.TEXT,
      },
      image: DataTypes.STRING,
    },
    {
      tableName: 'tbl_about',
      timestamps: false,
      sequelize,
    },
  );

  return About;
};

export default AboutModel;
