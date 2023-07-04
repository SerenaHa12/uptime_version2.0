import React from "react";
import "./App.css";
import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Sidebar, Navbar } from "./components";
import { Dashboard, Asset, Ticket, Report, New, Setting } from "./pages";
import { AppBar } from "@mui/material";

const App = () => {
  return (
    <BrowserRouter>
      <Sidebar>
        <React.Fragment>
          <Navbar />
        </React.Fragment>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/asset" element={<Asset />} />
          <Route path="/ticket" element={<Ticket />} />
          <Route path="/report" element={<Report />} />
          <Route path="/new" element={<New />} />
          <Route path="/setting" element={<Setting />} />
        </Routes>
      </Sidebar>
    </BrowserRouter>
  );
};

export default App;
