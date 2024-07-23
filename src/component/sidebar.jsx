// src/component/Sidebar.jsx
import React from 'react';
import Logo from '../assets/fffaa.png';
import Avatar from '../assets/avatar.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faBoxes, faPlusCircle, faFolderOpen, faSearch, faChartLine, faBell, faExclamationTriangle, faHourglassEnd, faCog } from '@fortawesome/free-solid-svg-icons';

const Sidebar = ({ togglePage, menuOpen, toggleMenu }) => {
  return (
    <div
      id="sidebar"
      className={`w-64 bg-green-700 text-white p-4 h-screen fixed overflow-y-auto lg:relative lg:flex lg:flex-col transform transition-transform duration-200 ease-in-out ${menuOpen ? 'translate-x-0' : '-translate-x-full'} lg:translate-x-0`}
    >
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center">
          <img src={Logo} alt="Logo" className="rounded-full h-8 mr-2" />
          <span className="text-xl font-bold">Loreum Pharmacy</span>
        </div>
      </div>
      <div className="flex items-center mb-6">
        <div className="bg-gray-800 p-2 rounded-full">
          <img src={Avatar} alt="Avatar" className="h-8 w-8 rounded-full" />
        </div>
        <div className="ml-3">
          <div className="font-bold">Pharm Praise</div>
          <div className="text-sm text-gray-400">Super Admin</div>
        </div>
      </div>
      <nav className="space-y-2 flex-grow">
        <a href="#" className="py-2 px-3 rounded hover:bg-gray-800 flex items-center" onClick={() => { togglePage('home'); toggleMenu(); }}>
          <FontAwesomeIcon icon={faHome} className="mr-2" />
          Dashboard
        </a>
        <a href="#" className="py-2 px-3 rounded hover:bg-gray-800 flex items-center" onClick={() => { togglePage('inventory'); toggleMenu(); }}>
          <FontAwesomeIcon icon={faBoxes} className="mr-2" />
          Inventory
        </a>
        <a href="#" className="py-2 px-3 rounded hover:bg-gray-800 flex items-center" onClick={() => { togglePage('addInventory'); toggleMenu(); }}>
          <FontAwesomeIcon icon={faPlusCircle} className="mr-2" />
          Add Inventory
        </a>
        <a href="#" className="py-2 px-3 rounded hover:bg-gray-800 flex items-center" onClick={() => { togglePage('patientFolder'); toggleMenu(); }}>
          <FontAwesomeIcon icon={faFolderOpen} className="mr-2" />
          Patient Folder
        </a>
        <a href="#" className="py-2 px-3 rounded hover:bg-gray-800 flex items-center" onClick={() => { togglePage('drugSearch'); toggleMenu(); }}>
          <FontAwesomeIcon icon={faSearch} className="mr-2" />
          Drug Search
        </a>
        <a href="#" className="py-2 px-3 rounded hover:bg-gray-800 flex items-center" onClick={() => { togglePage('addSales'); toggleMenu(); }}>
          <FontAwesomeIcon icon={faChartLine} className="mr-2" />
          Daily Sales
        </a>
        <a href="#" className="py-2 px-3 rounded hover:bg-gray-800 flex items-center" onClick={() => { togglePage('notification'); toggleMenu(); }}>
          <FontAwesomeIcon icon={faBell} className="mr-2" />
          Notifications
        </a>
        <a href="#" className="py-2 px-3 rounded hover:bg-gray-800 flex items-center" onClick={() => { togglePage('osAlert'); toggleMenu(); }}>
          <FontAwesomeIcon icon={faExclamationTriangle} className="mr-2" />
          OS Alert
        </a>
        <a href="#" className="py-2 px-3 rounded hover:bg-gray-800 flex items-center" onClick={() => { togglePage('expiration'); toggleMenu(); }}>
          <FontAwesomeIcon icon={faHourglassEnd} className="mr-2" />
          Expiration Alert
        </a>
        <a href="#" className="py-2 px-3 rounded hover:bg-gray-800 flex items-center" onClick={() => { togglePage('setting'); toggleMenu(); }}>
          <FontAwesomeIcon icon={faCog} className="mr-2" />
          Settings
        </a>
      </nav>
    </div>
  );
};

export default Sidebar;
