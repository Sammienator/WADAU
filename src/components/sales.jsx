import React, { useState } from 'react';
import emailjs from 'emailjs-com';

const SalesSection = () => {

   const [selectedItems, setSelectedItems] = useState([]);
  const [total, setTotal] = useState(0);
  const [formVisible, setFormVisible] = useState(false);



  // Form data state
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    location: '',
    transactionCode: ''
  });



  const items = [
    { id: 1, name: 'Merchandise Pack', price: 3000 },
    { id: 2, name: 'Physical Music Copy', price: 1500 },
    { id: 3, name: 'Ticket', price: 500 },
  ];

  const handleSelect = (item) => {
    if (!selectedItems.includes(item.id)) {
      setSelectedItems([...selectedItems, item.id]);
      setTotal(total + item.price);
    } else {
      setSelectedItems(selectedItems.filter(id => id !== item.id));
      setTotal(total - item.price);
    }
  };

  const handleSubmit = () => {
    alert(`Please pay Kshs ${total} via MPESA to 0743794470`);
    setFormVisible(true);
  };
  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    
    emailjs.send('service_94b8hfq', 'template_24zts0o', formData, '1n4kYZP7pVBzRQ71v')
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
        alert('Order submitted successfully!');
      }, (error) => {
        console.log('FAILED...', error);
        alert('Failed to submit order. Please try again.');
      });
  };

  return (
    <div className="sales-section p-4" data-aos="fade-up">
      <h2 className="text-2xl font-bold mb-4">Sales Section</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {items.map(item => (
          <div key={item.id} className="border p-4 rounded-lg">
            <h3 className="text-xl font-semibold">{item.name}</h3>
            <p>Price: Kshs {item.price}</p>
            <button
              className={`mt-2 px-4 py-2 rounded ${selectedItems.includes(item.id) ? 'bg-red-500' : 'bg-green-500'} text-white`}
              onClick={() => handleSelect(item)}
            >
              {selectedItems.includes(item.id) ? 'Remove' : 'Select'}
            </button>
          </div>
        ))}
      </div>
      <div className="mt-4">
        <h3 className="text-xl">Total: Kshs {total}</h3>
        <button onClick={handleSubmit} className="mt-2 px-4 py-2 bg-blue-500 text-white rounded">
          Proceed to Payment
        </button>
      </div>

      {formVisible && (
        <div className="mt-4 p-4 border rounded-lg">
          <h3 className="text-xl mb-4">Enter Your Details</h3>
          <form onSubmit={handleFormSubmit}>
            <div className="mb-2">
              <label className="block text-sm font-medium mb-1" htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleFormChange}
                className="w-full p-2 border rounded"
                required
              />
            </div>
            <div className="mb-2">
              <label className="block text-sm font-medium mb-1" htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleFormChange}
                className="w-full p-2 border rounded"
                required
              />
            </div>
            <div className="mb-2">
              <label className="block text-sm font-medium mb-1" htmlFor="location">Location</label>
              <input
                type="text"
                id="location"
                name="location"
                value={formData.location}
                onChange={handleFormChange}
                className="w-full p-2 border rounded"
                required
              />
            </div>
            <div className="mb-2">
              <label className="block text-sm font-medium mb-1" htmlFor="transactionCode">Transaction Code</label>
              <input
                type="text"
                id="transactionCode"
                name="transactionCode"
                value={formData.transactionCode}
                onChange={handleFormChange}
                className="w-full p-2 border rounded"
                required
              />
            </div>
            <button type="submit" className="mt-2 px-4 py-2 bg-green-500 text-white rounded">Submit</button>
          </form>
        </div>
      )}
    </div>
  );
};

export default SalesSection;
