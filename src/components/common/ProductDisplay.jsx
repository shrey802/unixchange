/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';
import './display.css';
import { Link } from 'react-router-dom';
import {toast} from 'react-toastify'
import {AddToCart} from '../../api/Productapi'
export default function ProductDisplay({ products, onEdit, onDelete, showButtons }) {
  function handleindiprod(productID){
    localStorage.setItem('productID', productID);
  }
  function handleAddToCart(productID){
    AddToCart(productID);
    toast.success('Product added to cart successfully')
  }
  return (
    <div className='productGrid'>
      {products.map((product) => (
        <div key={product.id} className='productCard'>
          <div className='imageContainer'>
            <img src={product.images[0]} alt={`Product ${product.id}`} className='productImage' />
          </div>
          <p className='productName'>{product.name}</p>
          <p className='productDescription'>{product.description.substring(0, 50)}...</p>
          <div className='categoryContainer'>
            <span className='productCategory'>{product.category}</span>
          </div>
          <Link to={`/products/${product.productID}`} className='viewButton' onClick={() => handleindiprod(product.productID)}>
            View Details
          </Link> <br/>
          <button className='addtocartbtn' onClick={() => handleAddToCart(product.productID)}>
              Add to Cart
          </button>
          {showButtons && (
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <button className="editButton" onClick={() => onEdit(product.productID)}>Edit</button>
            <button className="deleteButton" onClick={() => onDelete(product.productID)}>Delete</button>
          </div>
          )}
        </div>
      ))}
    </div>
  );
}
