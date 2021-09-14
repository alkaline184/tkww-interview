import React, { useState } from "react";
import Image from './Image';

const Card = props => {
  const [clicked, setClicked] = useState(false);
  const handleClick = () => {
    setClicked(!clicked);
  };

  const { name, image, type, brandName, price, storeName } = props.cardResults;

  return (
    <div 
      className="cardHolder" 
      onClick={handleClick}>
      {clicked && (
        <div>
          <p>Price: {price}</p>
          <p>{storeName}</p>
        </div>
      )}
      <h1>{name}</h1>
      <Image
        alt={name}
        src={image}
        className="cardImage" />
      <p>{type}</p>
      <p>{brandName}</p>
    </div>
  );
}

export default Card;
