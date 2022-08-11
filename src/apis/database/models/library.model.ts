import { Sequelize, Model, DataTypes } from 'sequelize';
import sequelize from '../config/sequelize';
// import User from './user.model';

const Library = sequelize.define(
  'Library',
  {
    link: DataTypes.STRING,
    size: DataTypes.BIGINT,
    name: DataTypes.STRING,
    cat: DataTypes.BIGINT,
    descriptions: DataTypes.STRING,
  },
  {
    tableName: 'library',
    timestamps: false,
  },
);

(async () => {
  await sequelize.sync({ alter: false });
  //   POST.belongsTo(User, {
  //     as: 'user',
  //     foreignKey: {
  //       name: 'post_id',
  //     },
  //   });
})();

export default Library;
