import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'; // styling below
import logo from '../assets/logo.png';

const Header = () => {
  return (
    <header className="dsa-navbar">
      <div className="navbar-left">
        <Link to="/">
          <img src={logo} alt="LetsDoDSA Logo" />
          <span className="brand-name">LetsDoDSA</span>
        </Link>
      </div>
      <nav className="navbar-right">
        <Link to="/">Home</Link>
        <Link to="/beginner">Beginner</Link>
        <Link to="/advanced">Advanced</Link>
        <Link to="/practice">All-in-one</Link>
      </nav>
    </header>
  );
};

export default Header;
