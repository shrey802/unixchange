/* eslint-disable no-unused-vars */
import React from "react";

export default function CartPage() {
  const cart = JSON.parse(localStorage.getItem("cart"));

  if (!cart || cart.length === 0) {
    return <div>Your cart is empty.</div>;
  }

  return (
    <div>
      <h2>Your Cart</h2>
      <table>
        <thead>
          <tr>
            <th>Product Name</th>
            
            <th>Price</th>
            
          </tr>
        </thead>
        <tbody>
          {cart.map((item) => (
            <tr key={item.productID}>
              <td>{item.name}</td>
             
              <td>₹{item.price}</td>
              
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
