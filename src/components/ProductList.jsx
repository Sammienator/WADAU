// src/components/ProductList.js
import React from 'react';
import 'tailwindcss/tailwind.css';
import 'aos/dist/aos.css';
import AOS from 'aos';

const products = [
  { id: 1, name: 'T-Shirt', price: 2000 }, // Assuming price in Kshs
  { id: 2, name: 'Physical Music Copy', price: 1500 },
  { id: 3, name: 'Ticket', price: 1000 },
];

const ProductList = ({ addToCart }) => {
  AOS.init();

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      {products.map(product => (
        <div key={product.id} data-aos="fade-up" className="border p-4">
          <h2 className="text-lg font-semibold">{product.name}</h2>
          <p className="mt-2">Kshs {product.price}</p>
          <button 
            onClick={() => addToCart(product)} 
            className="mt-4 bg-blue-500 text-white py-2 px-4 rounded"
          >
            Add to Cart
          </button>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
