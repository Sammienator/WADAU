import React, { useEffect, useState } from 'react';

const CartComponent = ({ cartItems, removeFromCart }) => {
  const [total, setTotal] = useState(0);

  useEffect(() => {
    const calculateTotal = () => {
      const totalAmount = cartItems.reduce((acc, item) => {
        const price = parseFloat(item.price.replace('Kshs ', ''));
        return acc + price;
      }, 0);
      setTotal(totalAmount);
    };

    calculateTotal();
  }, [cartItems]);

  return (
    <div className="max-w-6xl mx-auto p-8">
      <h2 className="text-3xl font-bold text-center mb-8">Shopping Cart</h2>
      {cartItems.length === 0 ? (
        <p className="text-center text-gray-700">Your cart is empty.</p>
      ) : (
        <div className="grid gap-8">
          {cartItems.map((item, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md flex justify-between items-center">
              <div className="flex items-center">
                <img src={item.image} alt={item.name} className="w-12 h-12 object-cover rounded mr-4" />
                <div>
                  <h3 className="text-xl font-bold">{item.name}</h3>
                  <p className="text-gray-700">{item.price}</p>
                </div>
              </div>
              <button 
                className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded"
                onClick={() => removeFromCart(index)}
              >
                Remove
              </button>
            </div>
          ))}
          <div className="text-right">
            <h3 className="text-xl font-bold">Total: Kshs {total.toFixed(2)}</h3>
          </div>
        </div>
      )}
    </div>
  );
};

export default CartComponent;
