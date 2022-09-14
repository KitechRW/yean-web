import { DataTypes, Model, Sequelize } from 'sequelize';

class Project extends Model {}

const ProjectModel = (sequelize: Sequelize) => {
  Project.init(
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      name: DataTypes.STRING,
      image: DataTypes.STRING,
      description: DataTypes.TEXT,
    },
    {
      tableName: 'tbl_projects',
      timestamps: false,
      sequelize,
    },
  );
  return Project;
};

export default ProjectModel;
