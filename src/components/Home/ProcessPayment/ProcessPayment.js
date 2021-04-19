import React from 'react';

import {Elements} from '@stripe/react-stripe-js';
import {loadStripe} from '@stripe/stripe-js';
import SimpleCardForm from './SimpleCardForm';

const stripePromise = loadStripe('pk_test_51IhVepCwOz8Ubk9SmpFRJsYxzjCmyj9Ty7npQUu2kbm7ZezKxOkIy5nx5L4hGFP8udYODp20FHaHJXyYuA26KZFH00wWWuD8pS');

const ProcessPayment = () => {
  return (
    <Elements stripe={stripePromise}>
      <SimpleCardForm></SimpleCardForm>
    </Elements>
  );
};

export default ProcessPayment;