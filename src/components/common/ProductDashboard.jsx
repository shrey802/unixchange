/* eslint-disable no-unused-vars */
import React from 'react';
import '../../components/css/productcomp.css';
import { useNavigate } from 'react-router-dom';
import { AiOutlineShoppingCart, AiOutlineArrowLeft } from 'react-icons/ai';

export default function ProductDashboard() {
  const navigate = useNavigate();
// NAVIGATION TO ADDING PRODUCTS ROUTE
  function navigateprod() {
    navigate('/addyourproduct');
  }
// BACK HOME 
  function backtohome() {
    navigate('/home');
  }
// NAVIGATING TO CART 
  function gotocart(){
    navigate('/mycart')
  }
// NAVIGATING TO PRODUCTS YOU CREATED
  function myproducts() {
    navigate('/myproducts');
  }
// PROUDCTS PAGE NAVBAR
  return (
    <div className='product-dashboard'>
      <button className='prod-homebtn' onClick={backtohome}>
        <AiOutlineArrowLeft size={13} /> Home
      </button>
      <button className='prod-addbtn' onClick={navigateprod}>
        Add Product
      </button>
      <button className='cartbtn' onClick={gotocart}>
        <AiOutlineShoppingCart size={13} /> Your Cart
      </button>
      <button className='yourprod' onClick={myproducts}>
        Your Products
      </button>
    </div>
  );
}
