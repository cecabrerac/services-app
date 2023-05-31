import sql from "mssql";
import config from "../config";

const dbSettings = {
  user: config.dbUser,
  password: config.dbPassword,
  server: config.dbServer,
  database: config.dbName,
  options: {
    encrypt: true, // for Azure
    trustServerCerticate: true,
  },
};

export async function getConnection() {
  try {
    const pool = await sql.connect(dbSettings);
    // const result = await pool.request().query("SELECT 1");
    // console.log(result);
    return pool;
  } catch (error) {
    console.error(error);
  }
}

getConnection();

export { sql };
