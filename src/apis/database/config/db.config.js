const dotenv = require('dotenv');

dotenv.config();

module.exports = {
  database: {
    use_env_variable: 'DATABASE_URL',
    dialect: 'postgres',
    port: process.env.DB_PORT,
    // dialectOptions: {
    //   ssl: {
    //     require: true,
    //     rejectUnauthorized: false,
    //   },
    // },
  },
};
