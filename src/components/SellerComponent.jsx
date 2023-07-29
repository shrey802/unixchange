/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { MaketheuserAseller } from '../api/SellerAPI';
import CryptoJS from 'crypto-js';
import './css/seller.css';
import { useNavigate } from 'react-router-dom';

export default function SellerComponent() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    phoneNumber: '',
    publishableKey: '',
    secretKey: '',
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

    // Encrypt the secret key before sending to the server
    const encryptedSecretKey = CryptoJS.AES.encrypt(formData.secretKey, import.meta.env.VITE_SECRET_KEY).toString();

    // Prepare the data for the API call
    const sellerData = {
      firstName: formData.firstName,
      lastName: formData.lastName,
      phoneNumber: formData.phoneNumber,
      publishableKey: formData.publishableKey,
      secretKey: encryptedSecretKey,
    };
    const userID = localStorage.getItem('userID');
    try {
      await MaketheuserAseller(sellerData, userID);
      alert('You are now a seller!');
      setFormData({
        firstName: '',
        lastName: '',
        phoneNumber: '',
        publishableKey: '',
        secretKey: '',
      });
      setTimeout(() => {
        navigate('/home');
      });
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

        <label htmlFor="publishableKey">Stripe Publishable Key:</label>
        <input
          type="text"
          id="publishableKey"
          name="publishableKey"
          value={formData.publishableKey}
          onChange={handleChange}
          required
        />

        <label htmlFor="secretKey">Stripe Secret Key:</label>
        <input
          type="text"
          id="secretKey"
          name="secretKey"
          value={formData.secretKey}
          onChange={handleChange}
          required
        />

        <button type="submit" className='submit-button'>Submit</button>
      </form>
    </div>
  );
}
