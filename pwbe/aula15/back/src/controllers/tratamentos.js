const conDB = require('../conDB.js');
const tratamentos = require('../models/tratamentos.js');

const getTrats = (req, res) => {
    conDB.query(tratamentos.getTrats(), (err, result) => {
        if(err == null){
            res.status(200).json(result).end();
        }else{
            res.status(400).json(err).end();
        }
    })
}

const createTrats = (req, res) => {
    conDB.query(tratamentos.createTrats(req.body), (err, result) => {
        if(err == null){
            res.status(201).json(req.body).end();
        }else{
            res.status(400).json(err).end();    
        }
    })
}

const updateTrats = (req, res) => {
    conDB.query(tratamentos.updateTrats(req.body), (err, result) => {
        if (err == null)
            if (result.affectedRows > 0)
                res.status(200).end();
            else
                res.status(404).end();
        else
            res.status(500).json(err).end();
    })
}

const deleteTrats = (req, res) => {
    conDB.query(tratamentos.deleteTrats(req.params), (err, result) => {
        if(err == null){
            res.status(200).json(req.params).end();
        }else{
            res.status(400).json(err).end();    
        }
    })
}

module.exports = {
    getTrats,
    createTrats,
    updateTrats,
    deleteTrats
}