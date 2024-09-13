const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());
const path = require('path');

//Ruta de prueba
const userRoutes = require('./api/routes/routesEmpleados');
app.use('/empleados', userRoutes);

const userRoutes1 = require('./api/routes/auth');
app.use('/', userRoutes1);

module.exports = app;