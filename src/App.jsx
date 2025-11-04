import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Footer from "./components/Footer";
import Cart from "./pages/Cart";
import Products from "./pages/Products";

export default function App() {
  const [cart, setCart] = useState([]);

  return (
    <Router>
      <div className="app">
        <Navbar cartCount={cart.length} />
        <Routes>
          <Route path="/" element={<Home cart={cart} setCart={setCart} />} />
          <Route path="/about" element={<About />} />
          <Route path="/cart" element={<Cart cart={cart} setCart={setCart} />} />
          <Route path="/products" element={<Products cart={cart} setCart={setCart} />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}
