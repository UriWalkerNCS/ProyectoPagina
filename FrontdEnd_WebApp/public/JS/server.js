const mysql= require ('mysql');
const express = require('express');
const db = mysql.createConnection({
    host:'127.0.0.1',
    user:'root',
    password:'',
    database:'EstudioFotografiaMo'
});

db.connect((err)=>{
    if(err)
    {
      console.log('Salió un error al conectar',err);
      return;
    }
    const consulta = db.query('select * from Usuario',(err,resultados)=>{
        if(err)
           {
        console.log('Suerte para la proxima',err);
        return;
           }});
    console.log('OK'); 
});



