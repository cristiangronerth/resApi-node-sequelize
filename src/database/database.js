import Sequelize from "sequelize";



export const sequelize = new Sequelize("projectapidb", "cristiangronerth", "null", {
  host: "localhost",
  dialect: "postgres",
  logging: false
})