import { Link } from "react-router-dom";
import IconModUser from "../assets/Iconos/gui-user-edit-svgrepo-com.svg";
import IconRegUser from "../assets/Iconos/new-user-svgrepo-com.svg";

export function Navigation() {
  return (
    <div >
      <div className="bg-[#d7e9ff] mx-20 p-20 rounded-lg flex items-center justify-center space-x-20 mt-14">
      <div className="flex flex-col items-center">
          <img src={IconRegUser} alt="Registrar Usuario" className="w-10 h-10 mb-2" />
          <button className="bg-[#1572E8] px-3 py-2 rounded-lg text-white">
            <Link to="/formulario-registro-usuarios">Registrar usuario</Link>
          </button>
        </div>

          <div className="flex flex-col items-center">
          <img src={IconModUser} alt="Modificar Usuario" className="w-10 h-10 mb-2" />
          <button className="bg-[#1572E8] px-3 py-2 rounded-lg text-white">
            <Link to="/lista-usuarios">Modificar usuario</Link>
          </button>
        </div>
      </div>
    </div>
  );
}
