import React, { useState } from "react";
import "../styles/ApiManagement.css";
import Authentication from "./Authentication"; // Import Authentication component
import { useNavigate } from "react-router-dom";

function ApiManagement() {
  const [showForm, setShowForm] = useState(false);
  const [tags, setTags] = useState([]);
  const [tagInput, setTagInput] = useState("");
  const [showAuthentication, setShowAuthentication] = useState(false); // State to trigger Authentication view
  const navigate = useNavigate();
  const [apiGroups, setApiGroups] = useState([
    {
      name: "Authentication",
      description:
        "This group contains API endpoints that your front-end will use to communicate with your Database.",
      tags: [],
    },

    {
      name: "default",
      description:
        "This group contains API endpoints that your front-end will use to communicate with your Database.",
      tags: [],
    },
  ]);

  const [newGroupName, setNewGroupName] = useState("");
  const [newGroupDescription, setNewGroupDescription] = useState("");

  const handleAddApiGroupClick = () => {
    setShowForm(!showForm);
  };

  const handleTagInputChange = (e) => {
    setTagInput(e.target.value);
  };

  const handleTagKeyPress = (e) => {
    if (e.key === "Enter" && tagInput) {
      setTags([...tags, tagInput]);
      setTagInput("");
      e.preventDefault();
    }
  };

  const handleTagRemove = (index) => {
    setTags(tags.filter((_, i) => i !== index));
  };

  const handleSaveApiGroup = (e) => {
    e.preventDefault();
    if (newGroupName && newGroupDescription) {
      const newApiGroup = {
        name: newGroupName,
        description: newGroupDescription,
        tags: tags,
      };

      setApiGroups([...apiGroups, newApiGroup]);
      // Clear the form fields and close the form
      setNewGroupName("");
      setNewGroupDescription("");
      setTags([]);
      setShowForm(false);
    } else {
      alert("Please fill out both the name and description.");
    }
  };

  const copyLink = (groupName) => {
    const dummy = document.createElement("textarea");
    document.body.appendChild(dummy);
    dummy.value = window.location.href + `/${groupName}`; // Adjust URL as needed
    dummy.select();
    document.execCommand("copy");
    document.body.removeChild(dummy);
    alert(`${groupName} link copied!`);
  };

  const handleGroupClick = (groupName) => {
    if (groupName === "Authentication") {
      setShowAuthentication(true); // Trigger authentication section
    } else {
      setShowAuthentication(false); // Hide authentication section if other group is clicked
    }
  };

  const handleViewClick = (groupName) => {
    copyLink(groupName);
    const selectedGroup = apiGroups.find((group) => group.name === groupName);
    navigate(`/view/${groupName}`, { state: { group: selectedGroup } }); // Navigate with state
  };

  return (
    <div className="api-management-container">
      <div className="api-header">
        <h2>API Groups</h2>
        <button className="Apigroup" onClick={handleAddApiGroupClick}>
          + Add API Group
        </button>
      </div>

      <div className="api-groups">
        {apiGroups.map((group, index) => (
          <div className="api-group" key={index}>
            <div className="api-group-header">
              <h3 onClick={() => handleGroupClick(group.name)}>{group.name}</h3>{" "}
              {/* Clickable API group */}
              <button
                className="copy-button"
                onClick={() => copyLink(group.name)}
              >
                <i className="copy-icon"></i>
              </button>
            </div>
            <p>{group.description}</p>
            <button
              className="view-button"
              onClick={() => handleViewClick(group.name)}
            >
              View
            </button>
          </div>
        ))}
      </div>

      {showForm && (
        <div className="api-sidebar">
          <div className="form-header">
            <h3>Add API Group</h3>
            <button className="close-button" onClick={handleAddApiGroupClick}>
              x
            </button>
          </div>
          <form className="api-form" onSubmit={handleSaveApiGroup}>
            <label>
              Name:
              <input
                type="text"
                placeholder="API Group Name"
                value={newGroupName}
                onChange={(e) => setNewGroupName(e.target.value)}
              />
            </label>
            <label>
              Description:
              <textarea
                placeholder="Description"
                value={newGroupDescription}
                onChange={(e) => setNewGroupDescription(e.target.value)}
              ></textarea>
            </label>
            <label>
              Add Tags:
              <input
                type="text"
                placeholder="Press enter to add tags"
                value={tagInput}
                onChange={handleTagInputChange}
                onKeyPress={handleTagKeyPress}
              />
            </label>
            <div className="tags-container">
              {tags.map((tag, index) => (
                <span key={index} className="tag-item">
                  {tag}
                  <button
                    type="button"
                    className="remove-tag"
                    onClick={() => handleTagRemove(index)}
                  >
                    &times;
                  </button>
                </span>
              ))}
            </div>
            <label>
              Swagger (OpenAPI) Documentation:
              <select>
                <option value="private">Private (require token)</option>
                <option value="public">Public</option>
                <option value="disabled">Disabled</option>
              </select>
            </label>
            <button className="save-button" type="submit">
              <i className="file-icon"></i> Save
            </button>
          </form>
        </div>
      )}

      {/* Conditionally render the Authentication component */}
      {showAuthentication && <Authentication />}
    </div>
  );
}

export default ApiManagement;
