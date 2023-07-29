/* eslint-disable no-unused-vars */

import React, { useState, useEffect } from "react";
import './cart.css'
import { GetCartItems, DeleteCartItem, UpdateQuantityofProduct } from '../../api/Cartapi';
import { useNavigate, Link } from "react-router-dom";
export default function CartPage() {
  const navigate = useNavigate();
  const [cartitems, setCartItems] = useState([]);
  const buyerID = localStorage.getItem('userID');
// GET THE ITEMS IN PARTICULAR USER'S CART
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
  }, [buyerID, cartitems]);

// function gotocheckout(){
//   navigate('/checkout/${productID}')
// }

// DELETE ITEMS FROM CART
  const removeItemsfromcart = async (productID) => {
    try {
      await DeleteCartItem(productID);
      setCartItems((prevCartitems) => prevCartitems.filter((product) => product.productData.productID !== productID));
    } catch (error) {
      console.log(error);
    }
  }
// TO UPDATE THE QUANTITY OF A PARTICULAR PRODUCT
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
// IF IT IS NULL
  if (cartitems.length === null) {
    return <div>Loading...</div>;
  }
// IF EMPTY
  if (cartitems.length === 0) {
    return <div>Your cart is empty</div>;
  }
// DISPLAYS ALL THE PRODUCTS IN CART
  return (
    <div>
      <h1 className="titles">Your Cart</h1>
    <div className="cart-container">
      {cartitems.map((product) => (
        <div className="cart-card" key={product.productData.productID}>
          <div>
            <img
              src={product.productData.images[0]}
              alt={`Product ${product.productData.productID}`}
              className="cart-product-image"
            />
          </div>
          <div className="cart-product-details">
            <h3 className="cart-product-name">{product.productData.name}</h3>
            <p className="cart-product-description">
              {product.productData.description.substring(0, 90)}
              {product.productData.description.length > 90 && "..."}
            </p>
            <p className="cart-product-price">Price: ₹<span className="pricepirce">{product.productData.price}</span></p>
            <input
              className="cart-quantity-input"
              type="number"
              value={product.quantity}
              onChange={(e) =>
                updateQuantity(product.productData.productID, e.target.value)
              }
              style={{width: '120px', height: '30px'}}
            /> <br/>
            <button
              className="cart-remove-button"
              onClick={() => removeItemsfromcart(product.productData.productID)}
            >
              Remove from Cart
            </button> <br/>
            <Link to={`/checkout/${product.productData.productID}`}>Checkout</Link>
          </div>
        </div>
      ))}
    </div>
    </div>
  );
}
