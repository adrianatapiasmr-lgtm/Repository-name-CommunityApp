import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import Register from "./components/Register";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { useEffect } from "react";
import ServicesSection from "./components/menuClient/client";
import Home from "./components/Home";
import Nosotros from "./components/Nosotros";
import ForgotPassword from "./components/ForgotPassword/ForgotPassword.js";
import Emprendedor from "./components/menuEmprendedor/Emprendedor";

function App() {
// useEffect(() => {
//   const currentUser = JSON.parse(localStorage.getItem("currentUser"));
//   if (currentUser) {
//     if (currentUser.accountType === "cliente") {
//       window.location.href = "/menu-cliente";
//     } else if (currentUser.accountType === "emprendedor") {
//       window.location.href = "/menu-emprendedor";
//     }
//   }
// }, []);
  return (
    <Router>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/nosotros" element={<Nosotros />} />
        <Route path="/menu-cliente" element={<ServicesSection />} />
        <Route path="/menu-emprendedor" element={<Emprendedor />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
      </Routes>
    </Router>
  );
}

export default App;