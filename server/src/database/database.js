import Sequelize from "sequelize";

// conexion a la base de datos

export const sequelize = new Sequelize("recetas", "postgres", "2419", {
  host: "localhost",
  logging: false,
  dialect: "postgres",
  port: 5432
});
