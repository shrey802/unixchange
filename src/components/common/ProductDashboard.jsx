/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AiOutlineShoppingCart, AiOutlineArrowLeft } from 'react-icons/ai';

export default function ProductDashboard({ isSeller }) {
  const navigate = useNavigate();
  const [isNavOpen, setNavOpen] = useState(false);
  function navigateprod() {
    navigate('/addyourproduct');
    closeNavbar();
  }

  function backtohome() {
    navigate('/home');
    closeNavbar();
  }

  function gotocart() {
    navigate('/mycart');
    closeNavbar();
  }

  function myproducts() {
    navigate('/myproducts');
    closeNavbar();
  }

  function toggleNavbar() {
    setNavOpen(!isNavOpen);
  }

  function closeNavbar() {
    setNavOpen(false);
  }

  return (
    <nav className="navbar navbar-expand-md navbar-light bg-light product-dashboard">
      <button className="navbar-toggler" type="button" onClick={toggleNavbar}>
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className={`collapse navbar-collapse ${isNavOpen ? 'show' : ''}`}>
        <ul className="navbar-nav">
          <li className="nav-item">
            <button className="btn btn-outline-primary prod-homebtn" onClick={backtohome}>
              <AiOutlineArrowLeft size={13} /> Home
            </button>
          </li>
          {isSeller && ( // Check if the user is a seller before showing seller-only buttons
            <>
              <li className="nav-item">
                <button className="btn btn-outline-primary prod-addbtn" onClick={navigateprod}>
                  Add Product
                </button>
              </li>
              <li className="nav-item">
                <button className="btn btn-outline-primary yourprod" onClick={myproducts}>
                  Your Products
                </button>
              </li>
            </>
          )}
          <li className="nav-item">
            <button className="btn btn-outline-primary cartbtn" onClick={gotocart}>
              <AiOutlineShoppingCart size={13} /> Your Cart
            </button>
          </li>
          
        </ul>
      </div>
    </nav>
  );
}
