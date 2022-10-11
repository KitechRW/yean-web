import { Sequelize, Model, DataTypes } from 'sequelize';

class Team extends Model {}

const TeamModel = (sequelize: Sequelize) => {
  Team.init(
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      text: {
        type: DataTypes.TEXT,
      },
      name: {
        type: DataTypes.STRING,
      },
      title: {
        type: DataTypes.STRING,
      },
      image: DataTypes.STRING,
    },
    {
      tableName: 'tbl_team',
      timestamps: false,
      sequelize,
    },
  );

  return Team;
};

export default TeamModel;
