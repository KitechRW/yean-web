import { Sequelize, Model, DataTypes } from 'sequelize';

class Library extends Model {}

const LibraryModel = (sequelize: Sequelize) => {
  Library.init(
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      link: DataTypes.STRING,
      size: DataTypes.BIGINT,
      name: DataTypes.TEXT,
      cat: DataTypes.BIGINT,
      desc: DataTypes.TEXT,
      cover: DataTypes.STRING,
    },
    {
      tableName: 'library',
      timestamps: true,
      sequelize,
    },
  );
  return Library;
};

export default LibraryModel;
