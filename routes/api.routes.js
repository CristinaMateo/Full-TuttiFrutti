const express = require('express');
const apiController = require("../controllers/api.controller");
const apiRouter = express.Router();


apiRouter.get("/fruits", apiController.getAllFruits) //todas las frutas
apiRouter.get("/fruits/:name", apiController.getFruitbyName) //frutas por nombres
apiRouter.post("/fruits", apiController.createFruit) //admin crear frutas
apiRouter.put("/fruits", apiController.updateFruit) //admin update imagen fruta
apiRouter.delete("/fruits", apiController.deleteFruit) // admin eliminar fruta

module.exports = apiRouter;