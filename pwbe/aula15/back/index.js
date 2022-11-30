const express = require('express');
const cors = require('cors');

const profissionais = require('./src/routes/profissionais');
const consultas = require('./src/routes/consultas');
const tratamentos = require('./src/routes/tratamentos');

const app = express();
app.use(express.json());
app.use(cors());
app.use(profissionais);
app.use(consultas);
app.use(tratamentos);

app.listen(3000, () => {
    console.log("taokei");
});