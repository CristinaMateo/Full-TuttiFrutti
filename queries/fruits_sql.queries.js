const queries ={
getFruits: `SELECT nombre, imagen
FROM frutas;`,
getFruitbyName: `SELECT nombre, imagen, calorias, azucar, proteina, carbs, fibra
FROM frutas
WHERE nombre=$1;`,
createFruit:`INSERT INTO frutas (nombre, imagen, calorias, proteina, azucar, carbs, fibra)
VALUES ($1, $2, $3, $4, $5, $6, $7)`,
updateFruit:`UPDATE frutas
SET image =$1
WHERE nombre =$2;`,
deleteFruit:`DELETE FROM frutas
WHERE nombre = $1;`
}

module.exports = queries