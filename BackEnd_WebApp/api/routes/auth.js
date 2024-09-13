const express = require ('express');
const router = express.Router();
const mysqlConnection = require('../conecction/connection');

//comprueba la validacion de los datos del empleado y lo encripta en un token
 router.post('/auth', (req,res) => {
    const {CorreoElectronico,Contrasena} = req.body;
    mysqlConnection.query(`select u.IdUsuario, u.NombreCompleto, u.CorreoElectronico, r.Descripcion
    from  usuario as u join rol as r 
      on 
        u.IdRol =r.IdRol
    where u.CorreoElectronico = ? and u.Contrasena=?`,
    [CorreoElectronico,Contrasena],(err, rows) => {
      if (!err) {
        if (rows.length > 0) res.json(rows);
      } else {
        console.log(err);
      }
    })
  });
  
  module.exports = router;