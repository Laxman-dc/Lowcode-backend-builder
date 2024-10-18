import React from "react";

const Sidebar = ({ activeTab, setActiveTab }) => {
  return (
    <div className="w-64 bg-gray-800 p-4">
      <div className="flex items-center mb-6">
        <div className="bg-blue-600 w-8 h-8 flex items-center justify-center rounded-full text-white font-bold">
          a
        </div>
        <span className="ml-2 text-lg font-semibold">apex</span>
      </div>
      <div className="mb-4">
        <span className="text-sm">Users: 1</span>
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
  );
};

export default Sidebar;
