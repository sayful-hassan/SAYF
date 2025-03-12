import React from 'react';
import Navbar from '../components/Navbar';
import '../styles/NewArrivals.css';
import sixFaceTee from '../assets/images/tshirts/D3 mockup.jpg'
import ruefulTee from '../assets/images/tshirts/BL1.jpg'
import neverMind from '../assets/images/tshirts/WHITE BLACK.jpg'
import prior from '../assets/images/tshirts/2.jpg'

const NewArrivals = () => {
  const collections = ['Trending', 'Classic Collection', 'Core Product'];
  const products = [
    {
      title : 'Six-face Tee',
      price : '$499',
      image : sixFaceTee
    },
    {
      title : 'Never mind Tee',
      price : '$399',
      image : neverMind
    },
    {
      title : 'Prior Tee',
      price : '$799',
      image : prior
    },
    {
      title : 'Rueful print Tee',
      price : '$599',
      image : ruefulTee
    },
  ]
  
  return (
    <div className="new-arrivals-page">
      <h1 className="page-heading">Defy Ordinary</h1>
      <Navbar activeTab="New Arrivals" />
      
      <div className="collections-container">
        {collections.map((collection, index) => (
          <div key={collection} className="collection-section">
            <h2 className="collection-heading">{collection}</h2>
            <div className="scrollable-grid">
              {products.map((product, i) => (
                <div key={i} className="product-card">
                  <img src={product.image} alt={product.name} className='product-image'/>
                  <h3>{product.title}</h3>
                  <p className="price">{product.price}</p>
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