/* eslint-disable no-unused-vars */
import React, {useState} from 'react'
import '../components/css/productcomp.css'
import { useNavigate } from 'react-router-dom'
import {AiOutlineShoppingCart, AiOutlineArrowLeft} from 'react-icons/ai'
import AddProductComponent from '../components/common/AddProductComponent'
export default function ProductComponent() {
  const navigate = useNavigate();
  function navigateprod(){
    navigate('/addyourproduct');
  }
  function backtohome() {
    navigate('/home');
  }
  return (
    <div className='product-dashboard'>
      <button className='prod-homebtn' onClick={backtohome}><AiOutlineArrowLeft size={13}/> to home</button>
      <button className='prod-addbtn' onClick={navigateprod}>ADD PRODUCT</button>
      <button className='cartbtn'>your <AiOutlineShoppingCart size={13}/></button>

    </div>
  )
}
