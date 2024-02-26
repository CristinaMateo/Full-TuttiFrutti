import React, { useEffect, useState } from "react";
import axios from "axios";
import Chart from "chart.js/auto";
import { CategoryScale } from "chart.js";
import Fibra from './Fibra';

Chart.register(CategoryScale);

const Stats = () => {

  const [fibra, setFibra] = useState([]);
  const [proteina, setProteina] = useState([]);
  const [azucar, setAzucar] = useState([]);
  const [carbs, setCarbs] = useState([]);
  const [nombre, setNombre] = useState([]);
  const [allInfo, setAllInfo] = useState([]);


  const getAllInfo = async () => {
    try {
      const response = await axios.get('http://localhost:3000/api/fruits');
      const data = response.data;
      setAllInfo(data)
    } catch (error) {
      console.error("Error fetching fruits")
    }
  }

  useEffect(() => {
    getAllInfo();
  }, []);

  useEffect(() => {
    if (allInfo.length > 0) {
    setNombre(
      allInfo.map((frutas) => (frutas.nombre))
    )
    setCarbs(
      allInfo.map((frutas) => (frutas.carbs))
    )
    setFibra(
      allInfo.map((frutas) => (frutas.fibra))
    )
    setProteina(
      allInfo.map((frutas) => (frutas.proteina))
    )
    setAzucar(
      allInfo.map((frutas) => (frutas.azucar))
    )
    console.log("fibra", fibra);
    }
    
  }, [allInfo]);


  const [chartUno, setChartUno] = useState({
    labels: nombre,
    datasets: [
      {
        label: "Fibra ",
        data: fibra,
        backgroundColor: [
          "red"
        ],
        borderColor: "black",
        borderWidth: 2
      }
    ]
  });

  return (
    <div className="App">
      <p>Using Chart.js in React</p>
      <Fibra chartData={chartUno}/>
    </div>
  );
};

export default Stats;
