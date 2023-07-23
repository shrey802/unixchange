/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import {} from '../../api/Cartapi'

import {GetCartItems, DeleteCartItem, UpdateQuantityofProduct} from '../../api/Cartapi'
export default function CartPage() {
  const [cartitems, setCartItems] = useState([]);
  const buyerID = localStorage.getItem('userID');

  useEffect(() => {
    const fetchCartItems = async () => {
      try {
        const allcartitems = await GetCartItems(buyerID);
        setCartItems(allcartitems);
      } catch (error) {
        console.log(error.message);
      }
    };

    fetchCartItems();
  }, [cartitems]);

  const removeItemsfromcart = async (productID) => {
    try {
      await DeleteCartItem(productID);
      setCartItems((prevCartitems) => prevCartitems.filter((product) => product.productData.productID !== productID));
    } catch (error) {
      console.log(error);
    }
  }

  const updateQuantity = async (productID, newQuantity) => {
    await UpdateQuantityofProduct(productID, newQuantity);
    setCartItems((prevCartitems) =>
      prevCartitems.map((item) =>
        item.productData.productID === productID
          ? { ...item, quantity: newQuantity }
          : item
      )
    );
  };
  

  if (cartitems === null) {
    return <div>Loading...</div>;
  }

  if (cartitems.length === 0) {
    return <div>Your cart is empty.</div>;
  }

  return (
    <div>
      <h1>YOUR CART ITEMS</h1>
      {cartitems.map((product) => (
        <div key={product.productData.productID}>
          <img src={product.productData.images[0]} alt={`Product ${product.productData.productID}`} />
          <h3>{product.productData.name}</h3>
          <p>{product.productData.description}</p>
          <p>Price: ₹{product.productData.price}</p>
          <input type="number" value={product.quantity} 
          onChange={(e) => updateQuantity(product.productData.productID, e.target.value)}
          />
          <button onClick={() => removeItemsfromcart(product.productData.productID)}>Remove from Cart</button>
        </div>
      ))}
    </div>
  );
}
