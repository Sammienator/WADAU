import React from 'react';

const itemsForSale = [
  {
    name: "T-Shirt",
    description: "High-quality cotton T-shirt with a stylish design.",
    price: "Kshs 2500",
    image: "https://via.placeholder.com/150",
  },
  {
    name: "Music CD",
    description: "Physical copy of our latest album.",
    price: "Kshs 1500",
    image: "https://via.placeholder.com/150",
  },
  {
    name: "Concert Ticket",
    description: "Ticket for our upcoming live concert.",
    price: "Kshs 5000",
    image: "https://via.placeholder.com/150",
  },
];

const SalesComponent = ({ addToCart }) => {
  return (
    <div className="max-w-6xl mx-auto p-8">
      <h2 className="text-3xl font-bold text-center mb-8">Items for Sale</h2>
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {itemsForSale.map((item, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow-md" data-aos="fade-up">
            <img src={item.image} alt={item.name} className="w-full h-48 object-cover mb-4 rounded" />
            <h3 className="text-xl font-bold mb-2">{item.name}</h3>
            <p className="text-gray-700 mb-2">{item.description}</p>
            <p className="text-gray-900 font-semibold mb-4">{item.price}</p>
            <button 
              className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
              onClick={() => addToCart(item)}
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SalesComponent;
