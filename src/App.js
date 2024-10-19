// src/App.js
import React, { useState } from "react";
import Sidebar from "./components/Sidebar";
import ApiManagement from "./components/ApiManagement";
import "./styles/App.css";
import Dashboard from "./components/Dashboard";

const App = () => {
  const [activeSection, setActiveSection] = useState("dashboard");

  const handleNavClick = (section) => {
    setActiveSection(section);
  };

  return (
    <div className="app">
      <Sidebar onNavClick={handleNavClick} activeSection={activeSection} />
      <div className="content">
        {activeSection === "api" && <ApiManagement />}
        {activeSection === "dashboard" && <Dashboard />}
      </div>
    </div>
  );
};

export default App;
