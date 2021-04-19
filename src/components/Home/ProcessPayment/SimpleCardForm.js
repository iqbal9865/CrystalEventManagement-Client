import {CardElement, useStripe, useElements} from '@stripe/react-stripe-js';
import React from 'react';
import {useState} from 'react'

const SimpleCardForm = () => {
  const stripe = useStripe();
  const elements = useElements();
  const [paymentError, setPaymentError] = useState(null)

  const handleSubmit = async (event) => {
    // event.preventDefault();
    if (!stripe || !elements) {   
      return;
    }
    const cardElement = elements.getElement(CardElement);
    const {error, paymentMethod} = await stripe.createPaymentMethod({
      type: 'card',
      card: cardElement,
    });
    if (error) {
      setPaymentError(error.message)
    } else {
      console.log('[PaymentMethod]', paymentMethod);
    }
  };
  return (
    <div>
        <form onSubmit={handleSubmit}>
      <CardElement />
      <button style={{padding:'10px 40px', backgroundColor:'#f3c5a8'}} type="submit">
        CheckOut
      </button>
      
    </form>
    {
        paymentError && <p style={{color:'red'}}>{paymentError}</p>
    }
    </div>
  );
};

export default SimpleCardForm;