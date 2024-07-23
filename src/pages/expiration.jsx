import React from 'react';
import 'tailwindcss/tailwind.css';

const ExpirationDateAlerts = () => {
  const drugs = [
    { name: 'Drug A', batch: '10101', expiration: '30/05/2024', daysLeft: 13 },
    { name: 'Drug B', batch: '10102', expiration: '30/05/2024', daysLeft: 13 },
    { name: 'Drug C', batch: '10103', expiration: '30/05/2024', daysLeft: 13 },
  ];

  return (
    <div className="bg-gray-100 min-h-screen text-gray-800 mt-16 overflow-x-auto">
      <div className="container">
        <div className="bg-white shadow-md rounded-lg p-6">
          <h1 className="text-3xl font-bold text-red-600 mb-4">Expiration Date Alerts</h1>
          <p className="mb-6 text-gray-700">The following drugs are nearing their expiration dates. Please take appropriate action:</p>
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white">
              <thead className="bg-gray-200">
                <tr>
                  <th className="w-1/4 py-2 px-4 text-left">Drug Name</th>
                  <th className="w-1/4 py-2 px-4 text-left">Batch Number</th>
                  <th className="w-1/4 py-2 px-4 text-left">Expiration Date</th>
                  <th className="w-1/4 py-2 px-4 text-left">Days Until Expiration</th>
                </tr>
              </thead>
              <tbody>
                {drugs.map((drug, index) => (
                  <tr key={index} className={`bg-${index % 2 === 0 ? 'gray-50' : 'white'}`}>
                    <td className="border py-2 px-4">{drug.name}</td>
                    <td className="border py-2 px-4">{drug.batch}</td>
                    <td className="border py-2 px-4">{drug.expiration}</td>
                    <td className="border py-2 px-4">{drug.daysLeft}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExpirationDateAlerts;
