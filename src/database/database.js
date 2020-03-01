const parseDbUrl = require('parse-database-url');
const Sequelize = require('sequelize');

let dbConfig = parseDbUrl(process.env.DATABASE_URL || 'mysql123://root:mysql123@127.0.0.1/DronesDB');

module.exports = {
  dev: {
    username: dbConfig.user,
    password: dbConfig.password,
    database: dbConfig.database,
    host: dbConfig.host,
    dialect: 'mysql'
  },
  test: {
    username: dbConfig.user,
    password: dbConfig.password,
    database: dbConfig.database,
    host: dbConfig.host,
    dialect: 'mysql'
  },
  qas: {
    username: dbConfig.user,
    password: dbConfig.password,
    database: dbConfig.database,
    host: dbConfig.host,
    dialect: 'mysql'
  },
  prod: {
    username: dbConfig.user,
    password: dbConfig.password,
    database: dbConfig.database,
    host: dbConfig.host,
    dialect: 'mysql'
  }
};
