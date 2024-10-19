// src/App.js
import React, { useState } from "react";
import Sidebar from "./components/Sidebar";
import ApiManagement from "./components/ApiManagement";
import "./styles/App.css";

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
        {activeSection !== "api" && <div>Select a section</div>}
      </div>
    </div>
  );
};

export default App;
