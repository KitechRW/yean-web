import { Sequelize, Model, DataTypes } from 'sequelize';

class Innovation extends Model {}

const InnovationModel = (sequelize: Sequelize) => {
  Innovation.init(
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      text: {
        type: DataTypes.TEXT,
      },
      image: DataTypes.STRING,
    },
    {
      tableName: 'tbl_innovation',
      timestamps: false,
      sequelize,
    },
  );

  return Innovation;
};

export default InnovationModel;
