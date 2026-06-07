import React, { useState } from "react";

function ForgotPassword() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleRecover = () => {
    const users = JSON.parse(localStorage.getItem("users")) || [];

    const user = users.find(u => u.email === email);

    if (!user) {
      setMessage("Correo no encontrado");
      return;
    }

    setMessage(`Tu contraseña es: ${user.password}`);
  };

  return (
    <div className="container mt-5">
      <h2>Recuperar contraseña</h2>

      <input
        type="email"
        className="form-control mb-3"
        placeholder="Ingresa tu correo"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <button
        className="btn btn-primary"
        onClick={handleRecover}
      >
        Recuperar
      </button>

      <p className="mt-3">{message}</p>
    </div>
  );
}

export default ForgotPassword;