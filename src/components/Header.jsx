import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <header className="dsa-navbar">
      <div className="navbar-left">
        <img src="/favicon.ico" alt="LetsDoDSA Logo" className="navbar-logo" />
        <span className="brand-name">Let&apos;s Do DSA</span>
      </div>
      <nav className="navbar-right">
        <button className="nav-link">Home</button>
        <button className="nav-link">Beginner</button>
        <button className="nav-link">Advanced</button>
        <button className="nav-link">All-in-One</button>
      </nav>
    </header>
  );
};

export default Header;
