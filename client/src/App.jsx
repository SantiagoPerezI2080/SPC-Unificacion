import { BrowserRouter, Routes, Route, Navigate, useNavigate } from "react-router-dom";
import { TasksPage } from "./pages/TasksPage";
import { TasksFormPage } from "./pages/TaskFormPage";
import { Navigation } from "./components/Navigation";
import { Toaster } from "react-hot-toast";
// Importaciones para registro de usuarios
import { ListaUsuarios } from "./pages/ListaUsuarios";
import { FormularioRegistroUsuarios } from "./pages/FormularioRegistroUsuario";


function VolverButton() {
  const navigate = useNavigate();

  return (
    <div className="bg-gradient-to-r from-[#00498B] to-[#001325] text-white py-4 px-8 text-xl font-bold flex justify-end mt-auto">
      <button 
        className="bg-[#1572E8] px-3 py-2 rounded-lg text-white"
        onClick={() => navigate(-1)}
      >
        Volver
      </button>
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <div className="flex flex-col min-h-screen bg-white">
        {/* Header con estilo similar */}
        <div className="flex w-full">
          {/* Sección de usuario */}
          <div className="bg-[#1572E8] text-white py-4 px-4 text-xl font-bold w-1/5 flex items-center space-x-4">
            <div>
              <p className="text-lg">Pepito</p>
              <p className="text-sm">Administrador</p>
            </div>
          </div>

          {/* Sección de título */}
          <div className="bg-gradient-to-r from-[#00498B] to-[#001325] text-white py-8 px-8 text-xl font-bold w-4/5 flex justify-start items-center">
            <h1 className="text-xl font-semibold">GESTIÓN DE USUARIOS</h1>
          </div>
        </div>

        {/* Contenedor principal con flex-grow */}
        <div className="flex-grow">
          <Navigation />
          <div className="p-4 bg-white">
            <Routes>
              <Route path="/" element={<Navigate to="/registro-usuarios" />} />
              <Route path="/lista-usuarios" element={<ListaUsuarios />} />
              <Route
                path="/formulario-registro-usuarios"
                element={<FormularioRegistroUsuarios />}
              />
              <Route
                path="/lista-usuarios/:id"
                element={<FormularioRegistroUsuarios />}
              />
            </Routes>
          </div>
        </div>

        {/* Botón "Volver" ahora se mantiene abajo correctamente */}
        <VolverButton />

        <Toaster />
      </div>
    </BrowserRouter>
  );
}
export default App;

