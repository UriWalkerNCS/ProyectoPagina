const express = require('express');
const router = express.Router();
//const empleadoUser = require('./controllers/empleadoController');//Sirve para lógica de operaciones si se requieren
const mysqlConnection = require('../conecction/connection');

//Se agregan los métodos HTTP
router.get('/', (req, res) => {
    mysqlConnection.query(
      `select * from usuario;`, (err, rows) => {
      if (!err) {
        res.json(rows);
      } else {
        console.log(err);
      }
    });
  });

  module.exports = router;