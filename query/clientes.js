const express = require("express");
const app = express();

// Ruta para obtener todos los clientes
app.get("/clientes", (req, res) => {
  const sql = "SELECT * FROM clientes";
  db.query(sql, (err, result) => {
    if (err) {
      console.error("Error al obtener los clientes: ", err);
      res.status(500).send("Error al obtener los clientes");
      return;
    }
    res.send(result);
  });
});
//--------------------- Formas de obtener un cliente------------------------------
// Ruta para obtener un cliente por ID  --- /clientes/1
app.get("/clientes/:id", (req, res) => {
  const id = req.params.id;
  const sql = "SELECT * FROM clientes WHERE cliente_id = ?";
  db.query(sql, [id], (err, result) => {
    if (err) {
      console.error("Error al obtener el cliente: ", err);
      res.status(500).send("Error al obtener el cliente");
      return;
    }
    if (result.length === 0) {
      res.status(404).send("Cliente no encontrado");
      return;
    }
    res.send(result[0]);
  });
});

//Obtener cliente por parametros------- /clientes?id=1
app.get("/clientes", (req, res) => {
  const id = req.query.id;
  const sql = "SELECT * FROM clientes WHERE cliente_id = ?";
  db.query(sql, [id], (err, result) => {
    if (err) {
      console.error("Error al obtener el cliente: ", err);
      res.status(500).send("Error al obtener el cliente");
      return;
    }
    if (result.length === 0) {
      res.status(404).send("Cliente no encontrado");
      return;
    }
    res.send(result[0]);
  });
});
//--------------------------------------------------------------------------------------------------
module.exports = app;
