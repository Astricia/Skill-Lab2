// src/components/CafeDetails.js
import React, { useState } from 'react';

const CafeDetails = ({ item }) => {
  const [quantity, setQuantity] = useState(1);

  return (
    <div className="details-page">
      <h2>{item.name}</h2>
      <img src={item.image} alt={item.name} />
      <p>{item.description}</p>
      <h4>Price: ${item.price}</h4>
      <label>
        Quantity:
        <input
          type="number"
          value={quantity}
          min="1"
          onChange={(e) => setQuantity(e.target.value)}
        />
      </label>
      <button>Add to Cart</button>
    </div>
  );
};

export default CafeDetails;