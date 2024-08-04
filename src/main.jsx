import React from "react";
import ReactDOM from "react-dom/client";

import LoginProvider from "./context/LoginContext";
import LoginedPage from "./pages/LoginedPage";
import Register from "./pages/register";
import Login from "./pages/Login";
import Dashborad from "./pages/Dashborad";
import { BrowserRouter, Routes, Route } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <LoginProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Dashborad />} />
          <Route path="/Register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/LoginedPage"  element={<LoginedPage />} />
        </Routes>
      </BrowserRouter>
    </LoginProvider>
  </React.StrictMode>
);
