import React from 'react';
import './Header.css'; // styling below
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="dsa-navbar">
      <div className="navbar-left">
        <img src="/images/image2.png" alt="LetsDoDSA Logo" />
        <span className="brand-name">LetsDoDSA</span>
      </div>
      <nav className="navbar-right">
       <Link to='/'>Home</Link>
       <Link to='/practice'>Beginner</Link>
       <Link to='/practice/advanced'>Advance</Link>
       <Link to='/practice'>All-in-one</Link>
        
      </nav>
    </header>
  );
};

export default Header;
