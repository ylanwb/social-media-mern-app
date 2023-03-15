import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { LoginPage } from "./pages";
import { RegisterPage } from "./pages";
import { LandingPage } from "./pages";
import { HomePage } from "./pages";
import { NavBar } from "./components";
import React from "react";

function App() {
  return (
    <div className="appContainer">
      <BrowserRouter>
        <Routes>
          <Route path="/home" element={<HomePage />} />
        </Routes>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
