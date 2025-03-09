import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import '../styles/Women.css';

const Women = () => {
  const [selectedCategory, setSelectedCategory] = useState('All clothing');
  const categories = [
    'All clothing',
    'Kurtas & Suits',
    'Dresses',
    'Tops & Tees',
    'Bras & Lingerie',
    'Bottom Wear',
    'Ethnic Wear',
    'Winter Wear'
  ];

  return (
    <div className="women-page">
      <h1 className="page-heading">Celebrate Femininity</h1>
      <Navbar activeTab="Women" />
      
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
                  <h3>Embroidered Georgette Kurta</h3>
                  <p className="specs">Floral embroidery, Chiffon dupatta</p>
                  <p className="color">Color: Ivory White</p>
                  <p className="price">MRP: $159.99</p>
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

export default Women;