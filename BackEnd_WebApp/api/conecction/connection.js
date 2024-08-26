const mysql = require('mysql2');
//Se pueden cambiar los parámetros debido a que corresponde a BD
const mysqlConnection = mysql.createConnection(
    {
       host:'localhost',
       user:'root',
       password:'orlin sanz',
       database:'estudiofotografiam'
    }
);

mysqlConnection.connect(err =>{
    if(err)
    {
        console.log('Error en BD: ', err);
        return;
    }
    else
      {
        console.log('BD ok');
      }

    }
);
module.exports=mysqlConnection;