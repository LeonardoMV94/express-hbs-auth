const { Sequelize } = require("sequelize");
const config = require("../config");

const db = new Sequelize(config.databaseUrl, {
  dialect: "postgres",
  logging: (sql, timing) => {
    console.log("\x1b[33m",`[Sequelize] Consulta: ${sql}`)
  },
  define: {
    timestamps: true // añade 2 columnas, created_at y updated_at
  },
  pool: {
    max: 5, // maximo numero de conexiones al pool
    min: 0, // minimo de conectados al pool
    acquire: 30000, // tiempo de intentos de reconexion despues de un error en milisegundos
    idle: 10000 // tiempo de inactividad antes de cerrar conexion en milisegundos
  }
});

db.authenticate()
    .then((_) => console.log(`Conexion exitosa! `))
    .catch(console.log)

module.exports = db;
