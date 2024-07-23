import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import Avatar from '../assets/avatar.jpg';
const Navbar = ({ toggleMenu }) => {
  return (
    <nav className="bg-gray-100 border-gray-300 fixed w-full lg:hidden">
      <div className="container mx-auto px-4 py-2 flex justify-between items-center">
        <button 
          id="navbarToggle" 
          className="text-gray-900 text-xl focus:outline-none lg:hidden" 
          onClick={toggleMenu}
        >
          <FontAwesomeIcon icon={faBars} />
        </button>
        <div className="p-2 rounded-full">
          <img src={Avatar} alt="Avatar" className="h-9 w-8 rounded-full" />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
