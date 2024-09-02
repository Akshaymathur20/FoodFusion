import React, { useState } from 'react';
import axios from '../services/api.js';

function OrderPage() {
  const [orderDetails, setOrderDetails] = useState({
    items: [],
    paymentMethod: '',
    deliveryAddress: '',
  });

  const handleOrderSubmit = () => {
    axios.post('/orders', orderDetails)
      .then(response => {
        console.log('Order placed successfully:', response.data);
      })
      .catch(error => console.error(error));
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold">Your Order</h1>
      
      <button
        onClick={handleOrderSubmit}
        className="bg-blue-500 text-white px-4 py-2 mt-4 rounded">
        Confirm Order
      </button>
    </div>
  );
}

export default OrderPage;
