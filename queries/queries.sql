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

--todas las frutas
SELECT nombre, imagen
FROM frutas;