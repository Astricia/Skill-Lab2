// src/components/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => (
  <nav className="navbar">
    <h1>Zen</h1>
    <div className="nav-links">
      
      <Link to="/menu">Menu</Link>
      <Link to="/cart">Cart</Link>
      <Link to="/about">About Us</Link>
      <Link to="/contact">Contact</Link>
    </div>
  </nav>
);

export default Navbar;