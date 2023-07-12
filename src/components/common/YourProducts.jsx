/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import { GetUserProducts } from '../../api/Productapi';
import ProductDisplay from '../common/ProductDisplay';
import { useNavigate } from 'react-router-dom';
import {toast} from 'react-toastify';
export default function YourProducts() {
  const [myproducts, setMyProducts] = useState([]);
  const userID = localStorage.getItem('userID');
  const navigate = useNavigate();
  function handleEdit(productID){
    localStorage.setItem('currentProductID', productID);
    navigate('/editproduct');
  }
  useEffect(() => {
    const fetchMyProducts = async () => {
      try {
        const myProducts = await GetUserProducts(userID);
        setMyProducts(myProducts);
        toast.success('Your products fetched successfully');
      } catch (error) {
        toast.error(error);
      }
    };

    fetchMyProducts();
  }, [userID]);

  return (
    <div>
      <h1 style={{textAlign: 'center'}}>Your Products</h1>
       <ProductDisplay products={myproducts} onEdit={handleEdit}/>
    </div>
  );
}
