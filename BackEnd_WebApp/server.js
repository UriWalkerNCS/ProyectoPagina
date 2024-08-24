const http = require('http');
const app = require('./app.js');

const port = process.env.PORT || 1213;

const server = http.createServer(app);

server.listen(port);

console.log(port);