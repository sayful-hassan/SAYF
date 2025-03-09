import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import '../styles/Men.css';

const Men = () => {
  const [selectedCategory, setSelectedCategory] = useState('All clothing');
  const categories = ['All clothing', 'Jackets', 'Shirts & tops', 'Shorts', 'Shoes', 'Socks'];

  return (
    <div className="men-page">
      <h1 className="page-heading">Redefine Masculinity</h1>
      <Navbar activeTab="Men" />
      
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
                  <h3>Premium Wool Jacket</h3>
                  <p className="specs">Slim fit, Notch lapel</p>
                  <p className="color">Color: Charcoal Grey</p>
                  <p className="price">MRP: $299.99</p>
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

export default Men;