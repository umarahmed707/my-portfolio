// Footer.jsx
import React from "react";
import {
  FaInstagram,
  FaLinkedinIn,
  FaDribbble,
  FaBehance,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        
        {/* Logo */}
        <h2 className="logo">LOGO</h2>

        {/* Menu */}
        <ul className="footer-menu">
          <li><a href="/">Home</a></li>
          <li><a href="/">Services</a></li>
          <li><a href="/">About me</a></li>
          <li><a href="/">Portfolio</a></li>
          <li><a href="/">Contact me</a></li>
        </ul>

        {/* Social Icons */}
        <div className="social-icons">
          <a href="/"><FaInstagram /></a>
          <a href="/"><FaLinkedinIn /></a>
          <a href="/"><FaDribbble /></a>
          <a href="/"><FaBehance /></a>
        </div>

        {/* Contact Info */}
        <div className="contact-info">
          <span>✉ umarahmedansari0@gmail.com</span>
          <span>📞 +93 318 2593427</span>
        </div>

        {/* Bottom Text */}
        <div className="footer-bottom">
          <p>Designed by @UmarAhmed Web Application Development</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;