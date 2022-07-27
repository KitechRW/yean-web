import { Sequelize } from 'sequelize';

export const sequelize = new Sequelize(
  `${process.env.DATABASE_URL}`,
  {
    logging: false,
    dialect: 'mysql',
    // dialectOptions: {
    //   ssl: {
    //     require: true,
    //     rejectUnauthorized: false,
    //   },
    // },
  },
);

export default sequelize;
