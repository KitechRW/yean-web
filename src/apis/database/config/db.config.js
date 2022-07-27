const dotenv = require('dotenv');

dotenv.config();

module.exports = {
  database1: {
    use_env_variable: 'DATABASE_URL',
    dialect: 'postgres',
    port: process.env.DB_PORT,
    dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: false,
      },
    },
  },
  database2: {
    username: process.env.DB_SYS_USER,
    password: process.env.DB_SYS_PASSWORD,
    database: process.env.DB_SYS_TEST,
    host: process.env.DB_SYS_HOST,
    dialect: 'postgres',
    port: process.env.DB_SYS_PORT,
    seederStorage: 'sequelize',
  },
  database1test: {
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_TEST,
    host: process.env.DB_HOST,
    dialect: 'postgres',
    port: process.env.DB_PORT,
    seederStorage: 'sequelize',
    logging: false,
  },
  database2test: {
    username: process.env.DB_SYS_USER,
    password: process.env.DB_SYS_PASSWORD,
    database: process.env.DB_SYS_TEST,
    host: process.env.DB_SYS_HOST,
    dialect: 'postgres',
    port: process.env.DB_SYS_PORT,
    seederStorage: 'sequelize',
    logging: false,
  },
};
