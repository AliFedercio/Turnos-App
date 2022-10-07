const db = require("../database/models");


let controller = {
    listar: function(req, res){
        db.Turno.findAll()
        .then(function(turnos){
            return res.render("listadoTurnos", {turnos:turnos})
        })
    },
    crear: function(req, res){
        res.render("crear")
    },
    guardar: function(req, res){
        db.Turno.create({
            code: req.body.turno,
            info: req.body.info,
            box: req.body.box
        });
        res.redirect("/turnos");
    },
    form:function(req, res){
         db.Turno.findByPk(req.params.id)
        .then(function(turno){
            res.render("editar", {turno: turno});
        })
    },
    editar:function(req, res){ 
        db.Turno.update({
            code: req.body.turno,
            info: req.body.info,
            box: req.body.box
        },
        {
            where: {
                id: req.params.id
            }
        });
        res.redirect("/turnos");
    },
    borrar: function(req, res){
        db.Turno.destroy({
            where: {
                id: req.params.id
            }
        })
        res.redirect("/turnos")
    }
};



module.exports = controller;





