import { DataTypes } from 'sequelize';
import sequelize from '../config/db.config';
// import User from './user.model';

const Tag = sequelize.define(
  'Tag',
  {
    name: DataTypes.STRING,
    count: DataTypes.INTEGER,
  },
  {
    tableName: 'tag',
    timestamps: false,
  },
);

(async () => {
  await sequelize.sync({ alter: false });
  //   Tutor.belongsTo(User, {
  //     as: 'user',
  //     foreignKey: {
  //       name: 'userId',
  //     },
  //   });
})();

export default Tag;
