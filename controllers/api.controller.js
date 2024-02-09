const api = require('../models/api.model')

const getAllFruits = async (req, res) => {
    let fruits;
    try {
        fruits = await api.getAllFruits();//esto accede a models y llama a esa funcion allí
        res.status(200).json(fruits); // [] con las entries encontradas
    } catch (error) {
        res.status(400).json({
            msg: "Error getting fruits"
        })
    }
}


const getOneFruit = async (req, res) => {
    let fruit;
    console.log("HELOOOO");
    try {
        console.log(req.params);
        fruit = await api.getOneFruit(req.params.id);//esto accede a models y llama a esa funcion allí
        res.status(200).json(fruit); // [] con las entries encontradas
    } catch (error) {
        res.status(400).json({
            msg: "Error getting fruits"
        })
    }
}

const getFruitByName = async (req, res) => {
    let fruits;
    try {
        fruits = await api.getFruitByName(req.params.name);//esto accede a models y llama a esa funcion allí
        res.status(200).json(fruits); // [] con las entries encontradas
    } catch (error) {
        res.status(400).json({
            msg: "Error getting fruits"
        })
    }
}

const createFruit = async (req, res) => {
    try {
        const newFruit = req.body; 
        const response = await api.createFruit(newFruit);//esto accede a entries.models y llama a esa funcion allí
        res.status(201).json({
            "items_created": response,
            data: newFruit
        });
    } catch (error) {
        res.status(400).json({
            msg: "Error creating fruit"
        })
    }
}

const updateFruit = async (req, res) => {
    try {
        const updatedFruit = req.body; 
        const response = await api.updateFruit(updatedFruit);//esto accede a models y llama a esa funcion allí
        res.status(201).json({
            "items_updated": response,
            data: updatedFruit
        });
    } catch (error) {
        res.status(400).json({
            msg: "Error updating fruit"
        })
    }
}


const deleteFruit = async (req, res) => {
    try {
        const deletedFruit = {id: req.params.id};
        const response = await api.deleteFruit(deletedFruit);//esto accede a models y llama a esa funcion allí
        res.status(201).json({
            "item_deleted": response,
            data: deletedFruit
        });
    } catch (error) {
        res.status(400).json({
            msg: "Error deleting fruit"
        })
    }
}

module.exports ={
    getAllFruits,
    getOneFruit,
    getFruitByName,
    createFruit,
    updateFruit,
    deleteFruit
}