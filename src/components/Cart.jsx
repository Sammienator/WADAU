// src/components/Cart.js
import React from 'react';

const Cart = ({ cart, removeFromCart, checkout }) => {
  const total = cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold">Shopping Cart</h2>
      {cart.length === 0 ? (
        <p className="mt-4">Your cart is empty.</p>
      ) : (
        <div>
          {cart.map((item, index) => (
            <div key={index} className="flex justify-between mt-4">
              <span>{item.name}</span>
              <span>Kshs {item.price}</span>
              <button onClick={() => removeFromCart(index)} className="ml-4 text-red-500">Remove</button>
            </div>
          ))}
          <div className="mt-4 font-bold">
            Total: Kshs {total}
          </div>
          <button onClick={checkout} className="mt-4 bg-green-500 text-white py-2 px-4 rounded">
            Checkout
          </button>
        </div>
      )}
    </div>
  );
};

export default Cart;
