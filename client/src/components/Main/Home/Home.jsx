import React from "react";
import { useEffect, useState } from "react";
import axios from 'axios';
import FruitList from '../FruitList'

const Home = () => {

  const [allFruits, setAllFruits] = useState([]);
  const [frutaTempo, setFrutaTempo] = useState([]);
  const [mesTempo, setMesTempo] =useState("");

  const getAllFruits = async () =>{
    try{
    const response = await axios.get('http://localhost:3000/api/fruits');
    const data = response.data;
    setAllFruits(data)
    }catch(error){
      console.error("Error fetching fruits")
    }
  }

  const comprobarMes = async()=>{
    try{
  let fecha = new Date (Date.now())
  let mes = fecha.getMonth()
  const response = await axios.get(`http://localhost:3000/api/fruits/tempo/${mes}`);
  const data = response.data;
  setFrutaTempo(data)
} catch (error) {
  console.error('Error al obtener los datos', error);
}
  }

  useEffect(()=>{
    getAllFruits();
    comprobarMes();
  }, []);


  return (
    <section id="home">

      <form>
        Hacer formulario con hook-form para:
        - ordenar lista A-Z / Z-A
        - ordenar lista por calorias
        - buscador de frutas
        - algún filtro, por ejemplo menos de x gramos de azucar
      </form>

      <article className="fruit-list">
        <FruitList fruitList ={allFruits}/>
      </article>

      <aside className="temporada">

        <h3>Frutas de temporada en {frutaTempo.length > 0 ? frutaTempo[0].nombre_mes : "el mes actual"}</h3>
      <ul>
        {frutaTempo.map((fruta, index) => (
          <li key={index}>{fruta.nombre}</li>
        ))}
      </ul>
      </aside>

    </section>
  );
};

export default Home;
