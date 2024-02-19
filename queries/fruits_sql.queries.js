const queries ={
getFruits: `SELECT nombre, imagen, calorias, id_fruta
FROM frutas;`,
getOneFruit: `SELECT id_fruta, nombre, imagen, calorias, azucar, proteina, carbs, fibra
FROM frutas
WHERE id_fruta = $1;`,
getFruitByName:`SELECT nombre, imagen
FROM frutas
WHERE nombre =$1;`,
createFruit:`INSERT INTO frutas (nombre, imagen, calorias, proteina, azucar, carbs, fibra)
VALUES ($1, $2, $3, $4, $5, $6, $7)`,
updateFruit:`UPDATE frutas
SET imagen =$1
WHERE id_fruta =$2;`,
deleteFruit:`DELETE FROM frutas
WHERE id_fruta = $1;`,
getMonth:`SELECT f.nombre , nombre_mes
FROM frutas AS f
INNER JOIN temporada AS tem ON f.id_fruta = tem.id_fruta
WHERE numero_mes= $1 +1;`
}

module.exports = queries