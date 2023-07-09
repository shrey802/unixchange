/* eslint-disable no-unused-vars */
import React from 'react'
import { useNavigate } from "react-router-dom";
import '../components/css/homedata.css';
export default function HomeDataComponent() {
  const navigate = useNavigate();
  function navigatetoprod() {
    navigate('/products');
  }
  return (
    <div className='home-data-container'>
        <div className='headingofhome'>
            <marquee direction="up">BUY & SELL</marquee>
            <h4>YOUR PRODUCTS</h4>
            <hr/> 
        </div>
        <div className='btn-container'>
        <button className='btn-prod' onClick={navigatetoprod}>go to products</button>
        </div>
        <div className='main-content'>
            <div className='middle'>
                <h5>Ecommerce has transformed industries, empowering small businesses and entrepreneurs 
                  to compete with larger entities, while consumers enjoy a wide range of choices, 
                  competitive pricing, and the ease of online transactions.
                </h5>
            </div>
            
        </div>
    </div>
  )
}
