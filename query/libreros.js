const express = require("express");
const app = express();

// Ruta para obtener loslibreros
app.get("/libreros", (req, res) => {
  const sql = "SELECT * FROM libreros";
  db.query(sql, (err, result) => {
    if (err) {
      console.error("Error al obtener los libreros: ", err);
      res.status(500).send("Error al obtener los libreros");
      return;
    }
    res.send(result);
  });
});

// Ruta para obtener un librero por ID

app.get("/libreros/:id", (req, res) => {
  const id = req.params.id;
  const sql = "SELECT * FROM libreros WHERE id = ?";
  db.query(sql, [id], (err, result) => {
    if (err) {
      console.error("Error al obtener el librero: ", err);
      res.status(500).send("Error al obtener el librero");
      return;
    }
    if (result.length === 0) {
      res.status(404).send("Librero no encontrado");
      return;
    }
    res.send(result[0]);
  });
});

module.exports = app;
