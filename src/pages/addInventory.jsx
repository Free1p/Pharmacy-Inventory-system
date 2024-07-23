import React, { useState } from 'react';

const AddInventory = () => {
  const [formData, setFormData] = useState({
    drugName: '',
    category: '',
    quantity: '',
    expireDate: '',
    price: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Form data:', formData);
  };

  return (
    <div className="container mx-auto p-4 w-full sm:w-3/4">
      <h1 className="text-2xl font-semibold text-green-600 mb-8">Add Inventory</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="drugName" className="block text-gray-700 text-sm font-bold mb-2">Brand Name:</label>
          <input
            type="text"
            id="drugName"
            name="drugName"
            value={formData.drugName}
            onChange={handleChange}
            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="category" className="block text-gray-700 text-sm font-bold mb-2">Category:</label>
          <select
            id="category"
            name="category"
            value={formData.category}
            onChange={handleChange}
            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          >
            <option value="" disabled>Select Category</option>
            <option value="analgesics">Analgesics</option>
            <option value="antibiotics">Antibiotics</option>
            <option value="antidiabetic">Antidiabetic</option>
            {/* Add more options for other categories */}
          </select>
        </div>
        <div className="mb-4">
          <label htmlFor="quantity" className="block text-gray-700 text-sm font-bold mb-2">Quantity:</label>
          <input
            type="number"
            id="quantity"
            name="quantity"
            value={formData.quantity}
            onChange={handleChange}
            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="expireDate" className="block text-gray-700 text-sm font-bold mb-2">Expiration Date:</label>
          <input
            type="date"
            id="expireDate"
            name="expireDate"
            value={formData.expireDate}
            onChange={handleChange}
            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>                           
        <div className="mb-4">
          <label htmlFor="price" className="block text-gray-700 text-sm font-bold mb-2">Cost Price:</label>
          <input
            type="text"
            id="price"
            name="price"
            value={formData.price}
            onChange={handleChange}
            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="flex items-center justify-between">
          <button
            type="submit"
            className="bg-green-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Add Inventory
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddInventory;
