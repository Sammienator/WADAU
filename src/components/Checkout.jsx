// src/components/Checkout.js
import React, { useState } from 'react';
import emailjs from 'emailjs-com';

const Checkout = ({ cart, total, clearCart }) => {
  const [email, setEmail] = useState('');

  const handlePayment = async () => {
    // Simulate payment process
    alert('Payment successful');

    // Send email via EmailJS
    const templateParams = {
      email,
      order: cart.map(item => item.name).join(', '),
      total: `Kshs ${total}`,
    };

    emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', templateParams, 'YOUR_USER_ID')
      .then(response => {
        console.log('SUCCESS!', response.status, response.text);
        clearCart();
      }, error => {
        console.log('FAILED...', error);
      });
  };

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold">Checkout</h2>
      <div className="mt-4">
        <label className="block text-sm font-medium text-gray-700">Email</label>
        <input 
          type="email" 
          value={email} 
          onChange={e => setEmail(e.target.value)} 
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md"
        />
      </div>
      <div className="mt-4 font-bold">
        Total: Kshs {total}
      </div>
      <button onClick={handlePayment} className="mt-4 bg-green-500 text-white py-2 px-4 rounded">
        Pay Now
      </button>
    </div>
  );
};

export default Checkout;
