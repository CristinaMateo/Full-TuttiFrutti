const queries = require('../queries/events_sql.queries');
const pool = require('../config/db_pgsql');


//Get All

const getAllFruits = async () => {
    let client, result;
    try{
        client = await pool.connect()
        const data = await client.query(queries.getFruits)
        result = data.rows
    } catch(err){
        console.log(err);
        throw err;
    } finally{
        client.release();
    }
    return result
}


const getFruitbyName= async (id) => {
    let client, result;
    try {
        client = await pool.connect(); // Espera a abrir conexion
        const data = await client.query(queries.getFruitbyName, [id])
        result = data.rows[0]
    } catch (err) {
        console.log(err);
        throw err;
    } finally {
        client.release();
    }
    return result
}


//// CREATE
const createFruit = async (fruitInfo) => {
    const { nombre, imagen, calorias, proteina, azucar, carbs, fibra } = fruitInfo;
    let client, result;
    try {
        client = await pool.connect(); // Espera a abrir conexion
        const data = await client.query(queries.createFruit,[ nombre, imagen, calorias, proteina, azucar, carbs, fibra])
        result = data.rowCount
    } catch (err) {
        console.log(err);
        throw err;
    } finally {
        client.release();
    }
    return result
}


//UPDATE
const updateFruit = async (fruitInfo) => {
    const {imagen, id} = fruitInfo;
    let client, result;
    try {
        client = await pool.connect(); // Espera a abrir conexion
        const data = await client.query(queries.updateEvent,[imagen, id])
        result = data.rowCount
    } catch (err) {
        console.log(err);
        throw err;
    } finally {
        client.release();
    }
    return result
}

//DELETE
const deleteFruit = async (fruitInfo) => {
    const {id} = fruitInfo;
    let client, result;
    try {
        client = await pool.connect(); // Espera a abrir conexion
        const data = await client.query(queries.deleteFruit,[id])
        result = data.rowCount
    } catch (err) {
        console.log(err);
        throw err;
    } finally {
        client.release();
    }
    return result
}

const fruits ={
    getAllFruits,
    getFruitbyName,
    createFruit,
    updateFruit,
    deleteFruit
}

module.exports = fruits