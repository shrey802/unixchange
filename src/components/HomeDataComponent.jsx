/* eslint-disable no-unused-vars */
import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../components/css/homedata.css';
import backgroundImage from '../../images/ecommerce.jpg';

export default function Homepage() {
  const navigate = useNavigate();

  function navigateToProducts() {
    navigate('/products');
  }

  return (
    <div className='homepage-container'>
      <div className='homepage-bg' style={{ backgroundImage: `url(${backgroundImage})` }} />
      <div className='homepage-content'>
        <h1 className='homepage-heading'>Welcome to UnixChange</h1>
        <p className='homepage-description'>
          Discover a world of products. Buy and sell with ease.
        </p>
        <button className='homepage-btn' onClick={navigateToProducts}>
          Explore Products
        </button>
      </div>
    </div>
  );
}
