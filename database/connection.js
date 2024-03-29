const sql = require("mssql");
const config = require("../config");

const dbSettings = {
  user: config.dbUser,
  password: config.dbPassword,
  server: config.dbServer,
  database: config.dbName,
  options: {
    encrypt: true, // for Azure
    trustServerCerticate: true,
    enableArithAbort: true,
  },
};

const getConnection = async () => {
  try {
    const pool = await sql.connect(dbSettings);
    return pool;
  } catch (error) {
    console.error(error);
  }
};

module.exports = { sql, getConnection };
