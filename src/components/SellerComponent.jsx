/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { MaketheuserAseller } from '../api/SellerAPI';
import CryptoJS from 'crypto-js';
import './css/seller.css'
import { useNavigate } from 'react-router-dom';
export default function SellerComponent() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    phoneNumber: '',
    merchantId: '',
    publicKey: '',
    privateKey: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Encrypt the Braintree keys before sending to the server
    const encryptedMerchantId = CryptoJS.AES.encrypt(formData.merchantId, import.meta.env.VITE_MERCHANT_KEY).toString();
    const encryptedPublicKey = CryptoJS.AES.encrypt(formData.publicKey, import.meta.env.VITE_MERCHANT_KEY).toString();
    const encryptedPrivateKey = CryptoJS.AES.encrypt(formData.privateKey, import.meta.env.VITE_MERCHANT_KEY).toString();

    // Prepare the data for the API call
    const sellerData = {
      firstName: formData.firstName,
      lastName: formData.lastName,
      phoneNumber: formData.phoneNumber,
      merchantId: encryptedMerchantId,
      publicKey: encryptedPublicKey,
      privateKey: encryptedPrivateKey,
    };
    const userID = localStorage.getItem('userID');
    try {
      await MaketheuserAseller(sellerData, userID);
      alert('You are now a seller!');
      setFormData({
        firstName: '',
        lastName: '',
        phoneNumber: '',
        merchantId: '',
        publicKey: '',
        privateKey: '',
      });
      setTimeout(() => {
        navigate('/home')
      })
    } catch (error) {
      alert('Error occurred while becoming a seller.');
      console.log(error);
    }
  };

  return (
    <div className='seller-form'>
      <h2>Become a Seller</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="firstName">First Name:</label>
        <input
          type="text"
          id="firstName"
          name="firstName"
          value={formData.firstName}
          onChange={handleChange}
          required
        />

        <label htmlFor="lastName">Last Name:</label>
        <input
          type="text"
          id="lastName"
          name="lastName"
          value={formData.lastName}
          onChange={handleChange}
          required
        />

        <label htmlFor="phoneNumber">Phone Number:</label>
        <input
          type="tel"
          id="phoneNumber"
          name="phoneNumber"
          value={formData.phoneNumber}
          onChange={handleChange}
          required
        />

        <label htmlFor="merchantId">Braintree Merchant ID:</label>
        <input
          type="text"
          id="merchantId"
          name="merchantId"
          value={formData.merchantId}
          onChange={handleChange}
          required
        />

        <label htmlFor="publicKey">Braintree Public Key:</label>
        <input
          type="text"
          id="publicKey"
          name="publicKey"
          value={formData.publicKey}
          onChange={handleChange}
          required
        />

        <label htmlFor="privateKey">Braintree Private Key:</label>
        <input
          type="text"
          id="privateKey"
          name="privateKey"
          value={formData.privateKey}
          onChange={handleChange}
          required
        />

        <button type="submit" className='submit-button'>Submit</button>
      </form>
    </div>
  );
}
