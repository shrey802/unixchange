/* eslint-disable no-unused-vars */
import React from 'react'
import '../../components/css/productcomp.css'
import { useNavigate } from 'react-router-dom'
import {AiOutlineShoppingCart, AiOutlineArrowLeft} from 'react-icons/ai'
export default function ProductDashboard() {
    const navigate = useNavigate();
  function navigateprod(){
    navigate('/addyourproduct');
  }
  function backtohome() {
    navigate('/home');
  }
  function myproducts(){
    navigate('/myproducts');
  }

  return (
    <div className='product-dashboard'>
      <button className='prod-homebtn' onClick={backtohome}><AiOutlineArrowLeft size={13}/> to home</button>
      <button className='prod-addbtn' onClick={navigateprod}>ADD PRODUCT</button>
      <button className='cartbtn'>your <AiOutlineShoppingCart size={13}/></button>
      <button className='yourprod' onClick={myproducts}>your products</button>
    </div>
  )
}
