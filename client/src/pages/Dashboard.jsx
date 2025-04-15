// src/pages/Dashboard.jsx
import React from "react";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import { toast } from "react-hot-toast";

export function Dashboard() {
  const navigate = useNavigate();
  const user = Cookies.get("user") ? JSON.parse(Cookies.get("user")) : null;

  const handleLogout = () => {
    // Elimina el token y los datos del usuario
    Cookies.remove("token");
    Cookies.remove("user");
    toast.success("Sesión finalizada", { position: "top-center" });
    navigate("/login");
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-8 bg-gray-100">
      <h1 className="text-3xl font-bold mb-4">Iniciaste sesión como: {user ? user.correo : "Desconocido"}</h1>
      <button
        onClick={handleLogout}
        className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700"
      >
        Cerrar sesión
      </button>
    </div>
  );
}
