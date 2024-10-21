import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import "../styles/Api-open.css";
import { FaSearch } from "react-icons/fa"; // Import search icon from react-icons

const ViewApiGroup = () => {
  const location = useLocation();
  const { group } = location.state; // Access the passed group data

  const [showMenu, setShowMenu] = useState(null);
  const [showForm, setShowForm] = useState(false); // State to control the new sidebar visibility

  const toggleMenu = (id) => {
    setShowMenu(showMenu === id ? null : id);
  };
  const handleAddApiGroupClick = () => {
    setShowForm(!showForm);
  };

  const toggleForm = () => {
    setShowForm(!showForm); // Toggle the new sidebar
  };

  if (!group) {
    return <div>No API group data available.</div>;
  }

  return (
    <div className="view-api-group-container">
      <header className="authentication-header">
        <h2>Authentication #219774</h2>
        <button className="add-api-button" onClick={toggleForm}>+ Add API Endpoint</button>
      </header>

      <div className="endpoints">
        <h3>Endpoints (3)</h3>
        {/* Search bar aligned with Endpoints heading */}
        <div className="search-container">
          <FaSearch className="search-icon" />
          <input
            className="search-bar"
            type="text"
            placeholder="Search endpoint"
          />
        </div>

        {/* First Section - auth/login */}
        <div className="endpoint-section">
          <div className="endpoint-row">
            <input type="checkbox" className="checkbox" />
            <div className="buttons-section">
              <button className="method method-post">POST</button>
              <button className="method method-get">GET</button>
            </div>
            <div className="endpoint-details">
              <div className="endpoint-name">auth/login</div>
              <div className="endpoint-id">#2118762</div>
              <div className="endpoint-description">
                Login and retrieve an authentication token
              </div>
            </div>
            <div className="access-type public">🔓 Public</div>
            {/* Three-dot Menu */}
            <div className="menu-container">
              <div className="menu-icon" onClick={() => toggleMenu(1)}>⋮</div>
              {showMenu === 1 && (
                <div className="menu-dropdown">
                  <button className="menu-option">
                    <span className="menu-icon">📋</span> Clone Endpoint
                  </button>
                  <button className="menu-option">
                    <span className="menu-icon">🔗</span> Copy Endpoint Link
                  </button>
                  <button className="menu-option">
                    <span className="menu-icon">🗑️</span> Delete Endpoint
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Second Section - auth/me */}
        <div className="endpoint-section">
          <div className="endpoint-row">
            <input type="checkbox" className="checkbox" />
            <div className="buttons-section">
              <button className="method method-get">GET</button>
            </div>
            <div className="endpoint-details">
              <div className="endpoint-name">auth/me</div>
              <div className="endpoint-id">#2118764</div>
              <div className="endpoint-description">
                Get the user record belonging to the authentication token
              </div>
            </div>
            <div className="access-type private">🔒 Private</div>
            {/* Three-dot Menu */}
            <div className="menu-container">
              <div className="menu-icon" onClick={() => toggleMenu(2)}>⋮</div>
              {showMenu === 2 && (
                <div className="menu-dropdown">
                  <button className="menu-option">
                    <span className="menu-icon">📋</span> Clone Endpoint
                  </button>
                  <button className="menu-option">
                    <span className="menu-icon">🔗</span> Copy Endpoint Link
                  </button>
                  <button className="menu-option">
                    <span className="menu-icon">🗑️</span> Delete Endpoint
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Third Section - auth/signup */}
        <div className="endpoint-section">
          <div className="endpoint-row">
            <input type="checkbox" className="checkbox" />
            <div className="buttons-section">
              <button className="method method-post">POST</button>
              <button className="method method-draft">DRAFT</button>
            </div>
            <div className="endpoint-details">
              <div className="endpoint-name">auth/signup</div>
              <div className="endpoint-id">#2118763</div>
              <div className="endpoint-description">
                Signup and retrieve an authentication token
              </div>
            </div>
            <div className="access-type public">🔓 Public</div>
            {/* Three-dot Menu */}
            <div className="menu-container">
              <div className="menu-icon" onClick={() => toggleMenu(3)}>⋮</div>
              {showMenu === 3 && (
                <div className="menu-dropdown">
                  <button className="menu-option">
                    <span className="menu-icon">📋</span> Clone Endpoint
                  </button>
                  <button className="menu-option">
                    <span className="menu-icon">🔗</span> Copy Endpoint Link
                  </button>
                  <button className="menu-option">
                    <span className="menu-icon">🗑️</span> Delete Endpoint
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* New Sidebar for Add API Endpoint */}
      {showForm && (
    <div className="add-api-sidebar">
        <div className="sidebar-content">
            <h2 className="header-container">
                Add API Endpoint
                <button className="close-button" onClick={handleAddApiGroupClick}>
                    x
                </button>
            </h2>
            <div className="api-type-section">
                <div className="api-type-title">What type of API Endpoint do you want to create?</div>
                <div className="api-option">
                    <div className="api-option-header">
                        <span>CRUD Database Operations</span>
                    </div>
                    <p>Create, Read, Update, Delete from a database table</p>
                </div>
                <div className="api-option">
                    <div className="api-option-header">
                        <span>Authentication</span>
                    </div>
                    <p>Authentication based queries</p>
                </div>
                <div className="api-option">
                    <div className="api-option-header">
                        <span>Upload Content</span>
                    </div>
                    <p>Upload images, videos, attachments</p>
                </div>
                <div className="api-option">
                    <div className="api-option-header">
                        <span>Custom Endpoint</span>
                    </div>
                    <p>Build your query from scratch</p>
                </div>
            </div>
            <p className="learn-more">Need help? <span className="learn-more-link">Learn more about APIs</span></p>
        </div>
    </div>
)}
    </div>
  );
};

export default ViewApiGroup;




// for reference do not delete
  // const deleteapi=(id)=>{
  //   // Logic for deleting api
  // }
  // const Apis = [
  //   {
  //     id: 1,
  //     name: "Get User",
  //     method: "GET",
  //     functions: "Fetches user data from the database."
  //   },
  //   {
  //     id: 2,
  //     name: "Create User",
  //     method: "POST",
  //     functions: "Creates a new user in the database."
  //   },
  //   {
  //     id: 3,
  //     name: "Update User",
  //     method: "PUT",
  //     functions: "Updates existing user data."
  //   },
  //   {
  //     id: 4,
  //     name: "Delete User",
  //     method: "DELETE",
  //     functions: "Deletes a user from the database."
  //   },
  //   {
  //     id: 5,
  //     name: "Get All Users",
  //     method: "GET",
  //     functions: "Fetches all users from the database."
  //   },
  // ];
  // const deleteApi = (id) => {
  //   console.log("Api deleted")
  // };
// <div className="view-api-group-container">
    //   <h2>{group.name} API Group</h2>
    //   <p>Description: {group.description}</p>
    //   <h3>Tags:</h3>
    //   {group.tags.length > 0 ? (
    //     <ul>
    //       {group.tags.map((tag, index) => (
    //         <li key={index}>{tag}</li>
    //       ))}
    //     </ul>
    //   ) : (
    //     <p>No tags available.</p>
    //   )}
     /* <div className="master">
            {Apis.map((api)=>(
              <div key = {api.id} className="apis">
                  <div className="api_name">{api.name}
                  <div className="api_method">{api.method}
                    <div className="api_functions">
                      {api.functions}
                      <button className="delete" onClick={()=>deleteApi(api.id)}></button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
      </div> */