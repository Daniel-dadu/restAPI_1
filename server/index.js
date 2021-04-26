const cors = require('cors'); // Incluimos cors
const express = require('express'); // Incluimnos una instancia de express server
const routes = require('../routes'); // Incluimos archivo de rutas

const server = express(); // Creamos instancia de express
server.use(cors()); // Usamos cors en nuestro server
server.options('*', cors());

server.use(express.json());

server.use('/api', routes);

// Se exporta objeto server para poder ser usado
module.exports = server;