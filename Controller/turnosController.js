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
    },
    guardar: function(req, res){
        db.Turno.create({
            code: req.body.turno,
            box: req.body.box
        });
        res.redirect("/turnos");
    },
    editar:function(req, res){
        let pedidoCod = db.Turno.findByPk(req.params.id);
        let pedidoBox = db.Turno.findAll(req.body.box);
        Promise.all([pedidoCod, pedidoBox])
        .then(function([cod, box]){
           return res.render("edicion", {turnos:cod, turnos:box});
        })
    }
};



module.exports = controller;