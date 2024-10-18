import React from "react";

const SidebarLink = ({ option, activePage, setActivePage }) => (
  <a
    href="#"
    className={`sidebar-link ${activePage === option ? "active" : ""}`}
    onClick={() => setActivePage(option)}
  >
    <i className={`fas fa-${option.toLowerCase().replace(" ", "-")}`}></i>
    <span className="link-text">{option}</span>
  </a>
);

export default SidebarLink;
