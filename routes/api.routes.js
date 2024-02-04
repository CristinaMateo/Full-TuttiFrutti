const express = require('express');
const apiController = require("../controllers/api.controller");
const apiRouter = express.Router();


apiRouter.get("/fruits", apiController.getAllFruits) //todas las frutas
apiRouter.get("/fruits/:name", apiController.fruitName) //frutas por nombres
apiRouter.get("/fruits/:order", apiController.fruitOrder) //por orden familiar para filtros