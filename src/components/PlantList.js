import React from "react";
import PlantCard from "./PlantCard";

function PlantList({plantCard, }) { // plantCard was called in the map function

  return (
    <ul className="cards">
      {plantCard}
    </ul>
  );
}

export default PlantList;