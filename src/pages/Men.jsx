import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import '../styles/Men.css';
import NeverMindEcru from '../assets/images/tshirts/4.jpg';
import SayfEye from '../assets/images/tshirts/sayfeye.jpg';

const Men = () => {
  const [selectedCategory, setSelectedCategory] = useState('All clothing');
  const categories = ['All clothing', 'Regular Tee', 'Oversized Tee', 'Raglan shoulder', 'Core', 'Vest'];
  const Products = [
    {
      title : "Never mind Tee",
      spec : "Puff Screen print with drop shoulder ",
      color : "Color : Ecru",
      price : "MRP 599",
      categories : "Oversized Tee",
      Image : NeverMindEcru
    },
    {
      title : "Sayf eye",
      spec : "Dtf print with regular white tee ",
      color : "Color : white",
      price : "MRP 299",
      categories : "Regular Tee",
      Image : SayfEye
    }
  ]

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

export default Men;