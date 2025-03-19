import React from 'react';
import Navbar from '../components/Navbar';
import '../styles/NewArrivals.css';
import sixFaceTee from '../assets/images/tshirts/D3 mockup.jpg'
import ruefulTee from '../assets/images/tshirts/BL1.jpg'
import neverMind from '../assets/images/tshirts/WHITE BLACK.jpg'
import prior from '../assets/images/tshirts/2.jpg'
import eye from '../assets/images/tshirts/tryt1.jpg'
import blackEye from '../assets/images/tshirts/smartmockups_lkxca93r.jpg'
import whiteEye from '../assets/images/tshirts/smartmockups_ljxbl9fa.jpg'
import whiteCrop from '../assets/images/tshirts/smartmockups_ljxbc803.jpg'
import blackEyeWith from '../assets/images/tshirts/1.jpg'
import meeklyFly from '../assets/images/tshirts/W2.jpg'
import imposePattern from '../assets/images/tshirts/IMG_8884.jpg'
import whiteImposePattern from '../assets/images/tshirts/IMG_8887.jpg'

const NewArrivals = () => {
  const collections = ['Trending', 'Classic Collection', 'Core Product'];
  const products = [
    {
      title : 'Six-face Tee',
      price : '$499',
      image : sixFaceTee,
      collection : 'Trending'
    },
    {
      title : 'Never mind Tee',
      price : '$399',
      image : neverMind,
      collection : 'Classic Collection'

    },
    {
      title : 'Prior Tee',
      price : '$799',
      image : prior,
      collection : 'Core Product'
    },
    {
      title : 'Rueful print Tee',
      price : '$599',
      image : ruefulTee,
      collection : 'Core Product'

    },
    {
      title: 'Eyes on you',
      price: '$280',
      image: eye,
      collection:'Trending'
    },
    {
      title: 'Six-face Tee regular',
      price: '$240',
      image: blackEye,
      collection:'Trending'
    },
    {
      title: 'Sayf-Eye',
      price: '$250',
      image: whiteEye,
      collection:'Core Product'
    },
    {
      title: 'Sayf-Eye Crop cut',
      price: '$210',
      image: whiteCrop,
      collection:'Trending'
    },
    {
      title: 'Meekly fly',
      price: '$200',
      image: meeklyFly,
      collection:'Classic Collection'
    },
    {
      title: 'Black Tee-Eye',
      price: '$210',
      image: blackEyeWith,
      collection:'Classic Collection'
    },
    {
      title: 'Full sleeve impose pattern',
      price: '$210',
      image: imposePattern,
      collection:'Trending'
    },
    {
      title: 'White Classic impose fullsleeve-pattern',
      price: '$210',
      image: whiteImposePattern,
      collection:'Classic Collection'
    },
  ]
  
  return (
    <div className="new-arrivals-page">
      <h1 className="page-heading">Defy Ordinary</h1>
      <Navbar activeTab="New Arrivals" />
      
      <div className="collections-container">
        {collections.map((collection) => {
          const collectionProducts = products.filter(product => product.collection === collection);
          return (
            <div key={collection} className='collection-section'>
              <h2 className='collection-heading'>{collection}</h2>
              <div className='scrollable-grid'>
                {collectionProducts.map((product, i) => (
                  <div key={i} className='product-card'>
                    <img src={product.image} alt={product.title} className='product-image'/>
                    <h3>{product.title}</h3>
                    <p className='price'>{product.price}</p>
                  </div>
                ))}
              </div>
      </div>
          );
        })}
        </div>
      </div>
  );
              
};

export default NewArrivals;