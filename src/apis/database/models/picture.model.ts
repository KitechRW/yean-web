import { Sequelize, Model, DataTypes } from 'sequelize';
import sequelize from '../config/sequelize';
import User from './user.model';
// import User from './user.model';

const Picture = sequelize.define(
  'Picture',
  {
    user: DataTypes.BIGINT,
    location: DataTypes.STRING,
  },
  {
    tableName: 'picture',
    timestamps: false,
  },
);

(async () => {
  await sequelize.sync({ alter: false });
  // Picture.belongsTo(User, {
  //   as: 'owner',
  //   foreignKey: {
  //     name: 'user',
  //   },
  // });
})();

export default Picture;
