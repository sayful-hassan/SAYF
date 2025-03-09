import React from 'react';
import '../styles/Header.css';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="main-header">
      <div className="header-tabs">
        <Link to="/stores">Find a store</Link>
        <span className="divider">/</span>
        <Link to="/help">Help</Link>
        <span className="divider">/</span>
        <Link to="/join">Join us</Link>
        <span className="divider">/</span>
        <Link to="/signin">Sign in</Link>
      </div>
    </header>
  );
};

export default Header;