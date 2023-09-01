const express = require("express");
const app = express();

// Ruta para obtener todos los pedidos
app.get("/pedidos", (req, res) => {
  const sql = "SELECT * FROM pedidos";
  db.query(sql, (err, result) => {
    if (err) {
      console.error("Error al obtener los pedidos: ", err);
      res.status(500).send("Error al obtener los pedidos");
      return;
    }
    res.send(result);
  });
});

module.exports = app;
