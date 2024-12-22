import React, { useState } from 'react';
import Header from './Topbar'
import Sidebar from './Sidebar';

const Layout = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <Sidebar isOpen={isSidebarOpen} />

      {/* Main Content */}
      <div className="flex-1 lg:ml-64">
        {/* Header */}
        <Header toggleSidebar={toggleSidebar} />

        {/* Main Content Area */}
        <div className="p-4">{children}</div>
      </div>
    </div>
  );
};

export default Layout;
