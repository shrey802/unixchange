/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';
import './display.css';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import { AddingtoRealtimeCart} from '../../api/Cartapi'
import {GetProductforCart} from '../../api/Productapi'
export default function ProductDisplay({ products, onEdit, onDelete, showButtons, searchQuery }) {
  // INDIVIDUAL PRODUCT
  function handleindiprod(productID) {
    localStorage.setItem('productID', productID);
  }
 // ADDING TO CART
  const handleProductID_for_addingto_cart = async(productID) => {
    try {
      const theproduct = await GetProductforCart(productID);
      const buyerID = localStorage.getItem('userID');
      await AddingtoRealtimeCart(theproduct, buyerID);
    } catch (error) {
      toast.error('Error adding product to cart');
    }
  }

  // Function to filter products based on search query
  const filteredProducts = searchQuery
    ? products.filter((product) => product.name.toLowerCase().includes(searchQuery.toLowerCase()))
    : products;

  return (
    <div className="productGrid">
      {filteredProducts.map((product) => (
        <div key={product.id} className="productCard">
          <div className="imageContainer">
            <img src={product.images[0]} alt={`Product ${product.id}`} className="productImage" />
          </div>
          <p className="productName">{product.name}</p>
          <p className="productDescription">{product.description.substring(0, 50)}...</p>
          <div className="categoryContainer">
            <span className="productCategory">{product.category}</span>
          </div>
          <Link
            to={`/products/${product.productID}`}
            className="viewButton"
            onClick={() => handleindiprod(product.productID)}
          >
            View Details
          </Link>{' '}
          <br />

          {location.pathname !== '/myproducts' && (
            <button className="addtocartbtn" onClick={() => handleProductID_for_addingto_cart(product.productID)}>
              Add to Cart
            </button>
          )}
        {/* ONLY SHOW IF ROUTE IS DIFFERENT */}
          {showButtons && (
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <button className="editButton" onClick={() => onEdit(product.productID)}>
                Edit
              </button>
              <button className="deleteButton" onClick={() => onDelete(product.productID)}>
                Delete
              </button>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
