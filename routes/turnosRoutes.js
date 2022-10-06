const express = require('express');
const router = express.Router();
const turnosController = require("../Controller/turnosController");

/* RUTAS DEL CRUD */


/*CREACION*/
router.get("/crear", turnosController.crear);
router.get("/", turnosController.listar);









module.exports = router;
