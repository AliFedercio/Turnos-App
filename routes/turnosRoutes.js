const express = require('express');
const router = express.Router();
const turnosController = require("../Controller/turnosController");

/* RUTAS DEL CRUD */

/* LISTAR TURNOS */
router.get("/", turnosController.listar);

/*CREACION*/
router.get("/crear", turnosController.crear);
router.post("/crear", turnosController.guardar);




/* EDITAR TURNO */

router.get("/editar/:id", turnosController.form);
router.post("/editar/:id", turnosController.editar);


/* ELIMINAR TURNO */

router.delete("/borrar/:id", turnosController.borrar);





module.exports = router;
