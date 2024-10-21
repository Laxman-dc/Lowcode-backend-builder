import React, { useState } from "react";
import Sidebar from "../components/Sidebar";
import Api from "../pages/Api";
import Api-open from "../pages/Api-open"; 
import "../styles/App.css";
import Dashboard from "../components/Dashboard";


const Home = () => {
  const [activeSection, setActiveSection] = useState("api");

  const handleNavClick = (section) => {
    setActiveSection(section);
  };

  return (
    <div className="app">
      <Sidebar onNavClick={handleNavClick} activeSection={activeSection} />
      <div className="content">
        {/* {activeSection === "api" && <ApiManagement />} */}
        {activeSection === "dashboard" && <Dashboard />}
        {activeSection === "api" && (
          <ApiManagement onNavClick={handleNavClick} />
        )}
        {activeSection === "authentication" && <Authentication />}
      </div>
    </div>
  );
};

export default Home;
