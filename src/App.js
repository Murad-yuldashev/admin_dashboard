import React from "react";
import { Routes, Route } from 'react-router';
import Sidebar from "./Components/Sidebar/Sidebar";
import Navbar from "./Components/Navbar/Navbar";
import Home from "./pages/Home";

function App() {
  return (
    <div className="App flex">
      <Sidebar />
      <div className="w-full px-7">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      </div>
    </div>
  );
}

export default App;
