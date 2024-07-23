import React from 'react';
import 'tailwindcss/tailwind.css';

const Notifications = () => {
  const notifications = [
    { title: 'Notification Title', message: 'Notification message goes here...' },
    { title: 'Another Notification', message: 'Another message goes here...' },
  ];

  return (
    <div className="bg-gray-100 min-h-screen mt-11 text-gray-800">
      <div className="container p-4">
        <h1 className="text-3xl font-semibold text-green-600 mb-8">Notifications</h1>
        {/* Notification List */}
        <div>
          {notifications.map((notification, index) => (
            <div key={index} className="flex justify-between items-center border border-gray-300 p-4 mb-4 bg-white shadow-md rounded-md">
              <div>
                <h2 className="text-xl font-semibold">{notification.title}</h2>
                <p className="text-gray-600">{notification.message}</p>
              </div>
              <div>
                <button className="px-4 py-2 bg-green-600 hover:bg-green-700 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-green-600 focus:ring-opacity-50">
                  View
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Notifications;
