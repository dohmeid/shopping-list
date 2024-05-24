import './App.css';
import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from "./components/Navbar/Navbar";
import Cart from "./components/Cart/Cart";
import Products from "./components/Products/Products";
import Checkout from "./components/Checkout/Checkout";

function App() {

  const [cartItems, setCartItems] = useState([]);


  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Products cartItems={cartItems} setCartItems={setCartItems} />} />
        <Route path="/cart" element={<Cart cartItems={cartItems} setCartItems={setCartItems} />} />
        <Route path="/checkout" element={<Checkout cartItems={cartItems} setCartItems={setCartItems} />} />
      </Routes>
    </div>


  );
}

export default App;
