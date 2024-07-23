import React from 'react';
import 'tailwindcss/tailwind.css';

const OutOfStock = () => {
  const drugs = [
    { name: 'Drug A', batch: '12345', className: 'Antibiotic', stock: 0 },
    { name: 'Drug B', batch: '67890', className: 'Analgesic', stock: 0 },
    { name: 'Drug C', batch: '11223', className: 'Antiviral', stock: 0 },
    { name: 'Drug D', batch: '44556', className: 'Antipyretic', stock: 0 },
    { name: 'Drug E', batch: '77889', className: 'Antihistamine', stock: 0 },
  ];

  return (
    <div className="bg-gray-100 min-h-screen flex items-center justify-center text-gray-800">
      <div className="container mx-auto p-4 sm:w-11/12 md:w-3/4 lg:w-2/3 xl:w-1/2 mt-10">
        <div className="bg-white shadow-md rounded-lg p-6">
          <h1 className="text-3xl font-bold text-red-600 mb-4">Out of Stock</h1>
          <p className="mb-6 text-gray-700">We apologize, but the following drugs are currently out of stock:</p>
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white border border-gray-300">
              <thead className="bg-gray-200">
                <tr>
                  <th className="w-1/4 py-2 px-4 text-left border-b">Drug Name</th>
                  <th className="w-1/4 py-2 px-4 text-left border-b">Batch Number</th>
                  <th className="w-1/4 py-2 px-4 text-left border-b">Drug Class</th>
                  <th className="w-1/4 py-2 px-4 text-left border-b">Stock Remaining</th>
                </tr>
              </thead>
              <tbody>
                {drugs.map((drug, index) => (
                  <tr key={index} className={`bg-${index % 2 === 0 ? 'gray-50' : 'white'}`}>
                    <td className="border py-2 px-4">{drug.name}</td>
                    <td className="border py-2 px-4">{drug.batch}</td>
                    <td className="border py-2 px-4">{drug.className}</td>
                    <td className="border py-2 px-4">{drug.stock}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-6 text-gray-700">
            For more information or to find alternatives, please contact our support team.
          </p>
        </div>
      </div>
    </div>
  );
};

export default OutOfStock;
