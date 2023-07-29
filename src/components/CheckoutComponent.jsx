/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { createOrder } from '../api/Checkoutapi';
import { useParams } from 'react-router-dom';
import './css/address.css'
export default function CheckoutComponent() {
  const { productID } = useParams();
  const [addressFormData, setAddressFormData] = useState({
    addressLine1: '',
    addressLine2: '',
    city: '',
    state: '',
    zipCode: '',
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setAddressFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    try {
      // Get the buyerID from local storage
      const buyerID = localStorage.getItem('userID');
     
      // Create the address object from the form data
      const address = {
        addressLine1: addressFormData.addressLine1,
        addressLine2: addressFormData.addressLine2,
        city: addressFormData.city,
        state: addressFormData.state,
        zipCode: addressFormData.zipCode,
      };
      
      // Create the order and pass buyerID, productID, and address
      const orderID = await createOrder(address, buyerID, productID);
  
      // Handle success or redirect to a confirmation page
      console.log('Order created successfully:', orderID);

      setAddressFormData({
        addressLine1: '',
        addressLine2: '',
        city: '',
        state: '',
        zipCode: '',
      })


    } catch (error) {
      // Handle the error, e.g., show an error message to the user
      console.error(error);
    }
  };

  return (
    <div className='checkout-container'>
      <h2>Enter Your Address Details</h2>
      <form onSubmit={handleFormSubmit}>
        <label htmlFor='addressLine1'>Address Line 1:</label>
        <input
          type='text'
          id='addressLine1'
          name='addressLine1'
          value={addressFormData.addressLine1}
          onChange={handleInputChange}
          required
        />

        <label htmlFor='addressLine2'>Address Line 2:</label>
        <input
          type='text'
          id='addressLine2'
          name='addressLine2'
          value={addressFormData.addressLine2}
          onChange={handleInputChange}
        />

        <label htmlFor='city'>City:</label>
        <input
          type='text'
          id='city'
          name='city'
          value={addressFormData.city}
          onChange={handleInputChange}
          required
        />

        <label htmlFor='state'>State:</label>
        <input
          type='text'
          id='state'
          name='state'
          value={addressFormData.state}
          onChange={handleInputChange}
          required
        />

        <label htmlFor='zipCode'>Zip Code:</label>
        <input
          type='text'
          id='zipCode'
          name='zipCode'
          value={addressFormData.zipCode}
          onChange={handleInputChange}
          required
        />

        <button type='submit'>Place Order</button>
      </form>
    </div>
  );
}
