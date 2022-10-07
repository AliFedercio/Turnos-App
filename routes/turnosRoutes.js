const express = require('express');
const router = express.Router();
const turnosController = require("../Controller/turnosController");

/* RUTAS DEL CRUD */


/*CREACION*/
router.get("/crear", turnosController.crear);
router.post("/crear", turnosController.guardar);



/* LISTAR TURNOS */
router.get("/", turnosController.listar);

/* EDITAR TURNO */

router.get("/editar/:d", turnosController.editar);









module.exports = router;
