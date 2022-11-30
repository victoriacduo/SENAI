const express = require('express');
const routes = express.Router();

const profissionais = require('../controllers/profissionais.js');

routes.get('/profissionais/read/profs', profissionais.getProfs);

module.exports = routes;