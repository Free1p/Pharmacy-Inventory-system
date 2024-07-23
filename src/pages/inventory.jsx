import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';

library.add(fas);

const PharmacyInventory = () => {
  const handleEdit = () => {
    // Implement edit functionality here
    alert('Edit functionality to be implemented');
  };

  const handleDelete = () => {
    // Implement delete functionality here
    alert('Delete functionality to be implemented');
  };

  return (
    <div className="bg-gray-100 min-h-screen">
      <div className="container mx-auto p-2 sm:w-3/4 w-full">
        <h1 className="text-2xl font-semibold text-green-600 mb-8 text-center sm:text-left">
          Pharmacy Inventory
        </h1>

        {/* Drug Categories */}
        <div className="mb-8">
          <h2 className="text-xl font-semibold mb-4 text-center sm:text-left">Drug Categories</h2>
          <form className="mb-4">
            <div className="flex flex-col sm:flex-row items-center justify-center sm:justify-start mb-2">
              <input
                type="text"
                placeholder="Drug Name"
                className="flex-grow px-4 py-2 mr-0 sm:mr-2 mb-2 sm:mb-0 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
              />
              <select className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent">
                <option value="" disabled selected>
                  Select Category
                </option>
                <option value="analgesics">Analgesics</option>
                <option value="antibiotics">Antibiotics</option>
                <option value="antidiabetic">Antidiabetic</option>
                {/* Add more options for other categories */}
              </select>
            </div>
          </form>
        </div>

        {/* Inventory Table */}
        <div className="overflow-x-auto">
          <table className="w-full border-collapse border border-gray-300">
            <thead>
              <tr>
                <th className="px-4 py-2 bg-gray-100 border border-gray-300 text-left">Drug Name</th>
                <th className="px-4 py-2 bg-gray-100 border border-gray-300 text-left">Quantity</th>
                <th className="px-4 py-2 bg-gray-100 border border-gray-300 text-left">Cost Price</th>
                <th className="px-4 py-2 bg-gray-100 border border-gray-300 text-left">Sales Price</th>
                <th className="px-4 py-2 bg-gray-100 border border-gray-300 text-left">Exp Date</th>
                <th className="px-4 py-2 bg-gray-100 border border-gray-300 text-left">Actions</th>
              </tr>
            </thead>
            <tbody>
              {/* Sample Inventory Data (Replace with dynamic data from backend) */}
              <tr>
                <td className="px-4 py-2 border border-gray-300">Paracetamol</td>
                <td className="px-4 py-2 border border-gray-300">10</td>
                <td className="px-4 py-2 border border-gray-300">N180</td>
                <td className="px-4 py-2 border border-gray-300">N200</td>
                <td className="px-4 py-2 border border-gray-300">20-10-2024</td>
                <td className="px-4 py-2 border border-gray-300">
                  <button
                    onClick={handleEdit}
                    className="px-4 py-1 bg-green-600 hover:bg-blue-700 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-opacity-50 mr-2"
                  >
                    <FontAwesomeIcon icon={faEdit} />
                  </button>
                  <button
                    onClick={handleDelete}
                    className="px-4 py-1 bg-red-600 hover:bg-red-700 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-red-600 focus:ring-opacity-50"
                  >
                    <FontAwesomeIcon icon={faTrashAlt} />
                  </button>
                </td>
              </tr>
              {/* More rows here */}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default PharmacyInventory;
