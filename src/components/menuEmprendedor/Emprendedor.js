import React from "react";
import logo from "../../assets/img/2.png";
import header from "../../assets/img/header.png";
import { Link, useNavigate } from "react-router-dom";

function Emprendedor({ onLogout }) {
  const navigate = useNavigate();


  const handleLogout = () => {
    onLogout();
    navigate("/login", { replace: true });
  };
  return (
    <div className="client-page">
      <header className="site-header">
        <div className="header-content">
          <div className="logo-container">
            <img src={logo} alt="Communy App" className="logo" />
          </div>

          <nav className="nav-menu">
            <Link to="/home" className="btn-menu">Perfil</Link>
            <Link to="/" className="btn-menu">Mis Servicios</Link>
            <button onClick={handleLogout} className="btn-logout">
              Cerrar sesión
            </button>
          </nav>
        </div>
      </header>

      <main className="services-section">
        <div className="content-img">
          <img src={header} alt="Panel Emprendedor" />
          <div className="color-fond"></div>

          <div className="content-overlay">
            <h2>Panel del Emprendedor</h2>

            <p className="text-white">
              Administra tus servicios publicados en Communy App
            </p>

            <div className="mt-3">
              <button className="btn btn-success me-2">
                Publicar Servicio
              </button>

              <button className="btn btn-primary">
                Ver Mis Servicios
              </button>
            </div>
          </div>
        </div>

        <div className="container mt-5">
          <div className="row">
            <div className="col-md-4 mb-3">
              <div className="card p-3">
                <h4>Servicios Activos</h4>
                <p>0</p>
              </div>
            </div>

            <div className="col-md-4 mb-3">
              <div className="card p-3">
                <h4>Solicitudes</h4>
                <p>0</p>
              </div>
            </div>

            <div className="col-md-4 mb-3">
              <div className="card p-3">
                <h4>Clientes</h4>
                <p>0</p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Emprendedor;