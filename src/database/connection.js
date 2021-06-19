import config from "../config/appConfig";
import { Sequelize } from 'sequelize'; 


export const sequelize = new Sequelize(
  config.dbDatabase,
  config.dbUser,
  config.dbPassword,
  {
    host: config.host,
    dialect: config.dbServer,
  }
);

export const getConnection = async () => {
  try {
   const conn = await sequelize.sync({ force: false })
   if(!conn) console.log('No se conecto a la DB')
   //return conn
  } catch (error) {
    console.error(error)
  }
};

