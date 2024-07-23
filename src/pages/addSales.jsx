import React from 'react';
import 'tailwindcss/tailwind.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCamera, faMessage } from '@fortawesome/free-solid-svg-icons';
import Flatpickr from 'react-flatpickr';
import 'flatpickr/dist/flatpickr.min.css';

const AddSales = () => {
  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-semibold mb-6 text-center sm:text-left">Add Sales</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-300">
          <thead>
            <tr>
              <th className="px-6 py-3 bg-gray-100 text-left border-b-2 border-gray-200 text-sm leading-4 font-medium text-gray-600 uppercase tracking-wider">Brand Name</th>
              <th className="px-6 py-3 bg-gray-100 text-left border-b-2 border-gray-200 text-sm leading-4 font-medium text-gray-600 uppercase tracking-wider">Quantity</th>
              <th className="px-6 py-3 bg-gray-100 text-left border-b-2 border-gray-200 text-sm leading-4 font-medium text-gray-600 uppercase tracking-wider">Price</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">Emzor Paracetamol</td>
              <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">2</td>
              <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">400</td>
            </tr>
            {/* Add more rows as needed */}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AddSales;
