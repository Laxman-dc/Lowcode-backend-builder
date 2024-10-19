import React from "react";
import "../styles/Sidebar.css";
import { useNavigate } from "react-router-dom";

const Sidebar = ({ onNavClick, activeSection }) => {
  const navigate = useNavigate()
  return (
    <div className="sidebar">
      <h2>MumbaiHacks</h2>
      <div className="user-info">
        <button className="user-count">Users: 1</button>
      </div>
      <input type="text" className="search" placeholder="Search" />
      <ul className="content">
        <li
          className={activeSection === "dashboard" ? "active" : ""}
          onClick={() => navigate("/")}
        >
          <i className="icon">🏠</i> Dashboard
        </li>
        <li
          className={activeSection === "database" ? "active" : ""}
          onClick={() => navigate("/databse")}
        >
          <i className="icon">💾</i> Database
        </li>
        <li
          className={activeSection === "api" ? "active" : ""}
          onClick={() => navigate("/api")}
        >
          <i className="icon">💻</i> API
        </li>
        <li
          className={activeSection === "tasks" ? "active" : ""}
          onClick={() => navigate("/tasks")}
        >
          <i className="icon">📝</i> Tasks
        </li>
        <li
          className={activeSection === "library" ? "active" : ""}
          onClick={() => navigate("/library")}
        >
          <i className="icon">📚</i> Library
        </li>
        <li
          className={activeSection === "connect" ? "active" : ""}
          onClick={() => navigate("/connect")}
        >
          <i className="icon">🔌</i> Connect
        </li>
      </ul>
      <div className="bottom-section">
        <ul>
          <li>
            <i className="icon">🔔</i> What's new
          </li>
          <li>
            <i className="icon">❓</i> Help
          </li>
          <li>
            <i className="icon">👤</i> username
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
