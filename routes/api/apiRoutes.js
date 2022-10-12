const express = require('express');
const router = express.Router();
const apiController = require("../../Controller/Api/apiTurnosController");



router.get("/", apiController.listado)









module.exports = router;