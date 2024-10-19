import React from "react";
import { useLocation } from "react-router-dom";
import ApiManagement from "../components/ApiManagement";
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
      {/* FOR REFERENCE DONOT DELETE
      <div className="master">
            {apis.map((api)=>(
              <div key = {api.id} className="apis">
                  <div className="api_name">{api.name}
                  <div className="api_method">{api.method}
                    <div className="api_functions">
                      {api.functions}
                      <button className="delete" onClick={()=>deleteapi(api.id)}></button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
      </div> */}
    </div>
  );
};


export default ViewApiGroup;
