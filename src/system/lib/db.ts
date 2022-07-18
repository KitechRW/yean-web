import { Sequelize } from 'sequelize';

export const sequelize = new Sequelize(
  `${process.env.DATABASE_URL}`,
  {
    logging: false,
    // dialectOptions: {
    //   ssl: {
    //     require: true,
    //     rejectUnauthorized: false,
    //   },
    // },
  },
);

export default sequelize;
