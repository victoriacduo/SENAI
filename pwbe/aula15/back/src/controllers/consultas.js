const conDB = require('../conDB.js');
const consultas = require('../models/consultas.js');

const getCons = (req, res) => {
    conDB.query(consultas.getCons(), (err, result) => {
        if(err == null){
            res.status(200).json(result).end();
        }else{
            res.status(400).json(err).end();
        }
    })
}

module.exports = {
    getCons
}