/* eslint-disable no-unused-vars */
import React from 'react';
import StripeCheckout from 'react-stripe-checkout';
import { useNavigate } from 'react-router-dom';
const PaymentForm = () => {
  const navigate = useNavigate();
  // Replace 'YOUR_PUBLISHABLE_KEY' with your actual Stripe publishable key
  const publishableKey = 'pk_test_51NZCjSSItFw7ienzojByqU1Hk1L1qhtdL4wAnkwGKVmzgNt1WblsFx7DU7CVOdOCq0hjtCAnfGiLfK8wHyAhBMfM00Msk0eLJ6';

  const handlePaymentSuccess = (token) => {
    // Send the payment token to your backend for processing
    alert('Payment successful:', token);
    navigate('/thankyou')
  };

  const handlePaymentError = (error) => {
    alert('Payment error:', error);
  };

  return (
    <div>
      <h2>Payment Form</h2>
      <StripeCheckout
        token={handlePaymentSuccess}
        stripeKey={publishableKey}
        amount={1000} // Amount in cents (replace with the actual amount)
        currency="USD" // Replace with your preferred currency code
        name="Your Company Name"
        description="Test Payment"
        billingAddress={false}
      >
        <button>Pay Now</button>
      </StripeCheckout>
    </div>
  );
};

export default PaymentForm;
