import React from "react";
import FruitCard from "./FruitCard";


const FruitList = ({fruitList}) => {
  return (
    <article className="frutiLista">
      {fruitList ==[] ? <p>No hay frutas que mostrar</p> : fruitList.map((fruits,index) =>(
        <FruitCard key={index} fruits={fruits}/>
      )) }
      
    </article>
  );
};

export default FruitList;
