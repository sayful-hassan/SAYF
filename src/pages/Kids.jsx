import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import '../styles/Kids.css';
import ahsan from '../assets/images/tshirts/kids/Surf printed t-shirt -  Women _ Mango United Kingdom.jpeg';
import maazi from '../assets/images/tshirts/kids/download.jpeg'
import sheza from '../assets/images/tshirts/kids/Animal Collective Group Nouns Kids Tee Shirt - Black _ 4T.jpeg'
import aidan from '../assets/images/tshirts/kids/Multi Spray Colours - spring summer 2022.jpeg'

const Kids = () => {
  const [selectedCategory, setSelectedCategory] = useState('All Items');
  const categories = [
    'All Items',
    'Boys Wear',
    'Girls Wear',
    'Party Wear',
    'Shoes & Socks',
    'Accessories'
  ];
  
  const Products = [
    {
      title: "Surf Tee",
      spec: "Puff print tee",
      color: "Color: Pink",
      price: "MRP 299",
      categories: "Regular Tee",
      Image: ahsan
    },
    {
      title: "Sayf eye",
      spec: "Dtf print with regular white tee",
      color: "Color: white",
      price: "MRP 299",
      categories: "Regular Tee",
      Image: maazi
    },
    {
      title: "Sayf eye",
      spec: "Dtf print with regular white tee",
      color: "Color: white",
      price: "MRP 299",
      categories: "Regular Tee",
      Image: sheza
    },
    {
      title: "Sayf eye",
      spec: "Dtf print with regular white tee",
      color: "Color: white",
      price: "MRP 299",
      categories: "Regular Tee",
      Image: aidan
    },
  ];

  return (
    <div className="kids-page">
      <h1 className="page-heading">Little Treasures, Big Style</h1>
      <Navbar activeTab="Kids" />
      
      <div className="content-container">
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

export default Kids;