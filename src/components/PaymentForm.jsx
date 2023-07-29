/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import StripeCheckout from 'react-stripe-checkout';
import { getOrderData } from '../api/Checkoutapi';
import { useNavigate, useParams } from 'react-router-dom';

const PaymentForm = () => {
  const navigate = useNavigate();
  const publishableKey = 'pk_test_51NZCjSSItFw7ienzojByqU1Hk1L1qhtdL4wAnkwGKVmzgNt1WblsFx7DU7CVOdOCq0hjtCAnfGiLfK8wHyAhBMfM00Msk0eLJ6'; // Replace with your actual Stripe publishable key
  const { orderID } = useParams();
  const [orderData, setOrderData] = useState(null);

  useEffect(() => {
    const fetchOrderData = async () => {
      try {
        const data = await getOrderData(orderID);
        setOrderData(data);
      } catch (error) {
        console.error('Error fetching order data:', error);
      }
    };

    fetchOrderData();
  }, [orderID]);


  const handlePaymentSuccess = (token) => {
    // Send the payment token to your backend for processing
    alert('Payment successful:', token);
    navigate('/thankyou');
    
  };

  const handlePaymentError = (error) => {
    alert('Payment error:', error);
  };

  return (
    <div>
      <h2>Payment Form</h2>
      {orderData ? (
        <StripeCheckout
          token={handlePaymentSuccess}
          stripeKey={publishableKey}
          amount={orderData.productkaData.price * 100} // Convert price to cents
          currency="INR"
          name="Your Company Name"
          description={orderData.productkaData.description}
          billingAddress={false}
        >
          <button>Pay Now</button>
        </StripeCheckout>
      ) : (
        <p>Loading order data...</p>
      )}
    </div>
  );
};

export default PaymentForm;
