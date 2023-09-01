// Importamos el módulo express: sirve para crear un servidor web
const express = require("express");

// Importamos el módulo mysql: para conectarnos a la base de datos
const mysql = require("mysql");
// Importamos el módulo cors: para permitir peticiones desde otros dominios
const cors = require("cors");
// Importamos los módulos que contienen las rutas para cada entidad
const libros = require("./query/libros");
const clientes = require("./query/clientes");
const pedidos = require("./query/pedidos");
const libreros = require("./query/libreros");

// Creamos una instancia de express: es el servidor web
const app = express(),
  server = require("http").createServer(app);

// Configuramos express para que use JSON como formato de datos:
// es el formato que usaremos para enviar y recibir datos
app.use(express.json());

// Creamos una conexión a la base de datos MySQL
const db = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "",
  database: "libreria",
});

// Conectamos a la base de datos
db.getConnection((err) => {
  if (err) {
    console.error("Error al conectar a la base de datos: ", err);
    return;
  }
  console.log("Conexión a la base de datos establecida");
});

global.db = db;

app.use(cors());

// Asociamos las rutas de cada entidad a la ruta "/api"
app.use("/api", libros);
app.use("/api", clientes);
app.use("/api", pedidos);
app.use("/api", libreros);

// Iniciamos el servidor en el puerto 3005
app.listen(3005, () => {
  console.log("Servidor iniciado en el puerto 3005");
});
