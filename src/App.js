import React, { useState } from "react";
import "./styles/App.css";

const App = () => {
  const [activeTab, setActiveTab] = useState("Dashboard");

  const renderContent = () => {
    switch (activeTab) {
      case "API":
        return (
          <div>
            <div className="flex justify-between items-center mb-6">
              <h1 className="text-2xl font-semibold">API Groups</h1>
              <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
                + Add API Group
              </button>
            </div>
            <div className="flex space-x-4 mb-6">
              <button className="bg-gray-700 text-white px-4 py-2 rounded hover:bg-gray-600">
                Documentation
              </button>
              <button className="bg-gray-700 text-white px-4 py-2 rounded hover:bg-gray-600">
                Video Tutorial
              </button>
            </div>
            <div className="space-y-4">
              <div className="bg-gray-800 p-4 rounded">
                <div className="flex justify-between items-center">
                  <div>
                    <h2 className="text-xl font-semibold">Authentication</h2>
                    <span className="text-xs text-gray-500">
                      API Group #219774
                    </span>
                    <p className="text-sm mt-2">
                      This group contains API endpoints that your front-end will
                      use to communicate with your Database. You can create new
                      ones by clicking inside.
                    </p>
                  </div>
                  <button className="bg-gray-700 text-white px-4 py-2 rounded hover:bg-gray-600">
                    View
                  </button>
                </div>
                <div className="mt-4 text-sm text-gray-400">3 Endpoints</div>
              </div>
              <div className="bg-gray-800 p-4 rounded">
                <div className="flex justify-between items-center">
                  <div>
                    <h2 className="text-xl font-semibold">daw</h2>
                    <span className="text-xs text-gray-500">
                      API Group #219818
                    </span>
                    <p className="text-sm mt-2">daaw</p>
                  </div>
                  <button className="bg-gray-700 text-white px-4 py-2 rounded hover:bg-gray-600">
                    View
                  </button>
                </div>
                <div className="mt-4 text-sm text-gray-400">0 Endpoints</div>
              </div>
            </div>
          </div>
        );
      default:
        return <div className="text-xl">Welcome to the {activeTab} page</div>;
    }
  };

  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <div className="w-64 bg-gray-800 p-4">
        <div className="flex items-center mb-6">
          <div className="bg-blue-600 w-8 h-8 flex items-center justify-center rounded-full text-white font-bold">
            a
          </div>
          <span className="ml-2 text-lg font-semibold">apex</span>
        </div>
        <div className="mb-4">
          <span className="text-sm text-gray-400">Users: 1</span>
        </div>
        <div className="relative mb-4">
          <input
            type="text"
            placeholder="Search"
            className="w-full p-2 bg-gray-700 rounded text-sm pl-10"
          />
          <i className="fas fa-search absolute left-3 top-3 text-gray-400"></i>
        </div>
        <nav className="space-y-2">
          <a
            href="#"
            onClick={() => setActiveTab("Dashboard")}
            className={`flex items-center text-sm p-2 rounded hover:bg-gray-700 ${
              activeTab === "Dashboard" ? "bg-gray-700" : ""
            }`}
          >
            <i className="fas fa-tachometer-alt mr-2"></i> Dashboard
          </a>
          <a
            href="#"
            onClick={() => setActiveTab("Database")}
            className={`flex items-center text-sm p-2 rounded hover:bg-gray-700 ${
              activeTab === "Database" ? "bg-gray-700" : ""
            }`}
          >
            <i className="fas fa-database mr-2"></i> Database
          </a>
          <a
            href="#"
            onClick={() => setActiveTab("API")}
            className={`flex items-center text-sm p-2 rounded hover:bg-gray-700 ${
              activeTab === "API" ? "bg-gray-700" : ""
            }`}
          >
            <i className="fas fa-code mr-2"></i> API
          </a>
          <a
            href="#"
            onClick={() => setActiveTab("Tasks")}
            className={`flex items-center text-sm p-2 rounded hover:bg-gray-700 ${
              activeTab === "Tasks" ? "bg-gray-700" : ""
            }`}
          >
            <i className="fas fa-tasks mr-2"></i> Tasks
          </a>
          <a
            href="#"
            onClick={() => setActiveTab("Library")}
            className={`flex items-center text-sm p-2 rounded hover:bg-gray-700 ${
              activeTab === "Library" ? "bg-gray-700" : ""
            }`}
          >
            <i className="fas fa-book mr-2"></i> Library
          </a>
          <a
            href="#"
            onClick={() => setActiveTab("Connect")}
            className={`flex items-center text-sm p-2 rounded hover:bg-gray-700 ${
              activeTab === "Connect" ? "bg-gray-700" : ""
            }`}
          >
            <i className="fas fa-link mr-2"></i> Connect
          </a>
        </nav>
        <div className="mt-6">
          <a
            href="#"
            onClick={() => setActiveTab("WhatsNew")}
            className={`flex items-center text-sm p-2 rounded hover:bg-gray-700 ${
              activeTab === "WhatsNew" ? "bg-gray-700" : ""
            }`}
          >
            <i className="fas fa-bell mr-2"></i> What's new
          </a>
          <a
            href="#"
            onClick={() => setActiveTab("Help")}
            className={`flex items-center text-sm p-2 rounded hover:bg-gray-700 ${
              activeTab === "Help" ? "bg-gray-700" : ""
            }`}
          >
            <i className="fas fa-question-circle mr-2"></i> Help
          </a>
          <a
            href="#"
            onClick={() => setActiveTab("Username")}
            className={`flex items-center text-sm p-2 rounded hover:bg-gray-700 ${
              activeTab === "Username" ? "bg-gray-700" : ""
            }`}
          >
            <i className="fas fa-user mr-2"></i> Username
          </a>
        </div>
      </div>
      {/* Main Content */}
      <div className="flex-1 p-6">{renderContent()}</div>
    </div>
  );
};

export default App;
