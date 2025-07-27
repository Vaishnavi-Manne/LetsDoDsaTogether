import React from 'react';
import './Header.css'; // styling below
import logo from '../assets/logo.png';

const Header = () => {
  return (
    <header className="dsa-navbar">
      <div className="navbar-left">
        <img src={logo} alt="LetsDoDSA Logo" />
        <span className="brand-name">LetsDoDSA</span>
      </div>
      <nav className="navbar-right">
        <a href="#">Home</a>
        <a href="#">Beginner</a>
        <a href="#">Advance</a>
        <a href="#">All-in-one</a>
      </nav>
    </header>
  );
};

export default Header;
