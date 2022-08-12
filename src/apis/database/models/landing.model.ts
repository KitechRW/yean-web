import { Sequelize, Model, DataTypes } from 'sequelize';
import sequelize from '../config/sequelize';

const Landing = sequelize.define(
  'Landing',
  {
    slideIds: {
      type: DataTypes.JSON,
    },
    articleIds: {
      type: DataTypes.JSON,
    },
    extensionIds: {
      type: DataTypes.JSON,
    },
  },
  {
    tableName: 'tbl_landing',
    timestamps: false,
  },
);

(async () => {
  await sequelize.sync({ alter: false });
})();

export default Landing;
