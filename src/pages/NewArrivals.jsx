import React from 'react';
import Navbar from '../components/Navbar';
import '../styles/NewArrivals.css';

const NewArrivals = () => {
  const collections = ['Trending', 'Classic Collection', 'Core Product'];
  
  return (
    <div className="new-arrivals-page">
      <h1 className="page-heading">Defy Ordinary</h1>
      <Navbar activeTab="New Arrivals" />
      
      <div className="collections-container">
        {collections.map((collection, index) => (
          <div key={collection} className="collection-section">
            <h2 className="collection-heading">{collection}</h2>
            <div className="scrollable-grid">
              {[...Array(6)].map((_, i) => (
                <div key={i} className="product-card">
                  <div className="image-placeholder"></div>
                  <h3>Product Title</h3>
                  <p className="price">$99.99</p>
                </div>
              ))}
            </div>
            {index !== collections.length - 1 && <hr className="section-divider" />}
          </div>
        ))}
      </div>
    </div>
  );
};

export default NewArrivals;