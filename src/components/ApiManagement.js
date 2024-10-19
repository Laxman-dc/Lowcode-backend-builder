import React from "react";
import "../styles/ApiManagement.css";

function ApiManagement() {
  return (
    <div className="api-management-container">
      <div className="api-header">
        <h2>API Groups</h2>
        <button className="add-api-group-button">+ Add API Group</button>
      </div>
      <div className="api-groups">
       
        <div className="api-group">
          <h3>Authentication</h3>
          <p>
            This group contains API endpoints that your front-end will use to
            communicate with your Database. You can create new ones by clicking
            inside.
          </p>
        </div>
        <div className="api-group">
          <h3>daw</h3>
          <p>daaw</p>
        </div>
        <div className="api-group">
          <h3>default</h3>
          <p>
            This group contains API endpoints that your front-end will use to
            communicate with your Database. You can create new ones by clicking
            inside.
          </p>
        </div>
      </div>
    </div>
  );
}

export default ApiManagement;
