import React from "react";
import { useParams } from 'react-router-dom';
import { useEffect, useState } from "react";
import axios from 'axios'

const Details = () => {

  const { id } = useParams();
  const [fruitDet, setFruitDet]= useState();

  useEffect(() => {

  const fetchFruitDet = async ()=>{
    try{
      const response = await axios.get(`/api/fruits/${id}`);
      const data = await response.data

      const detailedData ={
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

    }catch (error) {
      console.log("Lo sentimos, no hemos podido acceder a los detalles")
    }
  }

  fetchFruitDet();

}, []);

  return <div>Details</div>;
};

export default Details;
