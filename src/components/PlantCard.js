import React from "react";

function PlantCard({name, img, price}) {
  return (
    <li className="card">
      <img src={img} alt={name} />
      <h4>{name}</h4>
      <p>Price: {price}</p>
      {true ? (
        <button className="primary">In Stock</button>
      ) : (
        <button>Out of Stock</button>
      )}
    </li>
  );
}

export default PlantCard;
