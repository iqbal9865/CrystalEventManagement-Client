import {CardElement, useStripe, useElements} from '@stripe/react-stripe-js';
import React, { useContext } from 'react';
import {useState} from 'react'
import { UserContext } from '../../../App';

const SimpleCardForm = ({handlePayment}) => {
  // const {name} = booking;
  // const [logInUser,setLogInUser] = useContext(UserContext)
  const stripe = useStripe();
  const elements = useElements();
  const [paymentError, setPaymentError] = useState(null)
  const [paymentSuccess, setPaymentSuccess] = useState(null)

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!stripe || !elements) {   
      return;
    }
    const cardElement = elements.getElement(CardElement);
    const {error, paymentMethod} = await stripe.createPaymentMethod({
      type: 'card',
      card: cardElement,
    });
    if (error) {
      setPaymentError(error.message);
      setPaymentSuccess(null);
    } else {
        setPaymentSuccess(paymentMethod.id);
        setPaymentError(null);
        handlePayment(paymentMethod.id)
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
    {
      paymentSuccess && <p style={{color:'green'}}>Your Payment Successful</p>
    }
    </div>
  );
};

export default SimpleCardForm;