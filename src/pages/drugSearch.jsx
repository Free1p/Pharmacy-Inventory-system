import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCamera, faMessage } from '@fortawesome/free-solid-svg-icons';
import 'tailwindcss/tailwind.css';

const DrugSearch = () => {
  const [isChatOpen, setIsChatOpen] = useState(false);

  const openChat = () => {
    setIsChatOpen(true);
  };

  const closeChat = () => {
    setIsChatOpen(false);
  };

  return (
    <div className="bg-gray-100 min-h-screen">
      <div className="container mx-auto p-4">
        <div className="bg-white p-6 rounded-lg shadow-lg mt-10">
          <h2 className="text-green-600 text-2xl font-bold mb-4">Drug Search</h2>
          <form id="searchForm" className="mb-6">
            <div className="flex flex-col sm:flex-row border-b py-2">
              <input
                id="searchInput"
                className="appearance-none bg-transparent border-none w-full py-1 px-2 leading-tight focus:outline-none mb-2 sm:mb-0 sm:mr-3"
                type="text"
                placeholder="Search for a drug..."
                aria-label="Drug name"
              />
              <button
                className="flex-shrink-0 text-sm border-4 text-black py-1 px-2 rounded"
                type="button"
              >
                <FontAwesomeIcon icon={faCamera} />
              </button>
            </div>
          </form>

          <div id="results" className="mt-6 space-y-4">
            {[
              {
                imgSrc: './images/flat-design-pharmacy-logo-template_23-2149510261.avif',
                name: 'Otalidon',
                company: 'Zena Pharmaceuticals',
                price: 'N800',
                location: 'Abakpa, Enugu',
              },
              {
                imgSrc: '/assets/medical-pharmacy-logo-design-vector.jpg',
                name: 'Otalidon',
                company: 'Dr Banger Pharmaceuticals',
                price: 'N750',
                location: '789 Dr Banger Avenue',
              },
              {
                imgSrc: './images/pharmacy-logo-with-caduceus-snake_859323-216.avif',
                name: 'Otalidon',
                company: 'Jeffrey Pharmaceuticals',
                price: 'N700',
                location: 'Transekulu, Enugu',
              },
            ].map((drug, index) => (
              <div
                key={index}
                className="bg-gray-100 p-4 rounded-lg shadow-md flex flex-col sm:flex-row items-start"
              >
                <img
                  src={drug.imgSrc}
                  alt={drug.name}
                  className="w-20 h-20 object-cover rounded-lg mb-4 sm:mb-0 sm:mr-4"
                />
                <div className="flex-grow">
                  <h3 className="text-xl font-semibold mb-2">{drug.name}</h3>
                  <div className="mb-2">
                    <span className="font-medium">{drug.company}</span>
                    <span className="text-green-500 ml-2">{drug.price}</span>
                    <p className="text-gray-600">Location: {drug.location}</p>
                  </div>
                </div>
                <div className="flex items-center mt-4 sm:mt-0">
                  <button
                    className="text-green-600 px-3 py-2 rounded-lg"
                    onClick={openChat}
                  >
                    <FontAwesomeIcon icon={faMessage} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {isChatOpen && (
        <div className="chat-modal fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white rounded-lg shadow-lg p-6 w-11/12 sm:w-1/2">
            <div className="flex justify-between items-center border-b pb-3 mb-3">
              <h3 className="text-xl font-semibold">Chat with Us</h3>
              <button className="text-red-500" onClick={closeChat}>
                X
              </button>
            </div>
            <div className="chat-messages h-64 overflow-y-auto border-b mb-3 p-3">
              {/* Chat messages will be displayed here */}
            </div>
            <div className="flex items-center">
              <input
                type="text"
                className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="Type a message..."
              />
              <button className=" text-white px-3 py-2 rounded ml-2">
                Send
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default DrugSearch;
