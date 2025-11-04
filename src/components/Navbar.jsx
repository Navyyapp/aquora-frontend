import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

export default function Navbar({ cartCount }) {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

  return (
    <nav className="navbar">
      <div className="nav-container">
        <h1 className="nav-logo">AQUORA EXPORTS & IMPORTS</h1>

        {/* Hamburger Icon (Same for Open/Close) */}
        <div className={`hamburger ${menuOpen ? "active" : ""}`} onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </div>

        {/* Navigation Links */}
        <ul className={`nav-links ${menuOpen ? "open" : ""}`}>
          <li>
            <Link to="/" onClick={closeMenu}>Home</Link>
          </li>
          <li>
            <Link to="/about" onClick={closeMenu}>About</Link>
          </li>
          <li>
            <Link to="/products" onClick={closeMenu}>Products</Link>
          </li>
          <li>
            <a href="#contact" onClick={closeMenu}>Contact</a>
          </li>
          <li>
            <Link to="/cart" onClick={closeMenu}>
              Cart ({cartCount})
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
