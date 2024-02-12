import React from "react";
import { useEffect, useState } from "react";
import axios from 'axios';
import FruitList from '../FruitList'

const Home = () => {

  const [allFruits, setAllFruits] = useState([]);
  const [frutaTempo, setFrutaTempo] = useState([]);

  const getAllFruits = async () =>{
    try{
    const response = await axios.get('http://localhost:3000/api/fruits');
    const data = response.data;
    console.log(data)
    setAllFruits(data)
    }catch(error){
      console.error("Error fetching fruits")
    }
  }

  const comprobarMes = ()=>{
  let fecha = new Date (Date.now())
  let mes = fecha.getMonth()
  console.log('este mes es',mes)
  //crear ruta,controlador, modelo, query de llamada a bbdd para meses de temporada
  //llamar meses segun resultado de getMonth 
  //devolver fruta correspondiente al mes en lista aside con map()
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

      </aside>

    </section>
  );
};

export default Home;
