const express = require('express');
const routes = express.Router();

const consultas = require('../controllers/consultas.js');

routes.get('/consultas/read/cons', consultas.getCons);

module.exports = routes;