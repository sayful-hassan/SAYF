import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import '../styles/Kids.css';

const Kids = () => {
  const [selectedCategory, setSelectedCategory] = useState('All Items');
  const categories = [
    'All Items',
    'Boys Wear',
    'Girls Wear',
    'School Uniforms',
    'Party Wear',
    'Shoes & Socks',
    'Accessories'
  ];

  return (
    <div className="kids-page">
      <h1 className="page-heading">Little Treasures, Big Style</h1>
      <Navbar activeTab="Kids" />
      
      <div className="content-container">
        {/* Left Filters */}
        <div className="filter-sidebar">
          {categories.map(category => (
            <button
              key={category}
              className={`filter-option ${selectedCategory === category ? 'active' : ''}`}
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Right Products */}
        <div className="product-main">
          <div className="product-header">
            <h2>{selectedCategory}</h2>
            <div className="header-controls">
              <button className="control-btn">
                <span>Hide filters</span>
                <i className="filter-icon">✖</i>
              </button>
              <button className="control-btn">
                <span>Sort by</span>
                <i className="sort-icon">▼</i>
              </button>
            </div>
          </div>

          <div className="product-grid">
            {[...Array(9)].map((_, i) => (
              <div key={i} className="product-card">
                <div className="image-placeholder"></div>
                <div className="product-info">
                  <h3>Colorblock Hoodie Set</h3>
                  <p className="specs">Age 4-6 | Machine Wash</p>
                  <p className="color">Color: Navy/Orange</p>
                  <p className="price">MRP: $49.99</p>
                </div>
              </div>
            ))}
          </div>
          
          <div className="scroll-indicator">
            <span>▼ Scroll for more</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Kids;