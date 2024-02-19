import React from "react";
import { useEffect, useState } from "react";
import axios from 'axios';
import FruitList from '../FruitList';
import Searcher from "./Searcher/Searcher";

const Home = () => {

  const [allFruits, setAllFruits] = useState([]);
  const [frutaTempo, setFrutaTempo] = useState([]);
  const [sortFilter, setSortFilter] = useState("none");
  const [tidyFruits, setTidyFruits] = useState([]);
  const [searchText, setSearchText] = useState("");



  const getAllFruits = async () => {
    try {
      const response = await axios.get('/api/fruits');
      const data = response.data;
      setAllFruits(data)
    } catch (error) {
      console.error("Error fetching fruits")
    }
  }

  const comprobarMes = async () => {
    try {
      let fecha = new Date(Date.now())
      let mes = fecha.getMonth()
      const response = await axios.get(`/api/fruits/tempo/${mes}`);
      const data = response.data;
      setFrutaTempo(data)
    } catch (error) {
      console.error('Error al obtener los datos', error);
    }
  }

  useEffect(() => {
    getAllFruits();
    comprobarMes();
  }, []);
  

  const filter = (event) => {
    setSortFilter(event.target.value)
  }

  useEffect(() => {
    let ordenado;
    if (sortFilter === "none") {
      ordenado = allFruits
    } else if (sortFilter === "az") {
      ordenado = allFruits.slice().sort((a, b) => a.nombre.localeCompare(b.nombre));
    } else if (sortFilter === "za") {
      ordenado = allFruits.slice().sort((a, b) => b.nombre.localeCompare(a.nombre));
    } else if (sortFilter === "caloriesup") {
      ordenado = allFruits.slice().sort((a, b) => a.calorias - b.calorias);
    } else if (sortFilter === "caloriesdown") {
      ordenado = allFruits.slice().sort((a, b) => b.calorias - a.calorias);
    }
    setTidyFruits(ordenado);
  }, [sortFilter, allFruits]);
  

  function capitalizeFirstLetter(str) {
    return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
  }

  const handleSearch = async (event) => {
    event.preventDefault();
    
  
    if (searchText.trim() === "") {
      setTidyFruits(allFruits);
    } else {
      const formattedSearchText = capitalizeFirstLetter(searchText);
  
      try {
        const response = await axios.get(`http://localhost:3000/api/fruits/${formattedSearchText}`);
        const data = response.data;
  
        if ((Array.isArray(data) && data.length > 0) || (typeof data === 'object' && Object.keys(data).length > 0)) {
          setTidyFruits([data]); 
        } else {
          setTidyFruits(allFruits); 
          alert("Fruta no encontrada");
        }
      } catch (error) {
        setTidyFruits(allFruits); 
        alert("Error al buscar la fruta");
      }
    }
    setSearchText("");
  };
  
  


  return (
    <section id="home">

      <section id="botones">

        <form id="sortForm">
          <label htmlFor="ordenar">Choose sort-type: </label>
          <select
            name="ordenar"
            id="ordenar"
            onChange={filter}
          >
            <option value="none">None</option>
            <option value="az">A-Z</option>
            <option value="za">Z-A</option>
            <option value="caloriesup">Calories Ascendent</option>
            <option value="caloriesdown">Calories Descendent</option>
          </select>
        </form>

        <Searcher searchText={searchText} setSearchText={setSearchText} onSearch={handleSearch} />

      </section>

      <section className="bigGrid">
        <aside className="temporada">

          <h3>Frutas de temporada en {frutaTempo.length > 0 ? frutaTempo[0].nombre_mes : "el mes actual"}</h3>
          <ul>
            {frutaTempo.map((fruta, index) => (
              <li key={index}>{fruta.nombre}</li>
            ))}
          </ul>
        </aside>

        <article className="fruit-list">
          <FruitList fruitList={tidyFruits} />
        </article>



      </section>

    </section>
  );
};

export default Home;
