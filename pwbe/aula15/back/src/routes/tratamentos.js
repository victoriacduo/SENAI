const express = require('express');
const routes = express.Router();

const tratamentos = require('../controllers/tratamentos.js');

routes.get('/tratamentos/read/trats', tratamentos.getTrats);
routes.post('/tratamentos/create/trats', tratamentos.createTrats);
routes.put('/tratamentos/update/trats', tratamentos.updateTrats);
routes.delete('/tratamentos/delete/trats/:id_trat', tratamentos.deleteTrats);

module.exports = routes;