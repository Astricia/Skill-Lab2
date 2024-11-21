import React, { useContext } from 'react';
import menu from './Menu';
import { CartContext } from './CartContext';

const CafeCategories = () => {
  const { addToCart } = useContext(CartContext);

  return (
    <div className="cafe-categories">
      {Object.keys(menu).map((category) => (
        <div key={category} className="category">
          <h2>{category.charAt(0).toUpperCase() + category.slice(1)}</h2>
          {menu[category].map((item) => (
            <div key={item.id} className="menu-item">
              <img src={item.image} alt={item.name} />
              <h3>{item.name}</h3>
              <p>{item.description}</p>
              <span>₹{item.price.toFixed(2)}</span>
              {/* Add to Cart button */}
              <button onClick={() => addToCart(item)}>Add to Cart</button>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default CafeCategories;