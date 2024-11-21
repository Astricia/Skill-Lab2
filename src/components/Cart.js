
import React, { useContext, useState } from "react";
import { CartContext } from './CartContext';

const Cart = () => {
  const { cart, setCart } = useContext(CartContext);
  const [newItem, setNewItem] = useState({ name: "", price: "" });

  // Clear the cart by setting it to an empty array
  const clearCart = () => {
    setCart([]); // Reset the cart to an empty array
  };

  // Remove a single item from the cart
  const removeItem = (index) => {
    const updatedCart = cart.filter((_, i) => i !== index);
    setCart(updatedCart);
  };

  // Add an item to the cart
  const addToCart = () => {
    if (!newItem.name || !newItem.price) return; // Ensure both name and price are provided
    setCart([...cart, { ...newItem, price: parseFloat(newItem.price) }]); // Add new item to the cart
    setNewItem({ name: "", price: "" }); // Clear input fields
  };

  // Calculate total price
  const total = cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className="cart">
      <h2>Shopping Cart</h2>

      {/* Input fields to add a new item */}
      <div className="add-item">
        <input
          type="text"
          placeholder="Item Name"
          value={newItem.name}
          onChange={(e) => setNewItem({ ...newItem, name: e.target.value })}
        />
        <input
          type="number"
          placeholder="Price"
          value={newItem.price}
          onChange={(e) => setNewItem({ ...newItem, price: e.target.value })}
        />
        <button onClick={addToCart}>Add to Cart</button>
      </div>

      {/* Display cart items */}
      <ul className="cart-items">
        {cart.map((item, index) => (
          <li key={index}>
            <span>{item.name}</span>
            <span>${item.price.toFixed(2)}</span>
            <button onClick={() => removeItem(index)}>Remove</button>
          </li>
        ))}
      </ul>

      {/* Display total price */}
      <div className="cart-total">
        Total: ${total.toFixed(2)}
      </div>

      {/* Action buttons */}
      <button className="checkout-button">Proceed to Checkout</button>
      <button className="clear-cart-button" onClick={clearCart}>
        Clear Cart
      </button>
    </div>
  );
};

export default Cart;
