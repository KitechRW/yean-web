import { Sequelize, Model, DataTypes } from 'sequelize';

class Landing extends Model {}

const LandingModel = (sequelize: Sequelize) => {
  Landing.init(
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      slideIds: {
        type: DataTypes.STRING,
      },
    },
    {
      tableName: 'tbl_landing',
      timestamps: false,
      sequelize,
    },
  );
  return Landing;
};

export default LandingModel;
