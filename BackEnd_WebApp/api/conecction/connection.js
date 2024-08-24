const mysql = require('mysql');

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
        console.log('Error en BD: ' , err);
        return;
    }
    else
      {
        console.log('BD ok');
      }

    }
);
module.exports=mysqlConnection;
