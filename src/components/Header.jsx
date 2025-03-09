import React from 'react';
import '../styles/Header.css';

const Header = () => {
  return (
    <header className="main-header">
      <div className="header-tabs">
        <span>Find a store</span>
        <span className="divider">/</span>
        <span>Help</span>
        <span className="divider">/</span>
        <span>Join us</span>
        <span className="divider">/</span>
        <span>Sign in</span>
      </div>
    </header>
  );
};

export default Header;