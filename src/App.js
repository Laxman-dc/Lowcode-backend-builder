import React from "react";
import Sidebar from "../src/components/Sidebar";
import { Route, Routes } from "react-router-dom";
import ApiOpen from "./pages/Api-open"; 
import Dashboard from "./pages/Dashboard";
import Api from "./pages/Api";


const App = () => {
  return (
    <div className="app_main">
      <Sidebar/>
      <Routes>
        <Route path="/" element={<Dashboard />} /> {/* Use capitalized Home */}
        <Route path = "/api" element = {<Api/>}/>
        <Route path="/view/:groupName" element={<ApiOpen />} />{" "}
        {/* Use capitalized ApiOpen */}
      </Routes>
    </div>
  );
};

export default App;
