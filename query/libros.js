const express = require("express");
const app = express();

// Ruta para obtener todos los libros
app.get("/libros", (req, res) => {
  const sql = "SELECT * FROM libros";
  db.query(sql, (err, result) => {
    if (err) {
      console.error("Error al obtener los libros: ", err);
      res.status(500).send("Error al obtener los libros");
      return;
    }
    res.send(result);
  });
});

// Ruta para obtener un libro por ID
app.get("/libros/:id", (req, res) => {
  const id = req.params.id;
  const sql = "SELECT * FROM libros WHERE id = ?";
  db.query(sql, [id], (err, result) => {
    if (err) {
      console.error("Error al obtener el libro: ", err);
      res.status(500).send("Error al obtener el libro");
      return;
    }
    if (result.length === 0) {
      res.status(404).send("Libro no encontrado");
      return;
    }
    res.send(result[0]);
  });
});

module.exports = app;
