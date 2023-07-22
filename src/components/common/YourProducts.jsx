/* eslint-disable no-unused-vars */

import React, { useState, useEffect } from 'react';
import { GetUserProducts, DeleteProduct } from '../../api/Productapi';
import ProductDisplay from '../common/ProductDisplay';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

export default function YourProducts() {
  const [myproducts, setMyProducts] = useState([]);
  const userID = localStorage.getItem('userID');
  const navigate = useNavigate();

  const home = () => {
    navigate('/products');
  };

  const handleEdit = (productID) => {
    localStorage.setItem('currentProductID', productID);
    navigate('/editproduct');
  };

  const handleDelete = async (productID) => {
    try {
      await DeleteProduct(productID);
      setMyProducts((prevProducts) => prevProducts.filter((product) => product.productID !== productID));
      toast.success('Product deleted successfully');
    } catch (error) {
      toast.error('Error deleting product');
    }
  };

  useEffect(() => {
    const fetchMyProducts = async () => {
      try {
        const myProducts = await GetUserProducts(userID);
        setMyProducts(myProducts);
      } catch (error) {
        toast.error(error);
      }
    };

    fetchMyProducts();
  }, [userID]);

  return (
    <div>
      <button onClick={home} style={{ textAlign: 'center', margin: '20px' }}>
        Back to Home
      </button>
      <h1 style={{ textAlign: 'center' }}>Your Products</h1>
      <ProductDisplay products={myproducts} onEdit={handleEdit} onDelete={handleDelete} showButtons />
    </div>
  );
}
