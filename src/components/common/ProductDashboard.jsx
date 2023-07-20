/* eslint-disable no-unused-vars */
import React from 'react';
import '../../components/css/productcomp.css';
import { useNavigate } from 'react-router-dom';
import { AiOutlineShoppingCart, AiOutlineArrowLeft } from 'react-icons/ai';

export default function ProductDashboard() {
  const navigate = useNavigate();

  function navigateprod() {
    navigate('/addyourproduct');
  }

  function backtohome() {
    navigate('/home');
  }

  function gotocart(){
    navigate('/mycart')
  }

  function myproducts() {
    navigate('/myproducts');
  }

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
