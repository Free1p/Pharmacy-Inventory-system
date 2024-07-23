// src/component/Content.jsx
import React from 'react';
import Home from '../pages/home';
import Inventory from '../pages/inventory';
import AddInventory from '../pages/addInventory';
import PatientFolder from '../pages/patientFolder';
import DrugSearch from '../pages/drugSearch';
import AddSales from '../pages/addSales';
import Expiration from '../pages/expiration';
import Notification from '../pages/notification';
import OsAlert from '../pages/osAlert';

const Content = ({ currentPage }) => {
  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <Home />;
      case 'inventory':
        return <Inventory />;
      case 'addInventory':
        return <AddInventory />;
      case 'patientFolder':
        return <PatientFolder />;
      case 'drugSearch':
        return <DrugSearch />;
      case 'addSales':
        return <AddSales />;
      case 'expiration':
        return <Expiration />;
      case 'notification':
        return <Notification />;
      case 'osAlert':
        return <OsAlert />;
      default:
        return <Home />;
    }
  };

  return (
    <div className="flex-1 p-4">
      {renderPage()}
    </div>
  );
};

export default Content;
