const queries ={
getFruits: `SELECT nombre, imagen
FROM frutas;`,
getFruitbyName: `SELECT nombre, imagen, calorias, azucar, proteina, carbs, fibra
FROM frutas
WHERE nombre=$1;`
}

module.exports = queries