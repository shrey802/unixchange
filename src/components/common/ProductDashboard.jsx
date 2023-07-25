/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import '../../components/css/productcomp.css';
import { useNavigate } from 'react-router-dom';
import { AiOutlineShoppingCart, AiOutlineArrowLeft } from 'react-icons/ai';

export default function ProductDashboard() {
  const navigate = useNavigate();
  const [isNavOpen, setNavOpen] = useState(false); // State to manage Navbar collapse

  // NAVIGATION TO ADDING PRODUCTS ROUTE
  function navigateprod() {
    navigate('/addyourproduct');
    closeNavbar();
  }

  // BACK HOME
  function backtohome() {
    navigate('/home');
    closeNavbar();
  }

  // NAVIGATING TO CART
  function gotocart() {
    navigate('/mycart');
    closeNavbar();
  }

  // NAVIGATING TO PRODUCTS YOU CREATED
  function myproducts() {
    navigate('/myproducts');
    closeNavbar();
  }

  // Toggle Navbar
  function toggleNavbar() {
    setNavOpen(!isNavOpen);
  }

  // Close Navbar
  function closeNavbar() {
    setNavOpen(false);
  }

  // PROUDCTS PAGE NAVBAR
  return (
    <nav className='navbar navbar-expand-md navbar-light bg-light product-dashboard'>
      <button className='navbar-toggler' type='button' onClick={toggleNavbar}>
        <span className='navbar-toggler-icon'></span>
      </button>

      <div className={`collapse navbar-collapse ${isNavOpen ? 'show' : ''}`}>
        <ul className='navbar-nav'>
          <li className='nav-item'>
            <button className='btn btn-outline-primary prod-homebtn' onClick={backtohome}>
              <AiOutlineArrowLeft size={13} /> Home
            </button>
          </li>
          <li className='nav-item'>
            <button className='btn btn-outline-primary prod-addbtn' onClick={navigateprod}>
              Add Product
            </button>
          </li>
          <li className='nav-item'>
            <button className='btn btn-outline-primary cartbtn' onClick={gotocart}>
              <AiOutlineShoppingCart size={13} /> Your Cart
            </button>
          </li>
          <li className='nav-item'>
            <button className='btn btn-outline-primary yourprod' onClick={myproducts}>
              Your Products
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
}
