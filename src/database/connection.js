import sql from "mysql";
import config from "../config/appConfig";

export const dbSettings = {
        connectionLimit: 10,
        host: 'localhost',
        user: config.dbUser,
        password: config.dbPassword,
        database: config.dbDatabase
};

export const getConnection = async () => {
  try {
    const pool = await sql.createPool(dbSettings);
    console.log('success db connection')
    return pool;
  } catch (error) {
    console.error(error);
  }
};

export { sql };