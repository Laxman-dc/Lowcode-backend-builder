import React from "react";

const Header = () => {
  return (
    <header className="header">
      <h1 className="header-title">Apex Management</h1>
      <div className="header-user">
        <span>Welcome, User</span>
        <i className="fas fa-user-circle"></i>
      </div>
    </header>
  );
};

export default Header;
