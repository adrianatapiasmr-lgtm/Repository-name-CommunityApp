import React from "react";
import { useNavigate } from "react-router-dom";

function Emprendedor() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("currentUser");
    navigate("/");
  };

  return (
    <div className="container mt-5 text-center">
      <h1>Panel de Emprendedor</h1>
      <p>Bienvenido a Communy App</p>

      <button
        className="btn btn-danger"
        onClick={handleLogout}
      >
        Cerrar sesión
      </button>
    </div>
  );
}

export default Emprendedor;