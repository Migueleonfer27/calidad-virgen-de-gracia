import { Sequelize } from "sequelize";
import dotenv from "dotenv";
dotenv.config();

export let db;

if (!db) {
  console.log("✅ Conexión establecida correctamente.");
  db = new Sequelize(
    process.env.DB_DEV,
    process.env.DB_USER,
    process.env.DB_PASSWORD,
    {
      host: process.env.DB_HOST,
      dialect: "mysql",
      pool: {
        max: parseInt(process.env.DB_MAXCONNECTIONS),
        min: 1,
        acquire: 30000,
        idle: 10000,
      },
      logging: console.log,
    }
  );
}

process.on("SIGINT", () => {
  db.close()
    .then(() => {
      console.log("❌ Conexión cerrada correctamente.");
      process.exit(0);
    })
    .catch((error) => {
      console.log("Error al cerrar la conexión.", error);
      process.exit(1);
    });
});

export default db;
