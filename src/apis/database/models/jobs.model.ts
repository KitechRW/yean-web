import { DataTypes, Model, Sequelize } from 'sequelize';

class Job extends Model {}

const JobModel = (sequelize: Sequelize) => {
  Job.init(
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      title: DataTypes.TEXT,
      category: DataTypes.STRING,
      keyword: DataTypes.STRING,
      location: DataTypes.STRING,
      description: DataTypes.TEXT,
    },
    {
      tableName: 'tbl_jobs',
      timestamps: false,
      sequelize,
    },
  );
  return Job;
};

export default JobModel;
