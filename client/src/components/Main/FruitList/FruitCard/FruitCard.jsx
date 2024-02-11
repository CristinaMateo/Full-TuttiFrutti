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

    </article>
  );
};

export default FruitCard;
