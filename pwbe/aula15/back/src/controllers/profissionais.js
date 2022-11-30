const conDB = require('../conDB.js');
const profissionais = require('../models/profissionais.js');

const getProfs = (req, res) => {
    conDB.query(profissionais.getProfs(), (err, result) => {
        if(err == null){
            res.status(200).json(result).end();
        }else{
            res.status(400).json(err).end();
        }
    })
}

module.exports = {
    getProfs
}