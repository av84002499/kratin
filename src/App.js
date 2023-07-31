import React from "react";
import { Navbar } from "./Navbar";
import { Routes, Route } from "react-router-dom";
import { Login } from "./component/pages/Login";
import { Registration } from "./component/pages/Registration";
import { Userfrom } from "./component/Health/Userfrom"
import { Healthdata } from "./component/Health/Healthdata";
import { Home } from "./component/Home";

export const App = () => {
  return (
    <div>
      <Navbar />

      <Routes>
        <Route key="Home" path="/" element={<Home />} />
        <Route key="register" path="/register" element={<Registration />} />
        <Route key="login" path="/login" element={<Login />} />
        <Route key="userfrom" path="/userfrom" element={<Userfrom />} />
        <Route key="Healthdata" path="/Healthdata" element={<Healthdata />} />

      </Routes>
    </div>
  );
};
