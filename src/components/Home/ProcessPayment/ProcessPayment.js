import React, { useContext } from 'react';

import {Elements} from '@stripe/react-stripe-js';
import {loadStripe} from '@stripe/stripe-js';
import SimpleCardForm from './SimpleCardForm';
// import { UserContext } from '../../../App';

const stripePromise = loadStripe('pk_test_51IhVepCwOz8Ubk9SmpFRJsYxzjCmyj9Ty7npQUu2kbm7ZezKxOkIy5nx5L4hGFP8udYODp20FHaHJXyYuA26KZFH00wWWuD8pS');

const ProcessPayment = ({handlePayment}) => {
  // const [logInUser,setLogInUser] = useContext(UserContext)
  return (
    <Elements stripe={stripePromise}>
      <SimpleCardForm handlePayment={handlePayment}></SimpleCardForm>
    </Elements>
  );
};

export default ProcessPayment;