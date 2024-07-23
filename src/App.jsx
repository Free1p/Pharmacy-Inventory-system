import React, { useState } from 'react';
import Sidebar from './component/sidebar';
import Navbar from './component/navbar';
import Content from './component/content';
import './index.css';

const App = () => {
  const [currentPage, setCurrentPage] = useState('home');
  const [menuOpen, setMenuOpen] = useState(false);

  const togglePage = (page) => {
    setCurrentPage(page);
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div>
      <Navbar toggleMenu={toggleMenu} />
      <div className="flex h-screen lg:pt-0">
        <Sidebar togglePage={togglePage} menuOpen={menuOpen} toggleMenu={toggleMenu} />
        <Content currentPage={currentPage} />
      </div>
    </div>
  );
};

export default App;
