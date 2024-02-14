import React from "react";
import { useParams } from 'react-router-dom';
import { useEffect, useState } from "react";
import axios from 'axios'
import { whoIsLogged } from "../Authentication/utils";

const Details = () => {

  const { id } = useParams();
  const [fruitDet, setFruitDet] = useState([]);

  useEffect(() => {

    const fetchFruitDet = async () => {
      try {
        const response = await axios.get(`/api/fruit/${id}`);
        const data = await response.data
        

        const detailedData = {
          id: data.id_fruta,
          nombre: data.nombre,
          imagen: data.imagen,
          calorias: data.calorias,
          proteina: data.proteina,
          carbs: data.carbs,
          azucar: data.azucar,
          fibra: data.fibra
        }

        setFruitDet(detailedData)

      } catch (error) {
        console.log("Lo sentimos, no hemos podido acceder a los detalles")
      }
    }

    fetchFruitDet();

  }, []);

  return (
    <article className="indvcard">

      {fruitDet && (
        <>
          <img className="bigImg" src={fruitDet.imagen} alt={`imagen de ${fruitDet.nombre}`} />
          <h3>{fruitDet.nombre}</h3>

          <h5>Valores nutricionales (100g)</h5>
          <p>Calorías:{fruitDet.calorias} kcal</p>
          <p>Azúcar: {fruitDet.azucar}g </p>
          <p>Proteína: {fruitDet.proteina}g</p>
          <p>Carbohidratos: {fruitDet.carbs}g </p>
          <p>Fibra: {fruitDet.fibra}g </p>
        </>
      )}
    </article>
  );
};

export default Details;
