--Crear tabla usuarios
CREATE TABLE usuarios (
id_usuario serial NOT NULL PRIMARY KEY,
username varchar (20) NOT NULL,
email varchar (45) NOT NULL UNIQUE,
image bytea,
password text NOT NULL
);



--Crear tabla de frutas
CREATE TABLE frutas (
id_fruta serial NOT NULL PRIMARY KEY,
nombre varchar (20) NOT NULL,
calorias float NOT NULL,
azucar float NOT NULL,
proteina float NOT NULL,
carbs float NOT NULL,
fibra float NOT NULL,
imagen text NOT NULL
);


--Crear tabla de unión para frutas favoritas
CREATE TABLE favoritos (
    id_favorito serial NOT NULL PRIMARY KEY,
    id_usuario serial NOT NULL,
    id_fruta serial NOT NULL,
    FOREIGN KEY (id_usuario) REFERENCES usuarios(id_usuario),
    FOREIGN KEY (id_fruta) REFERENCES frutas(id_fruta)
);

--Crear tabla temporada
CREATE TABLE temporada(
id_temporada serial NOT NULL PRIMARY KEY,
nombre_mes varchar(12) NOT NULL,
numero_mes int NOT NULL
id_fruta int,
FOREIGN KEY (id_fruta) REFERENCES frutas (id_fruta)
);


--todas las frutas
SELECT nombre, imagen
FROM frutas;

--fruta por id
SELECT nombre, imagen, calorias, azucar, proteina, carbs, fibra
FROM frutas
WHERE id_fruta=$1;

--fruta por nombre
SELECT nombre, imagen
FROM frutas
WHERE nombre =$1;

--SOLO ADMIN:

--crear fruta
INSERT INTO frutas (nombre, imagen, calorias, proteina, azucar, carbs, fibra)
VALUES ($1, $2, $3, $4, $5, $6, $7)

--actualizar imagen de fruta
UPDATE frutas
SET imagen =$1
WHERE id_fruta =$2;

--eliminar fruta
DELETE FROM frutas
WHERE id_fruta = $1;

--sacar mes de temporada
SELECT f.nombre , nombre_mes
FROM frutas AS f
INNER JOIN temporada AS tem ON f.id_fruta = tem.id_fruta
WHERE numero_mes= $1 +1;