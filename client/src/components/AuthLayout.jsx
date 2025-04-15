import React from "react";
import { Outlet } from "react-router-dom";
import { Navigation } from "./Navigation";
import { VolverButton } from "./VolverButton";
import { Toaster } from "react-hot-toast";

export function AuthLayout() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* Header */}
      <div className="flex w-full">
        {/* Sección de usuario */}
        <div className="bg-[#1572E8] text-white py-4 px-4 text-xl font-bold w-1/5 flex items-center space-x-4">
          <div>
            <p className="text-lg">Pepito</p>
            <p className="text-sm">Administrador</p>
          </div>
        </div>
        {/* Sección de título con header */}
        <div className="bg-gradient-to-r from-[#00498B] to-[#001325] text-white py-8 px-8 text-xl font-bold w-4/5 flex justify-start items-center">
          <h1 className="text-xl font-semibold">GESTIÓN DE USUARIOS</h1>
        </div>
      </div>

      {/* Contenedor principal para rutas protegidas */}
      <div className="flex-grow">
        <Navigation />
        <div className="p-4 bg-white">
          <Outlet />
        </div>
      </div>

      {/* Botón "Volver" en la parte inferior */}
      <VolverButton />

      <Toaster />
    </div>
  );
}
