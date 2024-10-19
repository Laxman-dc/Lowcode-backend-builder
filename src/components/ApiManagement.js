import React from "react";
import "./styles/ApiManagement.css"; // Normal CSS file for API management

const ApiManagement = () => {
  return (
    <div className="api-management">
      <div className="api-header">
        <h1>API Groups</h1>
        <button className="add-api-btn">+ Add API Group</button>
      </div>

      <div className="api-buttons">
        <button className="doc-btn">Documentation</button>
        <button className="video-btn">Video Tutorial</button>
      </div>

      <div className="api-groups">
        <div className="api-group-card">
          <div className="api-card-header">
            <div>
              <h2>Authentication</h2>
              <span className="api-id">API Group #219774</span>
              <p>
                This group contains API endpoints that your front-end will use
                to communicate with your Database. You can create new ones by
                clicking inside.
              </p>
            </div>
            <button className="view-btn">View</button>
          </div>
          <div className="api-group-card-footer">3 Endpoints</div>
        </div>

        <div className="api-group-card">
          <div className="api-card-header">
            <div>
              <h2>daw</h2>
              <span className="api-id">API Group #219818</span>
              <p>daaw</p>
            </div>
            <button className="view-btn">View</button>
          </div>
          <div className="api-group-card-footer">0 Endpoints</div>
        </div>
      </div>
    </div>
  );
};

export default ApiManagement;
