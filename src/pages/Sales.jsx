import React from 'react';
import Navbar from '../components/Navbar';
import { Link } from 'react-router-dom';
import '../styles/Sales.css';

const Sales = () => {
  return (
    <div className="sales-page">
      <h1 className="page-heading">Smart Choices, Beautiful Savings</h1>
      <Navbar activeTab="Sales" />
      
      <div className="sales-content">
        <div className="offer-card">
          <h2>Stay Stylish, Save Smart</h2>
          <p className="offer-message">
            While there are no active offers right now, great deals are always around the corner! 
            <br />
            Sign up for early access to our next sale.
          </p>
          <Link to="/new" className="cta-button">
            Explore New Arrivals
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Sales;