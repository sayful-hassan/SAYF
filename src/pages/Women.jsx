import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import '../styles/Women.css';
import sixFacesTee from '../assets/images/tshirts/D3 mockup.jpg'
import sayfEyes from '../assets/images/tshirts/smartmockups_ljxbdtpd.jpg'

const Women = () => {
  const [selectedCategory, setSelectedCategory] = useState('All clothing');
  const categories = [
    'All clothing',
    'Regular tee',
    'Oversized',
    'Full sleeve',
    'Hoodie',
    'Vest',
  ];
  const Products = [
      {
        title : "Six faces tee",
        spec : "Screen print with drop full sleeve",
        color : "Color : Blue + White",
        price : "MRP 899",
        categories : "Full sleeve Tee",
        Image : sixFacesTee
      },
      {
        title : "Sayf eye",
        spec : "Dtf print with regular white tee ",
        color : "Color : white",
        price : "MRP 299",
        categories : "Regular Tee",
        Image : sayfEyes
      }
    ]

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
            {Products.map((product, i) => (
              <div key={i} className="product-card">
                <img src={product.Image} alt={product.title} className='product-image'/>
                <div className="product-info">
                  <h3>{product.title}</h3>
                  <p className="specs">{product.spec}</p>
                  <p className="color">{product.color}</p>
                  <p className="price">{product.price}</p>
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