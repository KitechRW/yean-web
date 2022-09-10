import { Sequelize, Model, DataTypes } from 'sequelize';
import sequelize from '../config/sequelize';

const Library = sequelize.define(
  'Library',
  {
    link: DataTypes.STRING,
    size: DataTypes.BIGINT,
    name: DataTypes.TEXT,
    cat: DataTypes.BIGINT,
    desc: DataTypes.TEXT,
    cover: DataTypes.STRING,
  },
  {
    tableName: 'library',
    timestamps: false,
  },
);

(async () => {
  await sequelize.sync({ alter: true });
})();

export default Library;
