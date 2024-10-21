import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import Api from "../pages/Api";
import  "../styles/Api-open.css";

const ViewApiGroup = () => {
  const location = useLocation();
  const { group } = location.state; // Access the passed group data

  // Check if group is undefined (in case of navigation without state)
  if (!group) {
    return <div>No API group data available.</div>;
  }
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
  return (
    // api

    
    <div className="view-api-group-container">
      <h2>{group.name} API Group</h2>
      <p>Description: {group.description}</p>
      <h3>Tags:</h3>
      {group.tags.length > 0 ? (
        <ul>
          {group.tags.map((tag, index) => (
            <li key={index}>{tag}</li>
          ))}
        </ul>
      ) : (
        <p>No tags available.</p>
      )}


      <div className="authentication-container">
      <header className="authentication-header">
        <h2>Authentication #219774</h2>
      </header>
      {/* {apis.map(api=> */}
      <div className="endpoints">
        <h3>Endpoints (3)</h3>

        {/* First Section */}
        <div className="endpoint-section">
          <div className="endpoint-header">
            <label>
              <input type="checkbox" />
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
      
      {/* <div className="master">
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
      </div> */}
    </div>
    
    </div>



  );
};


export default ViewApiGroup;
