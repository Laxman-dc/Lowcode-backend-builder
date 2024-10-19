import React from "react";
import "./styles/Sidebar.css";

const Sidebar = ({ activeTab, setActiveTab }) => {
  return (
    <div className="sidebar">
      <div className="sidebar-header">
        <div className="sidebar-logo">a</div>
        <span className="sidebar-title">apex</span>
      </div>

      <div className="sidebar-users">
        <span>Users: 1</span>
      </div>

      <div className="sidebar-search">
        <input type="text" placeholder="Search" className="search-box" />
        <i className="search-icon fas fa-search"></i>
      </div>

      <nav className="sidebar-nav">
        <a
          href="#"
          onClick={() => setActiveTab("Dashboard")}
          className={`sidebar-link ${
            activeTab === "Dashboard" ? "active" : ""
          }`}
        >
          <i className="fas fa-tachometer-alt sidebar-icon"></i> Dashboard
        </a>
        <a
          href="#"
          onClick={() => setActiveTab("Database")}
          className={`sidebar-link ${activeTab === "Database" ? "active" : ""}`}
        >
          <i className="fas fa-database sidebar-icon"></i> Database
        </a>
        <a
          href="#"
          onClick={() => setActiveTab("API")}
          className={`sidebar-link ${activeTab === "API" ? "active" : ""}`}
        >
          <i className="fas fa-code sidebar-icon"></i> API
        </a>
        <a
          href="#"
          onClick={() => setActiveTab("Tasks")}
          className={`sidebar-link ${activeTab === "Tasks" ? "active" : ""}`}
        >
          <i className="fas fa-tasks sidebar-icon"></i> Tasks
        </a>
        <a
          href="#"
          onClick={() => setActiveTab("Library")}
          className={`sidebar-link ${activeTab === "Library" ? "active" : ""}`}
        >
          <i className="fas fa-book sidebar-icon"></i> Library
        </a>
        <a
          href="#"
          onClick={() => setActiveTab("Connect")}
          className={`sidebar-link ${activeTab === "Connect" ? "active" : ""}`}
        >
          <i className="fas fa-link sidebar-icon"></i> Connect
        </a>
      </nav>

      <div className="sidebar-footer">
        <a
          href="#"
          onClick={() => setActiveTab("WhatsNew")}
          className={`sidebar-link ${activeTab === "WhatsNew" ? "active" : ""}`}
        >
          <i className="fas fa-bell sidebar-icon"></i> What's new
        </a>
        <a
          href="#"
          onClick={() => setActiveTab("Help")}
          className={`sidebar-link ${activeTab === "Help" ? "active" : ""}`}
        >
          <i className="fas fa-question-circle sidebar-icon"></i> Help
        </a>
        <a
          href="#"
          onClick={() => setActiveTab("Username")}
          className={`sidebar-link ${activeTab === "Username" ? "active" : ""}`}
        >
          <i className="fas fa-user sidebar-icon"></i> Username
        </a>
      </div>
    </div>
  );
};

export default Sidebar;
