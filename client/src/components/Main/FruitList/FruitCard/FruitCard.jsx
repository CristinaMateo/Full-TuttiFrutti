import React from "react";
import { useNavigate } from "react-router-dom";


const FruitCard = ({fruits}) => {
  if (!fruits) {
    return null;
  }

  const navigate = useNavigate()

  const renderDetail=()=>{
    navigate(`/fruit/${fruits.id_fruta}`)
  }

  return (
    <article className="card" key={fruits.id_fruta} onClick={renderDetail}>
      <img className="smallImg" src={fruits.imagen} alt="imagen de fruta" />
      <h3>{fruits.nombre}</h3>

    </article>
  );
};

export default FruitCard;
