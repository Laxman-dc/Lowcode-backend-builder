import React from "react";
import Sidebar from "../src/components/Sidebar";
import Home from "./pages/Home"; // Use capitalized component name
import { Route, Routes } from "react-router-dom";
import ApiOpen from "./pages/Api-open"; // Capitalized

const App = () => {
  return (
    <div className="app_main">
      <Routes>
        <Route path="/" element={<Home />} /> {/* Use capitalized Home */}
        <Route path="/view/:groupName" element={<ApiOpen />} />{" "}
        {/* Use capitalized ApiOpen */}
      </Routes>
    </div>
  );
};

export default App;
