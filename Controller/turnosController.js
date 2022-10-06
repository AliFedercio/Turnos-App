const db = require("../database/models");


let controller = {
    listar: function(req, res){
        db.Turno.findAll()
        .then(function(turnos){
            return res.render("listadoTurnos", {turnos:turnos})
        })
    },
    crear: function(req, res){
        res.render("formulario")
    }
};



module.exports = controller;