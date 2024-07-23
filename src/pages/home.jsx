import React, { useState } from 'react';
import ChartComponent from '../component/ChartComponent';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload, faPlus, faExclamationTriangle, faList, faBars } from '@fortawesome/free-solid-svg-icons';

const Home = () => {
  const inventoryStatusData = {
    labels: ['Inventory Status'],
    datasets: [
      {
        label: 'Inventory Status',
        data: [80],
        backgroundColor: ['#10B981'],
        borderColor: ['#065F46'],
        borderWidth: 1,
      },
    ],
  };

  const revenueData = {
    labels: ['Revenue'],
    datasets: [
      {
        label: 'Revenue',
        data: [8555875],
        backgroundColor: ['#fbbf24'],
        borderColor: ['#f59e0b'],
        borderWidth: 1,
      },
    ],
  };

  const medicineData = {
    labels: ['Available Medicines'],
    datasets: [
      {
        label: 'Medicines',
        data: [298],
        backgroundColor: ['#3b82f6'],
        borderColor: ['#1d4ed8'],
        borderWidth: 1,
      },
    ],
  };

  const shortageData = {
    labels: ['Shortage'],
    datasets: [
      {
        label: 'Medicine Shortage',
        data: [23],
        backgroundColor: ['#ef4444'],
        borderColor: ['#dc2626'],
        borderWidth: 1,
      },
    ],
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <header className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold text-gray-800 pt-6">Dashboard</h1>
              <button className="bg-green-600 text-white py-2 px-4 rounded flex items-center mt-7">
                <FontAwesomeIcon icon={faDownload} className="mr-2" />
                Download Report
              </button>
      </header>

      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
        <div className="bg-white p-6 rounded shadow-sm text-center card">
          <div className="text-green-500 text-2xl card-header">Good</div>
          <div className="text-xl text-gray-500">Inventory Status</div>
          <ChartComponent type="bar" data={inventoryStatusData} options={{ scales: { y: { beginAtZero: true } } }} />
          <button className="mt-4 text-blue-500">View Detailed Report</button>
        </div>
        <div className="bg-white p-6 rounded shadow-sm text-center card">
          <ChartComponent type="bar" data={revenueData} options={{ scales: { y: { beginAtZero: true } } }} />
          <div className="text-xl text-gray-500 mt-4">Revenue : Jan 2022</div>
          <button className="mt-4 text-blue-500">View Detailed Report</button>
        </div>
        <div className="bg-white p-6 rounded shadow-sm text-center card">
          <ChartComponent type="pie" data={medicineData} options={{ responsive: true }} />
          <div className="text-xl text-gray-500 mt-4">Medicines Available</div>
          <button className="mt-4 text-blue-500">Visit Inventory</button>
        </div>
        <div className="bg-white p-6 rounded shadow-sm text-center card">
          <ChartComponent type="doughnut" data={shortageData} options={{ responsive: true }} />
          <div className="text-xl text-gray-500 mt-4">Medicine Shortage</div>
          <button className="mt-4 text-blue-500">Resolve Now</button>
        </div>
      </section>

      <section className="bg-white p-6 rounded shadow-sm mb-6">
        <h2 className="text-xl font-bold text-gray-800 mb-4">Inventory Management</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-gray-50 p-6 rounded shadow-sm text-center">
            <FontAwesomeIcon icon={faPlus} size="2x" className="text-green-500 mb-2" />
            <div className="text-xl text-gray-800">Add Inventory</div>
            <button className="mt-4 bg-green-500 text-white py-2 px-4 rounded">Add Now</button>
          </div>
          <div className="bg-gray-50 p-6 rounded shadow-sm text-center">
            <FontAwesomeIcon icon={faExclamationTriangle} size="2x" className="text-red-500 mb-2" />
            <div className="text-xl text-gray-800">Report Shortage</div>
            <button className="mt-4 bg-red-500 text-white py-2 px-4 rounded">Report Now</button>
          </div>
          <div className="bg-gray-50 p-6 rounded shadow-sm text-center">
            <FontAwesomeIcon icon={faList} size="2x" className="text-blue-500 mb-2" />
            <div className="text-xl text-gray-800">Short Courses</div>
            <button className="mt-4 bg-blue-500 text-white py-2 px-4 rounded">View Now</button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
