// import React, { useEffect } from 'react'
import logo from '../assets/Mynamelogo.png'
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
// import { Link } from 'react-router-dom';

function Navbar() {

  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="nav-container">

      <img src={logo} alt="" className='imagelogo' />
      <div
        className="menu-icon"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        {menuOpen ? <FaTimes /> : <FaBars />}
      </div>
      <ul className={menuOpen ? "nav-links active" : "nav-links"}>
           
  <li><a href="#Home">Home</a></li>
  <li><a href="#service">Service</a></li>
  <li><a href="#about">About</a></li>
  <li><a href="#portfolio">Portfolio</a></li>
  <li><a href="#contact">Contact</a></li>

      </ul>
      <button className='btn'>Hire Me</button>

    </nav>
  );
}

export default Navbar;