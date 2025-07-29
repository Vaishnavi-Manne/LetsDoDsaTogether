import React from "react";
import "./Header.css";
import logo from "../assets/logo.png";

const Header = ({ setView }) => {
  return (
    <header className="dsa-navbar">
      <div className="navbar-left">
        <img src={logo} alt="LetsDoDSA Logo" />
        <span className="brand-name">LetsDoDSA</span>
      </div>
      <nav className="navbar-right">
        <button onClick={() => setView("home")}>Home</button>
        <button onClick={() => setView("beginner")}>Beginner</button>
        <button onClick={() => setView("advanced")}>Advance</button>
        <button onClick={() => setView("contact")}>Contact</button>
      </nav>
    </header>
  );
};

export default Header;
