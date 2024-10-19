import React from "react";
import "../styles/Authentication.css"; // Import your new CSS

const Authentication = () => {
  return (
    <div className="authentication-container">
      <header className="authentication-header">
        <h2>Authentication #219774</h2>
      </header>

      <div className="endpoints">
        <h3>Endpoints (3)</h3>

        {/* First Section */}
        <div className="endpoint-section">
          <div className="endpoint-header">
            <label>
              <input type="checkbox" />
              auth (3)
            </label>
          </div>

          <div className="endpoint-details">
            <div className="endpoint-row">
              <div className="method method-post">POST</div>
              <div className="endpoint-name">auth/login</div>
              <div className="endpoint-id">#2118762</div>
              <div className="endpoint-description">
                Login and retrieve an authentication token
              </div>
              <div className="access-type public">Public</div>
            </div>
          </div>
        </div>

        {/* Second Section */}
        <div className="endpoint-section">
          <div className="endpoint-header">
            <label>
              <input type="checkbox" />
              auth (3)
            </label>
          </div>

          <div className="endpoint-details">
            <div className="endpoint-row">
              <div className="method method-get">GET</div>
              <div className="endpoint-name">auth/me</div>
              <div className="endpoint-id">#2118764</div>
              <div className="endpoint-description">
                Get the user record belonging to the authentication token
              </div>
              <div className="access-type private">Private</div>
            </div>
          </div>
        </div>

        {/* Third Section */}
        <div className="endpoint-section">
          <div className="endpoint-header">
            <label>
              <input type="checkbox" />
              auth (3)
            </label>
          </div>

          <div className="endpoint-details">
            <div className="endpoint-row">
              <div className="method method-post">POST</div>
              <div className="method method-draft">DRAFT</div>
              <div className="endpoint-name">auth/signup</div>
              <div className="endpoint-id">#2118763</div>
              <div className="endpoint-description">
                Signup and retrieve an authentication token
              </div>
              <div className="access-type public">Public</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Authentication;
