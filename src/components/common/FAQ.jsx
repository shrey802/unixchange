/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React from 'react';
import './faq.css'
export default function FaqComponent() {
  return (
    <div className="faq-container">
      <h1>Frequently Asked Questions</h1>

      <div>
        <h3 className="faq-question">1. How can I track my order?</h3>
        <p className="faq-answer">
          To track your order, log in to your account and go to the "Orders" section. You will find the tracking information for your order there.
        </p>
      </div>

      <div>
        <h3 className="faq-question">2. What payment methods do you accept?</h3>
        <p className="faq-answer">
          We accept all major credit and debit cards, as well as PayPal, for online payments. You can choose your preferred payment method during checkout.
        </p>
      </div>

      <div>
        <h3 className="faq-question">3. Can I cancel my order?</h3>
        <p className="faq-answer">
          Yes, you can cancel your order if it has not been shipped yet. To cancel an order, go to the "Orders" section in your account and click on the "Cancel Order" button.
        </p>
      </div>

      <div>
        <h3 className="faq-question">4. How do I return a product?</h3>
        <p className="faq-answer">
          If you are not satisfied with your purchase, you can return the product within 30 days of delivery. Go to the "Returns" section in your account to initiate a return.
        </p>
      </div>

      <div>
        <h3 className="faq-question">5. Do you offer international shipping?</h3>
        <p className="faq-answer">
          Yes, we offer international shipping to most countries. Shipping fees may vary depending on the destination. Please check our shipping page for more information.
        </p>
      </div>
    </div>
  );
}
