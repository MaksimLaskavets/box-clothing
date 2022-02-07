import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

function StripeCheckoutButton({ price }) {
  const priceForStripe = price * 100;
  const publishableKey = 'pk_test_51KQc3zKNOsg7jF0JQDpe3sRzZEgNf60RRIxP2YcrLm2JtNKiKxJJIVjZ7MDHNJovLEpFCVZ3jTRUskzrf8BRAvRk000Ohr5xv6';

  const onToken = (token) => {
    console.log(token);
	 alert('Payment successful');
  };

  return (
    <StripeCheckout
      label="PAY NOW"
      name="Box-clothing"
      billingAddress
      shippingAddress
      image="https://svgshare.com/i/CUz.svg"
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel="PAY NOW"
      token={onToken}
      stripeKey={publishableKey}
    />
  );
}

export default StripeCheckoutButton;
