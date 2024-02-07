const express = require('express');
const apiController = require("../controllers/api.controller");
const apiRouter = express.Router();


apiRouter.get("/fruits", apiController.getAllFruits) //todas las frutas
apiRouter.get("/fruits/:name", apiController.getfruitbyName) //frutas por nombres
