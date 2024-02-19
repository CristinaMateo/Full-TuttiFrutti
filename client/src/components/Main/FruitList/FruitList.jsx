import React from "react";
import FruitCard from "./FruitCard";

const FruitList = ({ fruitList }) => {

  return (
    <article className="frutiLista">
      {fruitList && fruitList.length > 0 ? (
        fruitList.map((fruits, index) => (
          <FruitCard key={index} fruits={fruits} />
        ))
      ) : (
        <p>No hay frutas que mostrar</p>
      )}
    </article>
  );
};

export default FruitList;
