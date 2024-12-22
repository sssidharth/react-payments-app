import React, {useState, lazy, Suspense} from 'react';
import "./globals.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
const Sidebar = lazy(() => import('./Components/Navigation/Sidebar'));
const Topbar = lazy(() => import('./Components/Navigation/Topbar'));
const Dashboard = lazy(() => import('./Components/Dashboard/Dashboard'));
const Settings = lazy(() => import('./Components/Settings/Settings'));
const CreditCardsAll = lazy(() => import('./Components/CreditCards/CreditCardsAll'));

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };
  return (
    <Router>
      <Suspense fallback={<h1>...Loading</h1>}>
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
            <Route path="/cards" element={<CreditCardsAll/>} />
        </Routes>
        </div>
      </div>
      </div>
      </Suspense>
    </Router>
  );
}

export default App;
