import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './components/HomePage';
import CafeCategories from './components/CafeCategories';
import CafeDetails from './components/CafeDetails';
import Cart from './components/Cart';
import About from './components/About';
import Contact from './components/Contact';
import { CartProvider } from './components/CartContext';


const App = () => (
  <CartProvider>
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/categories" element={<CafeCategories />} />
        <Route path="/menu" element={<CafeCategories />} />
        <Route path="/category/:name" element={<CafeDetails />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </Router>
  </CartProvider>
);

export default App;