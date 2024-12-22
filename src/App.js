import React, {useState} from 'react';
import Sidebar from './Components/Navigation/Sidebar';
import Topbar from './Components/Navigation/Topbar';
import Dashboard from './Components/Dashboard/Dashboard';
import Settings from './Components/Settings';
import "./globals.css";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };
  return (
    <Router>
      <div className="h-screen flex overflow-hidden">
        <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
        <div className={`flex-1 flex flex-col transition-all duration-300 ${
          isSidebarOpen ? 'lg:ml-64' : ''
        }`}>
        {/* Header */}
        <Topbar toggleSidebar={toggleSidebar} />

        {/* Main Content Area */}
        <div className="pages_container">
        <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/settings" element={<Settings/>} />
            {/* Add more routes here */}
          </Routes>
        </div>
      </div>
      </div>
    </Router>
  );
}

export default App;
